import { Box } from '@mui/material';
import React from 'react'
import Post from './Post';
import paellaImg from '../assets/images/paella.jpg';
import reptileImg from '../assets/images/reptile.jpg';
// const paellaImg = '/images/cards/paella.jpg';

const Footer = () => {
    return (
        <Box
            flex={4}
            sx={{
                p: 2
            }}
        >
            <Post
                avatar="R"
                title="Reptile"
                subheader="September 14, 2061"
                image={reptileImg}
                description="Reptiles are a diverse group of cold-blooded vertebrates that include snakes, lizards, turtles, and crocodilians. They are characterized by their scaled skin, four-chambered hearts, and the ability to lay eggs or give birth to live young. Reptiles are found in various habitats, from deserts to rainforests, and play crucial roles in ecosystems as predators, prey, and decomposers."
            />
            <Post
                avatar="S"
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
                image={paellaImg}
                description="This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like."
            />
        </Box>
    )
}

export default Footer;