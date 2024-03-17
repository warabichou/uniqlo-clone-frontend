import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    .register {
        width: 100%;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        height: calc(100% - 73px);
        padding-left: 0.75rem;
        transform: translateY(73px);

        @media (max-width: 1200px) {
            padding-left: 2.25rem;
            padding-right: 2.25rem;
        }

        @media (max-width: 600px) {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
        }

        h1 {
            color: #000;
            font-size: 2rem;
            line-height: 1.4;
            font-weight: 300;
            padding-top: 2.25rem;
            margin-bottom: 1rem;

            @media (max-width: 600px) {
                font-size: 1.375rem;
            }
        }

        p {
            font-size: 0.9375rem;
            font-weight: 300;
        }

        &-link {
            height: 3.625rem;
            border-bottom: 1px solid #dadada;

            display: flex;
            align-items: center;

            a {
                color: #005db5;
                font-size: 0.9375rem;
                font-weight: 300;
                width: 8rem;
            }
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 300;
            line-height: 1.4;
            height: 5.625rem;

            display: flex;
            align-items: center;
        }

        &-label {
            width: 47rem;
            display: flex;
            justify-content: end;

            @media (max-width: 960px) {
                width: 100%;
            }

            label {
                font-size: 0.875rem;
                font-weight: 300;

                &::after {
                    content: '※';
                    color: #006ed7;
                    margin-left: 0.25rem;
                }
            }
        }

        &-container {
            max-width: 30rem;

            input {
                margin-bottom: 2rem;
            }
        }

        &-email label,
        &-password label,
        &-postCode label {
            &::after {
                content: '※';
                color: #006ed7;
                margin-left: 0.25rem;
            }
        }

        &-password {
            &-form {
                position: relative;
                button {
                    border: 0;
                    background-color: white;
                    width: 2.5rem;
                    height: 2.3rem;

                    position: absolute;
                    top: 37%;
                    right: 0.1rem;
                    cursor: pointer;

                    &:hover {
                        svg {
                            color: #6a6a6a;
                            fill: #6a6a6a;
                        }
                    }
                }

                input {
                    margin-bottom: 1rem;
                }

                &__password-error {
                    button {
                        top: 30%;
                    }
                }

                &__entered-password-error {
                    margin-bottom: -10px;

                    button {
                        top: 34%;
                    }
                }
            }

            &-description {
                display: flex;
                margin-bottom: 0.5rem;

                svg {
                    margin-right: 0.5rem;
                    min-width: 1.5rem;
                    height: 1.5rem;
                }

                p {
                    font-size: 0.875rem;
                    font-weight: 300;
                }

                &__error-text {
                    color: #e00;
                }
            }
        }

        &-postCode {
            margin-top: 2.5rem;
        }

        &-birth {
            input {
                margin-bottom: 0.5rem;
            }
        }

        &-gender {
            display: flex;
            flex-direction: column;

            &__label {
                margin-top: 2.875rem;
                font-size: 0.875rem !important;
                font-weight: 300;
            }

            .formInputContainer {
                display: inline-block;

                label {
                    margin-bottom: 0;
                    cursor: pointer;

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }

                input[type='radio'] {
                    margin-right: 1rem;
                    width: 1.25rem;
                    height: 1.25rem;
                    margin-bottom: 0;
                    accent-color: #000;
                    cursor: pointer;
                }
            }

            span:last-of-type {
                margin-bottom: -0.625rem;
            }
        }

        &-magazine {
            position: relative;

            label {
                font-size: 0.8125rem;
                font-weight: 300;
                line-height: 1.2;
                margin-bottom: 1rem;
                cursor: pointer;

                display: flex;
                align-items: center;

                &:hover {
                    svg {
                        opacity: 0.7;
                    }
                }
            }

            p {
                margin-bottom: 1.875rem;
            }

            hr {
                position: absolute;
                width: calc(100vw - 4.5rem);
                max-width: 1200px;
                height: 1px;
                background-color: #dadada;
            }

            h5 {
                margin-top: 1.5rem;
            }
        }

        &-magazine,
        &-rule {
            input[type='checkbox'] {
                width: 1.25rem;
                height: 1.25rem;
                min-height: 1.25rem !important;
                margin-bottom: 0;
                margin-right: 1rem;
                border: 2px solid #ababab;
                border-radius: 0;
                vertical-align: middle;
                appearance: none;
                cursor: pointer;

                &:hover {
                    border: 2px solid #000;
                }

                &:focus {
                    border: 2px solid #ababab !important;
                }
            }

            svg {
                background-color: #000 !important;
                width: 1.25rem;
                height: 1.25rem;
                position: absolute;
                cursor: pointer;
            }
        }

        &-rule {
            label {
                position: relative;

                font-size: 0.8125rem;
                font-weight: 300;
                line-height: 1.2;
                cursor: pointer;

                @media (max-width: 525px) {
                    width: 100%;
                    display: block;
                }

                span {
                    position: absolute;
                    top: 2px;
                    width: 28rem;

                    @media (max-width: 525px) {
                        width: calc(100% - 2rem);
                    }
                }

                &:hover {
                    svg {
                        opacity: 0.7;
                    }
                }
            }

            svg:first-of-type {
                top: 1px;
                left: 0;
            }

            .description-text {
                margin-top: 2rem;

                &-error {
                    margin-top: 2rem;
                    color: #e00;
                    font-size: 0.6875rem;
                    font-weight: 300;
                    line-height: 1.2;
                }
            }

            &__link {
                margin-top: 2rem;
                &-container {
                    margin-bottom: 1rem;

                    svg {
                        position: initial;
                        margin-right: 0.75rem;
                        width: 1.5rem;
                        height: 1.5rem;
                    }

                    display: flex;
                    align-items: center;

                    a {
                        height: 1.25rem;

                        &:first-of-type {
                            padding-right: 0.4rem;
                            margin-right: 0.4rem;
                            border-right: 1px solid #1b1b1b;
                        }
                    }
                }

                &-text {
                    font-size: 0.875rem;
                    color: #005db5;
                }
            }
        }

        h5 {
            font-size: 0.875rem;
            font-weight: 300;
            height: 3.75rem;

            display: flex;
            align-items: center;
        }

        &-button {
            color: #fff;
            font-size: 1rem;
            font-weight: 300;
            line-height: 1.2;
            background-color: #000;
            border: none;
            height: 3.25rem;
            width: 100%;
            margin-top: 1rem;
            margin-bottom: 3.125rem;
            cursor: pointer;

            @media (min-width: 600px) {
                width: 75%;
            }
        }

        .errorInput {
            margin-bottom: 0;
        }

        .errorText {
            margin-bottom: 1rem;
        }

        .description-text {
            color: #6a6a6a;
            font-size: 0.6875rem;
            font-weight: 300;
            line-height: 1.2;
        }

        &-tsl {
            width: 47rem;
            padding-bottom: 10rem;

            display: flex;
            flex-direction: row;

            @media (max-width: 960px) {
                width: 100%;
            }

            svg {
                min-width: 1.5rem;
                margin-right: 0.5rem;
            }

            p {
                font-size: 0.8125rem;
                font-weight: 300;

                a {
                    color: #005db5;
                    font-size: 0.875rem;
                }
            }
        }
    }
`;

export default Wrapper;
