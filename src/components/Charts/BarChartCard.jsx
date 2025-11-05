'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'SUV', count: 120 },
    { name: 'Sedan', count: 200 },
    { name: 'Truck', count: 80 },
    { name: 'Coupe', count: 60 },
    { name: 'Sedan', count: 200 },
    { name: 'Coupe', count: 60 },
];

export default function BarChartCard() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <Card><CardHeader title="Inventory by Type" /><CardContent style={{ height: 260 }} /></Card>;

    return (
        <Card sx={{ paddingX: 2 }} >
            <CardHeader title="Inventory by Type" subheader="Total vehicles by category" />
            <CardContent style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#9c27b0" radius={[6, 6, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
