'use client';

import { useEffect, useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { getAppTheme } from '@/theme/theme';
import { useUIStore } from '@/store/uiStore';
import { useAuthStore } from '@/store/authStore';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { usePathname, useRouter } from 'next/navigation';

const SIDEBAR_WIDTH = 220;
const SIDEBAR_COLLAPSED = 72;

export default function AppShell({ children }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const themeMode = useUIStore((s) => s.themeMode);
    const sidebarOpen = useUIStore((s) => s.sidebarOpen);
    const theme = useMemo(() => getAppTheme(themeMode), [themeMode]);

    const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
    const pathname = usePathname();
    const router = useRouter();

    //اگر در لاگین نیست به صفحه لاگین هدایت شود
    useEffect(() => {
        if (mounted) {
            if (!isLoggedIn && pathname !== '/login') {
                router.replace('/login');
            }
        }
    }, [mounted, isLoggedIn, pathname, router]);

    if (!mounted) return <Box className="min-h-screen" />;

    // در صفحه login پوسته پنل را نمایش نده
    if (pathname === '/login') {
        return <>{children}</>;
    }

    // اگر هنوز لاگین نشده، چیزی رندر نکن (جلوگیری از فلیکر)
    if (!isLoggedIn) {
        return <Box className="min-h-screen" />;
    }

    const leftOffset = sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box className="min-h-screen" sx={{ display: 'flex', overflowX: 'hidden' }}>
                <Sidebar />
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                    <Box
                        sx={{
                            ml: `${leftOffset}px`,
                            transition: 'margin-left 0.2s ease',
                            position: 'sticky',
                            top: 0,
                            zIndex: (t) => t.zIndex.appBar,
                            backgroundColor: 'background.default',
                        }}
                    >
                        <Header />
                    </Box>

                    <Box
                        component="main"
                        sx={{
                            ml: `${leftOffset}px`,
                            transition: 'margin-left 0.2s ease',
                            px: 2,
                            py: 2,
                        }}
                    >
                        {children}
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
