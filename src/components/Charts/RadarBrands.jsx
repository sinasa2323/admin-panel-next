'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, Tooltip } from 'recharts';

const data = [
    { brand: 'BMW', perf: 120, price: 110, market: 98 },
    { brand: 'Toyota', perf: 98, price: 85, market: 130 },
    { brand: 'Ford', perf: 86, price: 95, market: 100 },
    { brand: 'Mercedes', perf: 99, price: 120, market: 90 },
    { brand: 'Audi', perf: 85, price: 100, market: 105 },
];

export default function RadarBrands() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <Card><CardHeader title="Brand Comparison" /><CardContent style={{ height: 300 }} /></Card>;

    return (
        <Card>
            <CardHeader title="Brand Comparison" subheader="Performance vs Price vs Market" />
            <CardContent style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="brand" />
                        <PolarRadiusAxis />
                        <Tooltip />
                        <Legend />
                        <Radar name="Performance" dataKey="perf" stroke="#1976d2" fill="#1976d2" fillOpacity={0.4} />
                        <Radar name="Price" dataKey="price" stroke="#9c27b0" fill="#9c27b0" fillOpacity={0.2} />
                        <Radar name="Market" dataKey="market" stroke="#ff9800" fill="#ff9800" fillOpacity={0.2} />
                    </RadarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
