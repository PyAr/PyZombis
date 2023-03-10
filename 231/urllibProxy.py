import urllib.request

def urllibConnect(url):
    proxy = "https://api.allorigins.win/raw?url="
    req = urllib.request.urlopen(proxy+url)
    return req