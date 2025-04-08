import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

export default function BasicPagination() {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 20,
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                padding: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                zIndex: 1000,
            }}
        >
            <Pagination count={10} size="large" />
        </Box>
    );
}