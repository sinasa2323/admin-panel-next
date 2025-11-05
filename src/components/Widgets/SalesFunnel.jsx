'use client';

import { Card, CardHeader, CardContent, LinearProgress, Stack, Typography } from '@mui/material';

export default function SalesFunnel() {
    const stages = [
        { label: 'Leads', value: 80 },
        { label: 'Test Drives', value: 55 },
        { label: 'Negotiations', value: 35 },
        { label: 'Deals Closed', value: 22 },
    ];
    return (
        <Card sx={{ height: '100%', '&:hover': { boxShadow: 6 }, transition: 'box-shadow 0.15s ease' }}>
            <CardHeader title="Sales Funnel" subheader="Lead to deal conversion" />
            <CardContent>
                <Stack spacing={2}>
                    {stages.map((s) => (
                        <Stack key={s.label} spacing={0.5}>
                            <Typography variant="body2" className="font-medium">{s.label}</Typography>
                            <LinearProgress
                                variant="determinate"
                                value={s.value}
                                sx={{ height: 8, borderRadius: 4 }}
                            />
                        </Stack>
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
}
