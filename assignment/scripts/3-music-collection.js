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

// adding a function to display the collection nicely
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

// 2nd attempt at search function:

function findByArtists(artist) {
    const results = [];

    for (const album of collection) {
        if (album.artist === artist) {
            results.push(album);
            console.log(`Yes, ${artist} is in my collection ${artist.length} time(s). ${collection} `);
            return true
        } // end of for
    }//end of if
        console.log(`No, ${artist} is not in my collection.`);
        return false
} //end of search2
