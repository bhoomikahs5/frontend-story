import React, { useState, useMemo } from "react";
import { DataTable, Column } from "./components/DataTable";
import { InputField } from "./components/Inputfield";

interface User {
  id: number;
  name: string;
  email: string;
}

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email", sortable: true },
];

const data: User[] = [
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
  { id: 3, name: "Charlie", email: "charlie@mail.com" },
];

function App() {
  const [search, setSearch] = useState("");

  // 🔎 Filter data based on search input
  const filteredData = useMemo(() => {
    if (!search) return data;
    const lowerSearch = search.toLowerCase();
    return data.filter(
      (user) =>
        user.name.toLowerCase().includes(lowerSearch) ||
        user.email.toLowerCase().includes(lowerSearch)
    );
  }, [search]);

  return (
    <div className="p-6 space-y-6">
      <InputField
        label="Search"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        helperText="Type to filter users"
      />

      <DataTable<User> data={filteredData} columns={columns} selectable />
    </div>
  );
}

export default App;
