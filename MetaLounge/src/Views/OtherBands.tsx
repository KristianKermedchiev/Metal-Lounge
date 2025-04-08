import OtherBandsTable from "../Components/OtherBandsTable.tsx";
import SearchButton from "../Components/Search.tsx";
import BasicButtons from "../Components/Button.tsx";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";

function OtherBands() {

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, my: 4 }}>
                <SearchButton />
                <Link to="/other-bands/add-album">
                <BasicButtons label={'Добави албум'} />
                </Link>
            </Box>
            <OtherBandsTable />
        </>
    );
}

export default OtherBands;
