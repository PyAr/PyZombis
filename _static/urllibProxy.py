import urllib.request
import socket

#Modifica la URL agregando un proxy para evitar las restricciones de Compartición de Recursos de Origen Cruzado (CORS).
def urllibConnectProxy(url, data=None, timeout=socket._GLOBAL_DEFAULT_TIMEOUT):
    proxy = "https://api.allorigins.win/raw?url="
    req = urllib_connect(proxy+url,data=data, timeout=timeout)
    return req


urllib_connect = urllib.request.urlopen
urllib.request.urlopen = urllibConnectProxy