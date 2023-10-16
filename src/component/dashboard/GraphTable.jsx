import React, { useState, useRef, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { GraphTableData } from "@/assets/dashboardData";
import Image from "next/image";

const DataTable = () => {
  const defaultColDef = {
    headerClass: "bg-[#DDE9FF]",

    // sort: 'asc',
  };

  const gridOptions = {
    // ... Other grid options
    rowClass: "custom-row-hover",
  };

  const onFirstDataRendered = useCallback((params) => {
    // tableRef?.current?.api?.sizeColumnsToFit();
  }, []);

  const handleCellClicked = (param) => {
    if (param?.column?.colId === "chartID") {
    }
  };
  const tableRef = useRef(null);
  const [rowData, setRowData] = useState(GraphTableData);
  const [columnDefs] = useState([
    {
      field: "name",
      headerName: "Name",
      minWidth: 260,
      maxWidth: 300,
      cellRenderer: (params) => {
        const nameData = params?.data;
        return (
          <div className="flex items-center gap-2">
            
            <Image
              src={`/images/dashboard/${nameData?.image}`}
              width="18"
              height="18"
              alt="xyz"
              className="flex justify-center items-center"
            />

            {nameData?.name}
          </div>
        );
      },
    },
    {
      field: "avgOrderValue",
      headerName: "Avg. Order Value",
      minWidth: 80,
      maxWidth: 158,
    },
    {
      field: "booking",
      headerName: "Booking",
      minWidth: 100,
      maxWidth: 180,
    },
    {
      field: "leadTime",
      headerName: "Lead Time",
      minWidth: 100,
      maxWidth: 180,
    },
  ]);
  const onGridReady = (params) => {
    tableRef.current = params.api;
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full gap-6 h-full mt-10">
        <div className="flex w-full mx-auto ag-theme-alpine h-screen max-h-[20vh] md:max-h-[80vh] xl:max-h-[80vh] 3xl:max-h-[30vh]">
          <div className="relative overflow-auto" style={{ width: "100%" }}>
            <AgGridReact
              ref={tableRef}
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              enableBrowserTooltips={true}
              tooltipShowDelay={{ tooltipShowDelay: 2 }}
              //onSelectionChanged={(e) => handleSelectionChanged(e)}
              //rowSelection="multiple"
              //pagination={true}
              onCellClicked={handleCellClicked}
              gridOptions={gridOptions}
              paginationAutoPageSize={true}
              onFirstDataRendered={onFirstDataRendered}
              onGridReady={onGridReady}
              //paginationPageSize={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
