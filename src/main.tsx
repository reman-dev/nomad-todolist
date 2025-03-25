import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme.ts";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <ThemeProvider theme={lightTheme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </RecoilRoot>,
);
