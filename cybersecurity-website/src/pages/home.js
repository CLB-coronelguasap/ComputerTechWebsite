import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';

const Home = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Welcome to Cybersecurity Awareness
            </Typography>
            <Typography variant="body1" paragraph>
                In today's digital age, cybersecurity is more important than ever. Protecting your personal information and understanding the risks associated with online activities is crucial.
            </Typography>
            <Typography variant="h4" gutterBottom>
                Why Cybersecurity Matters
            </Typography>
            <Typography variant="body1" paragraph>
                Cyber threats are constantly evolving, and individuals must stay informed to safeguard their data. From phishing attacks to data breaches, the landscape of cybersecurity is complex and requires vigilance.
            </Typography>
            <Button variant="contained" color="primary" href="/security">
                Learn More About Cybersecurity
            </Button>
        </Container>
    );
};

export default Home;