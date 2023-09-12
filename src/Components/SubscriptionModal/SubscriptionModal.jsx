import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    outline: 'none',
    boxShadow: 24,
    borderRadius: 4,
    p: 4,
};

export default function SubscriptionModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [plan, setPlan] = React.useState("Annually")

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
                    <div className='flex items-center space-x-3'>
                        <IconButton onClick={handleClose} aria-label="delete">
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className='flex justify-center py-10'>
                        <div className='w-[80%] space-y-10'>
                            <div className='p-5 rounded-md flex items-center justify-between bg-slate-400 shadow-lg'>
                                <h1 className='text-xl pr-5'>Blue subscribers with a verified phone number will get a blue checkmark once approved</h1>
                                <img className='w-24 h-24' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png" alt="" />
                            </div>

                            <div className='flex justify-between border rounded-full px-5 py-3 border border-gray-500'>
                                <div>
                                    <span onClick={() => setPlan("Annually")} className={'${plan==="Annually"?"text-black":"text-gray-400"} cursor-pointer'}>Annually</span>
                                    <span className='text-green-500 text-sm ml-5'>SAVE 12%</span>
                                </div>

                                <p onClick={() => setPlan("monthly")} className={'${plan==="monthly"?"text-black":"text-gray-400"} cursor-pointer'}>
                                    Monthly
                                </p>
                            </div>

                            <div className='space-y-3'>
                                <div className='flex items-center space-x-5'>
                                    <FiberManualRecordIcon sx={{width:"7px", height:"7px"}}/>
                                    <p className='text-xs'>
                                        Priortized rankings in conversation and search
                                    </p>
                                </div>
                                
                            </div>

                        </div>

                    </div>
                </Box>
            </Modal>
        </div>
    );
}
