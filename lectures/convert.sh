#!/bin/bash

    
for PPT in TWP*.pptx; do
    RST="${PPT:0:5}.rst"
    XHTML="${PPT%.pptx}.xhtml"
    HTML="${PPT:0:5}.html"

    TITLE=${PPT%.pptx}
    TITLE=${TITLE:6:99}
    LEN=${#TITLE}

    echo "Processing $TITLE"
    loffice --headless --convert-to xhtml "$PPT" 
    echo "Converting $RST"
    echo "$TITLE" > "$RST"
    printf '%*s\n' $LEN "" | tr ' ' '=' >> "$RST"
    echo  >> "$RST"
    python html2rest.py  "$XHTML" >> "$RST"
    echo "Generating presentation in $HTML"
    ./rst2html5 --jquery --reveal-js --pretty-print-code "$RST" > "$HTML"

done

