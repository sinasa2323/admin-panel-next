'use client';

import { Card, CardContent, Grid, TextField, MenuItem, Slider, Typography, Button, Stack } from '@mui/material';
import { useState } from 'react';

const brands = ['All', 'BMW', 'Toyota', 'Ford', 'Mercedes', 'Audi', 'Porsche'];
const types = ['All', 'SUV', 'Sedan', 'Coupe', 'Truck', 'Hatchback'];

export default function CarsFilters({ onChange }) {
    const [brand, setBrand] = useState('All');
    const [type, setType] = useState('All');
    const [year, setYear] = useState([2018, 2024]);
    const [price, setPrice] = useState([15000, 120000]);
    const [query, setQuery] = useState('');

    const apply = () => {
        onChange({ brand, type, year, price, query });
    };
    const reset = () => {
        setBrand('All'); setType('All'); setYear([2018, 2024]); setPrice([15000, 120000]); setQuery('');
        onChange({ brand: 'All', type: 'All', year: [2018, 2024], price: [15000, 120000], query: '' });
    };

    return (
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <TextField select fullWidth label="Brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
                            {brands.map((b) => <MenuItem key={b} value={b}>{b}</MenuItem>)}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField select fullWidth label="Type" value={type} onChange={(e) => setType(e.target.value)}>
                            {types.map((t) => <MenuItem key={t} value={t}>{t}</MenuItem>)}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="caption" color="text.secondary">Year range</Typography>
                        <Slider value={year} onChange={(_, v) => setYear(v)} valueLabelDisplay="auto" min={2015} max={2025} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="caption" color="text.secondary">Price range ($)</Typography>
                        <Slider value={price} onChange={(_, v) => setPrice(v)} valueLabelDisplay="auto" min={5000} max={200000} step={1000} />
                    </Grid>

                    <Grid item xs={12} md={9}>
                        <TextField fullWidth placeholder="Search by model, trim..." value={query} onChange={(e) => setQuery(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Stack direction="row" spacing={1}>
                            <Button variant="contained" onClick={apply} fullWidth>Apply</Button>
                            <Button variant="outlined" onClick={reset} fullWidth>Reset</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
