'use client';

import { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    TextField,
    Button,
    Stack,
    Typography,
    Alert,
    InputAdornment,
    IconButton,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { grey } from '@mui/material/colors';

const DEMO_EMAIL = 'sinasa2323@gmail.com';
const DEMO_PASS = 'admin';

export default function LoginPage() {
    const router = useRouter();
    const login = useAuthStore((s) => s.login);

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');


    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPass, setCopiedPass] = useState(false);

    const copyToClipboard = async (text, key) => {
        try {
            await navigator.clipboard.writeText(text);
            if (key === 'email') {
                setCopiedEmail(true);
                setTimeout(() => setCopiedEmail(false), 1200);
            } else {
                setCopiedPass(true);
                setTimeout(() => setCopiedPass(false), 1200);
            }
        } catch (e) {
            console.warn('Clipboard copy failed', e);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (email === DEMO_EMAIL && pass === DEMO_PASS) {
            login();
            setError('');
            router.replace('/');
        } else {
            setError('Invalid credentials. Please use the demo credentials below.');
        }
    };

    const autoFillHandler = () => {
        setEmail(DEMO_EMAIL);
        setPass(DEMO_PASS);

    }

    return (
        <Box className="min-h-screen flex items-center justify-center px-3">
            <Card sx={{ width: 420, maxWidth: '100%' }}>
                <CardHeader
                    title="Admin Login"
                    subheader="Please sign in to access the dashboard"
                />
                <CardContent>
                    <Stack spacing={2} component="form" onSubmit={onSubmit} >
                        <Alert severity="info">
                            <Stack spacing={1}>

                                <div className="flex items-center w-full justify-between">
                                    <Typography variant="body2" sx={{ marginRight: 5 }}>
                                        Email: <strong>{DEMO_EMAIL}</strong>
                                    </Typography>
                                    <div className="flex items-center gap-2">
                                        {copiedEmail && (
                                            <Typography variant="caption" color="text.secondary">
                                                copied!
                                            </Typography>
                                        )}
                                        <IconButton
                                            size="small"
                                            aria-label="copy email"
                                            onClick={() => copyToClipboard(DEMO_EMAIL, 'email')}
                                        >
                                            <ContentCopyIcon fontSize="small" />
                                        </IconButton>
                                    </div>
                                </div>


                                <div className="flex items-center justify-between">
                                    <Typography variant="body2">
                                        Password: <strong>{DEMO_PASS}</strong>
                                    </Typography>
                                    <div className="flex items-center gap-2">
                                        {copiedPass && (
                                            <Typography variant="caption" color="text.secondary">
                                                copied!
                                            </Typography>
                                        )}
                                        <IconButton
                                            size="small"
                                            aria-label="copy password"
                                            onClick={() => copyToClipboard(DEMO_PASS, 'pass')}
                                        >
                                            <ContentCopyIcon fontSize="small" />
                                        </IconButton>
                                    </div>
                                </div>
                            </Stack>
                        </Alert>

                        {error && <Alert severity="error">{error}</Alert>}

                        <TextField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={DEMO_EMAIL}
                            required
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <TextField
                            label="Password"
                            type="password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            placeholder={DEMO_PASS}
                            required
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Button onClick={autoFillHandler} type="button" variant="contained" sx={{ backgroundColor: grey[900] }} size="large">
                            AutoFill
                        </Button>
                        <Button type="submit" variant="contained" size="large">
                            Login
                        </Button>

                        <Typography variant="caption" color="text.secondary" className="text-center">
                            Desined By Sina Sayah 😉
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}
