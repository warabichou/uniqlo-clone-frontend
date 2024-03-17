import styled from 'styled-components';

const Wrapper = styled.div`
    .tertiary-horizontal-slider {
        &__title {
            font-size: 1.25rem;
            font-weight: 300;
            line-height: 1.4;
            height: 3.75rem;

            display: flex;
            align-items: center;
        }

        &__container {
            img {
                width: 100%;
                height: 100%;
            }

            .tertiary-horizontal-slider__video {
                position: relative;

                video {
                    height: initial !important;
                }
            }
        }

        &__text {
            &-title {
                margin-top: 0.125rem;
                font-size: 0.8125rem;
                font-weight: 300;
                color: #000;
            }

            &-description {
                margin-top: 0.25rem;
                font-size: 0.75rem;
                font-weight: 300;
                color: #6a6a6a;
            }
        }
    }
`;

export default Wrapper;
