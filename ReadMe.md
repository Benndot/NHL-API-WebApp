# Baby's First Web app

Updated 13 September, 2022

## Overview

There isn't too much to this project so far. No advanced features, or database behind it doing anything interesting. 

It's very much a "build-as-you-learn" sort of affair at this point in time with no particular direction or purpose. 

I guess the overarching theme is a lighthearted parody, a fake "storefront" for a chair rental service, though I threw a few extra things into this that don't fit. 

It has a few simple webpages that I've thrown together using the basic HTML and CSS fundamentals that I have been learning. Nothing much to them, but I try to make them fun. 

A bit of simple CSS interactivity, a little bit of HTML-to-Javascript POST interaction, a bit of rendering engine JS injection to the webpages, but that's it for now. 

I plan to make the pages more impressive in the future. The aesthetic is quite strange, currently. That's sort of intentional, because I was just having
some fun putting it together. I've always found weird, obscure websites to be very interesting so I like to emulate that a bit.

There are a few hyperlinks to youtube videos stuffed here and there. Mostly just random links I had on hand. One is creepy, though (spooky, not graphic)

## Composition

Without specifying a route, you can access the following pages from the main address:

-"/form" for a simple name input form [user_form.ejs]

-"/direct" for a fake and currently incomplete directory of webpages [directory.ejs]

-"/site" for a basic frontpage sort of thing? [main_page.ejs] 

Beyond that, there are two routes, currently: /chairs and /misc

### /chairs pages:

/chairs: A basic Chair search bar page. Takes an input, which is successfully received, but nothing is done based on it yet. [main_page.ejs]

-"/chairs/main":

-"/chairs/catalog": Redirects from search bar input in the chairs page. Meant to simulate a digital storefront results page. Injects a bit of random number
generation into the Chair's price labels [search_results.ejs]

-"/chairs/catalog/:id": Lets the user input a search term, that will display on the search results page when it's rendered. [search_results.ejs]

### /misc pages:

-"/misc/friendly": Just there for the sake of it. Messing around with cool CSS functionality [friendly.ejs] 

-"/misc/form": Also renders out the input form page [user_form.ejs]

There are 3 more interactions, but they're just simple text responses not worth saying much about. They are as listed below:
-"/"
-"/chair"
-"/misc"