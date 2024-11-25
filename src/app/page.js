'use client';

import Todo from '@/components/Todo';
import { useContext } from 'react';
import { ThemeContext } from './layout';

export default function Home() {
    const theme = useContext(ThemeContext);
    return (
        <div className={theme.background}>
            <Todo />
        </div>
    );
}
