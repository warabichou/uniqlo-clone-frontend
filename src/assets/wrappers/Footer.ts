import styled from 'styled-components';

const Wrapper = styled.footer`
    background-color: #f4f4f4;
    padding: 1.5rem 0;
    margin-top: 1rem;

    .footer {
        &-link {
            &-container {
                max-width: 1200px;
                padding: 0 0.75rem;
                margin: auto;

                @media (min-width: 960px) and (max-width: 1248px) {
                    margin: 0 1.5rem;
                }

                @media (max-width: 600px) {
                    padding: 0 1.25rem;
                }

                ul {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;

                    li {
                        font-size: 0.8125rem;
                        font-weight: 300;
                        margin: 0.25rem 1rem 0.25rem 0;
                        padding-right: 1rem;
                        position: relative;

                        &:not(:last-child)::after {
                            content: '';
                            border-right: 1px solid #1b1b1b;
                            bottom: 0;
                            height: 1rem;
                            margin: auto;
                            position: absolute;
                            right: 0;
                            top: 0;
                        }

                        @media (min-width: 600px) and (max-width: 959px) {
                            margin: 0.75rem 0.75rem 0.75rem 0;
                        }
                    }

                    &:first-child {
                        @media (max-width: 600px) {
                            flex-direction: column;
                            &::after {
                                height: 0;
                            }

                            li {
                                margin: 0;
                                padding: 0.75rem 0;

                                &::after {
                                    display: none;
                                }
                            }
                        }
                    }
                }
            }

            &-group {
                &__title {
                    color: #6a6a6a;
                    font-size: 0.8125rem;
                    font-weight: 300;
                    margin: 0.75rem 0;
                }
            }
        }

        &-border {
            margin: 1.5rem 0;
            border-bottom: 1px solid #dadada;
        }

        &-bottom {
            max-width: 1200px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 0.75rem;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 10.25rem;

            p {
                font-size: 0.8125rem;
                font-weight: 300;
                color: #6a6a6a;
                margin-bottom: 1rem;
            }

            @media (min-width: 960px) and (max-width: 1248px) {
                margin-left: 1.5rem;
                margin-right: 1.5rem;
            }

            @media (max-width: 600px) {
                margin-bottom: 14.438rem;
                flex-direction: column;
                align-items: start;
            }

            &__social-media {
                a:not(:last-child) {
                    margin-right: 0.5rem;
                }
            }
        }
    }
`;

export default Wrapper;
