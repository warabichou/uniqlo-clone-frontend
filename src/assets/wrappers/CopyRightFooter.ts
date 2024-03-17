import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    background-color: #f4f4f4;

    footer {
        .link {
            padding: 1.5rem 0 1.5rem 0.75rem;
            border-bottom: 1px solid #dadada;

            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;

            display: flex;

            @media (max-width: 1200px) {
                padding-left: 2.25rem;
            }

            @media (max-width: 600px) {
                flex-direction: column;
                padding-left: 1.25rem;
            }

            &-container {
                display: flex;
                align-items: center;

                &:first-of-type {
                    margin-right: 1rem;

                    @media (max-width: 600px) {
                        margin-bottom: 1rem;
                    }
                }
            }

            &-mark {
                padding: 0 0.4rem;
                height: 1.65rem;
            }
        }

        svg {
            width: 1.5rem;
            height: 1.5rem;
            margin-right: 1rem;
        }

        p {
            padding: 1.5rem 0 1.5rem 0.75rem;

            @media (max-width: 1200px) {
                padding-left: 2.25rem;
            }

            @media (max-width: 600px) {
                padding-left: 1.25rem;
                padding-right: 0.5rem;
            }

            font-size: 0.8125rem;
            color: #6a6a6a;
            font-weight: 300;

            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }
    }
`;

export default Wrapper;
