import Wrapper from '../assets/wrappers/TopVerticalCarousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { SlideDescription } from '.';
import { useGetIsMediumScreen } from '../hooks/useGetIsMediumScreen';
import { VideoCarouselType } from '../types';

const TopVerticalCarousel = ({
    data,
}: {
    data?: VideoCarouselType[];
}): JSX.Element => {
    const isMediumScreen = useGetIsMediumScreen();

    return (
        <Wrapper>
            <div className="top-vertical-carousel">
                <Swiper
                    direction={'vertical'}
                    pagination={{
                        clickable: false,
                    }}
                    speed={800}
                    loop={true}
                    modules={[Pagination, Mousewheel, Keyboard]}
                    mousewheel
                    keyboard
                    scrollbar={false}
                >
                    {data?.map((slide) => (
                        <SwiperSlide key={slide.normalImageUrl}>
                            <Link to="#" className="slide-link">
                                {slide.normalVideoUrl && (
                                    <ReactPlayer
                                        className="react-player"
                                        url={
                                            !isMediumScreen
                                                ? slide.normalVideoUrl
                                                : slide.smallVideoUrl ||
                                                  slide.normalVideoUrl
                                        }
                                        muted={true}
                                        loop={true}
                                        playing={true}
                                        playsinline={true}
                                    />
                                )}

                                <div
                                    className="img-container"
                                    style={{
                                        backgroundImage: `url(${
                                            !isMediumScreen
                                                ? slide.normalImageUrl
                                                : slide.smallImageUrl ||
                                                  slide.normalImageUrl
                                        })`,
                                    }}
                                >
                                    <SlideDescription slide={slide} />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Wrapper>
    );
};

export default TopVerticalCarousel;
