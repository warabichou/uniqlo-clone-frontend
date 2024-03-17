import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    position: relative;

    .trend-words-horizontal-slider {
        &__title {
            font-size: 0.8125rem;
            font-weight: 300;
            padding: 0.75rem;
            border: 1px solid #dadada;

            &:hover {
                border: 1px solid #000;
            }
        }
    }

    .swiper-slide {
        width: auto !important;
    }

    .left-arrow,
    .right-arrow {
        border: 0;
        background-color: #fff;
        height: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        z-index: 1;

        svg {
            fill: #767676;
            color: #767676;
        }
    }

    .left-arrow {
        background: linear-gradient(90deg, #fff, #fff 41.67%, #fff0);
    }

    .right-arrow {
        right: 0;
        background: linear-gradient(270deg, #fff, #fff 41.67%, #fff0);
    }

    .swiper-button-disabled {
        display: none;
    }
`;

export default Wrapper;
