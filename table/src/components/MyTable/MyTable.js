import React from "react";
import { useTable } from "react-table";

import styles from "./MyTable.module.scss";

// https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/editable-data

const EditableCell = ({ cell, row, column, onUpdate }) => (
  <Editable
    value={cell.value}
    onChange={newValue => onUpdate(column.id, row.original.id, newValue)}
  />
);

const Editable = ({ value: initialValue, onChange }) => {
  const [value, setValue] = React.useState(initialValue);
  const [isEdit, setIsEdit] = React.useState(false);

  return (
    <div
      className={styles.Editable}
      onClick={() => {
        if (!isEdit) setIsEdit(true);
      }}
    >
      {isEdit ? (
        <div style={{ display: "flex" }}>
          <input value={value} onChange={e => setValue(e.target.value)} />
          <button
            onClick={() => {
              if (value !== initialValue) onChange(value);
              setIsEdit(false);
            }}
          >
            +
          </button>
          <button onClick={() => setIsEdit(false)}>x</button>
        </div>
      ) : (
        value
      )}
    </div>
  );
};

const COLUMNS = Object.freeze([
  { Header: "First Name", accessor: "firstName" },
  { Header: "Last Name", accessor: "lastName" },
  {
    Header: "Age",
    accessor: "age",
    Cell: EditableCell
  }
]);

export const MyTable = ({ data, onUpdate }) => {
  const { headers, rows, prepareRow } = useTable({
    columns: COLUMNS,
    data,
    onUpdate
  });

  // get*Props below generates a unique component key
  return (
    <table id={styles.MyTable}>
      <thead>
        <tr>
          {headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
