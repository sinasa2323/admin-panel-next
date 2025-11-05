'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Week 1', leads: 30 },
    { name: 'Week 2', leads: 45 },
    { name: 'Week 3', leads: 40 },
    { name: 'Week 4', leads: 55 },
];

export default function LineChartCard() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <Card><CardHeader title="Weekly Leads" /><CardContent style={{ height: 260 }} /></Card>;

    return (
        <Card sx={{ paddingX: 2 }}>
            <CardHeader title="Weekly Leads" subheader="Lead generation trend" />
            <CardContent style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line dataKey="leads" stroke="#1976d2" strokeWidth={2} dot={{ r: 3 }} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
