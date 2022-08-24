import styled from "styled-components";
import { useContext, useEffect } from "react";
import AppContext from "./AppContext";


const Editor = () => {
    const {option, markdown, setMarkdown} = useContext(AppContext);
    const demo = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`javascript
// This is multi-line code that is specified as Javascript code.
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![Markdown Previewer](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg "Markdown Previewer")
`;

    useEffect(() => {
        const savedMarkdown = JSON.parse(localStorage.getItem('saved'));
        if (savedMarkdown) setMarkdown(savedMarkdown);
    }, [setMarkdown]);

    return (
        <>
            { option===1 &&
            <TextEditorArea placeholder={demo} defaultValue={markdown} onChange={(event) => {
                setMarkdown(event.target.value)
                localStorage.setItem('saved', JSON.stringify(markdown));
            }} />
            }
        </>
    );
}
export default Editor;

const TextEditorArea = styled.textarea`
    font-family: var(--f-text);
    background: var(--c-background);
    color: var(--c-text);
    border: solid 1px var(--c-background);
    border-radius: 4px;
    padding: 10px;
    margin: 0;
    min-width: 100%;
    max-width: 100%;
    min-height: 70vh;
    cursor: text;
    overflow: auto;
    resize: both;
    box-sizing:border-box;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background: var(--c-background-light);
        border-radius: 16px;
        box-shadow: inset 2px 2px 2px var(--c-background-lighter), inset -2px -2px 2px var(--c-background-dark);
    }
    &::-webkit-scrollbar-track {
        background: linear-gradient(90deg, var(--c-background-light), var(--c-background-light) 2px, var(--c-background) 0, var(--c-background) );
    }
    &::-webkit-resizer {
        background: var(--c-background-lighter);
    }
`;