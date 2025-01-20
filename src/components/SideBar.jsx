import { Box } from '@mui/material';
import React from 'react'

const SideBar = () => {
    return (
        <Box
            flex={1}
            sx={{
                bgcolor: '#ef5350',
                p: 2,
                display: { xs: 'none', sm: 'block' }
            }}
        >
            SideBar
        </Box>
    )
}

export default SideBar;