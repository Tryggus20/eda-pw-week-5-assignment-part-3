console.log('***** Music Collection *****')

let collection = []
function addToCollection(title, artist, yearPublished) {
    console.log('in addToCollection function');
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
//adding another Linkin Park album to test
addToCollection(`Meteora`, `Linkin Park`, 2003 )

// adding a function to display the collection nicely
function showCollection(collection) {
    console.log('in showCollection function');
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

function findByArtist(artist) {
    console.log('in findByArtist function');
    const results = [];
    for (const album of collection) {  
        if (album.artist === artist) {
            results.push(album);
        } // end of if 
    }//end of for
    if (results.length === 0){
        return `No, ${artist} is not in my collection.`;
    }// end of 2nd of for
        console.log(`${artist} is in my collection ${results.length} time(s)`);
        return results;
} //end of search attempt 2

console.log(findByArtist(`Linkin Park`));
console.log(findByArtist(`Madonna`));

//search attempt 3
function findByArtists(artist) {
    console.log(artist.length);
    const results = [];
    for ( let i = 0; i< artist.length; i++) {
        for (const album of collection){
            if (album.artist === artist) {
            results.push(album);
            }// end of if
        }  //end of 2nd for
    }//end of 1st for
    return results
}// end of findByArtists
//comes back with a length of 22 for Linkin Park still. each album repeated 11 times
