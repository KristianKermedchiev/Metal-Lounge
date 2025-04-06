import Button from '@mui/material/Button';

export default function BasicButtons() {
    return (
        <Button variant="contained" sx={{
            backgroundColor: '#333',
            height: 54,
            '&:hover': {
                backgroundColor: '#555',
            },
        }}>
            Добави Албум
        </Button>
    );
}
