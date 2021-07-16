def get_menu_titles(page) -> list:
    page.wait_for_load_state()
    menu_list = page.query_selector_all("//*[@class='toctree-wrapper compound']/ul/li/a")

    return [title.as_element().inner_text() for title in menu_list]


flag = True
def test_check_titles(page):
    global flag
    if(flag):
        page.goto("index.html")
    page.set_viewport_size({"width": 1050, "height": 600})
    menu_list = get_menu_titles(page)
    page.wait_for_load_state()
    for menu_item in menu_list:
        right_arrow = page.query_selector("//*[@id='relations-next']/a")
        if(right_arrow):
            page.click("//*[@id='relations-next']/a")
            page.wait_for_load_state()
            page_title = page.title().split(" — ")[0]
            assert page_title == menu_item
            if("toctree" in page.url):
                # check titles for all sub-toctree content
                # list_url = page.split("/")[3::]
                # new_url = "/".join(list_url)
                # test_check_titles(new_url)
                flag = False
                test_check_titles(page)
        else:
            break
