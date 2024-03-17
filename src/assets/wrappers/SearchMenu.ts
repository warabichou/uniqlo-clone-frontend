import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: white;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    overflow-y: scroll;

    .search-menu {
        &-container {
            position: absolute;
            top: 5rem;
            width: 100%;

            hr {
                margin: 1rem 0;
                border-bottom: 1px solid #dadada;
            }

            @media (max-width: 600px) {
                padding-top: 2.75rem;
            }
        }

        &-wrap {
            max-width: calc(1000px - 1.5rem);
            width: calc(83.33333vw - 4rem);
            margin: 0 auto;

            @media (max-width: 959px) {
                width: calc(100vw - 2.5rem);
            }
        }
    }
`;

export default Wrapper;
