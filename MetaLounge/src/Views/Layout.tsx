import { Outlet } from 'react-router-dom'; // Used to render child routes (the views)
import {CssBaseline} from "@mui/material";
import ResponsiveAppBar from "../Components/Navbar.tsx"; // Assuming this is your Navbar

const Layout = () => {
    return (
        <div>
            <CssBaseline />
            <ResponsiveAppBar/>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
