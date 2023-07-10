# Vote Star Wars

In this activity, you will use D3 and the `this` keyword to create a single-click handler for upvotes and downvotes.

## Instructions

Use the starter files `index.html`, `static/js/app.js`, and `static/css/style.css` provided in the [Unsolved](Unsolved) folder, and do the following:

* Use D3 to select both the `upvote` and `downvote` buttons on the page in a single D3 object.

* Make sure the click handler does the following:
  * Select the current vote count from the `<h3>` tag.

  * Use the `this` keyword to reference the correct button in order to utilize that button’s `value` attribute.

  * Increment or decrement the count, using the button’s `value` attribute.

  * Update the vote count `<h3>` tag using D3.

## Hints

* Don't forget to use the `.on` function to attach the click handler to the buttons.

* Check the `value` attribute on the buttons in the `index.html` file to decide how you might use the value.

* You will need to use `parseInt` to convert the `<h3>` vote count to a number before you can add or subtract from it.

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
