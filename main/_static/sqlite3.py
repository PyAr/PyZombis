from browser import document, window
import time, json

db = window.parent.Database

def formato_datos(data):
    """
    esta función formatea el resultado de sql.js para que coincida con el formato de salida de sqlite3
    params -> data: diccionario con los datos a formatear
    """
    final_list = []

    for i in range(len(data[0]["values"])):
        Dict = {}
        for j in range(len(data[0]["columns"])):
            Dict[data[0]["columns"][j]] = data[0]["values"][i][j]
        final_list.append(Dict)
    
    return final_list
    
# creando un contenedor para imitar el módulo sqlite3
# actualmente solo algunas funciones como connect, execute, fetchall son imitados
class Cursor:
    def __init__(self):
        self.result = []
        global db
        db.run("BEGIN TRANSACTION;")
    def execute(self, query):
        global db
        self.result = db.exec(query)
    
    # the below function returns the result of the query
    def fetchall(self): 
        return formato_datos(self.result.to_dict())


    def close(self):
        global db
        db.run("COMMIT TRANSACTION;")             

class Connection:
    def __init__(self):
        self.curr_cursor_obj = Cursor()

    def cursor(self):
        return self.curr_cursor_obj
    def commit(self):
        global db
        db.run("COMMIT TRANSACTION;")
    def rollback(self):
        global db
        db.run("ROLLBACK TRANSACTION;")
    def close(self):
        pass

def connect(table_name=None):
    global db
    return Connection()