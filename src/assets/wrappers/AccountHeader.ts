import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    background-color: #fff;
    border-bottom: 1px solid #dadada;
    width: 100%;
    height: 73px;
    z-index: 48;

    header {
        display: flex;
        justify-content: space-between;
        max-width: calc(1200px - 1.5rem);
        width: calc(100vw - 4.5rem);
        margin-left: auto;
        margin-right: auto;
        height: 100%;

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
                    height: 2.5rem;
                }
            }

            &-right {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
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
