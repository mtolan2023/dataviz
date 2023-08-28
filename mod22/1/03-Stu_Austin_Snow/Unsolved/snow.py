"""
Which days did it snow?
"""

from mrjob.job import MRJob

# Create a class, `Snow_days`, which inherits the `MrJob` class.
class :
    # 
    def mapper(self, key, line):
        # Use the `mapper` function to split each line in the CSV file on the comma,
        # and save the values in the array to the variables `station, name, state, date, snow, tmax, tmin`.
        
        # Write a conditional statement to find the days it snowed.

    # Use the `reducer` function to aggregate the max number of snow days.
    def reducer(self, date, snow):
    


if __name__ == "__main__":
    Snow_days.run()