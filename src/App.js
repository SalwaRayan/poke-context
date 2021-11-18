import { BrowserRouter, Switch, Route } from "react-router-dom"
import { UserContextProvider } from "./context/UserContext"

import Home from "./pages/Home"
import Login from "./pages/Login" 
import Error404 from "./pages/Error404"

import "./App.css"
import Nav from "./components/Nav"

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>

        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="*" component={Error404} />
        </Switch>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App