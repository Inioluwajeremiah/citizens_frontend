import React from "react";
import BadgeIcon from "../BadgeIcon";

const Table = ({ users }) => {
  function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="mt-32">
      <table className="table-auto align-text-top ">
        <thead>
          <tr className="text-[#A6A9AA] text-xs">
            <th className="p-3">Name</th>
            <th className="p-3">Verification Status</th>
            <th className="p-3">Contact Details</th>
            <th className="p-3">Form Details</th>
            <th className="p-3">Verification Details</th>
            <th className="p-3">Rating</th>
            <th className="p-3">Activities</th>
          </tr>
        </thead>
        <tbody className="text-sm text-[#05004E]">
          {users.map((item, index) => (
            <tr key={index} className="border-t last:border-b align-text-top ">
              <td className="p-3 flex flex-row items-center gap-x-2">
                <p
                  style={{ backgroundColor: generateRandomColor() }}
                  className="w-6 h-6 text-xs md:text-sm font-semibold flex justify-center items-center rounded-md p-2 text-white"
                >
                  {item.Name.split("")[0]}
                </p>
                <p>{item.Name}</p>
              </td>
              <td className="p-3 flex flex-row items-start gap-x-2 border">
                <span className="capitalize">{item.VerificationStatus}</span>
                <BadgeIcon
                  color={
                    item.VerificationStatus === "verified"
                      ? "#6FB75D"
                      : item.VerificationStatus === "pending"
                      ? "#FF8C22"
                      : item.VerificationStatus === "rejected"
                      ? "#FE5D6E"
                      : ""
                  }
                />
              </td>

              <td className="p-3">
                <p>Address: {item.ContactDetails.Address}</p>{" "}
                <p>Tel:{item.ContactDetails.Tel}</p>{" "}
                <p>Email:{item.ContactDetails.email}</p>
                <p>Socials:{item.ContactDetails.socials}</p>
              </td>
              <td className="p-3">
                <p>Farm Size: {item.FarmDetails.FarmSize}</p>{" "}
                <p>CropsGrown: {item.FarmDetails.CropsGrown}</p>{" "}
              </td>
              <td className="p-3 text-[#6FB75D]">{item.VerificationDetails}</td>
              <td className="p-3">
                <div className="text-left static-star relative text-l inline-block ">
                  <div
                    className={`dynamic-star absolute top-0 left-0 overflow-hidden  `}
                    style={{
                      width: `${((item.Rating / 5) * 100).toFixed(1)}%`,
                    }}
                  ></div>
                </div>
              </td>
              <td className="p-3 text-[#5C51F8] capitalize text-xs underline">
                <a href="">{item.Activities}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
