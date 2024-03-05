import React from "react";
import ReactDOM from "react-dom/client";
import App from "./AppRouter";
import { Provider } from "react-redux";
import { store } from "./store";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import main sass file to apply global styles
import "./static/sass/style.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
