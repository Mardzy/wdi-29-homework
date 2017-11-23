![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Express API with AJAX and Google Maps

### Introduction

Your task is to take everything we have looked at over the past few days, and incorporate it into a single web app.

You will be building out a **REST**ful Express API, which will serve JSON data. You will also be building out a front end that consumes your API using jQuery and **AJAX**.

You should use [Google Maps](https://developers.google.com/maps/documentation/javascript/) to display your data on the page. It is up to you to pick your RESTful resource, but you should choose something that has a location, so that you can seed in longitude and latitude information. For example, your app could list your favourite coffee shops, restaurants, or music venues.

![Google Maps](https://user-images.githubusercontent.com/12997768/30478612-b11fe346-9a09-11e7-8f4e-9be87edba036.png)

### Requirements

##### Express API

* You should build out an Express API for **one** RESTful resource, using the lesson notes.
* Create a seeds file, and make sure you are able to seed your database successfully.
* Test your API **thoroughly** using Insomnia first, before you start building out your client-side JavaScript.
* You should be able to make all five RESTful requests:
	* `INDEX`
	* `SHOW`
	* `CREATE`
	* `UPDATE`
	* `DELETE`

##### Client-side JavaScript

* Once you are happy with your API, set up your Google Map.
* Make a request for all instance of your resource using AJAX.
* Create a marker for each instance, and display it on the map.
* Add an infowindow for each marker, displaying the relevant information.
* As well as displaying a marker for each instance, you should also print out the information elsewhere on the page - perhaps underneath the map or to the side.
* Add a form to create a new instance of your resource using AJAX.
* Add a delete button for each resource so that you can remove it from the database using AJAX.

It is up to you how you want to style your app, so be **creative**! It doesn't have to look like the screenshots provided. Take the functionality as far as you can - explore the Google Maps [documentation](https://developers.google.com/maps/documentation/javascript/).

![Google Maps](https://user-images.githubusercontent.com/12997768/30478626-bb845790-9a09-11e7-994e-f80eef69aacc.png)



### Bonus Ideas

* Add [Snazzy Maps](https://snazzymaps.com/) styles to your map.
* Add a custom marker.
* Think about how you might incorporate an edit form to your app.
* Add tests to your Express API.
* Add the ability to filter your map markers. For example - you could filter coffee shops by rating.
* Have a look at Google Maps Bounds (hint: look for the following methods: `.fitBounds()`, `new google.maps.LatLngBounds()`) to automatically center/zoom your map so that all of your markers are shown within the viewport by default once they have been added. **You will need to look at Stack Overflow examples.**
