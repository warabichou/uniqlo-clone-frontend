import { toast } from 'react-toastify';

export const useGetCustomToast = () => {
    const noPathError = () => toast.error('遷移先未実装です。');

    return { noPathError };
};
