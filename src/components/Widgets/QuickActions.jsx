'use client';

import { Card, CardHeader, CardContent, Grid, Button } from '@mui/material';

export default function QuickActions() {
    const actions = [
        { label: 'Add Car' },
        { label: 'Create Offer' },
        { label: 'Schedule Test Drive' },
        { label: 'Export Report' },
    ];
    return (
        <Card sx={{ '&:hover': { boxShadow: 6 }, transition: 'box-shadow 0.15s ease' }}>
            <CardHeader title="Quick Actions" />
            <CardContent>
                <Grid container spacing={1}>
                    {actions.map((a) => (
                        <Grid key={a.label} item xs={6} md={3}>
                            <Button variant="outlined" fullWidth>{a.label}</Button>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
}
