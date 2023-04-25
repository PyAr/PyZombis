# Python script to translate from Spanish to English using the Google Translate API
#
# Before you can begin using the Translation API, run the following command in Cloud Shell to enable the API:
# gcloud services enable translate.googleapis.com
#
# Also make sure to install the Google translation API client library:
# pip install ipython google-cloud-translate
#
# usage example: cat TWP10_7.rst | python translator.py > TWP10_7_en.rst 

import sys
import re
from os import environ
from google.cloud import translate


PROJECT_ID = environ.get("PROJECT_ID", "")
assert PROJECT_ID
PARENT = f"projects/{PROJECT_ID}"

def translate_text(text: str, target_language_code: str) -> translate.Translation:
    client = translate.TranslationServiceClient()

    response = client.translate_text(
        parent=PARENT,
        contents=[text],
        target_language_code=target_language_code,
    )

    return response.translations[0]

text = sys.stdin.readlines()

# join the list items into a string
text = ''.join(text)

wordsRegex = re.compile(r'((\b([^0-9\s\/\(\)\.\_\n]+)\b)[!,.?\s]?)+')

for match in wordsRegex.finditer(text):
    # Skip 'alt' activecode keyword in translation process
    if (match.group(0) == 'alt'):
        continue

    translation = translate_text(match.group(0), "en")    # Spanish text to convert and "en" for English result
    translated_text = translation.translated_text

    # Remove Spanish "¡" prefix from the English translation 
    if match.group(0)[0] == '¡':
        translated_text = translated_text[1:]

    # Where necessary restore trailing space or newline, which is lost in the Google translation 
    if match.group(0)[-1] == ' ':
        translated_text = translated_text + ' '
    if match.group(0)[-1] == '\n':
        translated_text = translated_text + '\n'
    text = text.replace(match.group(0), translated_text, 1)
 
print(text)