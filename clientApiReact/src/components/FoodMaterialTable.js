import React from "react";
import MaterialTable from "material-table";
const FoodMaterialTable = (props) => {
  
  return (
    <div>
      <MaterialTable
        // data for heading colums and ther name and type
        columns={[
          {
            title: "Country",
            field: "country",
            filterPlaceholder: "Country",
          },
          { title: "City", field: "city", filterPlaceholder: "City" },
          {
            title: "Address",
            field: "address_1",
            filterPlaceholder: "Address",
          },
          {
            title: "Classification",
            field: "classification",
            filterPlaceholder: "Classification",
          },
          {
            title: "Postal Code",
            field: "postal_code",
            filterPlaceholder: "Postal Code",
          },
          // { title: 'Product Description', field: 'product_description'},
          // { title: 'Reason for recall', field: 'reason_for_recall'},
          {
            title: "Recall initiation date",
            field: "recall_initiation_date",
            filterPlaceholder: "Recall initiation date",
          },
          {
            title: "Recall number",
            field: "recall_number",
            filterPlaceholder: "Recall number",
          },
          {
            title: "Recalling firm",
            field: "recalling_firm",
            filterPlaceholder: "Recalling firm",
          },
          {
            title: "Report date",
            field: "report_date",
            filterPlaceholder: "Report date",
          },
          { title: "State", field: "state", filterPlaceholder: "State" },
          { title: "Status", field: "status", filterPlaceholder: "Status" },
          {
            title: "Voluntary mandated",
            field: "voluntary_mandated",
            filterPlaceholder: "Voluntary mandated",
          },
        ]}
        //enabling filtering and sorting features
        options={{
          filtering: true,
          sorting: true,
        }}
        //customizing the layout of table
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
        // when the row is updated fuctions save the updated data in the states
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...props.data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                props.setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
        }}
        data={props.data}
        title="Food enforcement report list"
      />
    </div>
  );
};

export default FoodMaterialTable;
