## Field Trip Project

### Project Summary

After browsing the Eiteljorg, one thing that really stuck out to me was the map of Indiana that had stars labelling the land owned by certain Native tribes. We really aren't told just how diverse and immense the Native people's influence was and I had no idea there were so many different Native tribes that settled in Indiana alone; we're only ever told of 2-3 tribes total. It astonished me just how so many different kinds of people settled here, and now all of that is just gone.

The project I would plan to make off this revelation is a land loss "simulator." Users accessing the site can view maps of Indiana or another state by year- lets say 1830, when most land cession treaties were signed and/or Natives were removed from their land- and can watch a the land rapidly decrease over time year by year (1830-1846 for Indiana). The simulator could be either automatic OR manual with users clicking an arrow to advance the years, possibly even including a "Save As" or "Download" function for that specific map visual of that year for later research or documentation.

Technical wise, I'd use an API like geoJSON to grab land data (especially for Native land boundaries) and use Express to serve the data requested.

### Core Webpages

- Home: the page with the simulator. Would include the sim itself with download/save as buttons and some general information explaining how the sim works, where it's sourced from, and some external links that further explain mapping methods or just link to the API used to source the data.
- Resources: A page filled with external websites and articles surrounding Native land loss both over time and today. Could also include fitlers so users can view articles for their specific state. I would also aim to include other instances of land injustice not just relating to the Native Americans, such as gentrification in cities.
- FAQ: A page filled with lots of documented research I'd have compiled based on the most common questions people have about Native land loss, or the myths surrounding it (ie. "What was most commonly given in land cession treaties?" "Did Natives just _leave_ their land peacefully?" etc.) to better educate myself and users who access the tool.
- Contact me: A page branded more towards "send me what you know!" instead of "reach out to me personally!" in hopes that I could add improve the research, accuracy, AND/OR language of the tool.

### Design Choices

- https://native-land.ca/ || A Native land tool that ALSO uses geoJSON to showcase CURRENT land if it was still owned by Natives today. Also makes note of the specific cession treaties and their borders. Gives me a good visual for how geoJSON would look, and how I would utilize it.
- https://www.arcgis.com/apps/webappviewer/index.html?id=eb6ca76e008543a89349ff2517db47e6 || The closest visual I had in mind for the tool; very clearly outdated and a bit janky. I'd aim to make something precisely like this in a smaller container that users can zoom, drag, and filter from instead of just click around which more modern styling techniques to appeal to recent tastes.
- For styling overall, I'd aim to use brown shades as the primary and secondary color with either a bright red or soft tealish-blue for interactable elements to mirror the colors in the Eiteljorg. I want the colors to be earthy to allude to the connectedness the Natives have with the land.
