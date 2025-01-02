import React, { createContext, ReactNode, useState } from "react";

export const AppContext = createContext<{
    billInfo: string[],
    setBillInfo: (value: string[]) => void,
    isActivated: boolean,
    setIsActivated: (value: boolean) => void
}>({
    billInfo: ['name', 'payer', 'value', 'portion', 'date'],
    setBillInfo: () => {},
    isActivated: false,
    setIsActivated: () => {}
})

export const AppProvider = ({ children }: { children: ReactNode }) => {

    const [billInfo, setBillInfo] = useState<string[]>(['name', 'payer', 'value', 'portion', 'date']);
    const [isActivated, setIsActivated] = useState<boolean>(false)

    return (
        <AppContext.Provider value={{billInfo, setBillInfo, setIsActivated, isActivated}}>
            {children}
        </AppContext.Provider>
    )
}