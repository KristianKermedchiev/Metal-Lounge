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
    Alert
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        username: false,
        email: false,
        password: false,
        confirmPassword: false,
        passwordMatch: false
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [authError, setAuthError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setAuthError(null);

        // Validation
        const newErrors = {
            username: !formData.username,
            email: !formData.email || !validateEmail(formData.email),
            password: !formData.password || formData.password.length < 6, // Firebase requires at least 6 chars
            confirmPassword: !formData.confirmPassword,
            passwordMatch: formData.password !== formData.confirmPassword
        };

        setErrors(newErrors);

        // If any validation errors, stop here
        if (Object.values(newErrors).some(error => error)) {
            return;
        }

        try {
            setIsLoading(true);
            const auth = getAuth();

            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            // Update profile with display name (username)
            await updateProfile(userCredential.user, {
                displayName: formData.username
            });

            console.log('User registered successfully:', userCredential.user);

            // Navigate to home/dashboard
            navigate('/bulgarian-bands');

        } catch (error: any) {
            // Handle specific Firebase Auth errors
            const errorCode = error.code;
            const errorMessage = error.message;

            console.error('Registration error:', errorCode, errorMessage);

            switch (errorCode) {
                case 'auth/email-already-in-use':
                    setAuthError('Този имейл вече е регистриран.');
                    break;
                case 'auth/invalid-email':
                    setAuthError('Невалиден имейл адрес.');
                    break;
                case 'auth/weak-password':
                    setAuthError('Паролата трябва да е поне 6 символа.');
                    break;
                default:
                    setAuthError('Грешка при регистрация. Моля, опитайте отново.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Регистрация
                </Typography>

                {authError && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {authError}
                    </Alert>
                )}

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
                        value={formData.username}
                        onChange={handleChange}
                        error={errors.username}
                        helperText={errors.username ? "Моля въведете потребителско име" : ""}
                        disabled={isLoading}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Имейл адрес"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        helperText={errors.email ? "Моля въведете валиден имейл адрес" : ""}
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
                        autoComplete="new-password"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                        helperText={errors.password ? "Паролата трябва да е поне 6 символа" : ""}
                        disabled={isLoading}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                        disabled={isLoading}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Потвърди парола"
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        autoComplete="new-password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        error={errors.confirmPassword || errors.passwordMatch}
                        helperText={
                            errors.confirmPassword
                                ? "Моля потвърдете паролата"
                                : errors.passwordMatch
                                    ? "Паролите не съвпадат"
                                    : ""
                        }
                        disabled={isLoading}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle confirm password visibility"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        edge="end"
                                        disabled={isLoading}
                                    >
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
                        {isLoading ? 'Регистриране...' : 'Регистрация'}
                    </Button>

                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                        <Link href="/login" variant="body2">
                            Вече имаш акаунт? Вход
                        </Link>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}