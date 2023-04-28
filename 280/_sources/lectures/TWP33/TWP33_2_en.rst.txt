How to get only the price?
===========================

.. image:: ../img/TWP33_006.png
    :height: 3.436cm
    :width: 22.621cm
    :align: center
    :alt:


.. image:: ../img/TWP33_007.jpg
    :height: 5cm
    :width: 16.051cm
    :align: center
    :alt:


.. image:: ../img/TWP33_008.jpg
    :height: 8.323cm
    :width: 16.483cm
    :align: center
    :alt:

.. image:: ../img/TWP33_009.jpg
    :height: 7.317cm
    :width: 17.805cm
    :align: center
    :alt:


Python code:

To obtain only the price, we can use indexing to extract the value from the string after the "Precio:" label. Assuming the variable `text` contains the text to be analyzed:

```
price_index = text.find("Precio:")
price = text[price_index+len("Precio:"):].strip()
```

The `find()` method returns the index of the substring "Precio:", which we then add the length of "Precio:" to get the starting index of the price value. We then use `strip()` to remove any leading or trailing white space that may be present in the extracted text. The result will be stored in the variable `price`.