'use client';

import { AppBar, Toolbar, IconButton, Typography, Stack, Tooltip, Avatar, Badge, TextField, InputAdornment } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useUIStore } from '@/store/uiStore';

export default function Header() {
  const themeMode = useUIStore((s) => s.themeMode);
  const toggleTheme = useUIStore((s) => s.toggleTheme);
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);
  const sidebarOpen = useUIStore((s) => s.sidebarOpen);

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="flex justify-between">
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton onClick={toggleSidebar} edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar src='/avatar.jpg' sx={{ bgcolor: 'primary.main', width: 28, height: 28 }} />

            <Typography variant="h6" className="font-semibold">Sina Sayah</Typography>

          </Stack>
        </Stack>

        {/* Search  */}
        <TextField
          size="small"
          placeholder="Search anything..."
          sx={{ minWidth: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        <Stack direction="row" spacing={1} className='pr-4' alignItems="center">
          <Tooltip title="Notifications">
            <IconButton>
              <Badge color="error" variant="dot">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Settings">
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title={themeMode === 'light' ? 'Switch to dark' : 'Switch to light'}>
            <IconButton onClick={toggleTheme} aria-label="toggle theme">
              {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Tooltip>


        </Stack>
      </Toolbar>
    </AppBar>
  );
}
