import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { sub_1, sub_2 } from "./contents";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Sub } from "./pages/Sub";

export const LayoutRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub1" element={<Sub cons={sub_1} />} />
        <Route path="/sub2" element={<Sub cons={sub_2} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
