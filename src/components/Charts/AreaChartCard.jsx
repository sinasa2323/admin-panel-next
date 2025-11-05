'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', sales: 400 },
    { name: 'Feb', sales: 310 },
    { name: 'Mar', sales: 540 },
    { name: 'Apr', sales: 460 },
    { name: 'May', sales: 680 },
    { name: 'Jun', sales: 620 },
];

export default function AreaChartCard() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <Card><CardHeader title="Monthly Sales" /><CardContent style={{ height: 260 }} /></Card>;

    return (
        <Card sx={{ paddingX: 2 }}>
            <CardHeader title="Monthly Sales" subheader="Units sold per month" />
            <CardContent style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1976d2" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#1976d2" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="sales" stroke="#1976d2" fillOpacity={1} fill="url(#colorSales)" />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
