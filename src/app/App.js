import React, { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/header-footer/NavBar";
import { dataProducts } from "../data";
import "./styles/App.css";
import { saveCart } from "./lib/actions";
import Routes from "./Routes";
import UserProfileContextProvider from "./lib/UserProfileContext";
/* import EssaiHello2 from "./components/EssaiHello2"; */
/*  import EssaiHello from "./components/EssaiHello";   */

const history = createBrowserHistory();

const App = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("tennis");
  const [isFiltering, setFiltering] = useState(false);
  const [filtered, setFiltered] = useState(false);

  const filterResult = (input) => {
    const fullList = dataProducts.flat();
    const filtered = fullList.filter(
      (i) => i.name.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    setFiltered(filtered);
  };

  useEffect(() => {
    dispatch(saveCart(items));
  }, [items, dispatch]);

  return (
    <Router history={history}>
      <UserProfileContextProvider>
        <div id="page-container">
          <div id="content-wrap">
            <Navbar filter={filterResult} setFiltering={setFiltering} />
{/* <EssaiHello2/>> */}
            <Routes
              isFiltering={isFiltering}
              filtered={filtered}
              dataProducts={dataProducts}
              category={category}
              setCategory={setCategory}
            />
          </div>
        </div>
      </UserProfileContextProvider>
    </Router>
  );
};

export default App;
