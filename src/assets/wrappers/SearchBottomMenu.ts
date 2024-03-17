import styled from 'styled-components';

const Wrapper = styled.div`
    box-shadow: 0 0 20px 0 #0000001a;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 999;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;

    .search-bottom-menu {
        &__trend-words {
            width: 100%;
            height: 100vh;

            transform: translateY(100%);
            background-color: #fff;
            z-index: -100;

            display: none;
            justify-content: center;

            &-sp {
                height: 100% !important;
                display: flex;
                flex-direction: column;
                justify-content: initial;
            }

            &-wrap {
                width: 100%;
                height: 100%;

                display: flex;
                flex-direction: column;
                align-items: center;
            }

            &-active {
                display: flex;
                animation: trendWordsIn 0.3s cubic-bezier(0.8, 0, 0.2, 1)
                    forwards;
            }

            &-active-sp {
                display: flex;
                animation: trendWordsInSp 0.3s cubic-bezier(0.8, 0, 0.2, 1)
                    forwards;
            }

            &-inactive {
                animation: trendWordsOut 0.3s cubic-bezier(0.8, 0, 0.2, 1) 0ms 1
                    normal forwards;
            }

            &-container {
                max-width: calc(1000px - 1.5rem);
                width: calc(83.33333vw - 4rem);
                height: 100%;

                @media screen and (min-width: 600px) and (max-width: 959px) {
                    width: calc(100vw - 3rem);
                }

                @media screen and (max-width: 600px) {
                    width: calc(100vw - 2.5rem);
                }

                h5 {
                    height: 4.25rem;
                    color: #000;
                    font-size: 0.9375rem;
                    font-weight: 300;

                    display: flex;
                    align-items: center;
                }
            }
        }

        &__bg {
            width: 100%;
            height: 100%;
            background-color: #ffffffe6;
            backdrop-filter: blur(50px);
            box-shadow: 0 0 20px 0 #0000001a;

            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__container {
            width: 100%;
            height: 100%;
            background-color: #ffffffe6;

            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__left-arrow {
            width: 2.5rem;
            height: 2.5rem;
            cursor: pointer;

            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 100000;
        }

        &__form-wrap {
            position: relative;
            max-width: calc(1200px - 1.5rem);
            width: calc(100vw - 4.5rem);
            padding: 1rem 0;
            margin: 0 auto;

            display: flex;
            align-items: center;

            &-sp {
                width: calc(100vw - 1.5rem);
            }

            svg {
                width: 1.5rem;
                height: 1.5rem;
            }

            &-input {
                width: 100%;
                margin-right: 1rem;
                position: relative;

                &-sp {
                    margin-right: 0;
                }

                :focus {
                    padding-left: 1.5rem !important;
                }

                svg {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 0.625rem;
                    fill: #767676;
                    color: #767676;
                    cursor: pointer;

                    &:last-of-type {
                        left: initial;
                        right: 1rem;
                        fill: #000;
                        color: #000;

                        &:hover {
                            fill: #6a6a6a;
                            color: #6a6a6a;
                        }
                    }
                }
            }
        }

        &__input {
            width: 100%;
            height: 2.75rem;
            font-size: 1rem;
            font-weight: 300;
            border: 1px solid #ababab;
            outline: 0;
            border-radius: 6.188rem;
            margin-right: 3.375rem;
            padding: 0 3rem 0 2.75rem;
            color: #1b1b1b;

            &-sp {
                margin-right: 0;
            }
        }

        &__icon {
            width: 40%;
            max-width: 29.375rem;
            padding-bottom: 1.5rem;

            display: flex;
            align-items: center;
            justify-content: space-between;

            @media (max-width: 600px) {
                width: 80%;
            }

            &-white-bg {
                width: 3rem;
                height: 3rem;
                background-color: #ffffffe6;
                border-radius: 50%;
                box-shadow: 0 0 20px #0000001a;
                cursor: pointer;

                display: flex;
                justify-content: center;
                align-items: center;
            }

            &-black-bg {
                svg {
                    fill: #fff;
                    color: #fff;
                }

                width: 4rem;
                height: 4rem;
                background-color: #000000e6;
                border-radius: 50%;
                box-shadow: 0 0 20px #0000001a;
                filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.1));
                backdrop-filter: blur(7.5px);
                cursor: pointer;

                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    @keyframes trendWordsIn {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(10.25rem);
        }
    }

    @keyframes trendWordsOut {
        0% {
            display: flex;
            transform: translateY(10.25rem);
        }
        100% {
            display: none;
            transform: translateY(100%);
        }
    }

    @keyframes trendWordsInSp {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0);
        }
    }
`;

export default Wrapper;
