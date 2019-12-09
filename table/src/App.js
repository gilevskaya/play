import React from "react";

import { MyTable } from "./components/MyTable/MyTable";

let DATA = [
  {
    firstName: "cats-pyffx",
    lastName: "support-iqhuo",
    age: 11,
    visits: 86,
    id: 35
  },
  {
    firstName: "glass-4suak",
    lastName: "fang-89mq1",
    age: 27,
    visits: 49,
    id: 83
  },
  {
    firstName: "tendency-3uegd",
    lastName: "anxiety-41l6z",
    age: 28,
    visits: 18,
    id: 19
  },
  {
    firstName: "mailbox-oe0s9",
    lastName: "scarf-qg7zn",
    age: 18,
    visits: 16,
    id: 3
  },
  {
    firstName: "print-5l0gp",
    lastName: "clothes-01mvd",
    age: 20,
    visits: 64,
    id: 9
  },
  {
    firstName: "article-f12rv",
    lastName: "wing-p1ktc",
    age: 28,
    visits: 14,
    id: 12
  },
  {
    firstName: "frogs-qytsh",
    lastName: "dirt-iv02o",
    age: 29,
    visits: 24,
    id: 45
  },
  {
    firstName: "chalk-rbuvo",
    lastName: "adjustment-rb8ul",
    age: 4,
    visits: 16,
    id: 46
  },
  {
    firstName: "profit-rckmu",
    lastName: "conclusion-ifwa8",
    age: 24,
    visits: 2,
    id: 64
  }
];

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px 100px 0 100px"
      }}
    >
      <MyTable
        data={DATA}
        onUpdate={(column, id, newValue) => {
          DATA = DATA.map(row => {
            if (row.id === id) {
              alert(
                `Updated ${column} ${id} from ${row[column]} to ${newValue}`
              );
              return { ...row, [column]: newValue };
            }
            return row;
            // row.id === id ? { ...row, [column]: newValue } : row;
          });
        }}
      />
    </div>
  );
}

export default App;
