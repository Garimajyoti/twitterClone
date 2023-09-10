import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    outline: 'none',
    borderRadius: 4
};

export default function ReplyModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const [uploadingImage, setUploadingImage] = React.useState(false);
    const [selectImage, setSelectImage] = React.useState("");

    const handleSubmit = (values) => {
        console.log("handle submit", values)
    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: "",
            twitId: 4
        },
        onSubmit: handleSubmit
    })

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0]
        formik.setFieldValue("image", imgUrl);
        setSelectImage(imgUrl);
        setUploadingImage(false);
    }

    return (
        <div>

            <Modal
                open={true}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex space-x-5'>
                        <Avatar
                            onClick={() => navigate('/profile/${6}')}
                            className='cursor-pointer'
                            alt='username'
                            src="https://thumbs.dreamstime.com/b/avatar-icon-vector-male-user-person-profile-symbol-flat-color-glyph-pictogram-illustration-117610386.jpg"
                        />
                        <div className='w-full'>
                            <div className='flex justify-between items-center'>
                                <div className='flex cursor-pointer items-center space-x-2'>
                                    <span className='font-semibold'>Garima Jyoti</span>
                                    <span className='text-gray-600'>@garimajyoti   .2m</span>
                                    <img className='ml-2 w-8 h-8' src="https://media.istockphoto.com/id/1313547780/vector/profile-verification-check-marks-icons-vector-illustration.jpg?s=612x612&w=0&k=20&c=XDWxGC05gd-sTn_cBvlI2aG1onqOdiVdPb0IeFO-Q2M="
                                        alt="" />
                                </div>


                            </div>

                            <div className='mt-2'>
                                <div onClick={() => navigate('/twit/${3}')} className='cursor-pointer'>
                                    <p className='mb-2 p-0'> Twitter Clone Application</p>
                                </div>


                            </div>
                        </div>
                    </div>
                    
                </Box>
            </Modal>
        </div>
    );
}
