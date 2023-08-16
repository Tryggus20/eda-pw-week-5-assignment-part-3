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

function showCollection(collection) {
    console.log(`I have ${collection.length} album(s) in my collection:`);

    for (let album of collection) {
        console.log(`Title: ${album.title}`);
        console.log(`Artist: ${album.artist}`);
        console.log(`Year Published: ${album.yearPublished}`);
        console.log(` `); // adding for better readability
    } //end of let of
}// end of showCollection
showCollection(collection);

function findByArtist(artist, collectionArray) {
    let results = [];

    for (let album of collectionArray){
        if (album.artist === artist){
            results.push(album);
        }//end of results push
    } //end of for loop
    return results;
} // end of findByArtist

let searchResults = findByArtist('Linkin Park', collection);

if (searchResults.length > 0) {
    console.log("Yes, I have that artist in my collection");
    showCollection(searchResults); 
} // end of if 
else {
    console.log("No, that artist is not in my collection");
} // end of else
console.log(findByArtist(`Linkin Park`, collection));
console.log(findByArtist(`Madonna`, collection));