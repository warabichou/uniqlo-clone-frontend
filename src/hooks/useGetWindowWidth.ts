import { useEffect, useState } from 'react';

export const useGetWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth());

    function getWindowWidth() {
        const currentWidth = window.innerWidth;
        return currentWidth;
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowWidth(getWindowWidth());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return windowWidth;
};
