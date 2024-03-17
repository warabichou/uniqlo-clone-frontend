import Wrapper from '../assets/wrappers/TopHorizontalCarousel';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLocation, useNavigate } from 'react-router-dom';

import { BottomNav, TopHeader, TopVerticalCarousel } from '.';

import { useGetWomenTopSlides } from '../services/apiWomen';
import { useGetMenTopSlides } from '../services/apiMen';
import { useGetKidsTopSlides } from '../services/apiKids';
import { useGetBabyTopSlides } from '../services/apiBaby';

const TopHorizontalCarousel = (): JSX.Element => {
    const { data: womenTopSlides } = useGetWomenTopSlides();
    const { data: menTopSlides } = useGetMenTopSlides();
    const { data: kidsTopSlides } = useGetKidsTopSlides();
    const { data: babyTopSlides } = useGetBabyTopSlides();

    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const swiperRef = useRef<SwiperRef>(null);

    useEffect(() => {
        switch (currentPath) {
            case '/women':
                swiperRef?.current?.swiper.slideTo(0);
                navigate('/');
                break;
            case '/men':
                swiperRef?.current?.swiper.slideTo(1);
                break;
            case '/kids':
                swiperRef?.current?.swiper.slideTo(2);
                break;
            case '/baby':
                swiperRef?.current?.swiper.slideTo(3);
                break;
        }
    }, [currentPath, navigate]);

    function changeSlide(currentIndex?: number) {
        if (currentIndex === 0 && currentPath !== '/') {
            navigate('/');
        } else if (currentIndex === 1 && currentPath !== '/men') {
            navigate('/men');
        } else if (currentIndex === 2 && currentPath !== '/kids') {
            navigate('/kids');
        } else if (currentIndex === 3 && currentPath !== '/baby') {
            navigate('/baby');
        }
    }

    return (
        <Wrapper>
            <TopHeader />
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Keyboard]}
                navigation={{
                    nextEl: '.right-arrow',
                    prevEl: '.left-arrow',
                }}
                keyboard
                loop={false}
                speed={1000}
                onSlideChange={() => {
                    changeSlide(swiperRef.current?.swiper.activeIndex);
                }}
            >
                {womenTopSlides &&
                    menTopSlides &&
                    kidsTopSlides &&
                    babyTopSlides && (
                        <>
                            <SwiperSlide>
                                <TopVerticalCarousel data={womenTopSlides} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TopVerticalCarousel data={menTopSlides} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TopVerticalCarousel data={kidsTopSlides} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TopVerticalCarousel data={babyTopSlides} />
                            </SwiperSlide>
                        </>
                    )}
            </Swiper>
            <BottomNav />
        </Wrapper>
    );
};

export default TopHorizontalCarousel;
