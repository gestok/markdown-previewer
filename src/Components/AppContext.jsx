import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [option, setOption] = useState(1);
    const [markdown, setMarkdown] = useState('');
    const [mode, setMode] = useState('dark');

    useEffect(() => {
        (mode==='dark') ? document.body.className = '' : document.body.className = 'light';
    }, [mode, markdown]);

    return (
        <AppContext.Provider value={{
            option, setOption, markdown, setMarkdown, mode, setMode
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;