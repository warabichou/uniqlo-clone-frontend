import Wrapper from '../assets/wrappers/Register';
import { FormInput, GUHeader, PolicyFooter } from '../components';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, registerSchema } from '../types';
import SeePassword from '../assets/see-password.svg?react';
import NoSeePassword from '../assets/no-see-password.svg?react';
import GreyCircle from '../assets/grey-circle.svg?react';
import UniqloIcon from '../assets/uniqlo-icon.svg?react';
import GUIcon from '../assets/gu-icon.svg?react';
import Lock from '../assets/lock.svg?react';
import RedCross from '../assets/red-cross.svg?react';
import GreenCheck from '../assets/green-check.svg?react';
import { useState } from 'react';
import { useGetCustomToast } from '../hooks/useGetCustomToast';
import { toast } from 'react-toastify';
import { useBirthdayInput } from '../hooks/useBirthdayInput';

const Register = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        watch,
        trigger,
        formState: { errors },
    } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
    });

    const [passwordCheck, setPasswordCheck] = useState<boolean>(false);
    const [isPasswordEntered, setIsPasswordEntered] = useState<boolean>(false);
    const [uniqloCheck, setUniqloCheck] = useState<boolean>(true);
    const [guCheck, setGuCheck] = useState<boolean>(true);
    const [ruleCheck, setRuleCheck] = useState<boolean>(false);

    const radioButtons = [
        { id: 'female', label: '女性', value: '0' },
        { id: 'male', label: '男性', value: '1' },
        { id: 'other', label: 'その他', value: '2' },
    ];

    const { enteredBirthday, setEnteredBirthday } = useBirthdayInput();

    const checkboxList = [
        {
            id: 'uniqlo-magazine',
            label: 'ユニクロメールマガジン',
            checked: true,
        },
        {
            id: 'gu-magazine',
            label: 'ジーユーメールマガジン',
            checked: true,
        },
    ];

    const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

    const { noPathError } = useGetCustomToast();

    function updateInputValueHandler(
        inputType: string,
        enteredValue: React.ChangeEvent<HTMLInputElement>
    ) {
        let numericValue;

        switch (inputType) {
            case 'birthday':
                numericValue = enteredValue.target.value.replace(/[^0-9]/g, '');
                if (
                    numericValue.length > 8 ||
                    enteredValue.target.value.length > 10
                ) {
                    return;
                }
                if (
                    enteredValue.target.value.match(/\//g)?.length === 2 &&
                    enteredValue.target.value.slice(-1) !== '/'
                ) {
                    setEnteredBirthday(
                        enteredValue.target.value.replace(/[^0-9/]/g, '')
                    );
                    return;
                }

                if (numericValue.length === 4 && enteredBirthday.length === 5) {
                    setEnteredBirthday(numericValue.substring(0, 3));
                } else if (
                    numericValue.length === 6 &&
                    enteredBirthday.length === 8
                ) {
                    setEnteredBirthday(numericValue.substring(0, 5));
                } else {
                    setEnteredBirthday(numericValue);
                }
                break;

            case 'password':
                enteredValue.target.value.length > 0
                    ? setIsPasswordEntered(true)
                    : setIsPasswordEntered(false);
        }
    }

    const onSubmit: SubmitHandler<RegisterSchema> = () => {
        if (!ruleCheck && !('key' in errors)) {
            scrollTo({
                top: 0,
            });
            return;
        } else if (!ruleCheck && 'key' in errors) {
            return;
        }
        console.log(watch('email'));
        console.log(watch('emailConfirm'));
        console.log(watch('password'));
        console.log(watch('postCode'));
        console.log(watch('birth'));
        console.log(watch('gender'));
        console.log(watch('uniqloMagazine'));
        console.log(watch('guMagazine'));

        toast.success('メールアドレス: ' + watch('email'));
        toast.success('メールアドレス(確認用): ' + watch('emailConfirm'));
        toast.success('パスワード: ' + watch('password'));
        toast.success('郵便番号: ' + watch('postCode'));
        toast.success('生年月日: ' + watch('birth'));
        toast.success('性別: ' + watch('gender'));
        toast.success('ユニクロメールマガジン: ' + watch('uniqloMagazine'));
        toast.success('ジーユーメールマガジン: ' + watch('guMagazine'));
    };

    return (
        <Wrapper>
            <GUHeader hasRightIcon />

            <div className="register">
                <h1>新規会員の登録</h1>
                <p>
                    ご登録完了後、ご入力いただいたメールアドレスに、ご登録の確認メールをお送りします。(ご登録前にメールの受信設定のご確認をお願いします)
                </p>

                <span className="register-link">
                    <Link
                        target="_blank"
                        to="https://faq.uniqlo.com/articles/FAQ/100001666/?_ga=2.245987138.797631838.1708145259-474271579.1694250300"
                    >
                        メールの受信設定
                    </Link>
                </span>

                <h2>会員情報</h2>

                <div className="register-label">
                    <label>必須項目</label>
                </div>

                <div className="register-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="register-email">
                            <FormInput
                                id="email"
                                type="email"
                                register={{
                                    ...register('email', {
                                        onChange: () => trigger('email'),
                                    }),
                                }}
                                label="メールアドレス"
                                placeholder="xxx@uniqlo.com"
                                isError={errors.email}
                                errorMessage={errors.email?.message}
                            />
                        </div>
                        <div className="register-email">
                            <FormInput
                                id="emailConfirm"
                                type="email"
                                register={{
                                    ...register('emailConfirm', {
                                        onChange: () => trigger('emailConfirm'),
                                    }),
                                }}
                                label="メールアドレス(確認用)"
                                placeholder="xxx@uniqlo.com"
                                isError={errors.emailConfirm}
                                errorMessage={errors.emailConfirm?.message}
                            />
                        </div>
                        <div className="register-password">
                            <div
                                className={`register-password-form ${
                                    errors.password &&
                                    !isPasswordEntered &&
                                    'register-password-form__password-error'
                                } ${
                                    errors.password &&
                                    isPasswordEntered &&
                                    'register-password-form__entered-password-error'
                                }`}
                            >
                                <FormInput
                                    id="password"
                                    type={`${
                                        passwordCheck ? 'text' : 'password'
                                    }`}
                                    register={{
                                        ...register('password', {
                                            onChange: () => trigger('password'),
                                        }),
                                    }}
                                    onChange={updateInputValueHandler.bind(
                                        this,
                                        'password'
                                    )}
                                    label="パスワード"
                                    placeholder="パスワードを入力してください。"
                                    isError={errors.password}
                                    errorMessage={
                                        !isPasswordEntered &&
                                        errors.password?.message
                                            ? errors.password?.message
                                            : ''
                                    }
                                />
                                {passwordCheck ? (
                                    <button
                                        type="button"
                                        onClick={() => setPasswordCheck(false)}
                                        style={{
                                            top: errors.password && '35%',
                                        }}
                                    >
                                        <SeePassword />
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => setPasswordCheck(true)}
                                    >
                                        <NoSeePassword />
                                    </button>
                                )}
                            </div>

                            <div className="register-password-description">
                                {isPasswordEntered &&
                                (errors.password?.message?.includes(
                                    '8 character(s)'
                                ) ||
                                    errors.password?.message?.includes(
                                        '20 character(s)'
                                    )) ? (
                                    <RedCross />
                                ) : !isPasswordEntered ? (
                                    <GreyCircle />
                                ) : (
                                    <GreenCheck />
                                )}

                                <p
                                    className={`${
                                        isPasswordEntered &&
                                        (errors.password?.message?.includes(
                                            '8 character(s)'
                                        ) ||
                                            errors.password?.message?.includes(
                                                '20 character(s)'
                                            )) &&
                                        'register-password-description__error-text'
                                    }`}
                                >
                                    8文字以上20文字以内で入力してください。
                                </p>
                            </div>
                            <div className="register-password-description">
                                {isPasswordEntered &&
                                (errors.password as any)?.regex01 ? (
                                    <RedCross />
                                ) : !isPasswordEntered ? (
                                    <GreyCircle />
                                ) : (
                                    <GreenCheck />
                                )}
                                <p>半角英字と半角数字を含めてください。</p>
                            </div>
                            <div className="register-password-description">
                                {isPasswordEntered &&
                                (errors.password as any)?.regex02 ? (
                                    <RedCross />
                                ) : !isPasswordEntered ? (
                                    <GreyCircle />
                                ) : (
                                    <GreenCheck />
                                )}
                                <p>
                                    次の記号も任意で使用可能です。
                                    {String.fromCharCode(33)}
                                    {String.fromCharCode(34)}
                                    {String.fromCharCode(35)}
                                    {String.fromCharCode(36)}
                                    {String.fromCharCode(37)}
                                    {String.fromCharCode(38)}
                                    {String.fromCharCode(39)}
                                    {String.fromCharCode(40)}
                                    {String.fromCharCode(41)}
                                    {String.fromCharCode(42)}
                                    {String.fromCharCode(43)}
                                    {String.fromCharCode(44)}
                                    {String.fromCharCode(45)}
                                    {String.fromCharCode(46)}
                                    {String.fromCharCode(47)}
                                    {String.fromCharCode(58)}
                                    {String.fromCharCode(59)}
                                    {String.fromCharCode(60)}
                                    {String.fromCharCode(61)}
                                    {String.fromCharCode(62)}
                                    {String.fromCharCode(63)}
                                    {String.fromCharCode(64)}
                                    {String.fromCharCode(91)}
                                    {String.fromCharCode(93)}
                                    {String.fromCharCode(94)}
                                    {String.fromCharCode(95)}
                                    {String.fromCharCode(96)}
                                    {String.fromCharCode(123)}
                                    {String.fromCharCode(125)}
                                    {String.fromCharCode(124)}
                                    {String.fromCharCode(126)}
                                </p>
                            </div>
                        </div>
                        <div className="register-postCode">
                            <FormInput
                                id="postCode"
                                type="text"
                                register={{
                                    ...register('postCode', {
                                        onChange: () => trigger('postCode'),
                                    }),
                                }}
                                label="郵便番号"
                                placeholder="郵便番号を入力してください。"
                                isError={errors.postCode}
                                errorMessage={errors.postCode?.message}
                            />
                        </div>
                        <div className="register-birth">
                            <FormInput
                                id="birth"
                                type="text"
                                register={{
                                    ...register('birth', {
                                        onChange: () => trigger('birth'),
                                    }),
                                }}
                                value={enteredBirthday}
                                onChange={updateInputValueHandler.bind(
                                    this,
                                    'birthday'
                                )}
                                label="生年月日"
                                placeholder="YYYY/MM/DD"
                                isError={errors.birth}
                                errorMessage={errors.birth?.message}
                            />
                            <p className="description-text">
                                年月日(YYYY/MM/DD)の順で入力してください。生年月日は一度登録すると変更することはできません。
                            </p>
                        </div>

                        <div className="register-gender">
                            <p className="register-gender__label">性別</p>
                            {radioButtons.map((radio) => {
                                const { id, label, value } = radio;
                                return (
                                    <span key={id}>
                                        <FormInput
                                            id={id}
                                            htmlFor={id}
                                            label={label}
                                            type="radio"
                                            value={value}
                                            checked={true}
                                            register={{
                                                ...register('gender'),
                                            }}
                                        />
                                    </span>
                                );
                            })}

                            <p className="description-text">
                                性別をご登録いただきますと、あなたにおすすめの商品をご提案いたします。
                            </p>
                        </div>
                        <div className="register-magazine">
                            <h5>メールマガジン登録</h5>
                            {checkboxList.map((checkbox) => {
                                const { id, label } = checkbox;
                                const registerString =
                                    id === 'uniqlo-magazine'
                                        ? 'uniqloMagazine'
                                        : 'guMagazine';

                                return (
                                    <FormInput
                                        key={id}
                                        id={id}
                                        htmlFor={id}
                                        label={label}
                                        type="checkbox"
                                        checked={
                                            id === 'uniqlo-magazine'
                                                ? uniqloCheck
                                                : guCheck
                                        }
                                        register={{
                                            ...register(registerString),
                                        }}
                                        onChange={() =>
                                            id === 'uniqlo-magazine'
                                                ? setUniqloCheck(!uniqloCheck)
                                                : setGuCheck(!guCheck)
                                        }
                                    />
                                );
                            })}
                            <p className="description-text">
                                メールマガジンの配信設定は会員情報ページから変更することができます。
                            </p>
                            <hr />
                        </div>
                        <div className="register-rule">
                            <h5>利用規約</h5>
                            <label htmlFor="rule">
                                <input
                                    id="rule"
                                    type="checkbox"
                                    defaultChecked={ruleCheck}
                                    onChange={() => {
                                        setRuleCheck(!ruleCheck);
                                        setIsFirstRender(false);
                                    }}
                                />
                                {ruleCheck && (
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
                                <span>
                                    注意事項・利用規約・プライバシーポリシーにご同意の上、確認画面へお進みください。
                                </span>
                            </label>
                            {!ruleCheck && isFirstRender && (
                                <p className="description-text">
                                    利用規約とプライバシーポリシーにご同意の上、確認画面へお進みください。
                                </p>
                            )}
                            {ruleCheck && (
                                <p className="description-text">
                                    利用規約とプライバシーポリシーにご同意の上、確認画面へお進みください。
                                </p>
                            )}
                            {!ruleCheck && !isFirstRender && (
                                <p className="description-text-error">
                                    確認後チェックしてください。
                                </p>
                            )}

                            <div className="register-rule__link">
                                <div className="register-rule__link-container">
                                    <UniqloIcon />
                                    <Link
                                        to="#"
                                        className="register-rule__link-text"
                                        onClick={noPathError}
                                    >
                                        利用規約
                                    </Link>

                                    <Link
                                        to="#"
                                        className="register-rule__link-text"
                                        onClick={noPathError}
                                    >
                                        プライバシーポリシー
                                    </Link>
                                </div>
                                <div className="register-rule__link-container">
                                    <GUIcon />
                                    <Link
                                        to="#"
                                        className="register-rule__link-text"
                                        onClick={noPathError}
                                    >
                                        利用規約
                                    </Link>

                                    <Link
                                        to="#"
                                        className="register-rule__link-text"
                                        onClick={noPathError}
                                    >
                                        プライバシーポリシー
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <button
                            className="register-button"
                            onClick={() => {
                                if (!ruleCheck) {
                                    setIsFirstRender(false);
                                }
                            }}
                        >
                            確認画面へ
                        </button>
                    </form>

                    <div className="register-tsl">
                        <Lock />
                        <p>
                            このページでご入力いただいた情報は、TLSで保護され
                            送信されます。一部ブラウザや携帯電話端末からは弊社
                            の一部ページにアクセスいただけません。ご了承ください。
                            [
                            <Link
                                to="https://faq.uniqlo.com/articles/FAQ/100004148?_ga=2.247453447.2050589264.1708869475-474271579.1694250300"
                                target="_blank"
                            >
                                TLSについて
                            </Link>
                            ]
                        </p>
                    </div>
                </div>
            </div>

            <PolicyFooter />
        </Wrapper>
    );
};

export default Register;
