#!/usr/bin/python3
"""
making a helper funcion for the paginaiton
"""


def index_range(page, page_size):
    """
    return a tuple of size two containing a start index
    and an end indexcorresponding to the range of indexes
    to return in a list for those particular pagination parameters.
    """
    start_idx = 0
    for i in range(1, page):
        start_idx += page_size

    return (start_idx, start_idx + page_size)
