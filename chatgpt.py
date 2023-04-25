import os
import sys
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

text = open(sys.argv[1]).read()

print("translating: ")
print(text)

completion = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "user", "content": "Translate the following snippet in reStructuredText format with Python code from Spanish to English:\n\n" + text}
  ]
)

print(completion.choices[0].message.content)

open(sys.argv[1]+"en.rst").write(completion.choices[0].message.content)
