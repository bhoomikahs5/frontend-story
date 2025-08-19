import React, { useState } from "react";
import "./DataTable.css";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [selected, setSelected] = useState<T[]>([]);
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const toggleRow = (row: T) => {
    let updated: T[];
    if (selected.includes(row)) {
      updated = selected.filter((r) => r !== row);
    } else {
      updated = [...selected, row];
    }
    setSelected(updated);
    onRowSelect?.(updated);
  };

  const sortedData = sortKey
    ? [...data].sort((a, b) => {
        const aVal = a[sortKey];
        const bVal = b[sortKey];
        if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
        if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
        return 0;
      })
    : data;

  if (loading) return <div className="p-4">Loading...</div>;
  if (!data.length) return <div className="p-4">No Data</div>;

  return (
    <table>
      <thead>
        <tr>
          {selectable && <th></th>}
          {columns.map((col) => (
            <th
              key={col.key}
              onClick={() => {
                if (col.sortable) {
                  if (sortKey === col.dataIndex) {
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  } else {
                    setSortKey(col.dataIndex);
                    setSortOrder("asc");
                  }
                }
              }}
            >
              {col.title}{" "}
              {sortKey === col.dataIndex && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.id}>
            {selectable && (
              <td>
                <input
                  type="checkbox"
                  checked={selected.includes(row)}
                  onChange={() => toggleRow(row)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={col.key}>{String(row[col.dataIndex])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
