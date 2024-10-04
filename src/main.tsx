import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SitePage } from "./components/pages/SitePage";
import { UIProvider } from "@yamada-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UIProvider>
      <h1>aaaa</h1>

      <SitePage />
    </UIProvider>
  </StrictMode>
);
