import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    position: relative;

    .header-category {
        &__slide-in-right {
            opacity: 0;
            animation: 400ms cubic-bezier(0.8, 0, 0.2, 1) 0ms 1 normal forwards
                running slideInRight;
            transform: translateX(-100%);
        }

        &__slide-out-left {
            animation: 498.043ms cubic-bezier(0.8, 0, 0.2, 1) 0ms 1 normal
                forwards running slideOutLeft;
            opacity: 1;
            position: absolute;
            transform: translateX(0);
        }

        &-item {
            img {
                width: 3rem;
                height: 3rem;
                object-fit: cover;
            }

            p {
                font-size: 0.8125rem;
                font-weight: 300;
            }

            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        &__fade-in {
            animation: fadeIn 0.8s cubic-bezier(0, 0, 0, 1) forwards;
            opacity: 0;
            transform: translateY(50px);
        }

        a {
            @media (min-width: 600px) {
                &:nth-child(4n + 1) {
                    animation-delay: 50ms;
                }

                &:nth-child(4n + 2) {
                    animation-delay: 0.1s;
                }

                &:nth-child(4n + 3) {
                    animation-delay: 0.15s;
                }

                &:nth-child(4n + 4) {
                    animation-delay: 0.2s;
                }
            }

            @media (max-width: 599px) {
                &:nth-child(odd) {
                    animation-delay: 50ms;
                }

                &:nth-child(even) {
                    animation-delay: 0.1s;
                }
            }
        }

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 1rem;
        grid-column-gap: 1.5rem;

        @media (min-width: 600px) and (max-width: 959px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 600px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(50px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .selected-category {
        &__container {
            opacity: 0;
            width: 100%;
            position: absolute;
            top: 0;
        }

        &__wrap {
            width: 100%;
        }

        &__title {
            button {
                background: none;
                border: none;
                width: 2.25rem;
                height: 2.25rem;
                margin-right: 0.25rem;
                cursor: pointer;
            }

            p {
                font-size: 1.25rem;
                font-weight: 300;
            }

            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 1rem;
        }

        &__hide {
            display: none;
        }

        &__slide-out-right {
            display: flex;
            animation: 498.043ms cubic-bezier(0.8, 0, 0.2, 1) 0ms 1 normal
                forwards running slideOutRight;
            opacity: 1;
            position: absolute;
            transform: translateX(0);
        }

        &__slide-in-left {
            display: flex;
            position: relative;
            opacity: 0;
            animation: 400ms cubic-bezier(0.8, 0, 0.2, 1) 0ms 1 normal forwards
                running slideInLeft;
            transform: translateX(100%);
        }
    }

    @keyframes slideInRight {
        0% {
            opacity: 0;
            transform: translateX(-100%);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutLeft {
        0% {
            opacity: 1;
            transform: translateX(0);
        }
        100% {
            opacity: 0;
            transform: translateX(-100%);
        }
    }

    @keyframes slideInLeft {
        0% {
            opacity: 0;
            transform: translateX(100%);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutRight {
        0% {
            opacity: 1;
            transform: translateX(0);
        }
        100% {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;

export default Wrapper;
