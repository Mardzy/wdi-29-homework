![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

## React AJAX & Routing Lab

### Introduction

Your task is to build an React app that consumes an Express API, containing the Seven Wonders of the World! The API has already been built for you, and the seeds file has been filled out.

![screen shot 2017-10-18 at 14 25 57](https://user-images.githubusercontent.com/12997768/31721096-54e11c6e-b410-11e7-9514-4da0cbfc6e5d.png)

### Setup

1. Install any dependencies using `yarn install`.
2. Run the seeds file using `yarn seed`.
3. In one tab, start the server using `yarn start:server`
4. In another tab, start the client using `yarn start:client` 

### Requirements

* Use [React Router](https://reacttraining.com/react-router/web/example/basic) to render an index page (all wonders) and a show page (single wonder).
* On the index page use `axios` to make requests to the API to retrieve all wonders.
* The URL for the index page should be `/`.
* On the show page use `axios` to make requests to the API to retrieve a single wonder based on the id in the URL.
* The URL for the index page should be `/:id`.
* Create a Google Maps component and render a map on each show page.
* A map should center on the lat and lng of the wonder, and should have a marker. The lat and lng are stored inside a wonder's `location`.
* You do not need to be able to create, edit or delete a wonder.

**Important:** When you make your `axios` request, you will need to prefix it with `/api`. For example, to get all wonders, the entire url will be `/api/wonders`.

![screen shot 2017-10-18 at 14 25 50](https://user-images.githubusercontent.com/12997768/31721632-c6efac5c-b411-11e7-963d-94782c76c60e.png)


### Tips

* Add your Google Maps CDN to the `index.html` file.
* Remember to install any packages you might need using `yarn`, and `import` them at the top of the file you are using them in.
* Check out the [React Router docs](https://reacttraining.com/react-router/web/example/url-params) on how to access URL parameters.


### Bonus

* Add a `WondersNew` page so that you can create a new wonder.
