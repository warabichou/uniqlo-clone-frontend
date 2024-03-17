import { useEffect, useState } from 'react';

export const useGetIsMediumScreen = () => {
    const [isMediumScreen, setIsMediumScreen] = useState<boolean>(
        window.matchMedia('(max-width: 960px)').matches
    );

    useEffect(() => {
        const updateIsMediumScreen = () => {
            setIsMediumScreen(window.matchMedia('(max-width: 960px)').matches);
        };

        updateIsMediumScreen();
        window.addEventListener('resize', updateIsMediumScreen);

        return () => {
            window.removeEventListener('resize', updateIsMediumScreen);
        };
    }, []);

    return isMediumScreen;
};
