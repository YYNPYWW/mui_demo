import { Box } from '@mui/material';
import React from 'react'

const RightBar = () => {
    return (
        <Box
            flex={1}
            sx={{
                p: 2,
                display: { xs: 'none', sm: 'block' }
            }}
        >
            <Box
            sx={{
                position: 'fixed'
            }}
            >
                hhh
            </Box>
        </Box>
    )
}

export default RightBar;