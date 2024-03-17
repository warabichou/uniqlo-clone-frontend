import { useEffect, useRef, useState } from 'react';
import Wrapper from '../assets/wrappers/CartHorizontalSlider';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import LeftArrow from '../assets/left-arrow.svg?react';
import RightArrow from '../assets/right-arrow.svg?react';
import { ProductsListType } from '../types';
import { Link } from 'react-router-dom';
import Heart from '../assets/heart.svg?react';
import { useGetIsSmallScreen } from '../hooks/useGetIsSmallScreen';
import { useGetCustomToast } from '../hooks/useGetCustomToast';

const CartHorizontalSlider = ({
    title,
    slidesData,
}: {
    title: string;
    slidesData?: ProductsListType[];
}): JSX.Element => {
    const { noPathError } = useGetCustomToast();
    const imageRef = useRef(null);
    const [imageHeight, setImageHeight] = useState(0);

    const isSmallScreen = useGetIsSmallScreen();

    useEffect(() => {
        const handleResize = () => {
            if (imageRef.current) {
                setImageHeight(imageRef.current['clientHeight']);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Wrapper>
            <h3 className="primary-horizontal-slider__slide-title">{title}</h3>

            <Swiper
                slidesPerView={isSmallScreen ? 2.27 : 4}
                slidesPerGroup={isSmallScreen ? 1 : 4}
                slidesPerGroupAuto={isSmallScreen ? true : false}
                spaceBetween={isSmallScreen ? 12 : 24}
                modules={[Navigation, Pagination, Keyboard]}
                pagination={{ clickable: false }}
                navigation={{
                    nextEl: '.right-arrow',
                    prevEl: '.left-arrow',
                }}
                keyboard
                loop={false}
            >
                {slidesData?.map((slide, index) => (
                    <SwiperSlide
                        key={slide.productName}
                        className="primary-horizontal-slider"
                        onClick={noPathError}
                    >
                        <Link
                            to="#"
                            className="primary-horizontal-slider__heart"
                        >
                            <Heart />
                        </Link>

                        <div className="primary-horizontal-slider__number">
                            {index + 1}
                        </div>

                        <div className="primary-horizontal-slider__item-container">
                            <img
                                onLoad={() => {
                                    if (imageRef.current) {
                                        setImageHeight(
                                            imageRef.current['clientHeight']
                                        );
                                    }
                                }}
                                ref={imageRef}
                                alt={slide.productName}
                                src={slide.productImageUrl}
                            />
                        </div>
                        <div className="primary-horizontal-slider__colors-container">
                            {slide.productColorsUrl?.map((color) => (
                                <label
                                    key={color}
                                    style={{
                                        backgroundImage: `url(${color})`,
                                    }}
                                ></label>
                            ))}
                        </div>
                        <h3 className="primary-horizontal-slider__title">
                            {slide.productName}
                        </h3>
                        {slide.productDescription && (
                            <p className="primary-horizontal-slider__description">
                                {slide.productDescription}
                            </p>
                        )}
                        <div className="primary-horizontal-slider__price-container">
                            <p
                                className={`primary-horizontal-slider__price-mark ${
                                    slide.productDescription02 &&
                                    'primary-horizontal-slider__price-mark-red'
                                }`}
                            >
                                ¥
                            </p>
                            <p
                                className={`primary-horizontal-slider__price ${
                                    slide.productDescription02 &&
                                    'primary-horizontal-slider__price-red'
                                }`}
                            >
                                {slide.productPrice?.toLocaleString('ja-JP')}
                            </p>
                        </div>
                        {slide.productDescription02 && (
                            <p className="primary-horizontal-slider__description primary-horizontal-slider__description-red">
                                {slide.productDescription02}
                            </p>
                        )}
                    </SwiperSlide>
                ))}

                <div
                    style={{ top: `${imageHeight / 2 + 27}px` }}
                    className="arrow-container"
                >
                    <button className="left-arrow">
                        <LeftArrow />
                    </button>
                    <button className="right-arrow">
                        <RightArrow />
                    </button>
                </div>
            </Swiper>
        </Wrapper>
    );
};

export default CartHorizontalSlider;
