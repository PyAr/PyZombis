#!/usr/bin/python3
# Copyright 2010 Google Inc.
# Licensed under the Apache License, Version 2.0
# http://www.apache.org/licenses/LICENSE-2.0

# Google's Python Class
# http://code.google.com/edu/languages/google-python-class/

"""Wordcount exercise
Google's Python class

The main() below is already defined and complete. It calls print_words()
and print_top() functions which you write.

1. For the --count flag, implement a print_words(filename) function that counts
how often each word appears in the text and prints:
word1 count1
word2 count2
...

Print the above list in order sorted by word (python will sort punctuation to
come before letters -- that's fine). Store all the words as lowercase,
so 'The' and 'the' count as the same word.

2. For the --topcount flag, implement a print_top(filename) which is similar
to print_words() but which prints just the top 20 most common words sorted
so the most common word is first, then the next most common, and so on.

Use str.split() (no arguments) to split on all whitespace.

Workflow: don't build the whole program at once. Get it to an intermediate
milestone and print your data structure and sys.exit(0).
When that's working, try for the next milestone.

Optional: define a helper function to avoid code duplication inside
print_words() and print_top().

"""

import sys

import sys
import string


# Define a helper function to read a file and build a word/count dictionary
def build_word_count_dict(filename):
  word_count = {}

  with open(filename, 'r') as file:
    for line in file:
      words = line.split()
      for word in words:
        # Remove punctuation and convert to lowercase
        word = word.strip(string.punctuation).lower()
        if word in word_count:
          word_count[word] += 1
        else:
          word_count[word] = 1

  return word_count


# Define the print_words() function
def print_words(filename):
  word_count = build_word_count_dict(filename)
  for word in sorted(word_count.keys()):
    print(f"{word}: {word_count[word]}")


# Define the print_top() function
def print_top(filename):
  word_count = build_word_count_dict(filename)
  sorted_word_count = sorted(word_count.items(), key=lambda x: x[1], reverse=True)
  for word, count in sorted_word_count[:20]:
    print(f"{word}: {count}")


# This basic command line argument parsing code is provided and
# calls the print_words() and print_top() functions.
def main():
  if len(sys.argv) != 3:
    print('usage: ./wordcount.py {--count | --topcount} file')
    sys.exit(1)

  option = sys.argv[1]
  filename = sys.argv[2]
  if option == '--count':
    print_words(filename)
  elif option == '--topcount':
    print_top(filename)
  else:
    print('unknown option: ' + option)
    sys.exit(1)





if __name__ == '__main__':
  main()
