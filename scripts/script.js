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
    var api = 'https://en.wikipedia.org/w/api.php'+
              '?callback=?' +
              '&action=opensearch' +
              '&format=json' +
              '&profile=fuzzy' +
              '&limit=10' +
              '&prop=imageinfo&format=json&iiprop=urll' +
              '&search=' +
              encodeURI(title);
    var page = 'https://en.wikipedia.org/?curid=';

    $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        jsonp: "callback",
        dataType: 'jsonp',
        data: {
            action: "query",
            list: "search",
            srsearch: $("#searchtxt").val(),
            srinfo: "suggestion",
            srlimit: "50",
            format: "json"
        },
        xhrFields: {
            withCredentials: true
        },
        success: showResults
    });

    function showResults (data) {
        myObj = data;
        console.log(data);
    }

}






