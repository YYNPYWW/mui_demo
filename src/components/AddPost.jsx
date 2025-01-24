import { AddCircle } from "@mui/icons-material";
import { Box, IconButton, Modal, styled, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

const StyledModel = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});



const AddPost = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Tooltip title="Add">
                <IconButton
                    sx={{
                        position: 'fixed',
                        bottom: '10px',
                        left: { xs: 'calc(50% - 25px)', sm: '10px' },
                    }}
                    onClick={handleClick}
                >
                    <AddCircle
                        sx={{
                            color: 'primary.main',
                            width: '50px',
                            height: '50px'
                        }}
                    />
                </IconButton>
            </Tooltip>
            <StyledModel
                open={open}
                onClose={handleClose}
            >
                <Box
                    width={400}
                    height={400}
                    bgcolor='background.default'
                    color='text.primary'
                    borderRadius={3}
                    p={2}
                >
                    <Typography
                        variant="h6"
                        textAlign='center'
                        fontWeight={500}
                        color='gray'
                    >
                        Add Post
                    </Typography>
                </Box>
            </StyledModel>
        </div>
    )
}

export default AddPost; 