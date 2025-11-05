'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter, Legend } from 'recharts';

const dataA = [
    { x: 8, y: 24 }, { x: 12, y: 30 }, { x: 18, y: 40 }, { x: 25, y: 55 }, { x: 35, y: 75 },
];
const dataB = [
    { x: 10, y: 20 }, { x: 15, y: 28 }, { x: 20, y: 45 }, { x: 28, y: 60 }, { x: 40, y: 82 },
];

export default function ScatterPriceVsMileage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <Card><CardHeader title="Price vs Mileage" /><CardContent style={{ height: 300 }} /></Card>;

    return (
        <Card>
            <CardHeader title="Price vs Mileage" subheader="Comparative scatter" />
            <CardContent style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart>
                        <CartesianGrid />
                        <XAxis type="number" dataKey="x" name="Mileage (k km)" />
                        <YAxis type="number" dataKey="y" name="Price (k $)" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Legend />
                        <Scatter name="Brand A" data={dataA} fill="#1976d2" />
                        <Scatter name="Brand B" data={dataB} fill="#9c27b0" />
                    </ScatterChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
