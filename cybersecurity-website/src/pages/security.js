import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

const Security = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Cybersecurity Awareness
            </Typography>
            <Typography variant="h5" gutterBottom>
                Understanding Cybersecurity
            </Typography>
            <Typography paragraph>
                Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Key Statistics
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">
                        1. Cybercrime is expected to cost the world $10.5 trillion annually by 2025.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">
                        2. 43% of cyber attacks target small businesses.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">
                        3. 95% of cybersecurity breaches are due to human error.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">
                        4. Ransomware attacks increased by 150% in 2020.
                    </Typography>
                </Grid>
            </Grid>
            <Typography paragraph>
                It is crucial for individuals and organizations to stay informed about cybersecurity threats and to implement effective security measures to protect their data and privacy.
            </Typography>
        </Container>
    );
};

export default Security;