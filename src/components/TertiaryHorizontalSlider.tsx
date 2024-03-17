import Wrapper from '../assets/wrappers/TertiaryHorizontalSlider';
import ReactPlayer from 'react-player';
import { Navigation, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GridRowType } from '../types';

const TertiaryHorizontalSlider = ({
    title,
    slidesData,
}: {
    title: string;
    slidesData?: GridRowType[];
}): JSX.Element => {
    return (
        <Wrapper>
            <div className="tertiary-horizontal-slider__title">{title}</div>

            <Swiper
                slidesPerView={2.27}
                modules={[Navigation, Keyboard]}
                keyboard
                loop={false}
            >
                {slidesData?.map((slide) => (
                    <SwiperSlide key={slide.title}>
                        <div className="tertiary-horizontal-slider__container">
                            {slide.videoUrl ? (
                                <div className="tertiary-horizontal-slider__video">
                                    <ReactPlayer
                                        className="react-player"
                                        url={slide.videoUrl}
                                        muted={true}
                                        loop={true}
                                        playing={true}
                                        playsinline={true}
                                    />
                                    <img
                                        alt={slide.title}
                                        src={slide.imageUrl}
                                    />
                                </div>
                            ) : (
                                <img alt={slide.title} src={slide.imageUrl} />
                            )}
                            <div className="tertiary-horizontal-slider__text-title">
                                {slide.title}
                            </div>
                            {slide.description && (
                                <div className="tertiary-horizontal-slider__text-description">
                                    {slide.description}
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
};

export default TertiaryHorizontalSlider;
