import styled from "styled-components";
import { useContext } from "react";
import AppContext from "./AppContext";
import Theme from "./Theme";
import { FiCode } from "react-icons/fi";


const Box = ({children}) => {
    const {option, setOption} = useContext(AppContext);

    return (
        <BoxWrapper>
            <BoxTitle>
                <BoxTitleContainer><FiCode size={20} />
                    {option===1 ? 'Markdown' : 'Previewer'}
                </BoxTitleContainer>
                <BoxTitleContainer>
                    <span>
                        <Btn className={option===1 && 'active'} onClick={() => {setOption(1)}} >Markdown</Btn>
                        <Btn className={option===2 && 'active'} onClick={() => {setOption(2)}} >Preview</Btn>
                    </span>
                    <Theme />
                    </BoxTitleContainer>
            </BoxTitle>
            <BoxContent>
                {children}
            </BoxContent>
        </BoxWrapper>
    );
}
export default Box;


const BoxWrapper = styled.div`
    background: var(--c-background-dark);
    border-radius: 8px;
    border: solid 1px var(--c-background-darker);
    box-shadow: 0px 6px 10px #0005;
    overflow: hidden;
`;

const BoxTitle = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: var(--g-gap-sm);
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding: var(--g-gap-sm);
    border-bottom: solid 1px var(--c-background-darker);
    background: var(--c-background);
    color: var(--c-text);
    font-weight: 500;
    @media (max-width: 450px){
        justify-content: center;
    }
`;

const BoxTitleContainer = styled.div`
    display:flex;
    gap: 4px;
    align-items:center;
    & > span {
        gap: 0;
        border: solid 1px var(--c-background-dark);
        border-radius: 4px;
        overflow: hidden;
    }
`;

const BoxContent = styled.div`
    display:flex;
    flex-direction: column;
    padding: var(--g-gap-sm);
`;

const Btn = styled.button`
    background: var(--c-background-dark);
    padding: 8px 10px;
    color: var(--c-text);
    cursor: pointer;
    border: 0;
    &.active {
        background: var(--c-background-light);
        cursor: default;
        pointer-events:none;
        &:hover {
            opacity: 1;
        }
    }
    &:hover {
        opacity: 0.75;
    }
`;