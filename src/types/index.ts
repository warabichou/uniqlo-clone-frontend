import { z } from 'zod';

export type VideoCarouselType = {
    slideType?: string;
    normalVideoUrl?: string;
    smallVideoUrl?: string;
    normalImageUrl: string;
    smallImageUrl: string;
    productMark?: string;
    productDescription: string;
    productFeature: string;
    price?: number | string;
    priceDescription?: string;
    modelName?: string;
    copyright?: string;
};

export type Categories = {
    title: string;
    imgUrl: string;
};

export type AllCategories = {
    outer: Categories[];
    tops: Categories[];
    pants: Categories[];
    dress: Categories[];
    underwear: Categories[];
    roomHome: Categories[];
    goods: Categories[];
    maternity: Categories[];
    formal: Categories[];
    flower: Categories[];
    sports: Categories[];
    underTwoYears: Categories[];
    underFiveYears: Categories[];
};

export type CategoriesType = {
    womenCategories?: Categories[];
    menCategories?: Categories[];
    kidsCategories?: Categories[];
    babyCategories?: Categories[];
    womenCategoriesContent?: AllCategories;
    menCategoriesContent?: AllCategories;
    kidsCategoriesContent?: AllCategories;
    babyCategoriesContent?: AllCategories;
};

export type ProductsListType = {
    productName: string;
    productImageUrl: string;
    productDescription?: string;
    productDescription02?: string;
    productPrice: number;
    productColorsUrl: string[];
};

export type GridRowType = {
    link: string;
    title: string;
    imageUrl: string;
    videoUrl?: string;
    description?: string;
};

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'メールアドレスを入力してください。' })
        .email({
            message: '正しい形式のメールアドレスを入力してください',
        }),
    password: z.string().min(1, { message: 'パスワードを入力してください。' }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'メールアドレスを入力してください。' })
        .email({
            message: '正しい形式のメールアドレスを入力してください',
        }),
    emailConfirm: z
        .string()
        .min(1, { message: 'メールアドレスを入力してください。' })
        .email({
            message: '正しい形式のメールアドレスを入力してください',
        }),
    password: z
        .string()
        .min(1, { message: 'パスワードを入力してください。' })
        .min(8)
        .max(20)
        .refine((value) => /^(?=.*?[a-z])(?=.*?\d)[a-z\d]/i.test(value), {
            message: '半角英字と半角数字を含めてください',
            path: ['regex01'],
        })
        .refine(
            (value) =>
                /^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/.test(value),
            {
                message: 'bbbb',
                path: ['regex02'],
            }
        ),

    postCode: z
        .string()
        .min(1, { message: '郵便番号を入力してください。。' })
        .length(7, { message: '郵便番号は7文字で入力してください。' }),
    birth: z.string().length(10, {
        message: '生年月日の入力が未完了です。生年月日を入力してください。',
    }),
    gender: z.string(),
    uniqloMagazine: z.boolean(),
    guMagazine: z.boolean(),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
