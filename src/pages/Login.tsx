import { useState } from 'react';
import Wrapper from '../assets/wrappers/Login';
import { Link } from 'react-router-dom';
import { CopyRightFooter, GUHeader, FormInput } from '../components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SeePassword from '../assets/see-password.svg?react';
import NoSeePassword from '../assets/no-see-password.svg?react';
import { LoginSchema, loginSchema } from '../types';
import { useGetCustomToast } from '../hooks/useGetCustomToast';

const Login = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<LoginSchema> = () => {
        console.log(watch('email'));
        console.log(watch('password'));
    };

    const [isCheck, setIsCheck] = useState<boolean>(false);

    const { noPathError } = useGetCustomToast();

    return (
        <Wrapper>
            <GUHeader />
            <div className="login">
                <h5>ログイン</h5>
                <hr />

                <div className="login-container">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="login-wrap"
                    >
                        <span className="login-email">
                            <FormInput
                                id="email"
                                type="email"
                                register={{
                                    ...register('email'),
                                }}
                                label="メールアドレス"
                                placeholder="xxx@uniqlo.com"
                                isError={errors.email}
                                errorMessage={errors.email?.message}
                            />
                        </span>

                        <span className="login-password">
                            <FormInput
                                id="password"
                                type={`${isCheck ? 'text' : 'password'}`}
                                register={{
                                    ...register('password'),
                                }}
                                label="パスワード"
                                placeholder="パスワードを入力してください。"
                                isError={errors.password}
                                errorMessage={errors.password?.message}
                            />
                            {isCheck ? (
                                <button
                                    type="button"
                                    onClick={() => setIsCheck(false)}
                                    style={{ top: errors.password && '35%' }}
                                >
                                    <SeePassword />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => setIsCheck(true)}
                                    style={{ top: errors.password && '35%' }}
                                >
                                    <NoSeePassword />
                                </button>
                            )}
                        </span>

                        <button className="login-button">ログイン</button>
                        <Link
                            to="#"
                            className="login-link-text login-link-text__password"
                            onClick={noPathError}
                        >
                            パスワードを忘れた方はこちら
                            <hr />
                        </Link>
                    </form>

                    <hr />

                    <div className="register">
                        <p className="register-text">新規会員の登録</p>
                        <Link to="/register" className="register-button">
                            新規会員登録
                        </Link>
                        <p>
                            オンラインストアをご利用いただくには、会員登録が必要です。
                        </p>
                        <p>新規会員登録でクーポンをプレゼントします。</p>
                    </div>
                </div>
            </div>

            <CopyRightFooter />
        </Wrapper>
    );
};

export default Login;
