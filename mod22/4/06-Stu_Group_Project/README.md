# Group Activity

In this activity, you will work in groups of three or four to perform data analysis using a database of a fictional company called Northwind. You’ll put together all the skills you learned today and in this course, including the following:

* Loading multiple data sources

* Analyzing data

* Visualizing data

* Presenting data findings

Use SQL (not PySpark) to perform all queries.

**Note**: Collaboration is key for this activity. It’s unlikely that any one person will be able to complete all of the tasks in the allotted time. Work with your team!

## Files

Get the data files for this activity from the following links. If S3 is unavailable, you can also find the files in the Resources folder.

  ```python
  s3://2u-data-curriculum-team/dataviz-classroom/v1.2/22-big-data/4/categories.csv
  s3://2u-data-curriculum-team/dataviz-classroom/v1.2/22-big-data/4/customers.csv
  s3://2u-data-curriculum-team/dataviz-classroom/v1.2/22-big-data/4/employee-territories.csv
  s3://2u-data-curriculum-team/dataviz-classroom/v1.2/22-big-data/4/employees.csv
  s3://2u-data-curriculum-team/dataviz-classroom/v1.2/22-big-data/4/order-details.csv
  s3://2u-data-curriculum-team/dataviz-classroom/v1.2/22-big-data/4/orders.csv
  s3://2u-data-curriculum-team/dataviz-classroom/v1.2/22-big-data/4/products.csv
  s3://2u-data-curriculum-team/dataviz-classroom/v1.2/22-big-data/4/regions.csv
  s3://2u-data-curriculum-team/dataviz-classroom/v1.2/22-big-data/4/shippers.csv
  s3://2u-data-curriculum-team/dataviz-classroom/v1.2/22-big-data/4/suppliers.csv
  s3://2u-data-curriculum-team/dataviz-classroom/v1.2/22-big-data/4/territories.csv
  ```
## Instructions

Complete the following tasks:

* For each data file, create a Spark DataFrame and a temporary view. **Hint**: You may find it helpful to create a for loop.

* Run `spark.catalog.listTables()` to verify that the tables have been created.

* To establish relationships between tables, you can print the schema of each DataFrame, or you may search online for an ERD of the Northwind database.

The management of Northwind has asked your team to provide the following information. Where appropriate, create a chart to visualize the results. Remember to use SQL to query the database.

* Create a list of all countries to which orders have been shipped.

  * How many total orders have been placed?

  * How many orders have been shipped to each country?

* For each product, list its product ID, product name, and the company name.

  * Which five countries have the heaviest shipments, on average?

  * Which 10 companies have placed the most orders? List the contact name of each company.

* Sort by descending order all customers by total amount spent.

* Sort by descending order the customers with a total amount spent greater than $20,000.

* Sort by descending order all employees by the number of orders sold.

  * How many employees account for approximately half the orders sold? (You do not have to use SQL to answer this question. A rough estimate is ok.)

* List customers who have never placed an order.

* List in descending order the products with the highest level of discount.

**Note**: You don’t have to limit yourself to these queries. Feel free to create your own queries to create data insights.

* Use the results of your data analysis to create a brief report (3–5 slides) for management. Your report should include the following information.

  * Three actionable recommendations. Support each recommendation with a data finding.

  * Visualizations where appropriate.

* Send the link of your Google Slides presentation to your instructor.

## References

Rakesh Singh. (2016). Northwind. [https://github.com/rakeshsingh/northwind-for-spark](https://github.com/rakeshsingh/northwind-for-spark)

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
