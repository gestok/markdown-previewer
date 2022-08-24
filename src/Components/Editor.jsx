import styled from "styled-components";
import { useContext } from "react";
import AppContext from "./AppContext";


const Editor = () => {
    const {option, markdown, setMarkdown} = useContext(AppContext);

    return (
        <>
            { option===1 &&
            <TextEditorArea id="editor" defaultValue={markdown} onChange={(event) => setMarkdown(event.target.value)} />
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