import { Celebration, Mail, Notifications } from '@mui/icons-material';
import { AppBar, InputBase, styled, Toolbar, Typography, Box, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    borderRadius: theme.shape.borderRadius,
    padding: '0 10px',
    width: '40%'
}))

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}))

const AvatarBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}))

const NavBar = () => {
    const [open, setOpen] = useState(false)

    return (
        <AppBar position='sticky' >
            <StyledToolbar
                sx={{

                }}
            >
                <Typography
                    variant='h6'
                    sx={{
                        display: { xs: 'none', sm: 'block' }
                    }}
                >
                    Wiho
                </Typography>
                <Celebration
                    sx={{
                        display: { xs: 'block', sm: 'none' }
                    }}
                />
                <Search>
                    <InputBase
                        placeholder='Search...'
                    />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{
                            width: 30,
                            height: 30,
                        }}
                        onClick={ e => setOpen(true) }
                    >
                        W
                    </Avatar>
                </Icons>
                <AvatarBox
                    onClick={ e => setOpen(true) }
                >
                    <Avatar
                        sx={{
                            width: 30,
                            height: 30,
                        }}
                    >
                        W
                    </Avatar>
                    <Typography>
                        WW
                    </Typography>
                </AvatarBox>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={ e => setOpen(false) }
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </StyledToolbar>
        </AppBar>
    )
}

export default NavBar;