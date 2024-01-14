import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const MissingAttend = () => {
  const { user } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState("");
  const [missingAttendanceData, setMissingAttendanceData] = useState(null);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const data = await fetchMissingAttendanceData(selectedDate, user?.email);

      setMissingAttendanceData(data);
    } catch (error) {
      console.error("Error fetching missing attendance data:", error);
    }
  };

  return (
    <div className="p-10 bg-white m-8">
      <h1 className="text-xl font-bold mb-4">Missing Attendance</h1>
      <div className="mb-4">
        <label
          htmlFor="selectedDate"
          className="block text-sm font-medium text-gray-600"
        >
          Select Date:
        </label>
        <input
          type="date"
          id="selectedDate"
          name="selectedDate"
          value={selectedDate}
          onChange={handleDateChange}
          className="border p-2 w-full rounded-full border-green-500"
        />
      </div>
      <button
        type="button"
        onClick={handleSearch}
        className="bg-amber-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
      {missingAttendanceData && (
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Missing Attendance Data:</h2>
          {/* Display the missing attendance data here */}
          <table className="w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Serial Number</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Date</th>
              </tr>
            </thead>

            {missingAttendanceData.map((entry, index) => (
              <tr key={entry.id} className="text-center">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{entry?.name}</td>
                <td className="py-2 px-4 border-b">{entry?.date}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

// Example function to fetch missing attendance data (replace this with your actual API call)
const fetchMissingAttendanceData = async (date, email) => {
  return new Promise((resolve) => {
    fetch(`https://erp-server-nine.vercel.app/attendance`)
      .then((res) => res.json())
      .then((data) => {
        const myData = data.filter((d) => d?.hrmEmail == email);

        const missing = myData.filter((d) => d.date == date);

        setTimeout(() => {
          resolve(missing);
        }, 1000);
      })
      .catch((error) => {
        // Handle errors here, for example, you can reject the promise with an error message.
        console.error("Error fetching attendance data:", error);
        resolve([]); // Resolving with an empty array in case of an error
      });
  });
};

export default MissingAttend;
