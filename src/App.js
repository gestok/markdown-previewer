import 'normalize.css';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Box from './Components/Box';
import Editor from './Components/Editor';
import Preview from './Components/Preview';
import { AppProvider } from './Components/AppContext';


function App() {
    return (
        <AppProvider>
            <Container>
                <Box>
                    <Editor />
                    <Preview />
                </Box>
            </Container>
            <GlobalStyle />
        </AppProvider>
    );
}

export default App;

const Container = styled.div`
    max-width: 940px;
    width: 100%;
    position: relative;
    margin: 0 auto;
    padding: var(--g-gap-sm);
`;

const GlobalStyle = createGlobalStyle`
    body {
        --c-text: #AAAAAA;
        --c-link: #FF8C3E;
        --c-background-darker: #404040;
        --c-background-dark: #303030;
        --c-background: #202020;
        --c-background-light: #101010;
        --c-background-lighter: #000000;

        --g-gap-sm: 1rem;
        --g-gap-md: 2rem;
        --g-gap-lg: 4rem;

        --f-text: 'Inter', 'Arial', sans-serif;

        background: linear-gradient(30deg, var(--c-background-darker), var(--c-background-dark));
        min-height:100vh;
        margin:auto;
        font-family: var(--f-text);
    }
    body.light {
        --c-text: #505050;
        --c-link: #0F53BD;
        --c-background-darker: #f0f0f0;
        --c-background-dark: #e0e0e0;
        --c-background: #d0d0d0;
        --c-background-light: #c0c0c0;
        --c-background-lighter: #b0b0b0;
    }
`;