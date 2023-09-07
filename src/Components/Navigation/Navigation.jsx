import React from 'react'
import { navigationMenu } from './NavigationMenu';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const Navigation = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();
    const handleLogout=()=>{
        console.log("logout")
        handleClose()
    }
    return (
        <div className='h-screen sticky top-0'>
            <div>
                <div className='py-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                        <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                    </svg>
                </div>

                <div className='space-y-6'>
                    {navigationMenu.map((item) => <div className='cursor-pointer flex space-x-3 items-center'
                        onClick={() => item.title == "Profile" ? navigate('/profile/${5}') : navigate(item.path)}>
                        {item.icon}
                        <p className='text-x1'>{item.title}</p>
                    </div>)}
                </div>

                <div className='py-10'>
                    <Button sx={{ width: "100%", borderRadius: "29px", py: "12px", bgcolor: '#1e88e5' }} variant='contained'>
                        Tweet
                    </Button>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <Avatar alt="username" src="https://thumbs.dreamstime.com/b/avatar-icon-vector-male-user-person-profile-symbol-flat-color-glyph-pictogram-illustration-117610386.jpg" />
                    <div>
                        <span>Garima Jyoti </span>
                        <span className='opacity-70'> @garimajyoti </span>
                    </div>

                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MoreHorizIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>

            </div>


        </div>

    )
}

export default Navigation