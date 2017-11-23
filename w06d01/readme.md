---
title: Express API and Angular AJAX
type: homework
duration: n/a
creator:
    name: Mike Hayden
    city: London
competencies: Programming, Server Applications
---

# Express API with Angular `$http`

## Introduction

We've already covered a lot of ground today, so this lab with give you an opportunity to recap creating an Express API and consuming it with an Angular frontend app.

Move the `starter-code` into today's homework folder, and unzip it. In the terminal run `yarn`. This will install your `node_modules` and `bower_components`. The `starter-code` has the gulp setup done for you, which will link up your `.css` and `.js` files, so **you do not need to link these yourself**.

The `index.js` file has the basic server setup done, but you will need to do the rest of the API setup.

>**Note:** While it may seem easy to copy-paste today's classwork you will get far more out of this lab by going through your notes and building everything out from scratch

## Part 1: The API

Build out an Express API running on `http://localhost:3000`

Your app will have one page.

Create a RESTful resource for a `property`. You should have the following routes:

| Route  | Method | Path |
|:-------|:-------|:-----|
| Index  | GET    | `/properties` |
| Create | POST   | `/properties` |
| Show   | GET    | `/properties/:id` |
| Update | PUT    | `/properties/:id` |
| Delete | DELETE | `/properties/:id` |

The model should contain the following data:

- `address: String`
- `bedrooms: Number`
- `bathrooms: Number`
- `askingPrice: Number`
- `image: String`

You should now create a seeds file with at least 3 properties. **You should not attempt to implement image upload.** Use a link from the web instead.

Once you have built out the API, **you must test it using Insomnia before you start the next part.**

## Part 2: The Frontend

- Now that you have created your API, build out your Angular app, and display all the properties from your API on the page using Angular's `$http` module.
- Create a form so that you can add new properties to the API using Angular's `$http` module.
- Add a delete button to each property so that you can also remove properties.

**Remember to include `ng-app` and `ng-controller` to your HTML.**

#### Bonus

- Add an edit button next to each property. When you click the edit button it should show and populate an edit form.
- When the edit form is submitted, the property should be updated in the database, and on the page. The form should then hide.
- Use `ng-show` or `ng-hide` to hide/show the form accordingly.
