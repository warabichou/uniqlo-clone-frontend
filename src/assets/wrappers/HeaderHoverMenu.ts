import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    top: 73px;
    width: 100vw;
    background-color: white;

    display: flex;
    justify-content: center;

    opacity: 0;
    animation: fadeIn 0.3s ease-out forwards;

    .show {
        display: block !important;
    }

    .animation {
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
    }

    .header-hover-menu__container {
        display: none;
        max-width: 1200px;
        width: calc(100vw - 3rem);
        padding: 0 0.75rem;
        background-color: #fff;

        .header-hover-menu__title-container {
            .header-hover-menu__title {
                height: 4.125rem;

                span {
                    font-size: 0.9375rem;
                    font-weight: 300;
                    text-decoration: underline;
                }

                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .header-hover-menu__close-btn {
                .cross-icon {
                    width: 1.5rem;
                    height: 1.5rem;
                }

                display: flex;
                flex-direction: column;
                align-items: center;

                p {
                    font-size: 0.75rem;
                    font-weight: 300;
                }

                :hover {
                    cursor: pointer;
                }
            }
        }

        .header-hover-menu__navigation-container {
            display: flex;
            background-color: #fff;

            .header-hover-menu__categories {
                flex: 1;
                display: flex;
                position: relative;

                ul {
                    flex: 1;
                    font-size: 0.9375rem;
                    font-weight: 300;

                    .selected {
                        font-weight: 600;
                        background-color: #f4f4f4;
                    }

                    li {
                        display: flex;
                        align-items: center;
                        background-color: #fff;
                        cursor: pointer;
                        min-height: 2.75rem;
                        padding: 8px 12px;
                        text-align: left;
                    }
                }

                .header-hover-menu__category-content {
                    flex: 1;
                    background-color: #fff;

                    li {
                        font-size: 0.8125rem;
                        font-weight: 300;
                    }

                    ::after {
                        content: '';
                        background-color: #dadada;
                        top: 0;
                        right: 0;
                        width: 1px;
                        bottom: 0;
                        position: absolute;
                    }
                }
            }

            .header-hover-menu__featured-column {
                flex: 1;
                display: flex;

                .header-hover-menu__column-items {
                    flex: 1;
                    background-color: #fff;

                    ul {
                        font-size: 0.9375rem;
                        font-weight: 300;

                        li {
                            display: flex;
                            align-items: center;
                            background-color: #fff;
                            cursor: pointer;
                            min-height: 2.75rem;
                            padding: 8px 12px;
                            text-align: left;
                        }
                    }
                }

                .header-hover-menu__content-right {
                    flex: 1;

                    .header-hover-menu__icon-list {
                        border-bottom: 1px solid #dadada;
                    }

                    .header-hover-menu__icon-container {
                        min-height: 44px;
                        padding: 12px 8px 11px;

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        /* width: calc(100% - 3rem); */
                        opacity: 0;
                        animation: fadeIn 1s ease forwards;

                        p {
                            margin-left: 8px;
                        }

                        &:last-of-type {
                            margin-bottom: 0.75rem;
                        }
                    }

                    .header-hover-menu__featured-list {
                        .header-hover-menu__featured-container {
                            ul {
                                font-size: 0.9375rem;
                                font-weight: 300;

                                li {
                                    display: flex;
                                    align-items: center;
                                    background-color: #fff;
                                    cursor: pointer;
                                    min-height: 2.75rem;
                                    padding: 8px 12px;
                                    text-align: left;
                                }
                            }
                        }
                    }
                }
            }
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }
`;

export default Wrapper;
