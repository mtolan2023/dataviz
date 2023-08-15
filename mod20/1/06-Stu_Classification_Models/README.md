# Classifying Social Media Influencers

It's your turn to evaluate how a logistic regression model performs. In this activity, you are working to help a social media startup grow its user base faster. You’ll discover machine learning’s potential to turbocharge the startup’s growth trajectory.


## Background

**Snowballing** is a business growth strategy that is based on the fact that individuals’ social networks tend to have characteristics in common. If you can identify your best customers, you can use them to snowball or influence your marketing to new, but similarly great, customers.

While the startup doesn't yet have many customers, you’ve done a good job of collecting data about their usage statistics. Specifically, you have data in the following columns:

* Usage Stats, a metric that tracks how frequently the customer engages with the product.

* Referral History, which relates to how frequently the customer has referred your product to others in the past.

* Customer Rank, a financial score of how profitable this customer has been.

* Target, which indicates whether a customer has referred your product to a new customer and whether both customers use the product. If this is `True` then Target equals 1.

You’ve been tasked with using this data to build a model that can predict which customers based on their Usage Stats, Referral History, and Customer Rank will likely be the best referrers for new customers. How well will your model classify these snowballing customers?


## Instructions

1. Read in the dataset about the current customers of the startup.

2. Split the data into X and y and then into testing and training datasets.

3. Fit a logistic regression classifier.

4. Create the predicted values for the testing and the training data.

5. Print a confusion matrix for the training data.

6. Print a confusion matrix for the testing data.

7. Print the training classification report.

8. Print the testing classification report.

9. Answer the following question: How does the model performance compare between the training and testing data?


## Resources

Visit the following links for information on the `scikit-learn` modules needed for this activity:

[Logistic Regression](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html)

[train_test_split Function](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html)

[Classification Report](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.classification_report.html)

[Confusion Matrix](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.confusion_matrix.html)

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

