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
    IconButton,
    Alert,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [authError, setAuthError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setAuthError(null);

        let hasError = false;

        if (!email) {
            setEmailError(true);
            hasError = true;
        } else {
            setEmailError(false);
        }

        if (!password) {
            setPasswordError(true);
            hasError = true;
        } else {
            setPasswordError(false);
        }

        if (!hasError) {
            try {
                setIsLoading(true);
                const auth = getAuth();
                await signInWithEmailAndPassword(auth, email, password);

                navigate('/');
            } catch (error: any) {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.error('Login error:', errorCode, errorMessage);

                switch (errorCode) {
                    case 'auth/invalid-email':
                        setAuthError('Невалиден имейл адрес.');
                        break;
                    case 'auth/user-disabled':
                        setAuthError('Този акаунт е деактивиран.');
                        break;
                    case 'auth/user-not-found':
                        setAuthError('Няма потребител с този имейл.');
                        break;
                    case 'auth/wrong-password':
                        setAuthError('Грешна парола.');
                        break;
                    case 'auth/too-many-requests':
                        setAuthError('Твърде много опити за вход. Моля, опитайте по-късно.');
                        break;
                    default:
                        setAuthError('Грешка при вход. Моля, опитайте отново.');
                }
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleCloseError = () => {
        setAuthError(null);
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Вход
                </Typography>

                {authError && (
                    <Alert severity="error" sx={{ mb: 2 }} onClose={handleCloseError}>
                        {authError}
                    </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Имейл"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={emailError}
                        helperText={emailError ? "Моля въведете имейл" : ""}
                        disabled={isLoading}
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
                        disabled={isLoading}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                        disabled={isLoading}
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
                        disabled={isLoading}
                        sx={{
                            mt: 3,
                            mb: 2,
                            py: 1.5,
                            backgroundColor: '#333',
                            height: 54,
                            '&:hover': {
                                backgroundColor: '#555',
                            },
                        }}
                    >
                        {isLoading ? 'Вход...' : 'Вход'}
                    </Button>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                        <Link href="/forgot-password" variant="body2">
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