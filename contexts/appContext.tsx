import React, { createContext, ReactNode, useState } from "react";

export const AppContext = createContext<{
    billInfo: boolean,
    setBillInfo: (value: boolean) => void
}>({
    billInfo: false,
    setBillInfo: () => {}
})

export const AppProvider = ({ children }: { children: ReactNode }) => {


    const [billInfo, setBillInfo] = useState<boolean>(false);

    return (
        <AppContext.Provider value={{billInfo, setBillInfo}}>
            {children}
        </AppContext.Provider>
    )
}