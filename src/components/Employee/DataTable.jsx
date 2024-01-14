import React, { useState } from "react";

const DataTable = () => {
  const initialData = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Doe", age: 30 },
    { id: 3, name: "Bob Smith", age: 22 },
  ];

  const [data, setData] = useState(initialData);

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleUpdate = (id) => {
    // Add your update logic here
    console.log(`Update item with ID: ${id}`);
  };

  const handleAdd = () => {
    // Add your add logic here
    const newId = Math.max(...data.map((item) => item.id)) + 1;
    const newItem = { id: newId, name: "New Person", age: 25 };
    setData((prevData) => [...prevData, newItem]);
  };

  return (
    <div className="container mx-auto py-8 px-5">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.id}</td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.age}</td>
              <td className="border p-2">
                <button
                  className="bg-blue-500 text-white p-1 mx-1"
                  onClick={() => handleUpdate(item.id)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white p-1 mx-1"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button className="bg-green-500 text-white p-2" onClick={handleAdd}>
          Add Row
        </button>
      </div>
    </div>
  );
};

export default DataTable;
