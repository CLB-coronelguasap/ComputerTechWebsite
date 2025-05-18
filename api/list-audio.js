// filepath: /api/list-audio.js
import { readdir } from 'fs/promises'; // Import the 'readdir' function from the 'fs/promises' module for reading directories asynchronously
import path from 'path'; // Import the 'path' module for handling and transforming file paths

export default async function handler(req, res) { // Define an asynchronous function to handle API requests
    try {
        // Define the path to the audio directory
        const audioDir = path.join(process.cwd(), 'assets/audio'); // Use 'process.cwd()' to get the current working directory and join it with 'assets/audio'

        // Read the directory and filter for audio files
        const files = await readdir(audioDir); // Read the contents of the audio directory asynchronously
        const audioFiles = files.filter(file => /\.(mp3|wav|ogg)$/i.test(file)); // Filter the files to include only those with .mp3, .wav, or .ogg extensions (case-insensitive)

        // Return the list of audio files as JSON
        res.status(200).json({ audioFiles }); // Send a 200 OK response with the list of audio files in JSON format
    } catch (error) { // Catch any errors that occur during the process
        console.error('Error reading audio directory:', error); // Log the error to the console for debugging
        res.status(500).json({ error: 'Failed to list audio files' }); // Send a 500 Internal Server Error response with an error message
    }
}