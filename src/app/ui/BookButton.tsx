'use client'

import clsx from 'clsx';

export default function BookButton({status}) {
    function handleClick() {

    }

    return <button
        className={clsx(
            'px-2 py-1 rounded',
            {
                'bg-green-500': status === true,
                'bg-red-500': status === false,
            },
        )}
        onClick={handleClick}>{status ? 'Available' : 'Booked'}</button>;
}