import React, { useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Tab } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TweetCard from '../HomeSection/TweetCard';

const Profile = () => {
    const [tabValue, setTabValue] = useState("1")
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    const handleOpenProfileModel = () => {
        console.log("open profile model")
    }

    const handleFollowUser = () => {
        console.log("follow user")
    }

    const handleTabChange=(event, newvalue)=>{
        setTabValue(newvalue)

        if(newvalue===4){
            console.log("likes twit")
        }
        else if(newvalue===1){
            console.log("users twits")
        }
    }

    return (
        <div>
            <section className={' bg-white z-50 flex items-center sticky top-0 bg-opacity-95'}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Garima Jyoti</h1>

            </section>

            <section>
                <img className='w-[100%] h-[15rem] object-cover' src="https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg" alt="" />
            </section>

            <section className='pl-6'>
                <div className='flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar
                        className='transform -translate-y-24'
                        alt="garima jyoti"
                        src="https://thumbs.dreamstime.com/b/avatar-icon-vector-male-user-person-profile-symbol-flat-color-glyph-pictogram-illustration-117610386.jpg"
                        sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
                    />

                    {true ? <Button onClick={handleOpenProfileModel}
                        variant='contained'
                        sx={{ borderRadius: "20px" }}> Edit Profile
                    </Button> : <Button onClick={handleFollowUser}
                        variant='contained'
                        sx={{ borderRadius: "20px" }}> {true ? "Follow" : "Unfollow"}
                    </Button>}
                </div>

                <div>
                    <div className='flex items-center'>
                        <h1 className='font-bold text-lg'>Garima Jyoti</h1>
                        {true && (<img className='ml-1 w-8 h-8' src="https://media.istockphoto.com/id/1313547780/vector/profile-verification-check-marks-icons-vector-illustration.jpg?s=612x612&w=0&k=20&c=XDWxGC05gd-sTn_cBvlI2aG1onqOdiVdPb0IeFO-Q2M="
                            alt=""
                        />
                        )}
                    </div>
                    <h1 className='text-gray-500'> @garimajyoti</h1>
                </div>

                <div className='mt-2 space-y-3'>
                    <p> Hello, My name is garima Jyoti. I am pursuing my masters.</p>
                    <div className='py-1 flex space-x-5'>
                        <div className='flex items-center text-gray-500'>
                            <BusinessCenterIcon />
                            <p className='ml-2'>Education</p>
                        </div>

                        <div className='flex items-center text-gray-500'>
                            <LocationOnIcon />
                            <p className='ml-2'>India</p>
                        </div>

                        <div className='flex items-center text-gray-500'>
                            <CalendarMonthIcon />
                            <p className='ml-2'>Joined Jun 2022</p>
                        </div>
                    </div>

                    <div className='flex items-center space-x-5'>
                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>190</span>
                            <span className='text-gray-500'>Following</span>
                        </div>
                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>200</span>
                            <span className='text-gray-500'>Followers</span>
                        </div>
                    </div>

                </div>

            </section>

            <section className='py-5'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                                <Tab label="Tweets" value="1" />
                                <Tab label="Replies" value="2" />
                                <Tab label="Media" value="3" />
                                <Tab label="Likes" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {[1,1,1,1].map((item)=><TweetCard/>)}
                        </TabPanel>
                        <TabPanel value="2">Users replies</TabPanel>
                        <TabPanel value="3">All Media</TabPanel>
                        <TabPanel value="4">Likes</TabPanel>
                    </TabContext>
                </Box>
            </section>


        </div>
    )
}

export default Profile