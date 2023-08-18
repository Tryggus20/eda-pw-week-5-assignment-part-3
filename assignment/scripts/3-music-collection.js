console.log('***** Music Collection *****')

let collection = []
function addToCollection(title, artist, yearPublished, tracks) {
    console.log('in addToCollection function');
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks || [], // Added for stretch goals
        // trying to see if || will fix my track issue

    }; //end to album object
    collection.push (album);
    return album;
}// end of addToCollection

let tracks1 = [
    {name: `Get Your Stretch On! (TedX Fargo Remix)`, duration: `5:55`},
    {name: `2nd Place 'Sache Victory March`, duration: `3:00`},
]
 
let tracks2 = [    
    {name: `Papercut`, duration: `3:04`},
    {name: `One Step Closer`, duration: `2:35`},
    {name: `With You`, duration: `3:23`},

]
//adding albums:
addToCollection("Blaine's Greatest Hits", 'Blaine Booher', 2023, tracks1 );

addToCollection('Hybrid Theory', 'Linkin Park', 2000, tracks2 );
addToCollection(`That's the Spirit`, 'Bring Me the Horizon', 2015 );
addToCollection('Ember', 'Breaking Benjamin', 2018 );
addToCollection('The Stories We Tell Ourselves', 'Nothing More', 2017 );
addToCollection('The Sickness', 'Disturbed', 2000 );
//adding another Linkin Park album to test
addToCollection(`Meteora`, `Linkin Park`, 2003 )

// adding a function to display the collection nicely
function showCollection(collection) {
    console.log('in showCollection function');
    console.log(''); //Added spacing for readability
    console.log(`I have ${collection.length} album(s) in my collection:`);

    for (let album of collection) {
        console.log(`Title: ${album.title}`);
        console.log(`Artist: ${album.artist}`);
        console.log(`Year Published: ${album.yearPublished}`);
        console.log(`Tracks:`);
        for (let track of album.tracks) {
            console.log( `Name: ${track.name}, Duration: ${track.duration}`);
        } //end of for album tracks
        console.log(` `); // adding for better readability
    } //end of for loop
}// end of showCollection
showCollection(collection);

// 2nd attempt at search function:

function findByArtist(artist) {
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
console.log(`My favorite may have to be`, findByArtist(`Blaine Booher`),` His beats are SICK!`); 

//Stretch Goal:
//Adding a function to search not just the artist, but also the year the album came out
function search(artist = null, year = null, tracks) {
    const results = [];
    for (const album of collection) {
        if (album.artist === artist && album.yearPublished === year)
        results.push(album);
    } // end of if
    if (artist === null && year === null) {
        console.log(`My collection is:`)
        return collection
    } // end of null if
    if (results.length === 0) {
        return `No, I do not have an album from ${artist} with a year of ${year}.`
    } // end of no matches if
    
    console.log(`Yes, there was a match for ${artist} and ${year}:`)
    return results
}// end of for
console.log(search(`Linkin Park`, 2000));
console.log(search(`Linkin Park`, 2001));

// adding another album with the same year and artst to test 
addToCollection("Blaine's Greatest Hits 2", 'Blaine Booher', 2023 );
console.log(search(`Blaine Booher`, 2023));
console.log(search(`Ray Charles`, 1957));
console.log(search());

console.log(search('Breaking Benjamin', 2018));
