import styled from '@emotion/styled';

import { PostBattlePage } from './components/post-battle-page/post-battle-page';
import { Container, createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const StyledApp = styled.div`
  // Your style here
`;

const queryClient = new QueryClient();

export function App() {
  const contProps = {
    h: '100%',
    mt: 'md',
  };
  const theme = createTheme({});
  return (
    <StyledApp>
      <QueryClientProvider client={queryClient}>

        <MantineProvider
          forceColorScheme={'dark'}
          defaultColorScheme={'dark'}
          theme={theme}
        >
          <Container size="xl" {...contProps}>
            <PostBattlePage />
          </Container>
        </MantineProvider>
      </QueryClientProvider>
    </StyledApp>
  );
}

export default App;
