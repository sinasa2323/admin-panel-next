'use client';

import { Card, CardContent, Typography, Stack, Chip } from '@mui/material';

export default function KpiCard({ title, value, trend = '+0%', color = 'primary', icon }) {
    return (
        <Card
            sx={{
                transition: 'transform 0.15s ease',
                '&:hover': { transform: 'translateY(-2px)' },
            }}
        >
            <CardContent>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack spacing={0.5}>
                        <Typography variant="body2" color="text.secondary">{title}</Typography>
                        <Typography variant="h5">{value}</Typography>
                        <Chip size="small" label={trend} color={color} variant="outlined" />
                    </Stack>
                    {icon}
                </Stack>
            </CardContent>
        </Card>
    );
}
