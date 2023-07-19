import os
import calendar
import datetime


def CheckDataConsistency(fo_object, mo_object):
    date = datetime.datetime.utcnow()
    utc_time = calendar.timegm(date.utctimetuple())

    if fo_object.IsFileExist():
        print("File exists, checking if it's empty...")
        if fo_object.IsFileEmpty():
            print("File is not empty, will read from the file...")
            print(os.path.getmtime("segment_info.txt"))
            if utc_time - os.path.getmtime("segment_info.txt") > 10000:
                print("File is old, sending cURL request to update the document")
                [result_out, result_err,
                    result_errcode] = mo_object.ExecuteCommand()
                result = result_out
                fo_object.SetFileContent(result_out)
                print("Writing the results from cURL to segment_info.txt file...")
                fo_object.WriteFile()

            else:
                print("File is up-to-date, reading from file...")
                result = fo_object.ReadFile()
        else:
            print("File is empty, skipping the read and sending cURL request...")
            [result_out, result_err,
                result_errcode] = mo_object.ExecuteCommand()
            result = result_out
            fo_object.SetFileContent(result_out)
            print("Writing the results from cURL to segment_info.txt file...")
            fo_object.WriteFile()
    else:
        print("File does not exist, sending cURL request...")
        [result_out, result_err,
            result_errcode] = mo_object.ExecuteCommand()
        result = result_out
        fo_object.SetFileContent(result_out)
        print("Writing the results from cURL to segment_info.txt file...")
        fo_object.WriteFile()

    return result
