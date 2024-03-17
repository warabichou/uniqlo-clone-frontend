import { create } from 'zustand';

type Store = {
    isSearchMenuOpen: boolean;
    setSearchMenuOpen: (isOpen: boolean) => void;
    selectedBlackNav: string;
    setSelectedBlackNav: (nav: string) => void;
    searchMenuInitialState: boolean;
    setSearchMenuInitialState: (isInitial: boolean) => void;
};

const useStore = create<Store>((set) => ({
    isSearchMenuOpen: false,
    setSearchMenuOpen(isOpen: boolean) {
        set((state) => ({
            ...state,
            isSearchMenuOpen: isOpen,
        }));
    },
    selectedBlackNav: '',
    setSelectedBlackNav(nav: string) {
        set((state) => ({
            ...state,
            selectedBlackNav: nav,
        }));
    },
    searchMenuInitialState: true,
    setSearchMenuInitialState(isInitial: boolean) {
        set((state) => ({
            ...state,
            searchMenuInitialState: isInitial,
        }));
    },
}));

export default useStore;
