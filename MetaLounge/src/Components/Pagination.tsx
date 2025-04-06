import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
    return (
        <Stack spacing={2} alignItems="center" mt={4}>
            <Pagination count={10} />
        </Stack>
    );
}