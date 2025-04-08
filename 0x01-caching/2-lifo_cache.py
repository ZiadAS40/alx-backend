#!/usr/bin/python3
""" LIFO caching
"""

from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """
    implement LIFO cache algorithm
    """

    def __init__(self):
        self.last_item = None
        super().__init__()

    def put(self, key, item):
        """
        puts key, vlue in the cache_items
        with LIFO cache algorithm
        """
        if key is None or item is None:
            return

        if key in self.cache_data:
            self.cache_data.update({key: item})
            self.last_item = key
            return

        if len(self.cache_data.keys()) >= super().MAX_ITEMS:
            if self.last_item is not None:
                last_item = self.last_item
            else:
                last_item = list(self.cache_data.keys())[-1]
            del self.cache_data[last_item]
            print(f"DISCARD: {last_item}")

        self.cache_data.update({key: item})
        self.last_item = key

    def get(self, key):
        """
        get an item from
        self.cache_dat
        """
        if key is None or key not in self.cache_data:
            return

        return self.cache_data[key]
