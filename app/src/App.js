import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layout";
import HomePage from "./pages/Home";
import { routeArray } from "./routes";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          {routeArray.map((routes, index) => (
            <Route
              key={index}
              path={routes.path}
              element={
                <Layout>
                  <routes.component />
                </Layout>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
