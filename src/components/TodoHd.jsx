import { format } from 'date-fns';
import React from 'react';

const TodoHd = () => {
    return (
        <div>
            <strong>{format(new Date(), 'yyyy.MM.dd')}</strong>
            <p>오늘의 할 일을 적어보세요.</p>
        </div>
    );
};

export default TodoHd;
