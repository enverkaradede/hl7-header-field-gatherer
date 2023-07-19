import subprocess
import json
import os
import calendar
import datetime

from utils.file_operations import FileOps
from utils.web_operations import WebOps
from utils.miscellaneous_operations import MiscOps

date = datetime.datetime.utcnow()
utc_time = calendar.timegm(date.utctimetuple())


curl_command = 'curl https://hl7-definition.caristix.com/v2-api/1/HL7v2.5.1/Segments'

from_request_fo = FileOps()
from_request_wo = WebOps()
from_request_mo = MiscOps()

from_request_fo.SetFileName("segment_info.txt")
from_request_fo.SetFileLocation(f'./{from_request_fo.GetFileName()}')

from_request_mo.SetCommand(curl_command.split())

if from_request_fo.IsFileExist():
    print("File exists, checking if it's empty...")
    if from_request_fo.IsFileEmpty():
        print("File is not empty, will read from the file...")
        print(os.path.getmtime("segment_info.txt"))
        if utc_time - os.path.getmtime("segment_info.txt") > 10000:
            print("File is old, sending cURL request to update the document")
            [segment_results_out, segment_results_err,
                segment_results_errcode] = from_request_mo.ExecuteCommand()
            segment_results = segment_results_out
            from_request_fo.SetFileContent(segment_results_out)
            print("Writing the results from cURL to segment_info.txt file...")
            from_request_fo.WriteFile()

        else:
            print("File is up-to-date, reading from file...")
            segment_results = from_request_fo.ReadFile()
    else:
        print("File is empty, skipping the read and sending cURL request...")
        [segment_results_out, segment_results_err,
            segment_results_errcode] = from_request_mo.ExecuteCommand()
        segment_results = segment_results_out
        from_request_fo.SetFileContent(segment_results_out)
        print("Writing the results from cURL to segment_info.txt file...")
        from_request_fo.WriteFile()
else:
    print("File does not exist, sending cURL request...")
    [segment_results_out, segment_results_err,
        segment_results_errcode] = from_request_mo.ExecuteCommand()
    segment_results = segment_results_out
    from_request_fo.SetFileContent(segment_results_out)
    print("Writing the results from cURL to segment_info.txt file...")
    from_request_fo.WriteFile()


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
