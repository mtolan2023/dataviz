# Amazon Vine Temporary Views

In this activity, you’ll import an Amazon Vine dataset, create a temporary table, and then use Spark SQL to run queries on the temporary table.

## Instructions

1. Start a Spark Session, and then import the [Amazon Vine music dataset](https://s3.amazonaws.com/amazon-reviews-pds/tsv/amazon_reviews_us_Music_v1_00.tsv.gz). 

  * **Note:** This dataset may take about 5-10 minutes to load. 

2. Use Spark SQL to answer the following questions:

    * What are the first 10 product titles that have a 5-star rating?

    * What are the comments (in the "review_body" column) for the entries in the "product_title" column that have a 1-star rating?

    * Which customer IDs have the most reviews? To answer this question, group the results by "customer_id", and order the results by the number of reviews that each customer made, in descending order.

      **Hint:** First write the SQL query, and then pass the query to the `spark.sql()` function.

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.