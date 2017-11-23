![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Timing Methods Game

### Introduction

Your task is to practice using the JavaScript timing methods that we have been using today to build a game.

You should use the following methods:

* `setTimeout`
* `clearTimeout`
* `setInterval`
* `clearInterval`

The `starter-code` contains the HTML and CSS. jQuery is already linked in the head of the HTML. There is an `app.js` file that has one function inside, `generateGrid`. This function picks ten random squares in the grid and adds a class of "active" to them to make them green.

The game is to click on all of the green squares in five seconds. The timer will begin once you click on **Start**. Once you click on a square it will disappear. You get a point for each green square that you click.

### Requirements

The key to this challenge is to break it down into smaller tasks. There are three main pieces of functionality that you will need to build.

1. What happens when you click on the **start** button
2. What happens when you click on the **squares**
3. What happens when you click on the **reset** button

![Grid Game!](http://i.imgur.com/uDxbUS2.png)

##### 1. Starting the timer

When you click on start, the timer should begin, and the display should update in the DOM each second until it reaches 0. The timer should then stop, and not go below 0. You might also want to invoke the `generateGrid()` function when the start button is clicked.

##### 2. Clicking on the squares

When a square is clicked on, you first need to check if it has the class of "active". If the square has a class of "active", the user should get 1 point, and the score should be updated in the DOM. The "active" class should also be removed the square that was clicked on.

##### 3. Reset the game

When the reset button is clicked, the timer and the score should be set back to their original values, and the displays in the DOM should be updated. You might also want to remove the "active" class from any square that wasn't clicked on.

### Extra considerations

* Hide the start button when it is clicked, and show it again when the user clicks on reset.
* Hide the reset button, and then show it when the timer reaches 0.
* Prevent the user from clicking on the squares if the game is not in play, i.e. the timer is at 0.