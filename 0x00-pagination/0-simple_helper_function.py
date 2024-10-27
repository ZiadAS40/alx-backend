#!/usr/bin/env python3
"""
making a helper funcion for the paginaiton
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    return a tuple of size two containing a start index
    and an end indexcorresponding to the range of indexes
    to return in a list for those particular pagination parameters.
    """
    start_idx = 0
    for i in range(1, page):
        start_idx += page_size

    return (start_idx, start_idx + page_size)
