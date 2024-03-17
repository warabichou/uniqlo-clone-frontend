import Wrapper from '../assets/wrappers/FormInput';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type FormInputProps = {
    id: string;
    label: string;
    htmlFor?: string;
    value?: string | number;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type:
        | 'text'
        | 'email'
        | 'number'
        | 'password'
        | 'date'
        | 'radio'
        | 'checkbox';
    autoComplete?: 'on';
    placeholder?: string;
    register?: UseFormRegisterReturn;
    isError?: FieldError;
    errorMessage?: string;
};

const FormInput = ({
    id,
    label,
    htmlFor,
    value,
    checked,
    onChange,
    type = 'text',
    autoComplete,
    register,
    placeholder,
    isError,
    errorMessage,
}: FormInputProps): JSX.Element => {
    return (
        <Wrapper>
            <div
                className={`formInputContainer ${isError && 'formInputError'}`}
            >
                {type === 'radio' || type === 'checkbox' ? (
                    <label htmlFor={htmlFor}>
                        <input
                            id={id}
                            type={type}
                            value={value}
                            defaultChecked={checked}
                            className={`${isError && 'errorInput'}`}
                            {...register}
                            onChange={onChange}
                            autoComplete={autoComplete}
                            placeholder={placeholder}
                        />
                        {label}
                        {type === 'checkbox' && checked && (
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                focusable="false"
                                fill="#fff"
                                role="presentation"
                            >
                                <path d="M11 16.414L6.04999 11.465L7.46399 10.051L11 13.586L17.364 7.22205L18.778 8.63605L11 16.414Z"></path>
                            </svg>
                        )}
                    </label>
                ) : (
                    <>
                        <label htmlFor={htmlFor}>{label}</label>
                        <input
                            id={id}
                            type={type}
                            value={value}
                            className={`${isError && 'errorInput'}`}
                            {...register}
                            onChange={(e) => {
                                register?.onChange(e) && register?.onChange(e);
                                onChange && onChange(e);
                            }}
                            autoComplete={autoComplete}
                            placeholder={placeholder}
                        />
                    </>
                )}

                {isError && <p className="errorText">{errorMessage}</p>}
            </div>
        </Wrapper>
    );
};

export default FormInput;
