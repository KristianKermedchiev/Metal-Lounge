import BulgarianBandsTable from "../Components/BulgarianBandsTable.tsx";
import SearchButton from "../Components/Search.tsx";
import BasicButtons from "../Components/Button.tsx";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import BasicPagination from "../Components/Pagination.tsx";


function BulgarianBands() {

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, my: 4 }}>
                <SearchButton />
                <Link to="/bulgarian-bands/add-album">
                    <BasicButtons label={'Добави албум'} />
                </Link>
            </Box>
            <BulgarianBandsTable />
            <BasicPagination />
        </>
    );
}

export default BulgarianBands;
