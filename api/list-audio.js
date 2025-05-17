// filepath: /api/list-audio.js
import { readdir } from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
    try {
        // Define the path to the audio directory
        const audioDir = path.join(process.cwd(), 'assets/audio');

        // Read the directory and filter for audio files
        const files = await readdir(audioDir);
        const audioFiles = files.filter(file => /\.(mp3|wav|ogg)$/i.test(file));

        // Return the list of audio files as JSON
        res.status(200).json({ audioFiles });
    } catch (error) {
        console.error('Error reading audio directory:', error);
        res.status(500).json({ error: 'Failed to list audio files' });
    }
}