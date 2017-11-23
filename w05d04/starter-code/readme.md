---
title: Giphy AJAX
type: lab
duration: "1:25"
creator:
    name: Alex Chin
    city: London
competencies: Programming, Server Applications
---

# Giphy AJAX

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

The goal in this lab is to integrate with the [Giphy API](https://developers.giphy.com/docs/). 

## Exercise

#### Requirements

* A user can see the top 25 gifs (on page load)
* A user can search for gifs, using the input field

#### Bonus

* Add a "load more" button which allows the user to load the next 25 gifs

Your site should look something like:

<img width="915" alt="screen shot 2016-09-19 at 23 55 56" src="https://cloud.githubusercontent.com/assets/40461/18651679/af9475f2-7ec4-11e6-81e5-f94f9d548f0a.png">

## Introduction

Your task is to write some AJAX-backed JavaScript using jQuery that will complete our little Gif app.

- Make use of the fantastic [Giphy api](https://developers.giphy.com/)
- Check out the documentation [here](https://developers.giphy.com/docs/).

#### Setup

You will need to request an API key in order to use the Giphy API. First of all create an account or sign in using Facebook. Then click "Create an App".

<img width="1058" alt="screen shot 2017-09-14 at 11 40 33" src="https://user-images.githubusercontent.com/12997768/30425660-c46d4196-9941-11e7-86c6-6eee502c0bfc.png">

You will need to give your app a name a description.

<img width="637" alt="screen shot 2017-09-14 at 11 40 55" src="https://user-images.githubusercontent.com/12997768/30425698-e43b5954-9941-11e7-9cb5-f591ab3c8d93.png">

You should then see your API key. You'll need to use this in a minute.

<img width="343" alt="screen shot 2017-09-14 at 11 41 10" src="https://user-images.githubusercontent.com/12997768/30425771-14ae8a52-9942-11e7-8f1f-e1d28b6bb52f.png">

Go to the "Search Endpoint" section of the docs, and have a look at the request parameters. The URL that you will be making a request to is the `HOST`, followed by the `PATH`, followed by the required parameters. The other non-required parameters might be useful later.

<img width="733" alt="screen shot 2017-09-14 at 11 47 45" src="https://user-images.githubusercontent.com/12997768/30425913-959e5c96-9942-11e7-8168-cc6b36e259fd.png">

For example, to search for all **cat** gifs, the URL will be:

```
http://api.giphy.com/v1/gifs/search?api_key=PASTE_YOUR_API_KEY_HERE&q=cats
```

Replace `PASTE_YOUR_API_KEY_HERE` with your actual API key.

Test that you can make a `GET` request to that URL in Insomnia. In the "Preview" tab you should see the data that is being returned from the Giphy API.

**Important:** Take your time to look at the data that is being returned. The response is **not** an array. It is an object, with three key/value pairs. These are `"data"`, `"pagination"` and `"meta"`.

`"data"` is an array that holds the individual gif objects. You will need to access `"data"` before you can loop through the array of gifs and append them to the page.


![screen shot 2017-09-14 at 11 57 08](https://user-images.githubusercontent.com/12997768/30426409-e023681e-9943-11e7-95ad-415c34f29984.png)


#### Thinking Like An Engineer

As we get into more complicated problems, we need to start thinking more and more like engineers. Engineers break down large problems into the smallest possible parts, and tackle each small part one at a time.

This is one of the major skills for web development!

## Additional Resources

- [http://youmightnotneedjquery.com](http://youmightnotneedjquery.com/)
- [jQuery AJAX Docs](http://api.jquery.com/jquery.ajax/)
- [Some useful jQuery DOM Manipulation Docs](http://api.jquery.com/prepend/)
