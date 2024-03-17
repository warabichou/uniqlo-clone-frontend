import { useEffect, useState } from 'react';

export const useGetIsSmallScreen = () => {
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
        window.matchMedia('(max-width: 600px)').matches
    );

    useEffect(() => {
        const updateIsSmallScreen = () => {
            setIsSmallScreen(window.matchMedia('(max-width: 600px)').matches);
        };

        updateIsSmallScreen();
        window.addEventListener('resize', updateIsSmallScreen);

        return () => {
            window.removeEventListener('resize', updateIsSmallScreen);
        };
    }, []);

    return isSmallScreen;
};
