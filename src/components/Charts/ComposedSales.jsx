'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Bar, Line } from 'recharts';

const data = [
    { name: 'Jan', orders: 590, sales: 800, leads: 1400 },
    { name: 'Feb', orders: 868, sales: 967, leads: 1506 },
    { name: 'Mar', orders: 1397, sales: 1098, leads: 989 },
    { name: 'Apr', orders: 1480, sales: 1200, leads: 1228 },
    { name: 'May', orders: 1520, sales: 1108, leads: 1100 },
    { name: 'Jun', orders: 1400, sales: 680, leads: 1700 },
];

export default function ComposedSales() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <Card><CardHeader title="Composed Sales" /><CardContent style={{ height: 300 }} /></Card>;

    return (
        <Card>
            <CardHeader title="Composed Sales" subheader="Orders, Sales and Leads" />
            <CardContent style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={data}>
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="leads" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="orders" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="sales" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
