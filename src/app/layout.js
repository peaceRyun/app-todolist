'use client';

import localFont from 'next/font/local';
import './globals.css';
import { Providers } from '@/contexts';

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <Providers>
                <body>{children}</body>
            </Providers>
        </html>
    );
}
