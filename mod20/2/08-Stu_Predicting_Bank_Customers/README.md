# Predicting Banking Customers

In this activity, you'll use a k-nearest neighbors (KNN) algorithm to predict whether data from a telemarketing campaign is able to determine whether someone opened an account. The outcome of your results will help determine if the telemarketing campaign can predict potential customers in the future.  


## Instructions

1. Read the CSV file into a Pandas DataFrame.

2. Separate the features `X` from the target `y`.

3. Encode the categorical variables from the features data using [get_dummies](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.get_dummies.html).

4. Separate the data into training and testing subsets.

5. Scale the data using [StandardScaler](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html)

6. Instantiate a KNN classifier instance.

7. Fit the model using the training data.

8. Make predictions using the testing data.

9. Generate the classification report for the testing data.

> **Hint:** The column `y` is the target column.

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

