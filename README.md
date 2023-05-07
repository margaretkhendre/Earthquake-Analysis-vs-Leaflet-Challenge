# Leaflet Mapping Challenge

### Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Instructions

### Create an Earthquake Visualization

*image

1. Get your dataset using the [USGA GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) link. 
    - The USGS provides earthquake data in a number of different formats, updated every 5 minutes. You will see the following page once clicking the link:
    
    ![image](https://user-images.githubusercontent.com/121995835/236691996-6edc5d59-cd4a-4f99-b9f9-5d8675627a67.png)
    
    - Select a dataset; in this case " All Earthquakes in the Past Hour " will be used. A JSON representation of the data is given. Use the URL of this JSON to pull in the data for the visualization. 

2. Import and visualize the data by doing the following:

    - Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

       - Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

       - Hint: The depth of the earth can be found as the third coordinate for each earthquake.

    - Include popups that provide additional information about the earthquake when its associated marker is clicked.

    - Create a legend that will provide context for your map data.

* screenshot of map


    
