import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 73px;
    background-color: #fff;
    border-bottom: 1px solid #dadada;
    z-index: 48;

    @media (max-width: 600px) {
        height: 4rem;
    }

    header {
        height: 4.5rem;
        max-width: 1200px;
        margin: auto;

        display: flex;
        align-items: center;

        @media (max-width: 600px) {
            height: 4rem;
        }

        .header {
            &-left {
                height: 2.5rem;
                margin-left: 0.75rem;

                @media (max-width: 1200px) {
                    margin-left: 2.25rem;
                }

                @media (max-width: 600px) {
                    height: 2.0625rem;
                    margin-left: 1.25rem;
                }

                svg:first-child {
                    margin-right: 0.625rem;

                    @media (max-width: 600px) {
                        width: 2.0625rem;
                        height: 2.0625rem;
                    }
                }
            }

            &-right {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-left: auto;
                margin-right: 0.75rem;
                cursor: pointer;

                svg:hover {
                    fill: #6a6a6a;
                    color: #6a6a6a;
                }

                p {
                    color: #000;
                    font-size: 0.75rem;

                    @media (max-width: 960px) {
                        font-size: 0.625rem;
                    }
                }
            }
        }
    }
`;

export default Wrapper;
