'use client';

import Todo from '@/components/Todo';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@mui/material';

export default function Home() {
    const theme = useTheme();
    return (
        <div className={(theme.background, theme.text)}>
            <Button variant='contained' color='primary'>
                Click Me
            </Button>
            <Todo />
        </div>
    );
}
