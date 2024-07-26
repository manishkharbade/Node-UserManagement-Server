import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react';
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const methods = useForm({
        defaultValues: {
            email: "",
            password: ''
        },
    });
    const { handleSubmit } = methods;

    const handleRedirectRegister = () => {
        navigate('/register');
    }
    const handleSignIn = (data) => {
        console.log("data:", data);
    }
    return (
        <Container
            maxWidth="sm"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                padding: "1rem",
            }}
        >
            <Card sx={{
                width: "100%",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Typography variant='h6' component="h1">
                    Sign In
                </Typography>

                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(handleSignIn)} style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: "2rem",
                        marginTop: "1.5rem"
                    }}>
                        <TextField
                            name='email'
                            label="Email"
                            type="email"
                            size="small"
                            fullWidth
                        />
                        <TextField
                            name='password'
                            label="Password"
                            type="password"
                            size="small"
                            fullWidth
                        />
                        <Button variant='contained' size='medium' sx={{ width: "100%" }} onClick={handleSignIn}>Sign In</Button>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end", gap: "0.5rem" }}>
                            <Typography variant="body1" color="initial">Don't have an acocunt?</Typography>
                            <Link onClick={handleRedirectRegister} sx={{ cursor: 'pointer' }}>Sign Up</Link>
                        </Box>
                    </form>
                </FormProvider>

            </Card>
        </Container>
    );
};

export default Login;
