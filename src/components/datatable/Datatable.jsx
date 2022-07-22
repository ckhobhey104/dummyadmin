import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./data";

const Datatable = () => {
  return (
    <div className="datatable">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
