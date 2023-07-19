import os


class FileOps:
    def __init__(self):
        self.file_name = None
        self.file_location = None
        self.file_content = None

    def GetFileName(self):
        return self.file_name

    def SetFileName(self, file_name):
        self.file_name = file_name

    def GetFileLocation(self):
        return self.file_location

    def SetFileLocation(self, file_location):
        self.file_location = file_location

    def GetFileContent(self):
        return self.file_content

    def SetFileContent(self, file_content):
        self.file_content = file_content

    def IsFileExist(self):
        return os.path.exists(self.file_name)

    def WriteFile(self):
        with open(self.file_location, "w", encoding="utf-8") as file:
            file.write(self.file_content)

    def AppendToFile(self):
        with open(self.file_location, "w+", encoding="utf-8") as file:
            file.write(self.file_content)

    def ReadFile(self):
        with open(self.file_location, "r", encoding="utf-8") as file:
            result = file.read()
        return result

    def IsFileEmpty(self):
        return os.stat(self.file_location).st_size != 0
