console.log('***** Music Collection *****')

let collection = []
function addToCollection('title', 'artist', 'yearPublished') {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }; //end to album object
    collection.push (album);
    return album;
}// end of addToCollection