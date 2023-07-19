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


from_field_request_fo = FileOps()
from_field_request_wo = WebOps()
from_field_request_mo = MiscOps()

for segment in segment_names_list:
    curl_field_command = f"curl https://hl7-definition.caristix.com/v2-api/1/HL7v2.5.1/Segments/{segment}"
