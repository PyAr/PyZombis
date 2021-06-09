def get_menu_titles(page) -> list:
    page.goto("index.html")
    page.wait_for_load_state()
    menu_list = page.query_selector_all("//*[@class='toctree-wrapper compound']/ul/li/a")

    menu_titles = []
    for i in menu_list:
        menu_item = i.as_element().inner_text()
        menu_titles.append(menu_item)

    return menu_titles


def test_check_titles(page):
    menu_list = get_menu_titles(page)
    page.goto("index.html")
    page.wait_for_load_state()

    for menu_item in menu_list:
        right_arrow = page.query_selector("//*[@id='relations-next']/a")
        if(right_arrow):
            page.click("//*[@id='relations-next']/a")
            page.wait_for_load_state()
            page_title = page.title()
            page_title = page_title.split(" — ")[0]
            assert page_title == menu_item
        else:
            break
