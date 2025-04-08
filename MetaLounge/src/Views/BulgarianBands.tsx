import BulgarianBandsTable from "../Components/BulgarianBandsTable.tsx";
import BasicButtons from "../Components/Button.tsx";
import BasicPagination from "../Components/Pagination.tsx";
import SearchButton from "../Components/Search.tsx";
import Box from '@mui/material/Box';


function BulgarianBands() {

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, my: 4 }}>
                <SearchButton />
                <BasicButtons />
            </Box>
            <BulgarianBandsTable />
            <BasicPagination />
        </>
    );
}

export default BulgarianBands;
