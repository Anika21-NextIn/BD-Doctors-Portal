import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../../Service/Service';
import fluoride from '../../../../images/fluoride.png'

const services = [
    {
        name: 'Fluoride Treatment'
        description: "jcbhjjkvb  hdscgyuhdsbv sdhfcvuhjdsgvi hgdcfvjgvik dhfcvyuhjgvyuhjc hjcvhjvgiujb"
        img: fluoride

    },

    {
        name: 'Cavity Filling'
        description: "jcbhjjkvb  hdscgyuhdsbv sdhfcvuhjdsgvi hgdcfvjgvik dhfcvyuhjgvyuhjc hjcvhjvgiujb"
        img: cavity

    },

    {
        name: 'Teeth Whitening'
        description: "jcbhjjkvb  hdscgyuhdsbv sdhfcvuhjdsgvi hgdcfvjgvik dhfcvyuhjgvyuhjc hjcvhjvgiujb"
        img: whitening

    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                 {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                <Service></Service>
                </Grid>
                ))}
                </Grid>
            </Container>
      </Box>
    );
};

export default Services;