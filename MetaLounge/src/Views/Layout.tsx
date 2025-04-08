import { Outlet } from 'react-router-dom';
import { CssBaseline } from "@mui/material";
import ResponsiveAppBar from "../Components/Navbar.tsx";
import Box from "@mui/material/Box";

const Layout = () => {
    return (
        <div>
            <CssBaseline />
            <ResponsiveAppBar />
            <main>
                <Box sx={{ pb: 10 }}>
                    <Outlet />
                </Box>
            </main>
        </div>
    );
};

export default Layout;