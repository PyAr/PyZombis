# clean_up.py
# Read a Restructured Text formatted lecture and append an English ('en') suffix to the activecode ID
# to fix duplicate ID error.

import sys
import re

if (len(sys.argv) != 2):
    print(f"usage: {sys.argv[0]} <filename>")
    exit()
else:
    filename = sys.argv[1]

with open(filename, "r") as inp:
    content = inp.read()

# Handle activecode IDs updates
actRegex = re.compile(r'\s(ac_\d{1,2}_.*)\b')

for entry in set(actRegex.findall(content)):
    content = content.replace(entry, entry+'_en')

# Handle codelens and reveal IDs updates
actRegex = re.compile(r'\s(cl_l\d{1,2}_.*)\b')

for entry in set(actRegex.findall(content)):
    content = content.replace(entry, entry+'_en')

with open(filename, "w") as outp:
    outp.write(content)

inp.close()
outp.close()
