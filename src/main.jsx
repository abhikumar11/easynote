import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NoteProvider } from "./util/NoteContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
     <StrictMode>
           <NoteProvider>
          <BrowserRouter>
                    <App />
          </BrowserRouter>
          </NoteProvider>
     </StrictMode>
);
