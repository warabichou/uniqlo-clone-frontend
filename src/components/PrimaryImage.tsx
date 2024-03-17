import { useState } from 'react';

type PrimaryImageType = {
    alt: string;
    url: string;
    bgColor: string;
};

const PrimaryImage = ({ alt, url, bgColor }: PrimaryImageType): JSX.Element => {
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <img
            alt={alt}
            src={url}
            style={{
                backgroundColor: imageLoaded ? 'transparent' : bgColor,
            }}
            onLoad={handleImageLoad}
        />
    );
};

export default PrimaryImage;
