# Benson's NHL API app

Updated 19 September, 2022

## Overview

This is my attempt at a cohesive app. It won't be anything crazy, but it will provide some interactions with the NHLs API in order to deliver 
data of various kinds, allowing the app user to perform queries and see the results returned to them on rendered, dynamic pages. 

## Composition

Pages can access the following pages from the main address:

"/" (root address): Displays a greeting page, will contain links when the site has more content and structure

"/check": Simple response that tells you that the app is up and running on port ___ (whichever port has been selected)

### /data pages:

"/hockey" (POST): Name will be changed soon as it's too general. Takes a player name query string and applies it to the NHL APIs player search function.
I then take the response list and break it up into each element, and extract the player information from within. Eventually, I will figure out how to
display all of this information in whole on a dynamic webpage sent back to the user in response. 