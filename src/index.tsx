import { ApolloProvider } from '@apollo/client/react';
import client from './graphql/client';
import App from './App';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
