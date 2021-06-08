def test_right_arrows(page):
    page.goto("index.html")
    while(True):
        # Keeps going to the next page until there is no right arrow
        right_arrow = page.query_selector("//*[@id='relations-next']/a")
        if(right_arrow):
            page.click("//*[@id='relations-next']/a")
            page.wait_for_load_state()
        else:
            break

# TODO make a similar test but going from de last page
# to the previous one until it gets to the first one
