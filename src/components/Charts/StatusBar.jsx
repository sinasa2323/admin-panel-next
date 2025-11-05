'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Available', count: 210 },
    { name: 'Reserved', count: 40 },
    { name: 'Sold', count: 74 },
];

export default function StatusBar() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <Card><CardHeader title="By Status" /><CardContent style={{ height: 220 }} /></Card>;

    return (
        <Card>
            <CardHeader title="Inventory by Status" />
            <CardContent style={{ height: 220 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#1976d2" radius={[6, 6, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
