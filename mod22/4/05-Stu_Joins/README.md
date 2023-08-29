# Joins in Databricks

In this activity, you will perform queries on datasets using both PySpark and SQL interfaces in Databricks.

## Background

The ability to query information that is spread out in multiple tables and DataFrames is a crucial skill in data analytics. Data analysts and data scientists often work with data in multiple tables or sources. A nonprofit client has asked you to analyze wildlife data by performing joins across data sources.

You will work with two sources of data and join them. Here are the links to the files on AWS S3:

  * s3://2u-data-curriculum-team/dataviz-classroom/v1.1/22-big-data/species.csv

  * s3://2u-data-curriculum-team/dataviz-classroom/v1.1/22-big-data/surveys.csv

**Note**: If AWS is unavailable, you’ll need to manually upload the included CSV files to Databricks.

## Instructions

Complete the following tasks by using the PySpark interface.

* Read in the CSV files using the provided links to create a Spark DataFrame for each file.

* Use `display` to preview the DataFrames.

* Count the number of rows in each DataFrame.

* Join the two DataFrames to answer the following question: How many birds are in the dataset?

* Join the two DataFrames to answer the following question: How many rodents were recorded in 1977?

* To perform SQL queries, you must create a temporary view for each DataFrame.

Complete the following tasks using the SQL interface.

* Create a preview of the first five rows for each table.

* Join the two tables to answer the following question: How many birds are in the dataset?

* Join the two tables to answer the following question: How many rodents were recorded in 1977?

**Hint**: Both PySpark and SQL require you to specify the type of join being performed and the columns to be joined.

## References

**Publication:** S. K. Morgan Ernest, Thomas J. Valone, and James H. Brown. 2009. Long-term monitoring and experimental manipulation of a Chihuahuan Desert ecosystem near Portal, Arizona, USA. Ecology 90:1708.

**Files:** Tracy Teal. (2015) Portal Mammals. [https://github.com/tracykteal/data](https://github.com/tracykteal/data)

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
