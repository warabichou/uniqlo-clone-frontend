import Wrapper from '../assets/wrappers/TrendWordsHorizontalSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import LeftArrow from '../assets/left-arrow.svg?react';
import RightArrow from '../assets/right-arrow.svg?react';
import { useGetCustomToast } from '../hooks/useGetCustomToast';

type slidesDataType = {
    id: number;
    title: string;
};

const slidesData: slidesDataType[] = [
    {
        id: 1,
        title: 'カーディガン',
    },
    { id: 2, title: 'デニム' },
    { id: 3, title: 'イージーパンツ特集' },
    { id: 4, title: 'ニットリブパンツ' },
    { id: 5, title: '卒業式・卒園式' },
    { id: 6, title: 'ヒートテック' },
    { id: 7, title: 'ミッフィー' },
];

const TrendWordsHorizontalSlider = (): JSX.Element => {
    const { noPathError } = useGetCustomToast();

    return (
        <Wrapper>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={12}
                modules={[Navigation]}
                navigation={{
                    nextEl: '.right-arrow',
                    prevEl: '.left-arrow',
                }}
                keyboard
                loop={false}
            >
                {slidesData?.map((slide) => (
                    <SwiperSlide key={slide.title} onClick={noPathError}>
                        <Link
                            to="#"
                            className="trend-words-horizontal-slider__container"
                        >
                            <div className="trend-words-horizontal-slider__title">
                                {slide.title}
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div>
                <button className="left-arrow">
                    <LeftArrow />
                </button>
                <button className="right-arrow">
                    <RightArrow />
                </button>
            </div>
        </Wrapper>
    );
};

export default TrendWordsHorizontalSlider;
