'use client';

import { useMemo, useState } from 'react';
import {
    Card, CardHeader, CardContent, TextField,
    Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel, InputAdornment,
    IconButton, Tooltip, Avatar, Chip, Stack
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const rows = Array.from({ length: 60 }).map((_, i) => {
    const brands = ['BMW', 'Toyota', 'Ford', 'Mercedes', 'Audi', 'Porsche'];
    const models = ['M3', 'Camry', 'Mustang', 'C300', 'A4', '911'];
    const types = ['Sedan', 'SUV', 'Coupe'];
    const brand = brands[i % brands.length];
    const model = models[i % models.length];
    const type = types[i % types.length];
    const year = 2018 + (i % 7);
    const price = 20000 + (i % 40) * 2000;
    const img = `/bmw.png`;
    const status = i % 5 === 0 ? 'Reserved' : i % 3 === 0 ? 'Sold' : 'Available';
    return { id: i + 1, brand, model, type, year, price, img, status };
});

export default function CarsTable({ filters }) {
    const [orderBy, setOrderBy] = useState('brand');
    const [order, setOrder] = useState('asc');
    const [quickSearch, setQuickSearch] = useState('');

    const filtered = useMemo(() => {
        const q = quickSearch.toLowerCase();
        return rows.filter((r) => {
            const byBrand = filters.brand === 'All' || r.brand === filters.brand;
            const byType = filters.type === 'All' || r.type === filters.type;
            const byYear = r.year >= filters.year[0] && r.year <= filters.year[1];
            const byPrice = r.price >= filters.price[0] && r.price <= filters.price[1];
            const byQuery = filters.query
                ? (r.model.toLowerCase().includes(filters.query.toLowerCase()) || r.brand.toLowerCase().includes(filters.query.toLowerCase()))
                : true;
            const byQuick = q ? (r.brand.toLowerCase().includes(q) || r.model.toLowerCase().includes(q)) : true;
            return byBrand && byType && byYear && byPrice && byQuery && byQuick;
        });
    }, [filters, quickSearch]);

    const sorted = useMemo(() => {
        return [...filtered].sort((a, b) => {
            const aVal = a[orderBy];
            const bVal = b[orderBy];
            if (aVal < bVal) return order === 'asc' ? -1 : 1;
            if (aVal > bVal) return order === 'asc' ? 1 : -1;
            return 0;
        });
    }, [filtered, order, orderBy]);

    const handleSort = (key) => {
        if (orderBy === key) {
            setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
        } else {
            setOrderBy(key);
            setOrder('asc');
        }
    };

    const statusColor = (s) =>
        s === 'Available' ? 'success' : s === 'Reserved' ? 'warning' : 'default';

    return (
        <Card>
            <CardHeader
                title="Cars Inventory"
                subheader={`Showing ${sorted.length} results`}
                action={
                    <TextField
                        size="small"
                        placeholder="Quick search..."
                        value={quickSearch}
                        onChange={(e) => setQuickSearch(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon fontSize="small" />
                                </InputAdornment>
                            ),
                        }}
                    />
                }
            />
            <CardContent sx={{ pt: 0 }}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Car</TableCell>
                            {[
                                { key: 'brand', label: 'Brand' },
                                { key: 'model', label: 'Model' },
                                { key: 'type', label: 'Type' },
                                { key: 'year', label: 'Year' },
                                { key: 'price', label: 'Price ($)' },
                                { key: 'status', label: 'Status' },
                                { key: 'actions', label: 'Actions' },
                            ].map((col) =>
                                col.key !== 'actions' ? (
                                    <TableCell key={col.key}>
                                        <TableSortLabel
                                            active={orderBy === col.key}
                                            direction={orderBy === col.key ? order : 'asc'}
                                            onClick={() => handleSort(col.key)}
                                        >
                                            {col.label}
                                        </TableSortLabel>
                                    </TableCell>
                                ) : (
                                    <TableCell key={col.key}>{col.label}</TableCell>
                                )
                            )}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {sorted.map((row) => (
                            <TableRow key={row.id} hover>
                                <TableCell>
                                    <Avatar variant="rounded" src={row.img} sx={{ objectFit: 'contain', width: 75 }} />
                                </TableCell>
                                <TableCell>{row.brand}</TableCell>
                                <TableCell>{row.model}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.year}</TableCell>
                                <TableCell>{row.price.toLocaleString()}</TableCell>
                                <TableCell>
                                    <Chip size="small" label={row.status} color={statusColor(row.status)} />
                                </TableCell>
                                <TableCell>
                                    <Stack direction="row" spacing={1}>
                                        <Tooltip title="View">
                                            <IconButton size="small"><VisibilityOutlinedIcon fontSize="small" /></IconButton>
                                        </Tooltip>
                                        <Tooltip title="Edit">
                                            <IconButton size="small"><EditOutlinedIcon fontSize="small" /></IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton size="small"><DeleteOutlineIcon fontSize="small" /></IconButton>
                                        </Tooltip>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
