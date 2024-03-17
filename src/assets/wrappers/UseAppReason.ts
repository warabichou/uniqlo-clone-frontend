import styled from 'styled-components';

const Wrapper = styled.div`
    .use-app-reason {
        max-width: calc(1200px - 1.5rem);
        width: calc(100vw - 4.5rem);
        margin: auto;

        h2 {
            font-size: 1.5rem;
            font-weight: 300;
            color: #000;
            text-align: center;
            padding: 2rem 0 1rem 0;
        }

        .use-app-reason__link-group {
            display: grid;
            grid-column-gap: 1rem;
            grid-row-gap: 1.5rem;
            grid-template-columns: repeat(3, 1fr);
            margin-bottom: 2rem;

            @media (max-width: 959px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (max-width: 599px) {
                grid-row-gap: 1rem;
                grid-template-columns: auto;
            }

            a {
                display: flex;
                flex-direction: row;
                cursor: pointer;

                img {
                    margin-right: 1rem;
                    width: 11rem;
                }
            }

            .use-app-reason__text-content {
                display: flex;
                flex-direction: column;

                p:first-child {
                    font-size: 1.0625rem;
                    font-weight: 300;
                    margin-bottom: 0.25rem;
                }

                p:last-child {
                    font-size: 0.875rem;
                    font-weight: 300;
                }
            }
        }

        .use-app-reason__link {
            border: 1px solid #1b1b1b;
            width: 30.1875rem;
            height: 3.25rem;
            margin: auto;
            margin-bottom: 3.25rem;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

export default Wrapper;
