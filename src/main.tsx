import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import { store, persistor } from './store';
import RouterConfig from "./RouterConfig";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterConfig />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
