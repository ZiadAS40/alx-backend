#!/usr/bin/python3
"""
making the class BasicCache that inherits from
BaseCaching.
"""

from base_caching import BaseCaching

class BasicCache (BaseCaching):
    """
    simple cache class
    """

    def put(self, key, item):
        """ assign the self.cache_data
        """
        if key is None or item is None:
            return
        self.cache_data.update({key: item})

    def get(self, key):
        """
        get an item from
        self.cache_dat
        """
        if key is None or key not in self.cache_data:
            return
        
        return self.cache_data[key]
