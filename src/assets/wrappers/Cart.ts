import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;

    .cart {
        padding-top: 73px;
        width: 100%;
        max-width: 1200px;
        max-width: calc(1200px - 1.5rem);
        width: calc(100vw - 4.5rem);
        margin-left: auto;
        margin-right: auto;

        @media (max-width: 600px) {
            width: calc(100vw - 2.5rem);
        }

        &-banner {
            display: flex;
            justify-content: center;

            img {
                max-width: calc(1200px - 1.5rem);
                width: calc(100vw - 4.5rem);

                @media (max-width: 600px) {
                    width: 100vw;
                }
            }
        }

        h5 {
            font-size: 2rem;
            font-weight: 300;
            line-height: 1.4;
            height: 75px;

            display: flex;
            align-items: center;
            border-bottom: 1px solid #dadada;

            @media (max-width: 600px) {
                font-size: 1.375rem;
            }
        }

        &-text {
            font-size: 0.9375rem;
            font-weight: 300;
            height: 4.125rem;

            display: flex;
            align-items: center;
        }

        &-chat {
            display: flex;
            margin-bottom: 3.375rem;

            img {
                width: 23.5rem;
                margin-left: auto;

                @media (max-width: 600px) {
                    width: 100%;
                }
            }
        }

        h1 {
            height: 2.875rem;
            font-size: 1.5rem;
            font-weight: 300;
            line-height: 1.4;
            border-bottom: 1px solid #dadada;

            @media (max-width: 600px) {
                font-size: 1.25rem;
            }
        }

        .primary-link-button {
            margin: initial;
            margin-bottom: 5.5rem;

            @media (max-width: 600px) {
                margin-top: 5.625rem;
                width: 100%;
            }
        }

        &__button-container {
            height: 8.75rem;
        }
    }
`;

export default Wrapper;
