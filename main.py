import subprocess
import json


from utils.file_operations import FileOps
from utils.web_operations import WebOps
from utils.miscellaneous_operations import MiscOps
from utils.data_consistency_checker import CheckDataConsistency


curl_command = 'curl https://hl7-definition.caristix.com/v2-api/1/HL7v2.5.1/Segments'

from_request_fo = FileOps()
from_request_wo = WebOps()
from_request_mo = MiscOps()

from_request_fo.SetFileName("segment_info.txt")
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


from_segment_results_fo = FileOps()

from_segment_results_fo.SetFileName("segment_dictionary_v2.js")
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
    curl_field_command = f"curl https://hl7-definition.caristix.com/v2-api/1/HL7v2.5.1/Segments/{segment}"
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
        f"./segment_dictionaries/{from_field_request_fo.GetFileName()}")
    from_field_request_fo.SetFileContent(
        f"const {segment.lower()}InfoArr = {str(json.dumps(fields_result_dictionary[segment], indent=4))}\n\nmodule.exports = {{\n{segment.lower()}InfoArr,\n}}")
    from_field_request_fo.WriteFile()
print("All field dictionaries are completed...")


from_field_request_fo.SetFileName("field_dictionary.js")
from_field_request_fo.SetFileLocation(
    f"./{from_field_request_fo.GetFileName()}")
from_field_request_fo.SetFileContent(
    f"const fieldInfoArr = {str(json.dumps(fields_result_dictionary, indent=4))}\n\nmodule.exports = {{\nfieldInfoArr,\n}}")
print(
    f"Writing the dictionary info to {from_field_request_fo.GetFileLocation()}")
from_field_request_fo.WriteFile()
