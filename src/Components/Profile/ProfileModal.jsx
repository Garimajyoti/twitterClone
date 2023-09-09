import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { IconButton } from '@mui/material';
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
  })

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

            </div>


          </form>
        </Box>
      </Modal>
    </div>
  );
}