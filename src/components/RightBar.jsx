import { Box } from '@mui/material';
import React from 'react'

const RightBar = () => {
    return (
        <Box
            flex={1}
            sx={{
                bgcolor: '#ed6c02',
                p: 2,
                display: { xs: 'none', sm: 'block' }
            }}
        >
            RightBar
        </Box>
    )
}

export default RightBar;