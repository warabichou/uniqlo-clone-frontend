import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

    .top-vertical-carousel {
        width: 100%;
        height: 100%;
    }

    .slide-link {
        display: block;
        height: 100%;
        position: relative;
        cursor: pointer;

        .img-container {
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position-x: center;
            background-color: #ababab;
        }
    }

    /* ライブラリスタイル修正 */
    .swiper {
        height: 100%;
    }

    .react-player {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;

        video {
            object-fit: cover;
        }
    }

    .swiper-pagination {
        &-bullet {
            background: #959595;
            display: block;
            height: 0.188rem;
            margin: 0.313rem 1.25rem !important;
            opacity: 0.8;
            width: 0.188rem;
            box-shadow: 0 1px 3px #0000004d;

            @media screen and (max-width: 599px) {
                margin: 0.5rem 0.875rem !important;
            }

            &-active {
                background: #000;
                border: none;
                height: 1.25rem;
                margin: 0.313rem 1.25rem;
                width: 0.188rem;
                border-radius: 3.125rem;
            }
        }
    }
`;

export default Wrapper;
