//Do Not Modify the getMusic function
function getMusic() {
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}

var collection = song.collection;

function drawSongs(songList) {

    function sortOn(property) {
        return function (a, b) {
            if (a[property] < b[property]) {
                return -1;
            } else if (a[property] > b[property]) {
                return 1;
            } else {
                return 0;
            }
        }
    }
    
    var array = songList.sort(sortOn("collection"));

    $('#song-list').empty();

    array.forEach(function (song) {

        var item = $('<div class="media row border"><div class="col-md-6"> <div class="media-left">' +
            '<a href="#"><img class="media-object" src="' + song.albumArt + '" alt=""></a>' + '</div>' +
            '<div class="media-body"><audio controls><source src="' + song.preview + '">Your browser does not support the audio tag.</audio>' +
            '<h4 class="media-heading">' + song.title + '</h4>' +
            '<p>Album: ' + song.collection + '</p>' +
            '<p>Artist: ' + song.artist + '</p></div></div>' +
            '<div class="col-md-offset-4 col-md-2"><p>Album Price: $' + song.price + '</p></div>' +
            '</div>');

        $('#song-list').append(item);
    });
}

