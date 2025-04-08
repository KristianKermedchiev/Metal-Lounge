import { Outlet } from 'react-router-dom';
import { CssBaseline } from "@mui/material";
import ResponsiveAppBar from "../Components/Navbar.tsx";
import SearchButton from "../Components/Search.tsx";
import BasicButtons from "../Components/Button.tsx";
import BasicPagination from "../Components/Pagination.tsx";
import Box from "@mui/material/Box";

const Layout = () => {
    return (
        <div>
            <CssBaseline />
            <ResponsiveAppBar />
            <main>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, my: 4 }}>
                    <SearchButton />
                    <BasicButtons label={'Добави аблум'} />
                </Box>
                <Box sx={{ pb: 10 }}>
                    <Outlet />
                </Box>
            </main>
            <BasicPagination />
        </div>
    );
};

export default Layout;