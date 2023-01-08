# phase-one-project
Phase 1 project for Flatiron School. A frontend HTML, CSS, and JS one page app.

# Requirements

- Must be a HTML/CSS/JS frontend
- Must return a collection of at least 5 objects with each object having at least 3 attributes.
- Must run on a single page
- Must have at least 3 distinct event listeners
- Must implement at least one instance of array iteration

# Achieved Goals

- I have created a HTML/CSS/JS frontend, with the JS file in the src folder. There is also a JSON file that is added as the API that is needed to run this project.

- Checking the JSON file, you can see that there are at least 5 objects that each include at least 3 attributes. This number will change as you work with or on the web page as we are creating and deleting an inventory for a book collection.

- It is run on a single page with no links sending you to another page. The only links that are used are for the images that are gotten from www.amazon.com. These links do not link the website to anything, it just shows the images.

- There are 3 distinct event listeners that are not embedded into the CSS or HTML. These event listeners are located in the JS:
    - The 'click' method in the acquiredManga()
    - The 'submit' method that is connected to the Add Manga button
    - The 'keydown' method that is used to get rid of the error message if it pops up

- The array iteration that is shown in the webpage is the forEach method. It is located in the stand alone fetch that is on line 65. It allows the web page to look through the JSON file, creating and listing every book (and its information) that has been added to its memory. 




