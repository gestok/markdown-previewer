import styled from "styled-components";
import { useContext, useEffect } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import AppContext from "./AppContext";
import "../Assets/mp.css";


const Preview = () => {
    const {mode, option, markdown} = useContext(AppContext);

    useEffect(() => {
        let langPrefix = (mode==='dark') ? "hljs dark language-" : "hljs language-";
        marked.setOptions({
            langPrefix: langPrefix
        });
    }, [mode]);

    // Marked Settings
    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function(code, lang){
            const hljs = require('highlight.js');
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, {language}).value;
        },
        gfm: true,
        breaks: true,
        xhtml: true
    });

    return (
        <>
        { option===2 && <PreviewWrapper dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked.parse(markdown))}} /> }
        </>
    );
}
export default Preview;


const PreviewWrapper = styled.div`
    background: var(--c-background);
    border: solid 1px var(--c-background);
    border-radius: 4px;
    padding: 10px;
    color: var(--c-text);
    overflow: auto;
    & img {
        width:100%;
        height:auto;
        pointer-events:none;
        user-select:none;
    }
    & a {
        text-decoration: none;
        color: var(--c-link);
    }
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