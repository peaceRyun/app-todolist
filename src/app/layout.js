'use client';

import localFont from 'next/font/local';
import './globals.css';
import { createContext, useContext } from 'react';
import classNames from 'classnames';

const themes = {
    light: {
        background: 'bg-white',
        text: 'text-black',
        btn: 'bg-gray-800',
        input: 'bg-gray-800',
        white: 'white',
        black: 'gray-800',
    },
    dark: {
        background: 'bg-gray-800',
        text: 'text-white',
        btn: 'bg-gray-200',
    },
};

export const ThemeContext = createContext(themes.light);

const ToggleButton = () => {
    const theme = useContext(ThemeContext);

    return <button className={classNames(theme.btn, 'p-2 rounded mx-8 mt-4')}>색상 변경</button>;
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <ThemeContext.Provider value={themes.light}>
                <body>
                    <ToggleButton />
                    {children}
                </body>
            </ThemeContext.Provider>
        </html>
    );
}
