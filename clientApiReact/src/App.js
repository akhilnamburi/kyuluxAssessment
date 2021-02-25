import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import FoodMaterialTable from "./components/FoodMaterialTable";
import GoogleAuth from "./components/GoogleAuth";
import FilterSection from "./components/FilterSection";

const App = () => {
  // states for saving data comming from API
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(1000);

  // state use to store user is authenticated or not. by default it is unauthenciated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // function call API and get response from the server and save to the state
  const getDataFromAPi = async () => {
    // calling API
    await axios
      .get(
        `https://api.fda.gov/food/enforcement.json?search=report_date:[20040101+TO+20131231]&limit=${limit}`
      )
      .then((res) => {
        // saviing data to the states
        setData(res.data.results);
      });
  };

  useEffect(() => {
    if (isAuthenticated){
     getDataFromAPi();
    }
    // alert("Data fetched succefully...!")
  }, [limit,isAuthenticated]);

  // function will be called when google authenticated the user
  const responseGoogleS = (response) => {
    setIsAuthenticated(true);
  };
  // function will be called when google unauthorized  the user
  const responseGoogleF = (response) => {
    alert("Login error");
  };

  return (
    <div className="App">
      <div className="container-fluid mt-5">
        {isAuthenticated ? (
          <div>
            <FilterSection limit={limit} setLimit={setLimit} />
            <FoodMaterialTable data={data} setData={setData} />
          </div>
        ) : (
          <GoogleAuth handleSuccess={responseGoogleS} handleFailure={responseGoogleF}  />
        )}
      </div>
    </div>
  );
};

export default App;
