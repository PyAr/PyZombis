Validate IP Address
====================

.. datafile:: IPS_en.txt  
    :cols: 20
    :rows: 12

    200.135.80.9
    192.168.1.1
    8.35.67.74
    257.32.4.5
    85.345.1.2
    1.2.3.4
    9.8.284.5
    192.168.0.256


.. activecode:: ac_l23_3_en
    :nocodelens:
    :datafile: valid.txt, Invalid.txt

    def ip_ok(ip):
        ip = ip.split(".")
        for byte in ip:
            if int(byte) > 255:
                return False
        return True


    ips = open("IPS_en.txt")
    validos = open("valid.txt", "w")
    invalidos = open("Invalid.txt", "w")
    for linea in ips.readlines():
        if ip_ok(linea):
            validos.write(linea)
        else:
            invalidos.write(linea)

    ips.close()
    validos.close()
    invalidos.close()


    ====
    print("Data has been written in the valid.txt and Invalid.txt files")


.. datafile:: valid.txt
    :edit:
    :cols: 15
    :rows: 7

    Valid


.. datafile:: Invalid.txt
    :edit:
    :cols: 15
    :rows: 7

    Invalid