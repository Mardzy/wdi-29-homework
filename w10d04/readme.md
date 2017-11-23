![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# React Sorting & Filtering Lab

### Introduction

Your task is to take the `starter-code` provided and build out a React app that lists cheeses from an Express API, and allows the user to sort and filter them on the index page. Your app does **not** need to be fully RESTful - but it should have an index and show page.

The Express API has already been built for you. Run the following commands in the terminal to get started:

```sh
yarn install
yarn seed
yarn start:server
yarn start:client
```

**Important**: `Cheese` and `Country` are two seperate models in the Express API. This means that to get a cheese's country printing on the page you will need to say `cheese.country.name`.

![screen shot 2017-10-19 at 15 09 52](https://user-images.githubusercontent.com/12997768/31775398-6d3ed67c-b4e0-11e7-977f-b2cdbb9fff82.png)

### Requirements

* An index page that shows all cheeses
* A show page that displays a single cheese
* On the index page add a dropdown to allow the user to sort by the following:
	* Name: A - Z
	* Name: Z - A
	* Strength: Low to high
	* Strength: High to low
* **Name: A - Z** should be the default option when the page loads
* Add a search bar to allow the user to search by a cheese's name

![screen shot 2017-10-19 at 15 15 18](https://user-images.githubusercontent.com/12997768/31775469-9e496016-b4e0-11e7-9911-5c8bf934d34b.png)

### Bonus

* If there are no cheeses after filtering/sorting display a message to the user saying **0 cheeses!**

![screen shot 2017-10-19 at 15 14 20](https://user-images.githubusercontent.com/12997768/31775451-9725379c-b4e0-11e7-9e27-33c0f7216072.png)

* Add a dropdown to allow a user to filter the cheeses by country, or by **All**
* **All** should be the default option when the page loads

![screen shot 2017-10-19 at 15 10 32](https://user-images.githubusercontent.com/12997768/31775426-7c4d18fe-b4e0-11e7-81a2-679473f90552.png)

* Add a framework like Bootstrap or Bulma to create a responsive grid layout