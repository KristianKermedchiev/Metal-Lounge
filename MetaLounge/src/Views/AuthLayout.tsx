import { Outlet } from 'react-router-dom';
import { CssBaseline, Container, Box } from "@mui/material";

const AuthLayout = () => {
    return (
        <div>
            <CssBaseline />
        <Container>
            <Box sx={{ mt: 8 }}>
    <Outlet />
    </Box>
    </Container>
    </div>
);
};

export default AuthLayout;