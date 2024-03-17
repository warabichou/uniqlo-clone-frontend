import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: transparent;
    position: fixed;
    bottom: 3.125rem;
    width: 100%;
    z-index: 48;

    display: flex;
    justify-content: center;

    .bottom-nav {
        &-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 9.5rem;

            @media (max-width: 599px) {
                width: 80%;
                justify-content: space-between;
                gap: initial;
            }
        }

        &__icon {
            width: 3rem;
            height: 3rem;
            background: #ffffffe6;
            backdrop-filter: blur(7.5px);
            border-radius: 50%;
            box-shadow: 0 0 20px #0000001a;
            cursor: pointer;

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            &-big {
                width: 4rem;
                height: 4rem;
            }
        }
    }
`;

export default Wrapper;
