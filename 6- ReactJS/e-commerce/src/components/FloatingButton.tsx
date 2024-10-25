import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export default function FloatingButton() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }} className='fixed bottom-5 right-5'>
            <Link to={'/add-product'}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Link>
        </Box>
    );
}
