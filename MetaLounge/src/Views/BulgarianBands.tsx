import BulgarianBandsTable from "../Components/BulgarianBandsTable.tsx";
import SearchButton from "../Components/Search.tsx";
import BasicButtons from "../Components/Button.tsx";
import Box from "@mui/material/Box";


function BulgarianBands() {

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, my: 4 }}>
                <SearchButton />
                <BasicButtons label={'Добави аблум'} />
            </Box>
            <BulgarianBandsTable />
        </>
    );
}

export default BulgarianBands;
