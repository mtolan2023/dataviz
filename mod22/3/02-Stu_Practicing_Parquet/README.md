# Practicing Parquet

In this activity you'll practice storing data in Parquet format and executing queries on Parquet data using Spark.

**Instructions:** 

1. Import the `Austin 311 Public Dataset` to a Spark DataFrame.

2. Create a temporary view and write a SparkSQL query that gets a count of each unique name in `description`.
   
    * Record the execution time of the SparkSQL query using the `time.time()` method. 
   
    * **Note:** You may want to run this query twice to eliminate initial load time.

3. Write your Spark DataFrame containing Austin 311 s to parquet format.

4. Read your parquet data into a new Spark DataFrame.

5. Using your new parquet DataFrame, create a new temporary view and write a SparkSQL query that gets a count of each unique name in `description`.

    * Be sure to record the execution time using the new parquet DataFrame temporary view.

6. Compare the runtime of the parquet SparkSQL query versus the traditional Spark DataFrame query. 

## Data Source:

[Austin 311 Public Dataset](https://data.austintexas.gov/Utilities-and-City-Services/Austin-311-Public-Data/xwdj-i9he)

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.