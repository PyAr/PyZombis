#!/bin/bash

    
for PPT in TWP*.pptx; do
    RST="${PPT:0:5}.rst"
    XHTML="${PPT%.pptx}.xhtml"
    HTML="${PPT:0:5}.html"

    loffice --headless --convert-to xhtml "$PPT" 
    echo "Converting $RST"
    echo "Python para zombis" > "$RST"
    echo "==================" >> "$RST"
    echo  >> "$RST"
    python html2rest.py  "$XHTML" >> "$RST"
    echo "Generating presentation in $HTML"
    ./rst2html5 --jquery --reveal-js --pretty-print-code "$RST" > "$HTML"

done

