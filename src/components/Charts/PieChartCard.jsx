'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';


const data = [
    { name: 'Toyota', value: 400 },
    { name: 'BMW', value: 240 },
    { name: 'Mercedes', value: 180 },
    { name: 'Ford', value: 160 },
];
const COLORS = ['#1976d2', '#9c27b0', '#ff9800', '#4caf50'];

export default function PieChartCard() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <Card><CardHeader title="Brand Share" /><CardContent style={{ height: 260 }} /></Card>;

    return (
        <Card sx={{ paddingX: 2 }}>
            <CardHeader title="Brand Share" subheader="Inventory distribution by brand" />
            <CardContent style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} fill="#8884d8" label>
                            {data.map((entry, index) => (
                                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
