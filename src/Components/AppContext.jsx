import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const demo = 'Markdown syntax typed into the first pane will be automatically converted to HTML and rendered in the second pane. Go ahead, give it a try!  \n\n#### Headings:  \n# Heading 1\n## Heading 2\n### Heading 3\n---\n#### Hyperlink:   \n[Google](https://google.com)  \n\n---\n#### Inline code:\nFrom the console, run `console.log(\'Hello world!\');` to see the output.    \n\n---\n\n#### Code block:\n```javascript\nfunction sayHello() {\n  return \'Hello world!\';\n}\n```\n---\n\n#### List items:\n1. Ordered list item 1  \n2. Ordered list item 2  \n\n\n- Unordered list item  \n- Unordered list item  \n\n---\n\n#### Blockquote:  \n> Part of the inhumanity of the computer is that, once it is competently programmed and working smoothly, it is completely honest. -Isaac Asimov \n\n---\n#### Image:  \n![alt text](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg \'freeCodeCamp Avatar\')  \n\n---\n#### Formatted text:\nAs **bolded**, *emphasized* or **_both_** text. You can also ~~cross text out~~!';
    const [option, setOption] = useState(1);
    const [markdown, setMarkdown] = useState(demo);
    const [mode, setMode] = useState('dark');

    useEffect(() => {
        document.body.classList.toggle('light')
    }, [mode]);

    return (
        <AppContext.Provider value={{
            option, setOption, markdown, setMarkdown, mode, setMode,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;