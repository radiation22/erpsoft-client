import React from "react";

const DebitVoucher = () => {
  return (
    <div className="container mx-auto mt-8 px-5">
      <div className="flex justify-between my-4">
        <p>Debit Voucher</p>
        <button className="bg-black text-white px-4 py-2 rounded">
          Create Debit Voucher
        </button>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-r">SL No</th>
            <th className="py-2 px-4 border-r">VNo</th>
            <th className="py-2 px-4 border-r">Date</th>
            <th className="py-2 px-4">Account Name</th>
            <th className="py-2 px-4">Ledger Comment </th>
            <th className="py-2 px-4">Subtype</th>
            <th className="py-2 px-4">Debit</th>
            <th className="py-2 px-4">Credit</th>
            <th className="py-2 px-4">Reverse Account Name </th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-r">1</td>
            <td className="py-2 px-4 border-r">DV-7 </td>
            <td className="py-2 px-4 border-r">19-06-2022 </td>
            <td className="py-2 px-4">Employeer 1% ICF Expense </td>
            <td className="py-2 px-4">June 2022 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4"> $ 30.00 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4">ABC Bank </td>
            <td className="py-2 px-4">
              <button>Action</button>
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-r">1</td>
            <td className="py-2 px-4 border-r">DV-7 </td>
            <td className="py-2 px-4 border-r">19-06-2022 </td>
            <td className="py-2 px-4">Employeer 1% ICF Expense </td>
            <td className="py-2 px-4">June 2022 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4"> $ 30.00 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4">ABC Bank </td>
            <td className="py-2 px-4">
              <button>Action</button>{" "}
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-r">1</td>
            <td className="py-2 px-4 border-r">DV-7 </td>
            <td className="py-2 px-4 border-r">19-06-2022 </td>
            <td className="py-2 px-4">Employeer 1% ICF Expense </td>
            <td className="py-2 px-4">June 2022 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4"> $ 30.00 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4">ABC Bank </td>
            <td className="py-2 px-4">
              <button>Action</button>{" "}
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-r">1</td>
            <td className="py-2 px-4 border-r">DV-7 </td>
            <td className="py-2 px-4 border-r">19-06-2022 </td>
            <td className="py-2 px-4">Employeer 1% ICF Expense </td>
            <td className="py-2 px-4">June 2022 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4"> $ 30.00 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4">ABC Bank </td>
            <td className="py-2 px-4">
              <button>Action</button>{" "}
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-r">1</td>
            <td className="py-2 px-4 border-r">DV-7 </td>
            <td className="py-2 px-4 border-r">19-06-2022 </td>
            <td className="py-2 px-4">Employeer 1% ICF Expense </td>
            <td className="py-2 px-4">June 2022 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4"> $ 30.00 </td>
            <td className="py-2 px-4"> </td>
            <td className="py-2 px-4">ABC Bank </td>
            <td className="py-2 px-4">
              <button>Action</button>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DebitVoucher;
