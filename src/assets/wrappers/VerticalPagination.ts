import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    bottom: 2rem;
    z-index: 10;

    .bullet {
        background: #f4f4f4;
        display: block;
        height: 0.25rem;
        margin: 0.5rem 1.25rem;
        opacity: 0.8;
        width: 0.25rem;
        border-radius: 3.125rem;
        box-shadow: 0 1px 3px #0000004d;
    }

    .active {
        background: #fff;
        border: none;
        height: 0.5rem;
        margin: 0.5rem 1.125rem;
        width: 0.5rem;
    }
`;

export default Wrapper;
