import React from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./typed-components";
import theme from "./theme";
import Home from "./Routes/Home";
import Movie from "./Routes/Movie";

const App = () => (
    <ThemeProvider theme={theme}>
        <AppPresenter />
    </ThemeProvider>
);
const AppPresenter = () => (
    <BrowserRouter>
        <Switch>
            <Route path={"/"} exact={true} component={Home}/>
            <Route path={"/details/:movieId"} exact={true} component={Movie}/>
            <Redirect from={"*"} to={"/"}/>
        </Switch>
    </BrowserRouter>
)
export default App;