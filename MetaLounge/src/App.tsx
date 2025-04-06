import ResponsiveAppBar from "./Components/Navbar.tsx";
import { CssBaseline, Box } from '@mui/material';
import BasicTable from "./Components/Table.tsx";
import BasicButtons from "./Components/Button.tsx";
import BasicPagination from "./Components/Pagination.tsx";
import SearchButton from "./Components/Search.tsx";

function App() {

    return (
        <>
            <CssBaseline />
            <ResponsiveAppBar/>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, my: 4 }}>
                <SearchButton />
                <BasicButtons />
            </Box>
            <BasicTable />
            <BasicPagination />
        </>
    );
}

export default App;
