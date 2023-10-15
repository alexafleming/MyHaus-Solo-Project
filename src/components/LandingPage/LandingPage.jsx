import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import { Container, Typography, Grid } from '@mui/material';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <Container>
        <Grid container maxWidth="sm" className="landing-page-banner">
          <Grid item xs={4}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              MY
              HAUS
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              the all-in-one home management app designed to assist you in organizing, documenting, and improving your home projects and maintenance tasks.
            </Typography>
          </Grid>
        </Grid>
        </Container>
  );
}

export default LandingPage;
