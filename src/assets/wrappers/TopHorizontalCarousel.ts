import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

    .top-horizontal-carousel {
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
`;

export default Wrapper;
