'use client';

import { Grid } from '@mui/material';
import KpiCard from '@/components/KPIs/KpiCard';
import AreaChartCard from '@/components/Charts/AreaChartCard';
import BarChartCard from '@/components/Charts/BarChartCard';
import LineChartCard from '@/components/Charts/LineChartCard';
import PieChartCard from '@/components/Charts/PieChartCard';
import FeaturedSlider from '@/components/Slider/FeaturedSlider';
import SalesFunnel from '@/components/Widgets/SalesFunnel';
import TopSellers from '@/components/Widgets/TopSellers';
import QuickActions from '@/components/Widgets/QuickActions';
import RecentActivities from '@/components/Widgets/RecentActivities';
import CarImageCard from '@/components/Cards/CarImageCard';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PendingActionsIcon from '@mui/icons-material/PendingActions';


import { useEffect, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useAuthStore } from '@/store/authStore';

export default function Page() {

  const justLoggedIn = useAuthStore((s) => s.justLoggedIn);
  const consumeJustLoggedIn = useAuthStore((s) => s.consumeJustLoggedIn);
  const [openWelcome, setOpenWelcome] = useState(false);

  useEffect(() => {
    if (justLoggedIn) {
      setOpenWelcome(true);
      consumeJustLoggedIn();
    }
  }, [justLoggedIn, consumeJustLoggedIn]);

  return (
    <div className="space-y-4 ">
      {/* Welcome Message */}
      <Snackbar
        open={openWelcome}
        autoHideDuration={5000}
        onClose={() => setOpenWelcome(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setOpenWelcome(false)}
          severity="success"
          variant="filled"
          icon={<CheckCircleOutlineIcon fontSize="small" />}
          sx={{ width: '100%' }}
        >
          Welcome! You are now logged in.
        </Alert>
      </Snackbar>

      {/* KPI Row */}
      <Grid container spacing={2}>
        <Grid size={3} >
          <KpiCard title="Total Cars" value="324" trend="+3.4%" color="success" icon={<DirectionsCarFilledIcon color="primary" />} />
        </Grid>
        <Grid size={3} >
          <KpiCard title="Revenue" value="$1.24M" trend="+1.1%" color="primary" icon={<AttachMoneyIcon color="success" />} />
        </Grid>
        <Grid size={3} >
          <KpiCard title="Leads" value="1,879" trend="+8.3%" color="secondary" icon={<TrendingUpIcon color="secondary" />} />
        </Grid>
        <Grid size={3} >
          <KpiCard title="Pending" value="27" trend="-2.4%" color="warning" icon={<PendingActionsIcon color="warning" />} />
        </Grid>
      </Grid>

      {/* Slider + TopSellers */}
      <Grid container spacing={2} >
        <Grid container>

          <Grid item size={6}>   <TopSellers /></Grid>
          <Grid item size={6}> <FeaturedSlider /></Grid>

        </Grid>

        <Grid item size={12}>
          <Grid container spacing={2}>
            <Grid item size={6}><AreaChartCard /></Grid>
            <Grid item size={6}><BarChartCard /></Grid>
            <Grid item size={6}><LineChartCard /></Grid>
            <Grid item size={6}><PieChartCard /></Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Gallery */}
      <Grid container marginTop={10} spacing={2}>
        <Grid item size={4}><CarImageCard img="/bmw.png" title="BMW M3" subtitle="2024 • 12,000 km" badge="Featured" /></Grid>
        <Grid item size={4}><CarImageCard img="/bmw.png" title="Toyota Supra" subtitle="2023 • 8,500 km" badge="Hot" /></Grid>
        <Grid item size={4}><CarImageCard img="/bmw.png" title="Ford Mustang" subtitle="2024 • 5,100 km" badge="New" /></Grid>
        <Grid item size={4}><CarImageCard img="/bmw.png" title="Mercedes C300" subtitle="2022 • 21,700 km" badge="Deal" /></Grid>
        <Grid item size={4}><CarImageCard img="/bmw.png" title="Mercedes C300" subtitle="2022 • 21,700 km" badge="Deal" /></Grid>
        <Grid item size={4}><CarImageCard img="/bmw.png" title="Mercedes C300" subtitle="2022 • 21,700 km" badge="Deal" /></Grid>
      </Grid>

      {/* Funnel + Activities + Quick Actions */}
      <Grid container spacing={2}>
        <Grid item size={4}><SalesFunnel /></Grid>
        <Grid item size={8}><RecentActivities /></Grid>
        <Grid size={12}><QuickActions /></Grid>
      </Grid>
    </div>
  );
}
