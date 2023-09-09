import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
  outline:'none',
  borderRadius:4,
  
};

export default function ProfileModal() {
  const [open, setOpen] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit=()=>{
    console.log("handle submit");
  }

  const formik=useFormik({
    initialValues:{
        fullName:"",
        website:"",
        location:"",
        bio:"",
        backgroundImage:"",
        image:""
    },
    onSubmit:handleSubmit
  });

  const handleImageChange=(event)=>{
    setUploading(true);
    const {name} = event.target  //fetch image from events
    const file = event.taget.files[0] //fetch the file which is at 0th index
    formik.setFieldValue(name, file);
    setUploading(false);
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <IconButton onClick={handleClose} aria-label="delete">
                        <CloseIcon/>
                    </IconButton>
                    <p className=''>Edit Profile</p>
                </div>
                <Button type="submit">Save</Button>
            </div>

            <div className='overflow-y-scroll overflow-x-hidden h-[80vh]'>
                <div>
                    <div className='w-full'>
                        <div className='relative'>
                            <img
                            className='w-full h-[12rem] object-cover object-center'
                            src='https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png' alt=''                            
                            />

                            <input
                            type="file"
                            className='absolute top-0 left-0 w-full h-full opacity-0
                            cursor-pointer'
                            onChange={handleImageChange}
                            name="backgroundImage"
                            />


                        </div>

                    </div>
                </div>
                <div className='space-y-3'>
                    <TextField
                    fullWidth
                    id="fullName"
                    name="fullName"
                    label="Full Name"
                    value={formik.values.fullName}
                    onChange={formik.handleChange} //handleChange is given my formik
                    error={formik.touched.name && Boolean(formik.errors.fullName)}
                    helperText={formik.touched.name && formik.errors.fullName}          
                    />

                </div>
            </div>


          </form>
        </Box>
      </Modal>
    </div>
  );
}