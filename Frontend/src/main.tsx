import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css";

import { HelmetProvider } from "react-helmet-async";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

createRoot(document.getElementById("root")!).render(
    <HelmetProvider>
        <GoogleReCaptchaProvider
            reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            container={{
                parameters: {
                    badge: 'bottomleft'
                }
            }}
        >
            <App />
        </GoogleReCaptchaProvider>
    </HelmetProvider>
);
