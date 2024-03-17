import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;

    .media-banner {
        &__shadow {
            width: 100%;
            height: 9.375rem;
            background-image: linear-gradient(#0000004d, #0000);

            position: absolute;
            top: 0;
        }

        &__model-name {
            position: absolute;
            right: 8%;
            bottom: 2rem;
            color: #fff;
            font-size: 0.6875rem;
        }

        &__normal-type {
            position: absolute;
            bottom: 27%;
            left: 8%;

            @media (max-width: 600px) {
                left: 10%;
            }

            .media-banner {
                &__product {
                    &-mark {
                        width: 5.625rem;
                        margin-bottom: 2rem;
                    }

                    &-description {
                        color: #fff;
                        font-size: 1.625rem;
                        font-weight: 300;
                        line-height: 1.5;
                        text-shadow: 0 1px 1px #0009;

                        @media (max-width: 959px) {
                            font-size: 1.875rem;
                        }

                        @media (max-width: 599px) {
                            font-size: 1.375rem;
                        }
                    }

                    &-feature {
                        color: #fff;
                        font-size: 1.0625rem;
                        font-weight: 300;
                        line-height: 1.5;
                        margin-top: 1rem;
                        text-shadow: 0 1px 1px #0009;

                        @media (max-width: 959px) {
                            font-size: 1.125rem;
                        }

                        @media (max-width: 599px) {
                            font-size: 1.0625rem;
                        }
                    }

                    &-copyright {
                        color: #fff;
                        font-size: 0.5rem;
                        font-weight: 600;
                        line-height: 1.2;
                        text-shadow: 0 1px 1px #0009;
                        margin-top: 1rem;

                        &-mt {
                            margin-top: 0;
                        }
                    }
                }

                &__price {
                    color: #e00;
                    font-weight: 400;
                    text-align: left;

                    &-white {
                        color: #fff;
                    }

                    &-wrap {
                        margin-top: 1rem;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        letter-spacing: -0.125rem;
                        transform: translateX(-6px);
                    }

                    &-mark {
                        font-size: 2.1rem;
                        font-weight: bold;
                        width: 28px;

                        &-fix {
                            width: initial;
                        }
                    }

                    &-text {
                        font-family: UniqloProRegular, sans-serif;
                        font-size: 2.25rem;
                        font-weight: 400;
                        line-height: 1.2;
                    }

                    &-description {
                        font-size: 0.8125rem;
                        font-weight: 300;
                        margin-bottom: 1.5rem;
                        margin-top: 0.5rem;
                    }
                }
            }
        }
    }

    .description-container {
        width: 100%;
        height: 100%;
        z-index: 2;
        position: relative;

        .media-banner__button-type {
            height: 100%;

            margin-left: 8%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            @media (max-width: 599px) {
                margin-left: 0;
                justify-content: flex-end;
                align-items: center;
                text-align: center;
            }

            .media-banner {
                &__product {
                    &-description {
                        color: #fff;
                        font-size: 2.25rem;
                        font-weight: 400;
                        text-shadow: 0 1.5px 1.5px #0009;
                        line-height: 1.4;
                        white-space: pre-line;

                        @media (max-width: 959px) {
                            font-size: 1.875rem;
                        }

                        @media (max-width: 599px) {
                            font-size: 1.375rem;
                        }
                    }

                    &-feature {
                        color: #fff;
                        font-size: 0.9375rem;
                        margin-top: 0.75rem;
                        font-weight: 300;
                        line-height: 1.4;
                        text-shadow: 0 1.5px 1.5px #0009;

                        @media (max-width: 959px) {
                            font-size: 1.125rem;
                        }

                        @media (max-width: 599px) {
                            font-size: 0.8125rem;
                        }
                    }
                }
            }

            button {
                font-size: 0.8125rem;
                font-weight: 300;
                line-height: 1.2;
                width: 9.375rem;
                min-width: 9.375rem;
                height: 2.5rem;
                background: #fff;
                border: none;
                border-radius: 0;
                color: #1b1b1b;
                letter-spacing: 0.025rem;
                margin-bottom: 1rem;
                margin-top: 1.5rem;
                opacity: 0.85;
                text-transform: uppercase;
                cursor: pointer;

                display: flex;
                align-items: center;
                justify-content: center;

                @media (max-width: 599px) {
                    margin-bottom: 5rem;
                }
            }
        }

        @media (min-width: 600px) and (max-width: 959px) {
            width: calc(100vw - 3rem);
        }

        @media (max-width: 600px) {
            padding: 0 10%;
        }
    }
`;

export default Wrapper;
