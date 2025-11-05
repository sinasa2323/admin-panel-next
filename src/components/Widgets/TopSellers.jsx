'use client';

import { Card, CardHeader, CardContent, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

const top = [
    { name: 'Emma Johnson', sales: 18, img: '/avatar.jpg' },
    { name: 'Liam Brown', sales: 15, img: '/avatar.jpg' },
    { name: 'Olivia Davis', sales: 12, img: '/avatar.jpg' },
];

export default function TopSellers() {
    return (
        <Card sx={{ height: '100%', '&:hover': { boxShadow: 6 }, transition: 'box-shadow 0.15s ease' }}>
            <CardHeader title="Top Sellers" subheader="Best performing agents" />
            <CardContent sx={{ pt: 0 }}>
                <List dense>
                    {top.map((p) => (
                        <ListItem key={p.name}>
                            <ListItemAvatar>
                                <Avatar src={p.img} />
                            </ListItemAvatar>
                            <ListItemText primary={p.name} secondary={`${p.sales} cars`} />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}
