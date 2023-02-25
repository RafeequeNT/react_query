import "./App.css";
import { HomePage } from "./components/home";

import { RQSuperHeroesPage } from "./components/RQSuperHeroesPage";
import { Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";

import { QueryClient, QueryClientProvider } from "react-query";
import { NavLink } from "react-router-dom";
import { RQFriendsPage } from "./components/RQFriendsPage";
const queryClient = new QueryClient();

const App = () => {
  const getTextColor = (isActive) => {
    return isActive ? "blue" : "black";
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="navbar-custom">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({ color: getTextColor(isActive) })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({ color: getTextColor(isActive) })}
                to="/superHeroes"
              >
                Super Heroes
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({ color: getTextColor(isActive) })}
                to="/friends"
              >
                RQFriendsPage
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/superHeroes" element={<RQSuperHeroesPage />} />
        <Route path="/friends" element={<RQFriendsPage />} />
      </Routes>

      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
