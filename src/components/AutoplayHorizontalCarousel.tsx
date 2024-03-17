import { useState, useEffect, useRef, useCallback } from 'react';
import Wrapper from '../assets/wrappers/AutoplayHorizontalCarousel';

type Slide = {
    url: string;
};

type AutoplayHorizontalCarouselType = {
    slides: Slide[];
    parentWidth: number;
};

const AutoplayHorizontalCarousel = ({
    slides,
    parentWidth,
}: AutoplayHorizontalCarouselType): JSX.Element => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    console.log(timerRef);

    const moveToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const moveToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides.length, setCurrentIndex]);

    const getSlidesContainerStylesWithWidth = () => ({
        display: 'flex',
        height: '100%',
        transition: 'transform ease-out 0.7s',
        width: parentWidth * slides.length,
        transform: `translateX(${-(currentIndex * parentWidth)}px)`,
    });

    const getSlideStylesWithBackground = (slideIndex: number) => ({
        display: 'flex',
        height: '100%',
        transition: 'transform ease-out 0.7s',
        backgroundImage: `url(${slides[slideIndex].url})`,
        width: `${parentWidth}px`,
    });

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            moveToNext();
        }, 5000);

        return () => clearTimeout(timerRef.current as NodeJS.Timeout);
    }, [moveToNext]);

    return (
        <Wrapper>
            <div className="sides-container">
                <div style={getSlidesContainerStylesWithWidth()}>
                    {slides.map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            style={getSlideStylesWithBackground(slideIndex)}
                        ></div>
                    ))}
                </div>
            </div>
            <div className="arrow-container">
                <div className="left-arrow" onClick={moveToPrevious}></div>
                <div className="right-arrow" onClick={moveToNext}></div>
            </div>
        </Wrapper>
    );
};

export default AutoplayHorizontalCarousel;
