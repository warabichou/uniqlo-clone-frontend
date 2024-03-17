import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100%;
    position: relative;

    .sides-container {
        overflow: hidden;
        height: 100%;
    }

    .arrow-container {
        position: absolute;
        top: calc(50% - 47px);
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .left-arrow {
        background: url('https://asset.uniqlo.com/g/icons/arrow-l1-prev.svg');
        margin-left: 0.75rem;
    }

    .right-arrow {
        background: url('https://asset.uniqlo.com/g/icons/arrow-l1-next.svg');
        margin-right: 0.75rem;
    }

    .left-arrow,
    .right-arrow {
        height: 54px;
        width: 22px;
        background-color: pink;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.3s ease;
    }
`;

export default Wrapper;
