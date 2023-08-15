# Predicting Loan Default

In this activity, you’ll explore how random forest algorithms can be used to identify loans that are likely to default. 


## Instructions

### Load and Preprocess Loans Data

* Load the `sba_loans_encoded.csv` in a Pandas DataFrame called `df_loans`.

* Define the features set by copying the `df_loans` DataFrame and dropping the `Default` column.

* Create the target vector by assigning the values of the `Default` column from the `df_loans` DataFrame.

* Split the data into training and testing datasets.

* Use the `StandardScaler` to scale the features data&mdash;remember that only `X_train` and `X_testing` DataFrames should be scaled.


### Fit the Random Forest Model

* Once the data is scaled, create a random forest instance and fit it with the training data (`X_train_scaled` and `y_train`). Define `n_estimators=500` and `random_state=78`.


### Make Predictions Using the Random Forest Model

* Validate the trained model by predicting loan defaults using the testing data (`X_test_scaled`).


### Evaluate the Model

* Create a confusion matrix and calculate the accuracy score.

* Generate a classification report.


### Identify Feature Importance

* Display the 10 most important features.


### Analyze the Results

* Analyze the model's evaluation results and answer the following questions:

    * **Question 1:** Would you trust this model to deploy a loan default solution in a bank?

    * **Question 2:** What are your insights about the top 10 most important features?

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

