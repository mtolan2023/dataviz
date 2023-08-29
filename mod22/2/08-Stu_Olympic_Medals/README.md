# Earn a Medal in SparkSQL 

In this activity, you’ll evaluate a dataset that contains Olympic athlete data by using Spark SQL.

## Instructions

1. Start a Spark session, and then import the `athlete_events.csv` dataset.

2. Note that the dataset has the following columns:

     ```text
     ID - The unique number for each athlete.
     Name - The Athlete's name
     Sex - Either "M" or "F"
     Age - The athlete’s age
     Height - The athlete’s height, in centimeters
     Weight - The athlete’s weight, in kilograms
     Team - The team name.
     NOC - The three letter abbreviation for the country
     Games - The year and season
     Year - The year
     Season - Either "Summer" or "Winter"
     City -  The host city
     Sport - The sport
     Event - The event
     Medal - Either "Gold", "Silver", "Bronze", or "NA"
     ```

3. Answer the following questions:

    * How many new sports were played in the 2016 summer Olympics?

    * What are the names of each sport that has been added?

    * Which sports have been played since the first summer Olympics?

    * Who are the top five athletes that won the most gold, silver, and bronze medals?

4. Export the names of the top five top gold medalists and their gold medal count in descending order to a CSV file.

## Data Source:

* Modified from [120 years of Olympic history: athletes and results | Kaggle](https://www.kaggle.com/heesoo37/120-years-of-olympic-history-athletes-and-results)

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

