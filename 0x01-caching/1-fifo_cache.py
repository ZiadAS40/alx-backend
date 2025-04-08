#!/usr/bin/python3
""" FIFO caching
"""

from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """
    implement FIFO cache algorithm
    """

    def __init__(self):
        super().__init__()

    def put(self, key, item):
        """
        puts key, vlue in the cache_items
        with FIFO cache algorithm
        """
        if key is None or item is None:
            return

        if key in self.cache_data:
            self.cache_data.update({key: item})
            return

        if len(self.cache_data.keys()) >= super().MAX_ITEMS:
            first_item = list(self.cache_data.keys())[0]
            del self.cache_data[first_item]
            print(f"DISCARD: {first_item}")

        self.cache_data.update({key: item})

    def get(self, key):
        """
        get an item from
        self.cache_dat
        """
        if key is None or key not in self.cache_data:
            return

        return self.cache_data[key]
