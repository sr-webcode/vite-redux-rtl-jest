import React from "react";

import { BrowserRouter, Route, Routes as RoutesDefinition, Link } from "react-router-dom";

const Home = React.lazy(() => import('@/pages/Home'))
const Todo = React.lazy(() => import('@/pages/Todo'))

const SimpleNav = () => <ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/todo">Todo</Link>
  </li>
</ul>
function App() {

  return (
    <BrowserRouter>
      <SimpleNav />
      <React.Suspense fallback={<div>loading...</div>}>
        <RoutesDefinition>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="todo" element={
              <Todo />
            } />
          </Route>
          <Route path="*" element={<div>not found route</div>} />
        </RoutesDefinition>
      </React.Suspense>
    </BrowserRouter>

  );
}

export default App;
