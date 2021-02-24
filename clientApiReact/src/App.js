import React, { useState, useEffect } from "react";
import "./App.css";
import MaterialTable from "material-table";
import axios from "axios";
import { GoogleLogin } from "react-google-login";

const App = () => {
  const [data1, setData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getDataFromAPi = async () => {
    await axios
      .get(
        `https://api.fda.gov/food/enforcement.json?search=report_date:[20040101+TO+20131231]&limit=1000`
      )
      .then((res) => {
        setData(res.data.results);
      });
  };

  useEffect(() => {}, [isAuthenticated]);

  const responseGoogleS = (response) => {
    getDataFromAPi();
    setIsAuthenticated(true);
  };
  const responseGoogleF = (response) => {
    alert("Login error");
  };
  return (
    <div className="App">
      <div className="container-fluid mt-5">
        {isAuthenticated === true ? (
          <MaterialTable
            columns={[
              { title: "Country", field: "country", filterPlaceholder: 'Country' },
              { title: "City", field: "city",filterPlaceholder: 'City' },
              { title: "Address", field: "address_1",filterPlaceholder: 'Address' },
              { title: "Classification", field: "classification" ,filterPlaceholder: 'Classification'},
              { title: "Postal Code", field: "postal_code",filterPlaceholder: 'Postal Code' },
              // { title: 'Product Description', field: 'product_description'},
              // { title: 'Reason for recall', field: 'reason_for_recall'},
              {
                title: "Recall initiation date",
                field: "recall_initiation_date",filterPlaceholder: 'Recall initiation date'
              },
              { title: "Recall number", field: "recall_number",filterPlaceholder: 'Recall number' },
              { title: "Recalling firm", field: "recalling_firm",filterPlaceholder: 'Recalling firm' },
              { title: "Report date", field: "report_date",filterPlaceholder: 'Report date' },
              { title: "State", field: "state",filterPlaceholder: 'State' },
              { title: "Status", field: "status",filterPlaceholder: 'Status' },
              { title: "Voluntary mandated", field: "voluntary_mandated",filterPlaceholder: 'Voluntary mandated' },
            ]}
            options={{
              filtering: true,
              sorting: true,
            }}
            localization={{
              pagination: {
                labelDisplayedRows: "{from}-{to} of {count}",
              },
              toolbar: {
                nRowsSelected: "{0} row(s) selected",
              },
              header: {
                actions: "Actions",
              },
              body: {
                emptyDataSourceMessage: "No records to display",
                filterRow: {
                  filterTooltip: "Filter",
                },
              },
            }}
            editable={{
           
              onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                      setTimeout(() => {
                          const dataUpdate = [...data1];
                          const index = oldData.tableData.id;
                          dataUpdate[index] = newData;
                          setData([...dataUpdate]);
                          resolve();
                      }, 1000);
                  }),
             
          }}
            data={data1}
            title="Food enforcement report list"
          />
        ) : (
          <div style={{ marginTop: "200px", textAlign: "center" }}>
            <h3>Welcome</h3>
            <p>Sign in to your account</p>
            <GoogleLogin
              clientId="297117454527-1qi5ak2menh3rdim37jpus7t18rjpn2p.apps.googleusercontent.com"
              buttonText="Login with google"
              onSuccess={responseGoogleS}
              onFailure={responseGoogleF}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
