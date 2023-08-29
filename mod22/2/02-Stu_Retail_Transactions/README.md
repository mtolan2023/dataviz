# Retail Transactions

In this activity, you’ll practice using the `groupBy()` and `agg()` function with the Retail Transaction Data dataset. Understanding how these functions work is important, because that’s another step toward being able to transform data into various forms. You’ll use this skill on a regular basis in your career.

## Instructions

1. Read the `retail_transactions.csv` file from S3 into PySpark.

2. Convert the "transaction_amount" column from the string type to the `float` type.

3. Find the average "transaction_amount" value by grouping by "customer_id" value.

4. Find the maximum "transaction_amount" value per customer by grouping by "customer_id" value.

5. Find the sum of the "transaction_amount" values per customer by grouping by "customer_id" value.

6. Find the average "transaction_amount" value per "transaction_date" value.

7. Find the sum of "transaction_amount" values per "transaction_date" value.

8. Find the maximum "transaction_amount" value per "transaction_date" value.

## Data Source:

* [Retail Transaction Data](https://www.kaggle.com/regivm/retailtransactiondata?select=Retail_Data_Transactions.csv).


---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
