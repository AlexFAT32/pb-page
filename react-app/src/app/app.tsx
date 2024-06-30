import styled from '@emotion/styled';

import { PostBattlePage } from './post-battle-page/post-battle-page';
import { Container, createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const contProps = {
    h:"100%",
    mt: "md"
  };
  const theme = createTheme({})
  return (
    <StyledApp>
      <MantineProvider forceColorScheme={"dark"} defaultColorScheme={'dark'} theme={theme}  >
        <Container size="xl" {...contProps}>
          <PostBattlePage />
        </Container>
      </MantineProvider>
    </StyledApp>
  );
}

export default App;
