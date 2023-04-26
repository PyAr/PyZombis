# toc_fix.py
# Searches through directory tree for Restructured Text formatted table of contents (toc) and copy file while appending a language suffix to the filename.
# Replace references to TWP##_#.rst to TWP##_#_en.rst

import sys
import os
import re
import shutil

def rename_TOC_items(filename, lang="en"):

    with open(filename, "r") as inp:
        content = inp.read()

    # Handle TOC item updates
    actRegex = re.compile(r'\b(TWP\d{1,2}_\d{1,2}\.rst)\b')
    
    for entry in actRegex.findall(content):
        fname, ext = entry.split('.')
        fname_lang = f'{fname}_{lang}.{ext}'    
        content = content.replace(entry, fname_lang)

    with open(filename, "w") as outp:
        outp.write(content)

    inp.close()
    outp.close()


def walk_files():
    for root, dir,files in os.walk('_sources/lectures'):
        for directory in dir:
            for filename in os.listdir(os.path.join(root, directory)):
                if filename == 'toctree.rst':
                    sfile = 'toctree.rst'
                    dfile = 'toctree_en.rst'

                    source_path = os.path.join(root, directory, sfile)
                    destination_path = os.path.join(root, directory, dfile)
                    shutil.copy(source_path, destination_path)
                    rename_TOC_items(destination_path)

if __name__ == "__main__":
    if '--all' in sys.argv:
        walk_files()
    elif (len(sys.argv) != 2):
        print(f"usage: {sys.argv[0]} <filename>")
        exit()
    else:
        filename = sys.argv[1]
        fix_duplicate_id(filename)