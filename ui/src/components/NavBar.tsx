import { AccountCircle, Draw } from '@mui/icons-material';
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CreateStandupModal from './CreateStandupModal';
import { useAuth } from './AuthContext';

function NavBar() {
    const navigate = useNavigate();

    const { signOut, token } = useAuth();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // PostModal
    const [openPostModal, setOpenPostModal] = React.useState(false);
    const handleOpenPostModal = () => setOpenPostModal(true);
    const handleClosePostModal = () => setOpenPostModal(false);

    // // CreateTeamModal
    // const [openCreateTeamModal, setOpenCreateTeamModal] = React.useState(false);
    // const handleOpenCreateTeamModal = () => setOpenCreateTeamModal(true);
    // const handleCloseCreateTeamModal = () => setOpenCreateTeamModal(false);

    // // Drawer
    // const [open, setOpen] = React.useState(false);
    // const toggleDrawer = (newOpen: boolean) => () => {
    //     setOpen(newOpen);
    // };

    // const DrawerList = (
    //     <Box
    //         sx={{ width: 250 }}
    //         role="presentation"
    //         onClick={toggleDrawer(false)}
    //     >
    //         <AppBar position="static">
    //             <Toolbar>
    //                 <Typography
    //                     variant="h6"
    //                     fontWeight="bold"
    //                     component="div"
    //                     sx={{
    //                         flexGrow: 1,
    //                         color: '#fff',
    //                         cursor: 'pointer',
    //                         marginLeft: '40px',
    //                     }}
    //                     onClick={() => navigate('/')}
    //                 >
    //                     Vevous
    //                 </Typography>
    //             </Toolbar>
    //         </AppBar>
    //         <List>
    //             <ListItem key="Home" disablePadding>
    //                 <ListItemButton onClick={() => navigate('/')}>
    //                     <ListItemText primary="Home" />
    //                 </ListItemButton>
    //             </ListItem>
    //             <ListItem key="Teams" disablePadding>
    //                 <ListItemButton onClick={() => navigate('/teams')}>
    //                     <ListItemText primary="Teams" />
    //                 </ListItemButton>
    //             </ListItem>
    //         </List>
    //     </Box>
    // );

    return (
        <>
            <CreateStandupModal
                open={openPostModal}
                handleClose={handleClosePostModal}
            />
            {/* <CreateTeamModal
                open={openCreateTeamModal}
                handleClose={handleCloseCreateTeamModal}
            /> */}
            <Box sx={{ width: '100%', height: '64px' }} />
            <AppBar position="fixed">
                {/* <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer> */}
                <Toolbar>
                    {/* <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                        edge="start"
                        sx={[
                            {
                                mr: 2,
                            },
                            open && { display: 'none' },
                        ]}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        component="div"
                        sx={{
                            color: '#fff',
                            cursor: 'pointer',
                        }}
                        onClick={() => navigate('/')}
                    >
                        Vevous
                    </Typography>
                    <div style={{ marginLeft: 'auto' }}>
                        {!token ? (
                            <Button
                                style={{ marginLeft: 'auto' }}
                                onClick={() => navigate('/signin')}
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Sign in
                            </Button>
                        ) : (
                            <>
                                {/* <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenCreateTeamModal}
                                    color="inherit"
                                    sx={{ '&:focus': { outline: 'none' } }}
                                >
                                    <Add />
                                </IconButton> */}
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenPostModal}
                                    color="inherit"
                                    sx={{ '&:focus': { outline: 'none' } }}
                                >
                                    <Draw />
                                </IconButton>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                    sx={{ '&:focus': { outline: 'none' } }}
                                >
                                    <AccountCircle />
                                </IconButton>

                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem
                                        onClick={() => {
                                            navigate('/profile');
                                            handleClose();
                                        }}
                                    >
                                        Profile
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            console.log('sign out');
                                            signOut();
                                            navigate('/');
                                        }}
                                    >
                                        Sign out
                                    </MenuItem>
                                </Menu>
                            </>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
            <Box sx={{ flexGrow: 1, padding: '12px' }}>
                <main>
                    <Grid container spacing={2}>
                        <Grid
                            size={{ xs: 12, md: 10 }}
                            sx={{ mt: 2 }}
                            offset={{ xs: 0, md: 1 }}
                        >
                            <Outlet />
                        </Grid>
                    </Grid>
                </main>
            </Box>
        </>
    );
}

export default NavBar;
