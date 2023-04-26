import os
import sys
import time
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


for root, dir, files in os.walk('_sources/lectures'):
  for directory in dir:
    if not '--all' in sys.argv and not directory == "TWP42":
      continue
    for filename in os.listdir(os.path.join(root, directory)):
      if filename.endswith('rst') and not filename.endswith('en.rst'):
        full_path = os.path.join(root, directory, filename)
        text = open(full_path).read()
        formatted_path = os.path.splitext(full_path)[0]
        if not formatted_path.endswith('_en'):
          formatted_path = formatted_path+'_en.rst'
          if '--translate' in sys.argv and not os.path.exists(formatted_path):
            t0 = time.time()
            translation = chatgpt_translator(text) 
            t1 = time.time()
            open(formatted_path, 'w').write(translation)
            elapsed = t1 - t0
            print("time elapsed", elapsed, formatted_path)
            if elapsed < 20:
              # chatgpt limits requests to 3 per minute. So we have to wait to process the next request
              time.sleep(21 - elapsed)
