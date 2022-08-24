import styled from "styled-components";
import { useContext } from "react";
import AppContext from "./AppContext";
import { FiMoon, FiSun, FiGithub } from "react-icons/fi";

const Theme = () => {
    const {mode, setMode} = useContext(AppContext);
  
    return (
        <>
            <a href="https://github.com/gestok/markdown-previewer" target='_blank' title='Source Code'>
                <BtnIcon>
                    <FiGithub size={20} />
                </BtnIcon>
            </a>
            <BtnIcon onClick={() => {mode==='dark' ? setMode('light') : setMode('dark')}} >
                { mode === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </BtnIcon>
        </>
    );
}
export default Theme;

const BtnIcon = styled.button`
    align-self: center;
    background: var(--c-background-dark);
    border: solid 1px var(--c-background);
    border-radius: 4px;
    margin-left: 4px;
    padding: 6px;
    color: var(--c-text);
    cursor: pointer;
    border: 0;
    &:hover {
        opacity: 0.75;
    }
`;