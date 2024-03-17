import styled from 'styled-components';

const Wrapper = styled.div`
    header {
        background-color: #fff;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        height: 73px;
        z-index: 48;
        border-bottom: 1px solid #dadada;

        .header {
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 0.75rem;

            &-left {
                display: flex;
                align-items: center;
            }

            &-navigation {
                margin-left: 2.75rem;
                display: flex;
                gap: 2rem;
                position: relative;

                span {
                    font-size: 1.1875rem;
                    font-weight: 400;
                    line-height: 1.2;
                    text-transform: uppercase;
                    font-family: 'UniqloProRegular', sans-serif;
                    border-bottom: 2px solid transparent;
                    cursor: pointer;

                    &:hover {
                        border-bottom: 2px solid #1b1b1b;
                    }
                }
            }

            &-right {
                margin-left: auto;

                display: flex;
                align-items: center;
            }

            &-icon {
                display: flex;
                flex-direction: column;
                align-items: center;

                &:not(:last-child) {
                    margin-right: 1rem;
                }

                p {
                    font-size: 0.75rem;
                    color: #000;
                    font-weight: 300;
                    line-height: 1.2;
                }
            }

            @media (min-width: 1249px) {
                margin-left: auto;
                margin-right: auto;
                max-width: 1200px;
            }

            @media (min-width: 960px) and (max-width: 1248px) {
                margin-left: 1.5rem;
                margin-right: 1.5rem;
            }
        }
    }
`;

export default Wrapper;
