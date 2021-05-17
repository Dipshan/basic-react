// Alias -> different name, aka -> also known as...
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Api from "./components/Api";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Post from "./components/Post";
import Register from "./components/Register";
import ScrollRestoration from "./components/ScrollRestoration";
import UsersTable from "./components/UsersTable";

function App() {
  return (
    <Router>
      <Header />
      <ScrollRestoration />

      {/* Define Routes... */}
      <Content>
        <Switch>
          <Route path="/table">
            <UsersTable />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          {/* Nested Route */}
          <Route path="/posts/:id">
            <Post />
          </Route>
          <Route path="/posts">
            <Api />
          </Route>
          <Route path="/">{<h1>Home Page</h1>}</Route>
        </Switch>
      </Content>
      <Footer />
    </Router>
  );
}
export default App;
