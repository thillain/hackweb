#Search for the Artist

## Problem

Build an application that does the following things

1.A call to action button that says "Search for artist"
2.When user clicks on this link, page opens in an overlay without page refresh or redirection
3.Overlay should have form which asks for artist name and limit(no of tracks to be fetched)
4.When user clicks on submit validate that artist name is "jack" and limit is 4
5.Use those parameters to construct the url http://itunes.apple.com/search?term=jack&limit=4
6.Make AJAX call to the url.
7.On successful submission, overlay closes but page is not refreshed or redirected.
8.Construct maximum of four tabs in the page (original page on which "search for artist" link was visible)
9.Artist name will be visible on these tabs.
10.On clicking the tab AJAX call will be made to url http://itunes.apple.com/search?term=artistName&limit=1 where artistName is the name visible on that tab
11.JSON returned should be shown to the user as view for that tab (The only difference from normal tab functionality is that data is not statically populated for tabs, instead it is fetched from the above mentioned ajax url)
12.Use: {artistName, trackName, artworkUrl30} info to display in a tab for a given artist

Note

If you are using jQuery $.ajax() to fetch the records from iTunes, then specify the datatype parameter as jsonp and set crossdomain parameter to true so that you can make cross domain ajax requests.
