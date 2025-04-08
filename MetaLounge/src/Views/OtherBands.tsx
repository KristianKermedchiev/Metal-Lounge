import OtherBandsTable from "../Components/OtherBandsTable.tsx";
import BasicButtons from "../Components/Button.tsx";
import BasicPagination from "../Components/Pagination.tsx";
import SearchButton from "../Components/Search.tsx";
import Box from '@mui/material/Box';


function OtherBands() {

    return (
        <>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, my: 4 }}>
                    <SearchButton />
                    <BasicButtons />
                </Box>
            <OtherBandsTable />
            <BasicPagination />
        </>
    );
}

export default OtherBands;
