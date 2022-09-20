# Benson's NHL API app

Updated 19 September, 2022

## Overview

This is my attempt at a cohesive app. It won't be anything crazy, but it will provide some interactions with the NHLs API in order to deliver 
data of various kinds, allowing the app user to perform queries and see the results returned to them on rendered, dynamic pages. 

## Composition

Pages can access the following pages from the main address:

"/" (root address): Displays a greeting page, will contain links when the site has more content and structure

"/check": Simple response that tells you that the app is up and running on port ___ (whichever port has been selected)

"/frame": A basic page messing with html iframes

### /data route pages:

"/player_search" (POST): Takes an input of a text box and applies that string to the NHL APIs player search function. A list of players matching that key-word is then returned,
which is picked apart and rearranged into a more nicely presented string of data for each entry entry. That list of data strings is then inserted into a dynamic webpage and is
sent back to the user. 