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

export default function RegistrationForm() {
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
    const [formSubmitted, setFormSubmitted] = useState(false);

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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newErrors = {
            username: !formData.username,
            email: !formData.email || !validateEmail(formData.email),
            password: !formData.password || formData.password.length < 8,
            confirmPassword: !formData.confirmPassword,
            passwordMatch: formData.password !== formData.confirmPassword
        };

        setErrors(newErrors);

        if (!Object.values(newErrors).some(error => error)) {
            console.log('Registration data:', formData);
            setFormSubmitted(true);

            setTimeout(() => {
                setFormSubmitted(false);
                setFormData({
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
            }, 3000);
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Регистрация
                </Typography>

                {formSubmitted && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                        Успешна регистрация! Моля, проверете имейла си за потвърждение.
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
                        helperText={errors.password ? "Паролата трябва да е поне 8 символа" : ""}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
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
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle confirm password visibility"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        edge="end"
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

                        sx={{ mt: 3, mb: 2, py: 1.5,backgroundColor: '#333',
                            height: 54,
                            '&:hover': {
                                backgroundColor: '#555',
                            }, }}
                    >
                        Регистрация
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