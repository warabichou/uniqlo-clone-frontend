import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;

    .search-menu-horizontal-list {
        &__title {
            font-size: 1.5rem;
            font-weight: 300;
            line-height: 1.4;
            height: 4.1rem;

            display: flex;
            align-items: center;
        }

        &__container {
            display: grid;
            grid-row-gap: 1rem;
            grid-template-columns: repeat(5, 1fr);
        }

        &__item {
            width: 100%;
            position: relative;

            &-img {
                width: 100%;
                padding-top: 100%;
                background-size: cover;
                background-repeat: no-repeat;
                background-position-x: center;
                position: relative;
            }

            &-text {
                padding-right: 0.75rem;

                &-title {
                    margin-top: 0.75rem;
                    font-size: 0.8125rem;
                    font-weight: 300;
                }

                &-description {
                    margin-top: 0.25rem;
                    font-size: 0.8125rem;
                    font-weight: 300;
                    color: #6a6a6a;
                }
            }
        }
    }
`;

export default Wrapper;
