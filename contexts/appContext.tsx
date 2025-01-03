import React, { createContext, ReactNode, useState } from "react";

export const AppContext = createContext<{
    billInfo: { id: number, name: string, payer: string, value: string, portion: string, date: string }[],
    setBillInfo: React.Dispatch<React.SetStateAction<{ id: number; name: string; payer: string; value: string; portion: string; date: string }[]>>;
    isActivated: boolean,
    setIsActivated: (value: boolean) => void
}>({
    billInfo: [],
    setBillInfo: () => {},
    isActivated: false,
    setIsActivated: () => {}
})

export const AppProvider = ({ children }: { children: ReactNode }) => {

    const [billInfo, setBillInfo] = useState<{ id: number, name: string, payer: string, value: string, portion: string, date: string }[]>([]);
    const [isActivated, setIsActivated] = useState<boolean>(false)

    return (
        <AppContext.Provider value={{billInfo, setBillInfo, setIsActivated, isActivated}}>
            {children}
        </AppContext.Provider>
    )
}