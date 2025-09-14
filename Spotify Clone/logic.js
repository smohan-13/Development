const cheerio = require('cheerio');
const fs = require('fs'); // Assuming you're reading from a local file

// Sample HTML content
const htmlContent = fs.readFileSync('your-file.html', 'utf8');

// Load the HTML into cheerio
const $ = cheerio.load(htmlContent);

// Initialize an array to store the song details
const songsArray = [];

// Iterate through each list item (assuming each <a> tag contains a song's info)
$('#files li a').each((index, element) => {
    const songTitle = $(element).text().trim();  // Get the song title (name)
    const songLink = $(element).attr('href');   // Get the link to the song (it may contain additional info like singer)

    // Assuming the song name, singer, and duration are encoded in the link or text, here is a basic example:
    const songDetails = {
        songName: songTitle,  // We assume the title itself is the song name for simplicity
        songLink: songLink,   // The link may include metadata (e.g., song details)
        singer: extractSinger(songLink),  // Extract singer if possible
        duration: extractDuration(songLink) // Extract duration if it's encoded in the link
    };

    // Push the song details into the array
    songsArray.push(songDetails);
});

// Helper function to extract singer (this will vary depending on how your data is structured)
function extractSinger(link) {
    // Example logic to extract singer (this depends on how the singer is formatted in the link or title)
    if (link.includes('Diljit')) {
        return 'Diljit';
    } else if (link.includes('karan aujla')) {
        return 'Karan Aujla';
    } else {
        return 'Unknown'; // Default if no singer is found
    }
}

// Helper function to extract duration (based on link structure, modify accordingly)
function extractDuration(link) {
    // Placeholder for extracting duration, assuming it's somehow encoded in the link
    // Here we just return a static duration for example purposes
    return '3:45'; // Example static duration
}

// Output the array of songs
console.log(songsArray);
