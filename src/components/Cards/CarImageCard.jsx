'use client';

import { Card, CardMedia, CardContent, Typography, Stack, Chip } from '@mui/material';

export default function CarImageCard({ img, title, subtitle, badge }) {
    return (
        <Card
            sx={{
                overflow: 'hidden',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                '&:hover': { transform: 'translateY(-3px)', boxShadow: 6 },
            }}
        >
            <CardMedia component="img" image={img} alt={title} sx={{ height: 140, objectFit: 'cover' }} />
            <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <div>
                        <Typography variant="subtitle1" className="font-semibold">{title}</Typography>
                        <Typography variant="body2" color="text.secondary">{subtitle}</Typography>
                    </div>
                    {badge && <Chip size="small" label={badge} color="primary" />}
                </Stack>
            </CardContent>
        </Card>
    );
}
