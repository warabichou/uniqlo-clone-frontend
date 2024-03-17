import { useState, useEffect } from 'react';

export const useBirthdayInput = () => {
    const [enteredBirthday, setEnteredBirthday] = useState('');

    useEffect(() => {
        if (enteredBirthday.match(/\//g)?.length === 2) {
            return;
        }
        if (enteredBirthday.length === 4) {
            setEnteredBirthday(enteredBirthday + '/');
        } else if (
            enteredBirthday.length === 5 &&
            !enteredBirthday.includes('/')
        ) {
            setEnteredBirthday(
                enteredBirthday.substring(0, 4) +
                    '/' +
                    enteredBirthday.slice(-1)
            );
        } else if (enteredBirthday.length === 6 && enteredBirthday[4] !== '/') {
            setEnteredBirthday(
                enteredBirthday.substring(0, 4) +
                    '/' +
                    enteredBirthday.substring(4, 6) +
                    '/'
            );
        } else if (
            enteredBirthday.length === 7 &&
            !enteredBirthday.includes('/')
        ) {
            setEnteredBirthday(
                enteredBirthday.substring(0, 4) +
                    '/' +
                    enteredBirthday.substring(4, 6) +
                    '/' +
                    enteredBirthday.slice(-1)
            );
        } else if (
            enteredBirthday.length === 8 &&
            !enteredBirthday.includes('/')
        ) {
            setEnteredBirthday(
                enteredBirthday.substring(0, 4) +
                    '/' +
                    enteredBirthday.substring(4, 6) +
                    '/' +
                    enteredBirthday.slice(6, 8)
            );
        }
    }, [enteredBirthday]);

    return { enteredBirthday, setEnteredBirthday };
};
