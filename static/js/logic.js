// CREATE THE EARTHQUAKE VISUALIZATION

// URL for all earthquakes in the past day : "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
// access the url endpoint
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson").then(function(data){
    //console.log(data);
    //call the createFeatures function
    createFeatures(data.features); // send the features property over
});
// markers- size increase w/magnitude and color increase w/depth
function createMarker(feature,latlang){
    return L.circleMarker(latlang,{
        radius:(feature.properties.mag*8), // *8 for visibility purposes
        fillColor:(feature.geometry.coordinates[3]),
        color: "#098",
        opacity: 0.7,
        fillOpacity: 0.7 
    });
}
// make function to process the data
function createFeatures(earthquakeData)
{
    console.log(earthquakeData); // extract the data for popups for each point

    // define function for each magnitude, depth, date/time, and location,  and bind the popups - onEachFeature
    function onEachFeature(feature, layer)
    {
        layer.bindPopup(
            `<center><h3>Magnitude:<h3>${feature.properties.mag}<h3>Depth:<h3>${feature.geometry.coordinates[2]}<h3><hr><h3>Date & Time:<h3>${new Date(feature.properties.time)}<h3>Location:<h3>${feature.properties.place}<hr></center>`
        )
    }

    // use L.geoJSON to make the geoJSON marker layer
    var earthquakes = L.geoJSON(earthquakeData,{
        onEachFeature: onEachFeature, // onEachFeature (left) = property for marker layer // onEachFeature (right) = function applied to marker layer
        pointToLayer: createMarker                            

    });

    // call function to make map - pass in geoJSON
    createMap(earthquakes);
}

function createMap(earthquakes)
{
    // add tile layers
    // street view
    var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // topography view
    var topography = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    // watercolor view 
    var watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 1, 
        maxZoom: 16,
        ext: 'jpg'
    });

    // tile layer object
    var tiles = {
        "Street": street,
        "Topography": topography,
        "Watercolor": watercolor
    };

    // overlay object that uses earthquake geojson marker layer
    var overlays = {
        "Earthquake Data" : earthquakes
    };

    // create map with defaults
    var mymap = L.map("map",
        {
            center: [37.0902, -95.7129], //USA coordinates
            zoom: 5,
            layers: [street, earthquakes]
        }
    );

    // layer control
    L.control.layers(tiles,overlays,{collapsed: false}).addTo(mymap);

}