import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: transparent;
    position: fixed;
    top: 0.75rem;
    width: 100%;
    height: 2.875rem;
    z-index: 48;

    header {
        display: flex;
        justify-content: space-between;
        max-width: calc(1200px - 1.5rem);
        width: calc(100vw - 4.5rem);
        margin-left: auto;
        margin-right: auto;
        height: 100%;
        background-color: transparent;

        @media (max-width: 599px) {
            width: calc(100vw - 1.25rem);
        }

        nav {
            height: 100%;

            a {
                height: 100%;
                display: flex;
                align-items: center;
                position: relative;
            }
        }

        .header {
            &-left {
                svg {
                    height: 2.125rem;
                }
            }

            &-middle {
                width: 25.75rem;
                padding: 0 1.5rem;
                display: flex;
                justify-content: space-between;

                @media (min-width: 600px) and (max-width: 959px) {
                    width: 16.813rem;
                }

                @media (max-width: 599px) {
                    position: absolute;
                    top: 3.25rem;
                    left: 50%;
                    transform: translateX(-50%);
                }

                @media (max-width: 420px) {
                    width: 100%;
                }

                span {
                    height: 100%;
                    color: white;
                    font-size: 1.0625rem;
                    font-weight: 400;
                    font-family: 'UniqloProRegular', sans-serif;
                    text-shadow: 0 1px 1px #0009;
                    text-transform: uppercase;

                    display: flex;
                    align-items: center;

                    @media (max-width: 959px) {
                        font-size: 0.9375rem;
                    }
                }

                &__active::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    border-color: #fff;
                    box-shadow: 0 1px 1px #0009;
                    border-bottom: 1px solid #fff;
                }
            }

            &-right {
                display: flex;

                a {
                    fill: #fff;
                    color: #fff;
                    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.6));

                    width: 2.75rem;
                    height: 2.875rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &:first-child {
                        margin-right: 0.5rem;
                    }
                }

                svg:hover {
                    fill: #6a6a6a;
                    color: #6a6a6a;
                }
            }
        }
    }
`;

export default Wrapper;
