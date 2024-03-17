import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    .trend-words-history {
        &__title {
            padding: 0.5rem 0;
            margin-bottom: 0.5rem;
            border-bottom: 1px solid #dadada;

            display: flex;
            align-items: center;
            justify-content: space-between;

            h5 {
                font-size: 0.9375rem;
                font-weight: 300;
                height: 2.8rem;
                width: 100%;
            }

            &-icon {
                cursor: pointer;
            }
        }

        &__items {
            &-title {
                height: 3.25rem;
                font-size: 0.9375rem;
                font-weight: 300;
                cursor: pointer;

                display: flex;
                align-items: center;
                justify-content: space-between;

                a {
                    width: 100%;
                    height: 100%;

                    display: flex;
                    align-items: center;
                }

                svg {
                    width: 1.5rem;
                    height: 1rem;
                    fill: #1b1b1b;

                    cursor: pointer;
                }

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;

export default Wrapper;
