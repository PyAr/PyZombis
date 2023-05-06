# clean_up.py
# Searches through directory tree for Restructured Text formatted lectures and appends an English ('en') suffix to the IDs
# to fix duplicate ID error.

import sys
import os
import re


def fix_duplicate_id(filename, lang="en"):

    with open(filename, "r") as inp:
        content = inp.read()

    # Handle activecode IDs updates
    actRegex = re.compile(r'activecode:: ac_.*')

    for entry in set(actRegex.findall(content)):
        if not entry.endswith('_'+lang):
            content = content.replace(entry, entry+'_'+lang)

    # Handle codelens and reveal IDs updates
    actRegex = re.compile(r'codelens:: cl_.*')

    for entry in set(actRegex.findall(content)):
        if not entry.endswith('_'+lang):
            content = content.replace(entry, entry+'_'+lang)

    with open(filename, "w") as outp:
        outp.write(content)

    inp.close()
    outp.close()


def walk_files():
    for root, dir,files in os.walk('_sources/lectures'):
        for directory in dir:
            for filename in os.listdir(os.path.join(root, directory)):
                if filename.endswith('_en.rst'):
                    full_path = os.path.join(root, directory, filename)
                    fix_duplicate_id(full_path)


if __name__ == "__main__":
    if '--all' in sys.argv:
        walk_files()
    elif (len(sys.argv) != 2):
        print(f"usage: {sys.argv[0]} <filename>")
        exit()
    else:
        filename = sys.argv[1]
        fix_duplicate_id(filename)