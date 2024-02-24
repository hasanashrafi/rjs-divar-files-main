import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Router from "./router/Router";
import defaultOptions from "./configs/reactQueryConfig";
import Layout from "layouts/Layout";

function App() {
  const queryClint = new QueryClient(defaultOptions)
  return (
    <QueryClientProvider client={queryClint}>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
