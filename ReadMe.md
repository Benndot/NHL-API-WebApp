# Benson's NHL API app

Updated 21 September, 2022

## Overview

This is my attempt at building a cohesive app. The goal is to create a website/app that takes standard html inputs from a user, and uses the data given
to perform queries on the NHL's API through javascript. Then, that data is to be formatted and returned to the user in the form of an
ejs dynamic webpage.  

Presentation is fairly barebones but the basic functionality of this app is up and running. The goal will be to progressively
make this project more interactive, with more complex and useful interactions. 

## Introduction

Root address of the NHL's API: "https://statsapi.web.nhl.com/api/v1"

I'm a big hockey nerd, so when the idea of working with API's came up, it wasn't long before I was thinking about what I could do with an API for the National Hockey League.
Thankfully, I looked it up and they had one, though there was a real lack of official sources. They apparently do not offer any official documentation on it? I'm not sure
if that's normal for a big corporation with an extensive API but I thought it was kind of strange. Thankfully, a handful of non-NHL affiliated people have put in the work of 
figuring it out and documenting its functions online. 

It offers a nice wealth of information about many aspects of their operations, from more obvious things like players and teams, to more specific data like attendence numbers. 
So I've decided to build a whole project based around building a webapp that will offer the ability to perform a variety of interactions that will result in returned webpages
containing all manner of data regarding the League. An opportunity to train both my web design/development skills, as well as my javascript programming skills. 

I might mess around with some other miscellaneous functions as well, maybe do something with a database of my own, but for now this project will be about user interaction,
obtained data from the API, and presenting it back to the user in a (relatively) nice, readable format. 

## Structure / Composition

Pages can access the following pages from the main address:

"/" (root address): Displays a greeting page, will contain links when the site has more content and structure

"/frame": A basic page messing with html iframes

### /data route pages:

"/" (GET): Displays the player_name_search.html file for searching up players (including retired) using an inputting key-string. May change this route address eventually.

"/roster (GET): Displays the roster_search.html file, for searching up the current roster of an NHL team given that franchise's number ID

"/teams" (GET): Returns the (still under construction) teams_franchises.html file. Meant to contain a couple of static interaction buttons that allow for either a list of all
active NHL teams, or a list of all NHL franchises that have ever existed, to be generated

"/table" (GET): Returns my experimental table page, on which I'm messing around with some fronted scripting that might soon be important to this project

"/player_search" (POST): Takes an input of a text box and applies that string to the NHL APIs player search function. A list of players matching that key-word is then returned,
which is picked apart and rearranged into a more nicely presented string of data for each entry entry. That list of data strings is then inserted into a dynamic webpage and is
sent back to the user. 

"/roster_search" (POST): Takes a number input from the HTML returns the current roster of players of the team corresponding to the number index given

"/teams" (POST): Returns to the user a dynamic webpage containing entries for each currently active NHL team, as well as some key pieces of information regarding them. 

"/franchises" (POST): Currently only returns the API data to the Node console. 

## TODO:

-Added more API functions
-Add more functionality to existing API functions
-Add a direct means of getting to the team roster page from the full team list display page
-Add a way for the user to easily access the other data properties that the strings of data I send back do not deliver