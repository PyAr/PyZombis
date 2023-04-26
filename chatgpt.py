import os
import sys
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")
def chatgpt_translator(text):
  completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
      {"role": "user", "content": "Translate the following snippet in reStructuredText format with Python code from Spanish to English:\n\n" + text}
    ]
  )

  return completion.choices[0].message.content


for root, dir, files in os.walk('_sources/lectures/TWP42'):
  for filename in files:
    full_path = os.path.join(root, filename)
    text = open(full_path).read()
    formatted_path = os.path.splitext(full_path)[0]
    # print(formatted_path)
    if not formatted_path.endswith('_en'):
      formatted_path = formatted_path+'_en.rst'
      translation = chatgpt_translator(text) 
      open(formatted_path, 'w').write(translation)

# print("translating: ")
# print(text)



# print(completion.choices[0].message.content)

# open(sys.argv[1]+"en.rst").write(completion.choices[0].message.content)