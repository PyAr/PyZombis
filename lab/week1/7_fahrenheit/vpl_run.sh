#! /bin/bash

# "compilation" (to annotate syntax errors in the VPL moodle editor)

chmod +x compile.py
./compile.py

# prepare file for execution (if compiled properly)

RESULT=$?
if [ $RESULT -eq 0 ]; then
    mv execute.py vpl_execution
    chmod +x vpl_execution
fi

