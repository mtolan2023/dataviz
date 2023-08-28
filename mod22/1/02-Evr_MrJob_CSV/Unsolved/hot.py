"""
Find the number of hot days in Austin for 2017
"""
from mrjob.job import MRJob

class Hot_Days(MRJob):
    # Add your mapper function here.


    # Add your reducer function here.


if __name__ == "__main__":
    Hot_Days.run()