import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: calc(1200px - 1.5rem);
    width: calc(100vw - 4.5rem);
    margin: auto;

    @media (max-width: 600px) {
        width: calc(100vw - 2.5rem);
    }

    .primary-horizontal-slider {
        position: relative;
        cursor: pointer;

        &__number {
            width: 1.875rem;
            height: 1.875rem;
            color: #1b1b1b;
            font: 1.25rem Helvetica Neue, Helvetica, Arial, sans-serif;
            font-weight: 400;
            border: 1px solid #dadada;
            margin-bottom: 0.75rem;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__heart {
            position: absolute;
            right: 0;
            top: 2.5rem;
            width: 2.625rem;
            height: 2.625rem;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__slide-title {
            height: 4.125rem;
            font-size: 1.25rem;
            font-weight: 300;
            line-height: 1.4;

            display: flex;
            align-items: center;

            @media (max-width: 600px) {
                font-size: 1.125rem;
            }
        }

        &__item-container {
            img {
                width: 100%;
                height: 100%;
            }
        }

        &__colors-container {
            margin: 0.2rem 0;

            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.375rem;

            label {
                display: block;
                width: 1rem;
                height: 1rem;
            }
        }

        &__title {
            font-size: 0.9375rem;
            font-weight: 300;
        }

        &__price {
            font-size: 1.125rem;
            color: #000;

            &-red {
                color: #e00;
            }

            &-mark {
                font-size: 1.25rem;
                color: #000;

                &-red {
                    color: #e00;
                }
            }

            &-container {
                display: flex;
                align-items: center;
            }
        }

        &__description {
            font-size: 0.8125rem;
            font-weight: 300;
            color: #767676;

            &-red {
                color: #e00;
            }
        }
    }

    .arrow-container {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 1;

        @media (max-width: 600px) {
            display: none;
        }

        button {
            background-color: #fff;
            border: none;
            display: flex;
            flex-shrink: 0;
            margin: 0;
            opacity: 0.9;
            outline: 0;
            padding: 0.25rem;
            pointer-events: auto;
            z-index: 10;
            cursor: pointer;

            svg {
                fill: #ababab;
                z-index: -999;
            }

            &:last-of-type {
                position: absolute;
                right: 0;
            }
        }

        .swiper-button-disabled {
            display: none;
        }
    }

    .swiper-pagination {
        position: relative;
        margin-top: 2.5rem;
        margin-bottom: 3rem;

        @media (max-width: 600px) {
            display: none;
        }

        &-bullet {
            height: 0.375rem !important;
            width: 0.375rem !important;
            background: #ababab !important;

            &-active {
                background: #1b1b1b !important;
            }
        }
    }
`;

export default Wrapper;
