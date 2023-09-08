import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Profile = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    const handleOpenProfileModel = () => {
        console.log("open profile model")
    }

    const handleFollowUser = () => {
        console.log("follow user")
    }

    return (
        <div>
            <section className={'z-50 flex items-center sticky top-0 bg-opacity-95'}>
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
                            <BusinessCenterIcon/>
                            <p className='ml-2'>Education</p>
                        </div>

                        <div className='flex items-center text-gray-500'>
                            <LocationOnIcon/>
                            <p className='ml-2'>India</p>
                        </div>

                        <div className='flex items-center text-gray-500'>
                            <CalendarMonthIcon/>
                            <p className='ml-2'>Joined Jun 2022</p>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Profile