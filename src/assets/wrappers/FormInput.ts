import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;

    .formInputContainer {
        display: flex;
        flex-direction: column;

        label {
            font-size: 0.875rem;
            color: #000;
            margin-bottom: 0.5rem;
        }

        .errorText {
            color: #e00;
            font-size: 0.6875rem;
            font-weight: 300;
            line-height: 1.2;
            margin-top: 0.5rem;
        }

        .errorInput {
            border-color: #e00 !important;

            &:focus {
                border: 2px solid #e00 !important;
            }
        }

        input {
            border: 1px solid #767676;
            font-size: 1rem;
            color: #000;
            padding: 0 0.5rem;
            min-height: 44px;

            &:focus {
                border: 2px solid #005db5 !important;
            }
        }
    }
`;

export default Wrapper;
