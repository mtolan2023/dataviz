# Writing to Parquet

In this activity, you'll determine the differences in query execution time between a temporary view of an original Spark DataFrame, a parquet DataFrame, and a partitioned-parquet Spark DataFrame.

**Instructions:**

1. Using the starter code provided, start a Spark session, and then import the `DelayedFlights.csv` file to a Spark DataFrame.

2. Create a temp view of your Spark DataFrame, and create a SparkSQL query that determines the total distance and flight count for each unique “Origin” and “Dest” combination.

    * Record the execution time of the SparkSQL query using the `time.time()` method.

    * **Note:** You may want to run this query twice to eliminate initial load time.

3. Save your DataFrame in parquet format, and reload the dataset into a new Spark DataFrame.

4. Create a new temp view from the parquet Spark DataFrame, and rerun the SparkSQL query that determines the total distance and flight count for each unique “Origin” and “Dest” combination.

    * Record the execution time of the SparkSQL query using the `time.time()` method.

5. Now, save your original Spark DataFrame again, but this time, save it in parquet format, using Origin as the column to partition by.

6. Reload your partitioned parquet dataset into a new Spark DataFrame.

7. Create another new temp view from the partitioned parquet Spark DataFrame, and rerun the SparkSQL query that determines the total distance and flight count for each unique Origin and Dest combination.

    * Record the execution time of the SparkSQL query using the `time.time()` method.

8. Compare the performance of all three SparkSQL queries based upon the underlying data format.

     * Did the partitioned parquet format perform better or worse than the non-partitioned format? Why or why not?

9. Try creating a SparkSQL query that filters the partitioned data where `TailNum='N712SW'`. Show the results for the Origin and TailNum fields.

    * Record the execution time of the SparkSQL query using the `time.time()` method.

    * **Note:** This query tries to filter on your partitioned Origin column.

10. Create a new SparkSQL query that filters the partitioned data where `TailNum='N712SW'`. Show the results for the Dest and TailNum fields.

    * Record the execution time of the SparkSQL query using the `time.time()` method.

    * **Note:** This query does not filter on your partitioned Origin column.

11. Compare the performance of your filter queries from a partitioned versus non-partitioned dataset.

## Data Source:

[Airlines Delay](https://www.kaggle.com/datasets/giovamata/airlinedelaycauses)

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
