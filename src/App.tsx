import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Header } from './Header';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
    </QueryClientProvider>
  )
}

export default App;