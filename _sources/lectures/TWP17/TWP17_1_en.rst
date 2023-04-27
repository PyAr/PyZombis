Building
========

+ Apartment building

..  codelens:: cl_l17_1a

    ground_floor_building = "Souza Family"
    first_floor_building = "Brito Family"
    second_floor_building = "Mr. Jorge"
    third_floor_building = "Tanaka Family"

+ We can associate the ground floor with the ground floor, the first floor with floor 1, and so on.

..  codelens:: cl_l17_1b

    building = ["Souza Family", 
                "Brito Family", 
                "Mr. Jorge", 
                "Tanaka Family"] 
    print(building[0]) 
    print(building[1]) 
    print(building[2]) 
    print(building[3])