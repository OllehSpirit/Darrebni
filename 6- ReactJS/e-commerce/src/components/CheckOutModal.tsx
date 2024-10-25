import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { resetCard } from '../lib/slices/cartSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function CheckOutModal() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [warning, setWarning] = React.useState('');
  const [data, setData] = React.useState({
    fullName: '',
    phone: '',
    address: ''
  });
  const dispatch = useDispatch()

  const handleOrder = () => {
    if (data.fullName === '') {
      setWarning('Please enter your full name')
    }
    else if (data.phone === '') {
      setWarning('Please enter your phone number')
    }
    else if (data.address === '') {
      setWarning('Please enter your address')
    }
    else{
      setWarning('')
      dispatch(resetCard())
      handleClose()
    }
  }

  return (

    <div>
      <div className='flex justify-center items-center my-5'>
        <Button onClick={handleOpen} variant='contained'>Continue</Button>
      </div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              To complete your order please complete the form:
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }} className='flex flex-col justify-center items-center gap-5'>

              <TextField id="outlined-basic" label="Full Name" variant="outlined" value={data.fullName} onChange={(e) => setData(prev => ({ ...prev, fullName: e.target.value }))} />
              <TextField id="outlined-basic" label="Phone Number" variant="outlined" value={data.phone} onChange={(e) => setData(prev => ({ ...prev, phone: e.target.value }))} />
              <TextField id="outlined-basic" label="Address" variant="outlined" value={data.address} onChange={(e) => setData(prev => ({ ...prev, address: e.target.value }))} />

              <div className='text-center text-red-700' >{warning}</div>

              <div className='flex justify-center'>
                <Button variant='contained' onClick={handleOrder}>Order Now</Button>
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
