import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../../Service/Service';
import fluoride from '../../../../images/fluoride.png';
import cavity from '../../../../images/cavity.png';
import whitening from '../../../../images/whitening.png';



const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades. Fluoride supports healthy tooth enamel and fights the bacteria.',
        img: fluoride

    },

    {
        name: 'Cavity Filling',
        description: "The process of cavity filling, or tooth filling, prevents the cavity from becoming worse and helps to protect your teeth from further decay. Cavities themselves are holes in your teeth caused by bacteria.",
        img: cavity

    },

    {
        name: 'Teeth Whitening',
        description: "No product on the market can whiten in a few minutes or a day. Chemically, it is impossible for any whitening agent to safely penetrate deep enough into the teeth at that speed. ",
        img: whitening

    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <Typography sx={{fontWeight: 500, m: 2, color: 'success.main'}} variant="h6" component="div">
             OUR SERVICES
            </Typography>
            <Typography sx={{fontWeight: 600, m: 5}} variant="h4" component="div">
             Services We Provide
            </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service =><Service
                        key={service.name}
                        service={service}
                    ></Service>)
                }
                </Grid>
            </Container>
      </Box>
    );
};

export default Services;