Facebook Hacking
================


.. image:: ../img/TWP45_001.jpeg
    :height: 10.225cm
    :width: 14.801cm
    :align: center
    :alt: 


Are hackers not "evil"?
-------------------------------

Facebook is run by hackers. Most people think of a hacker as someone who breaks into a computer system. But we see this as a philosophy. Here, hackers assume that there is always a better and more efficient way to solve problems. ". facebook.com/careers (2012)


.. image:: ../img/TWP45_002.jpeg
    :height: 11.747cm
    :width: 17.638cm
    :align: center
    :alt: 


Get Facebook profile picture
----------------------------------

For this exercise we will use a Python interpreter called Brython. This includes a module called browser which, unlike previous exercises, will allow us to display a page with HTML elements (buttons, text boxes, titles, etc.), instead of just displaying prints in the console.
In the following link you can find a guide to all the HTML elements that Brython supports: https://brython.info/static_doc/en/html.html

.. activecode:: ac_l45_1
    :language: python3
    :python3_interpreter: brython 

    This exercise retrieves the profile picture based on the username of a public Facebook profile.
    Try it out for yourself!
   
    ~~~~
    from browser import document, html

    # Two division sections are created with the DIV element.
    # And separated by a line break with the BR element.
    document <= html.DIV(id="div_text_boxes")
    document <= html.BR()
    document <= html.DIV(id='div_image')

    # The H2 element creates a title, INPUT creates the text box and BUTTON creates a button.
    # All of these are placed inside the division with id="div_text_boxes"
    document['div_text_boxes'] <= html.H2("Enter a public Facebook user")
    document['div_text_boxes'] <= html.INPUT(id="input_user", placeholder="ArianaGrande")
    document['div_text_boxes'] <= html.BUTTON("Show photo",id="button_show")
   
    # The function that will be assigned to the show photo button is created.
    def get_photo(event):
        # The text that is written within the box with id="input_user" is taken with .value
        username = document["input_user"].value
        # The username is concatenated with the Facebook API link
        link = 'https://graph.facebook.com/' + username + '/picture?type=large'
        # An image with the source of the link constructed above is added using src
        # within the division of id ='div_image'
        document['div_image'] <= html.IMG(src=link, id="img_obtained")

    # Finally, the show photo button with id="button_show" is instructed to execute the function get_photo.
    document["button_show"].bind("click", get_photo)