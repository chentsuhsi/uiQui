/**
 * Created by David on 6/20/2017.
 */
var myObj = [];


//  ======================================================================================================================
//  principal functions
$(document).ready(function() {
});


//  ====================================================================================================================
//  general functions
function search() {
    var title = encodeURI($('#searchTxt').val());
    getWikipediaResults(title, showResults )
}

function getWikipediaResults(searchTerms, callback) {
    var apiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerms + "&limit=10&namespace=0&format=json&warningsaserror=true&callback=?";

    $.getJSON(apiURL, function success(data) {
        callback(data);
    });
}

function showResults(data) {
    myObj = data;
    console.log(data);
}






