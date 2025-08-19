import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DataTable, Column } from "../components/DataTable";

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DataTable<User>>;

const sampleData: User[] = [
  { id: 1, name: "Alice Johnson", age: 25, email: "alice@example.com" },
  { id: 2, name: "Bob Smith", age: 30, email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", age: 22, email: "charlie@example.com" },
  { id: 4, name: "Diana Prince", age: 28, email: "diana@example.com" },
];

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns,
    loading: false,
    selectable: false,
  },
};

export const Selectable: Story = {
  args: {
    data: sampleData,
    columns,
    selectable: true,
    onRowSelect: (rows) => console.log("Selected Rows:", rows),
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
    loading: false,
  },
};
