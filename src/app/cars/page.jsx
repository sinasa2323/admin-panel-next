'use client';

import { Grid } from '@mui/material';
import KpiCard from '@/components/KPIs/KpiCard';
import CarsFilters from '@/components/Cars/CarsFilters';
import CarsTable from '@/components/Cars/CarsTable';
import StatusBar from '@/components/Charts/StatusBar';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import { useState } from 'react';

export default function Page() {
  const [filters, setFilters] = useState({
    brand: 'All',
    type: 'All',
    year: [2018, 2024],
    price: [15000, 120000],
    query: '',
  });

  return (
    <div className="space-y-4">
      {/* KPIs */}
      <Grid container spacing={2}>
        <Grid item size={3}><KpiCard title="Total Inventory" value="324" trend="+2.1%" color="primary" icon={<Inventory2OutlinedIcon color="primary" />} /></Grid>
        <Grid item size={3}><KpiCard title="Available" value="210" trend="+1.0%" color="success" icon={<DirectionsCarFilledIcon color="success" />} /></Grid>
        <Grid item size={3}><KpiCard title="Sold This Month" value="74" trend="+5.3%" color="secondary" icon={<SellOutlinedIcon color="secondary" />} /></Grid>
        <Grid item size={3}><KpiCard title="Pending Orders" value="27" trend="-1.6%" color="warning" icon={<ReceiptLongOutlinedIcon color="warning" />} /></Grid>
      </Grid>

      {/* Filters */}
      <CarsFilters onChange={setFilters} />

      {/* Chart + Table */}
      <Grid container spacing={2}>
        <Grid item size={3}>
          <StatusBar />
        </Grid>
        <Grid item size={9}>
          <CarsTable filters={filters} />
        </Grid>
      </Grid>
    </div>
  );
}
