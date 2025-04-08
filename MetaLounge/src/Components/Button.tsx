import Button from '@mui/material/Button';

interface BasicButtonProps {
    label: string;
}

export default function BasicButtons({ label }: BasicButtonProps) {
    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor: '#333',
                height: 54,
                '&:hover': {
                    backgroundColor: '#555',
                },
            }}
        >
            {label}
        </Button>
    );
}
