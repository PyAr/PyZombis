=========================
Google babynames exercise
=========================

.. datafile:: baby1990.html
    :fromfile: _static/baby1990.html
    :hide:


.. activecode:: ret04

    Given a file name for baby.html, returns a list starting 
    with the year string
    followed by the name-rank strings in alphabetical order.
    ['2006', 'Aaliyah 91', Aaron 57', 'Abagail 895', ' ...]

    Here's what the html looks like in the baby.html files:

    ...

    <h3 align="center">Popularity in 1990</h3>

    ...

    <tr align="right"><td>1</td><td>Michael</td><td>Jessica</td>

    <tr align="right"><td>2</td><td>Christopher</td><td>Ashley</td>

    <tr align="right"><td>3</td><td>Matthew</td><td>Brittany</td>

    ... 

    ~~~~

    import re
    import sys

    def extract_names(filename):

        names = []

        # Open and read the file.
        f = open(filename, 'r')
        text = f.read()
        # Could process the file line-by-line, 
        # but regex on the whole text
        # at once is even easier.

        # Get the year.
        year_match = re.search(r'Popularity\sin\s(\d\d\d\d)', text)
        if not year_match:
            # We didn't find a year, so we'll exit with an error message.
            print ('Couldn\'t find the year!')
            return 'Error: Couldn\'t find the year!'
        year = year_match.group(1)
        names.append(year)

        # Extract all the data tuples with a findall()
        # each tuple is: (rank, boy-name, girl-name)
        tuples = re.findall(r'<td>(\d+)</td><td>(\w+)</td>\<td>(\w+)</td>', text)
        #print tuples

        # Store data into a dict using each name as a key and that
        # name's rank number as the value.
        # (if the name is already in there, don't add it, since
        # this new rank will be bigger than the previous rank).
        names_to_rank =  {}
        for rank_tuple in tuples:
            (rank, boyname, girlname) = rank_tuple  
            # unpack the tuple into 3 vars
            if boyname not in names_to_rank:
                names_to_rank[boyname] = rank
            if girlname not in names_to_rank:
                names_to_rank[girlname] = rank
        # You can also write:
        # for rank, boyname, girlname in tuples:
        #   ...
        # To unpack the tuples inside a for-loop.

        # Get the names, sorted in the right order
        sorted_names = sorted(names_to_rank.keys())

        # Build up result list, one element per line
        for name in sorted_names:
            names.append(name + " " + names_to_rank[name])

        return names

    def main():
        print (extract_names('baby1990.html'))
    main()
