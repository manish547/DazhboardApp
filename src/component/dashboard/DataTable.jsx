import React, { useState, useRef, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { DataTableData } from "@/assets/dashboardData";
import Image from "next/image";

const DataTable = () => {
  const defaultColDef = {
    autoHeight: true,
    headerClass: "bg-[#DDE9FF]",

    // sort: 'asc',
  };

  const gridOptions = {
    rowClass: "custom-row-hover",
  };

  const onFirstDataRendered = useCallback((params) => {

  }, []);

  const handleCellClicked = (param) => {
    if (param?.column?.colId === "chartID") {
    }
  };
  const tableRef = useRef(null);
  const [rowData, setRowData] = useState(DataTableData);
  const [columnDefs] = useState([
    {
      field: "name",
      headerName: "Name",
      minWidth: 317,
      maxWidth: 350,
      cellRenderer: (params) => {
        const nameData = params?.data;
        return (
          <div className="flex items-center gap-2 ">
            <Image
              src={`/images/dashboard/${nameData?.image}`}
              width="18"
              height="18"
              alt="xyz"
              className="flex justify-center items-center "
            />
            {nameData?.name}
          </div>
        );
      },
    },
    {
      field: "sales",
      headerName: "Sales",
      minWidth: 80,
      maxWidth: 120,
    },
    {
      field: "orders",
      headerName: "Orders",
      minWidth: 80,
      maxWidth: 120,
    },
    {
      field: "addiRevenue",
      headerName: "Addi Revenue",
      tooltipField: "memberName",
      /* minWidth: 100,
      maxWidth: 127, */
    },
    {
      field: "totalPax",
      headerName: "Total Pax",
      minWidth: 80,
      maxWidth: 120,
    },
    {
      field: "avgOrderValue",
      headerName: "Ave. Order Value",
      minWidth: 90,
      maxWidth: 140,
    },
    {
      field: "commissionsPaid",
      headerName: "Commissions Paid",
      /* minWidth: 120,
      maxWidth: 150, */
    },
    {
      field: "leadTime",
      headerName: "Lead Time",
      minWidth: 80,
      maxWidth: 120,
    },
    {
      field: "reseller",
      headerName: "Reseller",
      minWidth: 80,
      maxWidth: 120,
      cellRenderer: (params) => {
        const resellerData = params?.data;
        return (
          <div className="flex items-center gap-2">
            <Image
              src={`/images/dashboard/${resellerData?.icon}`}
              width="18"
              height="18"
              alt="xyz"
              className="flex justify-center items-center"
            />
            {resellerData?.reseller}
          </div>
        );
      },
    },
    {
      field: "direct",
      headerName: "Direct",
      minWidth: 80,
      maxWidth: 120,
      cellRenderer: (params) => {
        const directData = params?.data;
        return (
          <div className="flex items-center gap-2">
            <Image
              src={`/images/dashboard/${directData?.img}`}
              width="18"
              height="18"
              alt="xyz"
              className="flex justify-center items-center"
            />
            {directData?.direct}
          </div>
        );
      },
    },
  ]);
  const onGridReady = (params) => {
    tableRef.current = params.api;
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full gap-6 h-fit mt-10">
        <div className="flex w-full mx-auto ag-theme-alpine h-screen max-h-[40vh] ">
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
