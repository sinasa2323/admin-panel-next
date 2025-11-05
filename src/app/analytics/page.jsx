'use client';

import { Grid, Typography } from '@mui/material';
import ComposedSales from '@/components/Charts/ComposedSales';
import RadarBrands from '@/components/Charts/RadarBrands';
import ScatterPriceVsMileage from '@/components/Charts/ScatterPriceVsMileage';
import TopSellers from '@/components/Widgets/TopSellers';
import SalesFunnel from '@/components/Widgets/SalesFunnel';

export default function Page() {
    return (
        <div className="space-y-4">
            <Typography variant="h5" className="font-semibold pb-5">Analytics Overview</Typography>

            <Grid container spacing={2}>
                <Grid item size={8}><ComposedSales /></Grid>
                <Grid item size={4}><TopSellers /></Grid>

                <Grid item size={3}><SalesFunnel /></Grid>
                <Grid item size={4}><RadarBrands /></Grid>
                <Grid item size={5}><ScatterPriceVsMileage /></Grid>

            </Grid>


        </div>
    );
}
