import styled from 'styled-components';

const Wrapper = styled.div`
    backdrop-filter: blur(25px);
    background-color: #ffffffe6;
    position: fixed;
    padding-top: 0.75rem;
    width: 100%;
    height: 3.625rem;
    z-index: 48;

    header {
        display: flex;
        justify-content: space-between;
        max-width: calc(1200px - 1.5rem);
        width: calc(100vw - 2.25rem);
        margin-left: auto;
        margin-right: auto;
        height: 100%;

        @media (max-width: 599px) {
            width: calc(100vw - 1.25rem);
        }

        nav {
            height: 100%;

            div {
                height: 100%;
                display: flex;
                align-items: center;
                position: relative;
                cursor: pointer;
            }
        }

        .header {
            &-left {
                svg {
                    height: 2.125rem;
                }
            }

            &-middle {
                max-width: 37.5rem;
                width: calc(50vw - 1.5rem);
                padding: 0 1.5rem;
                display: flex;
                justify-content: space-between;

                @media (max-width: 599px) {
                    position: absolute;
                    width: 100vw;
                    height: 2.75rem;
                    top: 3.5rem;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #ffffffe6;
                    backdrop-filter: blur(25px);
                }

                @media (max-width: 420px) {
                    width: 100%;
                }

                span {
                    height: 100%;
                    color: #6a6a6a;
                    font-size: 1.0625rem;
                    font-weight: 400;
                    font-family: 'UniqloProRegular', sans-serif;
                    text-transform: uppercase;

                    display: flex;
                    align-items: center;

                    @media (max-width: 959px) {
                        font-size: 0.9375rem;
                    }

                    &:hover {
                        color: #000;
                    }
                }

                &-black__active {
                    color: #000 !important;
                }

                &-black__active::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    border-color: #fff;
                    border-bottom: 1px solid #000;
                }
            }

            &-right {
                display: flex;

                a {
                    fill: #000;
                    color: #000;

                    width: 2.75rem;
                    height: 2.875rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &:first-child {
                        margin-right: 0.5rem;
                    }

                    &:hover {
                        fill: #6a6a6a;
                        color: #6a6a6a;
                    }
                }
            }
        }
    }
`;

export default Wrapper;
