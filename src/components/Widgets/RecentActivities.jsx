'use client';

import { Card, CardHeader, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

const items = [
    { icon: <DriveEtaOutlinedIcon />, text: 'Test drive scheduled for BMW M3 (Emma)' },
    { icon: <LocalOfferOutlinedIcon />, text: 'New offer created for Ford Mustang' },
    { icon: <CheckCircleOutlineIcon />, text: 'Deal closed: Toyota Supra' },
];

export default function RecentActivities() {
    return (
        <Card sx={{ '&:hover': { boxShadow: 6 }, transition: 'box-shadow 0.15s ease' }}>
            <CardHeader title="Recent Activities" />
            <CardContent sx={{ pt: 0 }}>
                <List dense>
                    {items.map((i, idx) => (
                        <ListItem key={idx}>
                            <ListItemIcon>{i.icon}</ListItemIcon>
                            <ListItemText primary={i.text} />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}
