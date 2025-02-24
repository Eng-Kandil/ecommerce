import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import App from './App.jsx'
import CounterContextProvider from './Context/CounterContext';
import UserTokenProvider from './Context/UserToken';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import NumItemContextProvider from './Context/NumberCartContext';
import { Provider } from 'react-redux';
import { store } from './libs/store';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <NumItemContextProvider>
    <QueryClientProvider client={queryClient}>
    <UserTokenProvider>
    <CounterContextProvider>
        <Toaster></Toaster>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
    </CounterContextProvider>
    </UserTokenProvider>
    </QueryClientProvider>
    </NumItemContextProvider>
    </Provider>

)
