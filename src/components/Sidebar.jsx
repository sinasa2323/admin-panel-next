'use client';

import { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Divider,
  Collapse,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import InsightsIcon from '@mui/icons-material/Insights';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { useUIStore } from '@/store/uiStore';

const SIDEBAR_WIDTH = 220;
const SIDEBAR_COLLAPSED = 72;

export default function Sidebar() {
  const sidebarOpen = useUIStore((s) => s.sidebarOpen);

  const [openInventory, setOpenInventory] = useState(false);
  const [openSales, setOpenSales] = useState(false);
  const [openReports, setOpenReports] = useState(false);

  const NAV_BASE = [
    { label: 'Dashboard', href: '/', icon: <DashboardIcon /> },
    { label: 'Cars', href: '/cars', icon: <DirectionsCarFilledIcon /> },
    { label: 'Analytics', href: '/analytics', icon: <InsightsIcon /> },
  ];

  const NAV_VISUAL = [
    { label: 'Customers', icon: <PeopleAltOutlinedIcon /> },
    { label: 'Orders', icon: <ReceiptLongOutlinedIcon /> },
    { label: 'Offers', icon: <LocalOfferOutlinedIcon /> },
    { label: 'Settings', icon: <SettingsOutlinedIcon /> },
  ];

  const renderItem = (item, onClick) => (
    <Tooltip title={!sidebarOpen ? item.label : ''} placement="right">
      <ListItemButton
        onClick={onClick}
        sx={{
          px: 2,
          justifyContent: sidebarOpen ? 'flex-start' : 'center',
          transition: 'background 0.2s ease',
          '&:hover': { backgroundColor: 'action.hover' },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: sidebarOpen ? 2 : 0,
            justifyContent: 'center',
          }}
        >
          {item.icon}
        </ListItemIcon>
        {sidebarOpen && <ListItemText primary={item.label} />}
      </ListItemButton>
    </Tooltip>
  );


  const renderExpandable = ({ label, icon, open, setOpen }) => (
    <>
      <Tooltip title={!sidebarOpen ? label : ''} placement="right">
        <ListItemButton
          onClick={() => setOpen((p) => !p)}
          sx={{
            px: 2,
            transition: 'background 0.2s ease',
            '&:hover': { backgroundColor: 'action.hover' },

            justifyContent: sidebarOpen ? 'space-between' : 'center',
          }}
        >

          <span className="flex items-center">
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: sidebarOpen ? 2 : 0,
                justifyContent: 'center',
              }}
            >
              {icon}
            </ListItemIcon>
            {sidebarOpen && <ListItemText primary={label} />}
          </span>


          {sidebarOpen && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
      </Tooltip>
    </>
  );

  return (
    <Drawer
      variant="permanent"
      PaperProps={{
        sx: {
          width: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED,
          overflowX: 'hidden',
          transition: 'width 0.2s ease',
          borderRight: '1px solid',
          borderColor: 'divider',
        },
      }}
    >
      <Divider />

      <List className="mt-1">
        {/* لینک‌های اصلی */}
        {NAV_BASE.map((item) => (
          <Link key={item.href} href={item.href}>
            {renderItem(item)}
          </Link>
        ))}

        <Divider sx={{ my: 1 }} />

        {/* Inventory */}
        {renderExpandable({
          label: 'Inventory',
          icon: <Inventory2OutlinedIcon />,
          open: openInventory,
          setOpen: setOpenInventory,
        })}
        <Collapse in={openInventory && sidebarOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {[
              { label: 'All Vehicles', icon: <DirectionsCarFilledIcon /> },
              { label: 'New Arrivals', icon: <DirectionsCarFilledIcon /> },
              { label: 'Low Stock', icon: <DirectionsCarFilledIcon /> },
            ].map((sub) => (
              <ListItemButton
                key={sub.label}
                sx={{
                  pl: 6,
                  '&:hover': { backgroundColor: 'action.hover' },
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>{sub.icon}</ListItemIcon>
                <ListItemText primary={sub.label} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        {/* Sales  */}
        {renderExpandable({
          label: 'Sales',
          icon: <SellOutlinedIcon />,
          open: openSales,
          setOpen: setOpenSales,
        })}
        <Collapse in={openSales && sidebarOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {[
              { label: 'Active Deals', icon: <LocalOfferOutlinedIcon /> },
              { label: 'Invoices', icon: <ReceiptLongOutlinedIcon /> },
              { label: 'Customers', icon: <PeopleAltOutlinedIcon /> },
            ].map((sub) => (
              <ListItemButton
                key={sub.label}
                sx={{
                  pl: 6,
                  '&:hover': { backgroundColor: 'action.hover' },
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>{sub.icon}</ListItemIcon>
                <ListItemText primary={sub.label} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        {/* Reports  */}
        {renderExpandable({
          label: 'Reports',
          icon: <AssessmentOutlinedIcon />,
          open: openReports,
          setOpen: setOpenReports,
        })}
        <Collapse in={openReports && sidebarOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {[
              { label: 'Monthly', icon: <BarChartOutlinedIcon /> },
              { label: 'Performance', icon: <TimelineOutlinedIcon /> },
              { label: 'Custom', icon: <InsightsIcon /> },
            ].map((sub) => (
              <ListItemButton
                key={sub.label}
                sx={{
                  pl: 6,
                  '&:hover': { backgroundColor: 'action.hover' },
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>{sub.icon}</ListItemIcon>
                <ListItemText primary={sub.label} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        <Divider sx={{ my: 1 }} />

        {/*  لینک های فرعی*/}
        {NAV_VISUAL.map((item) => (
          <div key={item.label}>{renderItem(item)}</div>
        ))}
      </List>
    </Drawer>
  );
}
