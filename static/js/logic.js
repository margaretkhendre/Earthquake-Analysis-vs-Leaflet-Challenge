// CREATE THE EARTHQUAKE VISUALIZATION

// URL for all earthquakes in the last hour : "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
// access the url endpoint
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson").then(function(data){
    //console.log(data);
    //call the createFeatures function
    createFeatures(data.features); // send the features property over
});

// make function to process the data
function createFeatures(earthquakeData)
{
    console.log(earthquakeData);
}