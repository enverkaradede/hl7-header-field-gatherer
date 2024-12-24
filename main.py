import subprocess
import json


from utils.file_operations import FileOps
from utils.web_operations import WebOps
from utils.miscellaneous_operations import MiscOps
from utils.data_consistency_checker import CheckDataConsistency
from utils.database import Database

database = Database()

db_name = 'hl7'

database.SetDbName(f'{db_name}.db')
conn = database.Connect()
database.SetConn(conn)

sql = 'PRAGMA foreign_keys = ON'
database.SetQuery(sql)
database.ExecuteQuery()

sql = 'CREATE TABLE IF NOT EXISTS versions(id TEXT PRIMARY KEY)'
database.SetQuery(sql)
database.ExecuteQuery()
print('versions database is created!')

sql = 'CREATE TABLE IF NOT EXISTS segments(id INTEGER PRIMARY KEY AUTOINCREMENT, segment_name TEXT, fields TEXT, version TEXT, FOREIGN KEY (version) REFERENCES versions (id))'
database.SetQuery(sql)
database.ExecuteQuery()
print(f'segments table is created!')

hl7_version_list = ['2.2', '2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.7.1', '2.8']

from_request_fo = FileOps()
from_request_wo = WebOps()
from_request_mo = MiscOps()

from_segment_results_fo = FileOps()

for version in hl7_version_list:
    sql = 'INSERT OR IGNORE INTO versions(id) VALUES(?)'
    database.SetQuery(sql)
    args = (version,)
    database.SetArgs(args)

    database.ExecuteParameterizedQuery()
    print(f'New record inserted into versions table for version {version}')

    print(f'Fetching data for HL7 v{version}...')
    curl_command = f'curl https://hl7-definition.caristix.com/v2-api/1/HL7v{version}/Segments'

    from_request_fo.SetFileName(f"hl7_segments/{version}/segment_info.txt")
    from_request_fo.SetFileLocation(f'./{from_request_fo.GetFileName()}')

    from_request_mo.SetCommand(curl_command.split())

    segment_results = CheckDataConsistency(from_request_fo, from_request_mo)

    segment_results_json = json.loads(segment_results)

    # for segment in segment_results_json:
    #     segment.pop('chapters', None)

    segment_results_dictionary = {}
    segment_names_list = []

    for segment in segment_results_json:
        segment_names_list.append(segment["id"])
        segment_results_dictionary.update({segment["id"]: {
                                        "type": segment["type"], "label": segment["label"], "description": segment["description"]}})

    # with open("segment_dictionary.js", "w") as file:
    #     file.write(
    #         f'const segmentInfoArr = {str(json.dumps(segment_results_json, indent=4))}\n\nmodule.exports = {{\nsegmentInfoArr,\n}}')


    from_segment_results_fo.SetFileName(f"hl7_segments/{version}/segment_dictionary_v2.js")
    from_segment_results_fo.SetFileLocation(
        f"./{from_segment_results_fo.GetFileName()}")
    from_segment_results_fo.SetFileContent(
        f'const segmentInfoArr = {str(json.dumps(segment_results_dictionary, indent=4))}\n\nmodule.exports = {{\nsegmentInfoArr,\n}}')
    from_segment_results_fo.WriteFile()

    # TODO: make the below code re-usable and better, not that cluttered
    from_field_request_fo = FileOps()
    from_field_request_wo = WebOps()
    from_field_request_mo = MiscOps()
    fields_result_dictionary = {}

    for segment in segment_names_list:
        sql = 'CREATE TABLE IF NOT EXISTS segments(id INTEGER PRIMARY KEY AUTOINCREMENT, segment_name TEXT,)'
        curl_field_command = f"curl https://hl7-definition.caristix.com/v2-api/1/HL7v{version}/Segments/{segment}"
        from_field_request_mo.SetCommand(curl_field_command.split())
        print(f"Getting the field definitions for {segment} segment...")
        [fields_result_out, fields_result_err,
            fields_result_returncode] = from_field_request_mo.ExecuteCommand()
        fields_result_out_json = json.loads(fields_result_out)
        field_info_dictionary = {}
        fields_result_dictionary[segment] = {}
        print(f"Creating the dictionary for {segment} segment...")
        for field_info in fields_result_out_json["fields"]:
            print(
                f"Adding {field_info['id']} field to {segment} segment dictionary...")
            field_code = field_info["id"]
            fields_result_dictionary[segment][field_code] = {
                "name": field_info["name"], "required": field_info["usage"], "repeat": field_info["rpt"]}
        from_field_request_fo.SetFileName(f"{segment.lower()}_dictionary.js")
        from_field_request_fo.SetFileLocation(
            f"./segment_dictionaries/{version}/{from_field_request_fo.GetFileName()}")
        from_field_request_fo.SetFileContent(
            f"const {segment.lower()}InfoArr = {str(json.dumps(fields_result_dictionary[segment], indent=4))}\n\nmodule.exports = {{\n{segment.lower()}InfoArr,\n}}")
        from_field_request_fo.WriteFile()

        sql = 'INSERT OR IGNORE INTO segments(segment_name, fields, version) VALUES(?, ?, ?)'
        database.SetQuery(sql)
        args = (segment, str(json.dumps(fields_result_dictionary[segment], indent=4)), version)
        database.SetArgs(args)
        database.ExecuteParameterizedQuery()

        print(f'Segment and fields information is inserted into segments table for {segment} segment for v{version}')

    print(f"All field dictionaries are completed for HL7 v{version}...")


    from_field_request_fo.SetFileName(f"hl7_field_dictionaries/{version}/field_dictionary.js")
    from_field_request_fo.SetFileLocation(
        f"./{from_field_request_fo.GetFileName()}")
    from_field_request_fo.SetFileContent(
        f"const fieldInfoArr = {str(json.dumps(fields_result_dictionary, indent=4))}\n\nmodule.exports = {{\nfieldInfoArr,\n}}")
    print(
        f"Writing the dictionary info to {from_field_request_fo.GetFileLocation()}")
    from_field_request_fo.WriteFile()

database.Close()
print('database connection is closed')