import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';

const Lookup = () => {
    const [email, setEmail] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLookup = async () => {
        setLoading(true);
        // Simulate an API call to look up personal information
        setTimeout(() => {
            setResult(`Information for ${email} found!`);
            setLoading(false);
        }, 2000);
    };

    const handleRemove = () => {
        // Simulate an API call to remove personal information
        alert(`Your information for ${email} has been requested for removal.`);
        setEmail('');
        setResult(null);
    };

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Lookup Your Information
            </Typography>
            <TextField
                label="Enter your email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleLookup}
                disabled={loading}
            >
                {loading ? 'Looking up...' : 'Lookup'}
            </Button>
            {result && (
                <div style={{ marginTop: '20px' }}>
                    <Typography variant="h6">{result}</Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleRemove}
                    >
                        Remove Information
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Lookup;