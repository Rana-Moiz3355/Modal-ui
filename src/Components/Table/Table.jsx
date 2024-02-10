import React, { useContext } from "react";
import UserContext from "../../Context/userContext";

function Table() {
    const { User } = useContext(UserContext);

    return (
        <>
            <div className="flex justify-center ">
                <table className="shadow-lg bg-white w-screen  mt-14">
                    <thead>
                        <tr className="sticky top-[55px] w-screen">
                            <th className="bg-blue-100 border text-left px-8 py-4">
                                E-Mail{" "}
                            </th>
                            <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {User.map((item, index) => (
                            <tr key={index}>
                                <td className="border px-8 py-4">{item.mail}</td>
                                <td className="border px-8 py-4">{item.Name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Table;
