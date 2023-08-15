# Predicting Fraudulent Loans Applications

In this activity, you’ll explore how tree-based algorithms can be used to identify fraudulent loan applications.


## Instructions

### Load and Preprocess Loans Encoded Data

* Load the `sba_loans_encoded.csv` in a Pandas DataFrame called `df_loans`.

* Define the features set by copying the `df_loans` DataFrame and dropping the `Default` column.

* Create the target vector by assigning the values of the `Default` column from the `df_loans` DataFrame.

* Split the data into training and testing datasets.

* Use the `StandardScaler` to scale the features data&mdash;remember that only `X_train` and `X_testing` DataFrames should be scaled.


### Fit the Decision Tree Model

* Create a decision tree instance and fit it with the training data (`X_train_scaled` and `y_train`). 


### Make Predictions Using the Tree Model

* Validate the trained model by predicting fraudulent loan applications using the testing data (`X_test_scaled`).


### Evaluate the Model

* Create a confusion matrix and calculate the accuracy score.

* Generate a classification report.


### Analyze the Results

* Analyze the model's evaluation results and answer the following question:

    * **Question 1:** Would you trust this model to deploy a loan application approval solution in a bank?

    * **Question 2:** Review either the pdf or png visualization of the tree in the resources folder. Are there any branches that are surprising to you? Are there any that seem more like common sense?

---


## References 

According to the American Bankers Association, [every dollar of fraud now costs banks and credit unions roughly $2.92](https://www.cutimes.com/2018/09/27/fis-spending-2-92-for-every-dollar-of-fraud-in-201/?slreturn=20230220122458#:~:text=Every%20dollar%20of%20fraud%20now,data%20from%20LexisNexis%20Risk%20Solutions.). That's a reason why predicting fraud using machine learning techniques becomes a [broad area of research](https://scholar.google.com.mx/scholar?q=fraud+detection+machine+learning&btnG=&oq=fraud+detection+) and a great [business opportunity for fintech startups](https://www.eu-startups.com/2019/06/paris-based-fintech-bleckwen-raises-e8-8-million-for-its-fraud-detection-software-to-prevent-financial-crime/).

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.


