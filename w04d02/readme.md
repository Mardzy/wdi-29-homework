![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Express App with Seeded Data

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

Your task is to build a single page Express App, which displays data from a Mongo database. The data will be added to the database via a seeds file.

You should have at least **two** models that are related. One model should be referenced inside another model.

## Exercise

#### Requirements

Your folder structure should look like this:

```
.
├── app.js
├── db
│   └── seeds.js
├── models
│   └── book.js
│   └── author.js
├── node_modules
├── package.json
├── public
│   └── css
│       └── style.css
└── views
    └── index.ejs
    └── authors.ejs
    └── books.ejs

```

> ***Note:*** _The filename of your model will be the same as the name of your model. You don't have to use books and authors._

* Using your lesson notes, set up your Express app.
* Look inside the `package.json` from today's classwork to remind you which packages you will need to install with `yarn`.
* Create two models.
* Write your seeds file.
* Your app should have three pages:
	* A homepage
	* A page that shows all instances of your first model
	* A page that shows all instances of your second model
* Use the Mongoose `populate` method to retrieve the data from the referenced model (look at the author and book example from today).
* Send the response from the database to the view.
* Render your data by looping through it and printing it on the page using EJS tags.


#### Bonus

- **Style**: Style it up! Use a CSS framework like Bootstrap, Skeleton or Foundation if you like.
- **Embedded**: Add embedded documents to one of your models, like we did with images and books in the classwork earlier today.
