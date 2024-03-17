import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    .login {
        padding-top: 6.5rem;
        padding-left: 0.75rem;
        width: 100%;
        height: 100%;
        min-height: calc(100vh - 143px);

        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;

        @media (max-width: 1200px) {
            padding-left: 2.25rem;
            padding-right: 2.25rem;
        }

        @media (max-width: 600px) {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
            padding-top: 5.25rem;
        }

        &-container {
            display: flex;

            @media (max-width: 959px) {
                flex-direction: column;
            }

            hr {
                @media (min-width: 960px) {
                    display: none;
                }
            }
        }

        h5 {
            color: #000;
            font-size: 2rem;
            line-height: 1.4;
            font-weight: 300;
            margin-bottom: 1rem;

            @media (max-width: 600px) {
                font-size: 1.375rem;
            }
        }

        hr {
            border: none;
            border-top: 1px double #dadada;

            &:first-of-type {
                margin-bottom: 1.5rem;
            }

            @media (max-width: 600px) {
                position: absolute;
                width: 100%;
                left: 0;
            }

            &:last-of-type {
                @media (min-width: 600px) {
                    display: none;
                }
            }
        }

        &-password {
            position: relative;

            button {
                border: 0;
                background-color: white;
                width: 2.5rem;
                height: 2.3rem;

                position: absolute;
                top: 45%;
                right: 0.1rem;
                cursor: pointer;

                &:hover {
                    svg {
                        color: #6a6a6a;
                        fill: #6a6a6a;
                    }
                }
            }
        }

        &-text {
            @media (max-width: 600px) {
                padding-top: 2rem;
            }
        }

        &-email {
            margin-bottom: 2rem;

            @media (max-width: 600px) {
                margin-top: 1.5rem;
            }
        }

        &-button {
            width: 50%;
            height: 3.25rem;
            color: #fff;
            font-size: 1rem;
            background-color: #000;
            box-shadow: 0 0 0 0 #000;

            border: none;
            margin-top: 2rem;
            margin-bottom: 1.75rem;
            cursor: pointer;

            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width: 960px) {
                width: calc(50vw - 0.75rem);
            }

            @media (max-width: 600px) {
                width: calc(100vw - 3.5rem);
            }
        }

        &-wrap {
            width: calc(41.66667vw - 2.75rem);
            max-width: calc(500px - 1.5rem);

            @media (max-width: 960px) {
                width: 100%;
            }

            hr {
                margin-bottom: 2rem;
            }

            span {
                display: flex;
                align-items: center;

                p {
                    font-size: 0.9375rem;
                    margin-right: 0.5rem;

                    @media (max-width: 900px) {
                        font-size: 0.875rem;
                    }
                }
            }

            input[type='email'],
            input[type='password'] {
                max-width: 29.875rem;
            }
        }

        &-checkbox {
            position: relative;
            margin-top: 1rem;

            &-input {
                border: none !important;
                background-color: #000 !important;
            }

            input[type='checkbox'] {
                width: 1.25rem;
                height: 1.25rem;
                background-color: #fff;
                border-radius: 0;
                vertical-align: middle;
                border: 2px solid #ababab;
                appearance: none;
                cursor: pointer;
            }

            svg {
                width: 1.25rem;
                position: absolute;
                cursor: pointer;
            }

            display: flex;
            align-items: center;

            label {
                margin-left: 0.75rem;
                font-size: 0.875rem;

                &::before {
                    border-radius: 50%;
                }
            }
        }

        &-required-text {
            font-size: 0.875rem;
            text-align: right;
            margin-top: 1.875rem;
            margin-bottom: 0.5rem;
        }

        .register {
            @media (min-width: 959px) {
                margin-left: 2.5rem;
            }

            @media (max-width: 960px) {
                width: 100%;
            }

            &-text {
                font-size: 1.25rem !important;
                line-height: 1.4;

                @media (max-width: 959px) {
                    font-size: 1.125rem !important;
                }
            }

            p {
                font-size: 0.9375rem;
                margin-bottom: 1rem;

                &:first-of-type {
                    @media (max-width: 600px) {
                        padding-top: 2rem;
                    }
                }

                &:last-of-type {
                    margin-bottom: 2rem;
                }
            }

            &-button {
                border: 1px solid #1b1b1b;
                width: 16.25rem;
                height: 3.125rem;
                margin-bottom: 1rem;

                display: flex;
                justify-content: center;
                align-items: center;

                @media (max-width: 959px) {
                    width: calc(50vw - 0.75rem);
                }

                @media (max-width: 600px) {
                    width: calc(100vw - 3.5rem);
                }
            }
        }

        &-link-text {
            font-size: 0.9375rem;
            color: #005db5;

            &__password {
                position: relative;

                @media (max-width: 960px) {
                    display: block;
                    margin-bottom: 2.25rem;
                }

                hr {
                    width: 100vw;
                    top: 3.25rem;
                    transform: translateX(-1.25rem);
                }
            }
        }
    }
`;

export default Wrapper;
