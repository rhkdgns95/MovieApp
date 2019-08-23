import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import App from "./App";
import client from "./apollo";
import GlobalStyle from "./global-styles";

ReactDOM.render(
<ApolloProvider client={client}>
    <App/>
    <GlobalStyle />
</ApolloProvider>
, document.getElementById('root'));