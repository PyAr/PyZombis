Multiple Inheritance and What Object is It?
============================================

+ Multiple inheritance is possible.
+ There may be times when you want to check the type of an instance.
+ Python has the ``isinstance`` function.
+ It allows you to check if an instance of a class is actually of a given class.

..  codelens:: cl_l25_5

    class Ethernet:
        def __init__(self, name, mac_address):
            self.name = name
            self.mac_address = mac_address


    class Wireless(Ethernet):
        def __init__(self, name, mac_address):
            Ethernet.__init__(self, name, mac_address)


    class PCI:
        def __init__(self, bus, manufacturer):
            self.bus = bus
            self.manufacturer = manufacturer


    class USB:
        def __init__(self, device):
            self.device = device


    class PCIEthernet(PCI, Ethernet):
        def __init__(self, bus, manufacturer, name, mac_address):
            PCI.__init__(self, bus, manufacturer)
            Ethernet.__init__(self, name, mac_address)


    class USBWireless(USB, Wireless):
        def __init__(self, device, name, mac_address):
            USB.__init__(self, device)
            Wireless.__init__(self, name, mac_address)


    wlan0 = USBWireless("usb0", "wlan0", "00:33:44:55:66")
    eth0 = PCIEthernet("pci :0:0:1", "realtek", "eth0", "00:11:22:33:44")


    print(isinstance(wlan0, Ethernet))
    print(isinstance(eth0, PCI))
    print(isinstance(eth0, USB))