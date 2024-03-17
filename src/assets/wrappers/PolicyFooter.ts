import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    footer {
        position: absolute;
        width: 100%;
        left: 0;
        background-color: #f4f4f4;

        .footer-container {
            display: flex;
            max-width: calc(1200px - 1.5rem);
            width: calc(100vw - 4.5rem);
            margin-left: auto;
            margin-right: auto;

            @media (max-width: 600px) {
                width: calc(100vw - 2.5rem);
                flex-direction: column;
            }

            &-link {
                p {
                    font-size: 0.9375rem;
                    color: #000;
                    padding: 1.5rem 0;

                    @media (max-width: 600px) {
                        font-size: 0.875rem;
                        padding: 1.25rem 0;
                    }
                }

                a:first-child {
                    p {
                        padding-right: 1rem;
                        position: relative;

                        @media (max-width: 600px) {
                            padding-bottom: 0;
                        }

                        &::before {
                            content: '';
                            position: absolute;
                            top: 50%;
                            right: 0;
                            transform: translateY(-50%);
                            width: 0.5px;
                            height: 35%;
                            background-color: #1b1b1b;

                            @media (max-width: 600px) {
                                display: none;
                            }
                        }
                    }
                }

                a:last-child {
                    p {
                        padding-left: 1rem;

                        @media (max-width: 600px) {
                            padding-left: 0;
                            padding-top: 1rem;
                        }
                    }
                }
            }

            &__copy-right {
                p {
                    color: #6a6a6a;
                    font-size: 0.8125rem;
                    font-weight: 300;
                    margin-bottom: 1.5rem;
                }
            }
        }

        hr {
            border-left: none;
            border-right: none;
            border-top: none;
            border-bottom: 1px solid #dadada;
            margin-bottom: 1.5rem;
        }
    }
`;

export default Wrapper;
