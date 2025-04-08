import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Container,
    Link,
    InputAdornment,
    IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function LoginForm() {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let hasError = false;

        if (!email) {
            setUsernameError(true);
            hasError = true;
        } else {
            setUsernameError(false);
        }

        if (!password) {
            setPasswordError(true);
            hasError = true;
        } else {
            setPasswordError(false);
        }

        if (!hasError) {
            // Handle login logic here
            console.log('Login attempt with:', { email, password });
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Вход
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Потребителско име"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={email}
                        onChange={(e) => setUsername(e.target.value)}
                        error={emailError}
                        helperText={emailError ? "Моля въведете потребителско име" : ""}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Парола"
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={passwordError}
                        helperText={passwordError ? "Моля въведете парола" : ""}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"

                        sx={{ mt: 3, mb: 2, py: 1.5,backgroundColor: '#333',
                            height: 54,
                            '&:hover': {
                                backgroundColor: '#555',
                            }, }}
                    >
                        Вход
                    </Button>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                        <Link href="#" variant="body2">
                            Забравена парола?
                        </Link>
                        <Link href="/register" variant="body2">
                            Нямаш регистрация? Създай акаунт
                        </Link>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}