import React from "react";
import { ReactTabulator } from "react-tabulator";
import "tabulator-tables/dist/css/tabulator.min.css";

const Table = ({ tasks, setTasks, deleteTask }) => {
  const columns = [
    { title: "Task ID", field: "id", width: 80, headerSort: false },
    { title: "Title", field: "title", editor: "input", headerFilter: "input" },
    {
      title: "Description",
      field: "description",
      editor: "input",
      headerFilter: "input",
    },
    {
      title: "Status",
      field: "status",
      editor: "select",
      editorParams: { values: ["To Do", "In Progress", "Done"] },
    },
    {
      title: "Actions",
      formatter: "buttonCross",
      width: 100,
      align: "center",
      cellClick: (e, cell) => {
        const id = cell.getData().id;
        deleteTask(id);
      },
    },
  ];

  return (
    <div className="px-9 py-4">
      <ReactTabulator
        data={tasks}
        columns={columns}
        layout="fitColumns"
        responsiveLayout="hide"
      />
    </div>
  );
};

export default Table;
