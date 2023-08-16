console.log('***** Music Collection *****')

let collection = []
function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }; //end to album object
    collection.push (album);
    return album;
}// end of addToCollection

//adding albums:
addToCollection("Blaine's Greatest Hits", 'Blaine Booher', 2023 );

addToCollection('Hybrid Theory', 'Linkin Park', 2000 );
addToCollection(`That's the Spirit`, 'Bring Me the Horizon', 2015 );
addToCollection('Ember', 'Breaking Benjamin', 2018 );
addToCollection('The Stories We Tell Ourselves', 'Nothing More', 2017 );
addToCollection('The Sickness', 'Disturbed', 2000 );

function showCollection() {
    
}// end of showCollection