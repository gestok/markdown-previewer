import styled from "styled-components";
import { useContext } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import AppContext from "./AppContext";


const Preview = () => {
    marked.setOptions({gfm: true, breaks: true, xhtml: true});
    const {option, markdown} = useContext(AppContext);

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
`;