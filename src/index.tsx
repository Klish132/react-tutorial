import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClientProvider} from "react-query";
import {queryClientInstance} from "./lib/queryClientInstance";
import {Loader} from "./components/loader/Loader";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {App} from "./App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <QueryClientProvider client={queryClientInstance}>
        <Suspense fallback={<Loader/>}>
            <App />
        </Suspense>
        <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"/>
    </QueryClientProvider>
);