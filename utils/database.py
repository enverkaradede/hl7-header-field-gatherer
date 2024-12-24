import sqlite3

class Database:
    def __init__(self):
        self.db_name = None
        self.conn = None
        self.query = None
        self.args = None

    def SetDbName(self, db_name):
        self.db_name = db_name
    
    def GetDbName(self):
        return self.db_name

    def SetConn(self, conn):
        self.conn = conn

    def Connect(self):
        return sqlite3.connect(self.db_name)
    
    def Close(self):
        return self.conn.close()
    
    def SetQuery(self, query):
        self.query = query
    
    def GetQuery(self):
        return self.query
    
    def SetArgs(self, args):
        self.args = args
    
    def GetArgs(self):
        return self.args
    
    def ExecuteQuery(self):
        res = self.conn.execute(self.query)
        self.conn.commit()
        return res
    
    def ExecuteParameterizedQuery(self):
        res = self.conn.execute(self.query, self.args)
        self.conn.commit()
        return res