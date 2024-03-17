import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1.125rem;
    z-index: 2;

    .control-button {
        margin-left: 6.5rem;
        background: none;
        border: none;
        width: 25px;
        height: 25px;

        display: flex;
        align-items: center;
        position: relative;

        .pagination-button__animation {
            fill: transparent;
            stroke: #fff;
            stroke-width: 2;
            stroke-dasharray: 66;
            stroke-dashoffset: 0;
            transform: rotate(-90deg);
            transform-origin: center;
            animation: countdown-animation 4s linear forwards;
        }

        .paused {
            animation-play-state: paused;
        }

        .pagination-button__icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                width: 1rem;
                height: 1rem;
                color: #fff;
            }
        }

        @keyframes countdown-animation {
            0% {
                stroke-dashoffset: 0;
            }
            100% {
                stroke-dashoffset: -60;
            }
        }
    }
`;

export default Wrapper;
