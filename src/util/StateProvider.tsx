import React, { useContext, useState } from 'react';
import { FC, PropsWithChildren } from 'react';

// 状態の型を定義
interface StateContextType {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// 初期値を設定（loading: false、setLoadingは状態更新関数）
export const StateContext = React.createContext<StateContextType | undefined>(undefined);
export const StateProvider: FC<PropsWithChildren> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);
    return (
        <StateContext.Provider value={{ loading, setLoading }}>
            {children}
        </StateContext.Provider>
    );
};

// カスタムフックを使って、Contextを簡単に使用できるようにする
export const useStateContext = (): StateContextType => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error('useStateContext must be used within a StateProvider');
    }
    return context;
};
