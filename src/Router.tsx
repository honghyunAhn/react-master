import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

interface IRouterProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

function Router({ toggleDarkMode, darkMode }: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Coins toggleDarkMode={toggleDarkMode} />}
        ></Route>
        <Route path="/:coinId" element={<Coin darkMode={darkMode} />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
