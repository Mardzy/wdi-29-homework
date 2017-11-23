# RESTful Angular App with ngResource

The starter code provided includes just the API. We want you to build out the whole of the Angular app, incorporate ngResource and create a factory so that you can use it throughout your controllers.

### Required
- A fully RESTful app with CRUD actions on our model of birds.
- Set up your front end routes with the respective controller, one at a time, and test them to ensure they're fully functional.
- Make a factory for our birds.
- Add a custom card directive for an individual bird on the index page, that could be used on the show page if you want it to be.
	
	
### Tips
- Read the lesson notes.
- Where's your ng-app? Is it in the `<head>` instead of the `<html>` where it should be?
- Double check your `templateUrl` paths.
- Ensure you install the correct dependencies:
	- `angular-ui-router`
	- `angular-resource`
- Don't forget to inject your factory into each of your controllers.

![](https://s-media-cache-ak0.pinimg.com/originals/d3/63/8c/d3638cfd8c3889f17659c2432dbf48b1.jpg)

### Bonus Challenge!

### API
1. Create a new model for 'Category'
2. A category has one property, which is 'name', and it's a string
3. A bird has one category, which is a reference to the category model. Update your bird model accordindly
4. Create a controller for Category
5. Create RESTful routes for your categories in `config/routes`
6. Add categories to your seeds (you can pick your own categories, perhaps `"small"`, `"medium"` and `"large"` if you aren't an avid bird watcher)

### Angular

1. Create a factory for your 'Category' resource
2. Use the 'Category' factory to make a call to the API to get all categories from the database
3. You will need to do this in your new and edit controllers
4. On the new and edit pages, you should render a dropdown, which is populated with all of the categories in the database using `ng-repeat`.
5. When a new bird is created, the category ID should be saved as 'category' on the `vm.bird` (`vm.bird.category`).
6. Display the bird category on the show page. You will need to use `.populate()` in your API birds controller.

Use the documentation for select elements in Angular [here](https://docs.angularjs.org/api/ng/directive/select).