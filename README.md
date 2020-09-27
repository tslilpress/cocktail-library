# The Cocktail Library

A single page application that allows you to store and edit your cocktail recipes in one clean
place. Created using Javascript, JQuery and Bootstrap.

## Important links

## Planning Story
After finishing my API part for this app I started creating this part of the application which is the
front end side. I already had my wireframes done so I just followed some of the basic structure.
Starting with my sign-up/in/out and change password forms in html, I used Bootstrap for all my forms and Modals so it was quick and easy. All I needed next was to just create the auths for the user, sending the click events to the api, then creating success and failure actions.
Once that was done and running smooth I created the form for creating a cocktail, again with Bootstrap then the auths with the same work flow, creating a click event then sending to the api, then success and failure
actions. I then created a search by Id from which shows a single cocktail and displays an edit and delete buttons. When selecting edit, an update form shows which its fields are automatically populated by the searched cocktail info. In order to populate the form fields I used my store.js to save the searched object and use the keys' values and insert them in the hidden form using the JQuery attr() function. The delete was easy, just attached the stored Id to the searched item. That was pretty much it. I used the rest
of my time tweaking some small bugs and cleaning up my code and UI.

### User Stories
- As a user I would like to be able to sign-up
- As a user I would like to be able to sign-in
- As a user I would like to be able to change my password
- As a user I would like to be able to sign-out
- As a user I would like to be able to add a new cocktail recipe
- As a user I would like to be able to look up an existing recipe
- As a user I would like to be able to look up all the recipes
- As a user I would like to be able to edit a recipe of my choice
- As a user I would like to be able to make comments inside my recipe

### Technologies Used
- Javascript
- JQuery
- HTML
- CSS
- Bootstrap
- Grunt
- cURL

### Unsolved Problems
I would like to eventually make it possible for a user to search by any key in the cocktail object, for example by name of cocktail, ingredients or even by the garnish. I would also like to use a separate form
for the ingredients so they could be edited separately.

### Wireframe

