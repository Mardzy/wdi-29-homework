---
title: Countries App
type: homework
duration: n/a
creator:
    name: Alex Chin
    city: London
competencies: Programming, Server Applications
---

# Countries API

## Introduction

Practising what we've done today, your task it to make a Rails API that lists continents and their respective countries. Continents **have many** countries, and countries **belong to** a continent.

You **do not** need to include every continent and country in the world - just seed a few of each. You should **not** be attempting to pull in any data from an external API.

## Exercise

#### Requirements

- Create an app to store information about the countries and continents
- A continent has:
	- `name`
- A country has:
	- `name`
	- `size` (how many square miles of surface)
	- `population`
	- a first `language`
	- maybe more (currency, GDP etc.)
- Your endpoints should be namespaced to `/api`
- You should have CORS enabled, i.e. you should be able to make an AJAX request to your API from a client side JS file

**Tip:** Before you start scaffolding, think about the order in which to scaffold. Should it be continent before country, or country before continent?

#### Test in Insomnia

- When you request country data, you should see also see the continent that the country belongs to
- When you request continent data, you should also see the countries that belong to it

#### Validations

Add validations to your continent and country models

- A country must have a name, and it must be unique
- A continent must have a name, and it must be unique
- A country's language must be a minimum of 2 characters

## Bonus

* Add a custom method to the continent serializer called `no_of_countries`, which returns the number of countries belonging to that continent.
* Add a custom method to the continent serializer called `population`, which returns the total number of people who live on that continent, based on the population of each country belonging to the continent.
