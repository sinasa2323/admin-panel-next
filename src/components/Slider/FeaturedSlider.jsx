'use client';

import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { Card, CardContent, Typography, CardMedia, Stack } from '@mui/material';

const slides = [
    { title: '2024 BMW M3', desc: '3.5s 0-100, carbon pack', img: '/bmw.png' },
    { title: '2023 Toyota Supra', desc: 'Legend reborn', img: '/bmw.png' },
    { title: '2024 Ford Mustang', desc: 'V8 power', img: '/bmw.png' },
];

export default function FeaturedSlider() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const [containerRef] = useKeenSlider({
        loop: true,
        slides: { perView: 1, spacing: 10 },
        renderMode: 'performance',
        drag: true,


    },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 3000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]

    );

    return (
        <div
            ref={mounted ? containerRef : null}
            className="keen-slider h-full"
            style={{ maxWidth: '100%', overflow: 'hidden' }}
        >
            {mounted &&
                slides.map((s) => (
                    <div key={s.title} className="keen-slider__slide h-full">
                        <Card
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                height: '100%',
                                p: 1,
                                transition: 'transform 0.15s ease',
                                '&:hover': { transform: 'translateY(-2px)' },
                            }}
                        >
                            <CardMedia component="img" image={s.img} alt={s.title} sx={{ objectFit: 'cover', borderRadius: 1 }} />
                            <CardContent sx={{ p: 1 }}>
                                <Stack spacing={0.5}>
                                    <Typography variant="subtitle1" className="font-semibold">{s.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{s.desc}</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </div>
                ))}
        </div>
    );
}
