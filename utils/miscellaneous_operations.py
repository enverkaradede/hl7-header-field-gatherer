import subprocess


class MiscOps:
    def __init__(self):
        self.command = None

    def GetCommand(self):
        return self.command

    def SetCommand(self, command):
        self.command = command

    def ExecuteCommand(self):
        result = subprocess.run(
            self.command, capture_output=True, text=True, encoding="utf-8")
        return [result.stdout, result.stderr, result.returncode]
