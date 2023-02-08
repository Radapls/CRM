import { useNavigate } from "react-router-dom";

function Client({ client })
{
    const navigate = useNavigate()

    const { name, company, email, mobile, id } = client;

    return (
        <tr className="border-b">
            <td className="p-6">
                <p className="text-l text-gray-800">{name}</p>
                <p >{company}</p>
            </td>


            <td className="p-6 text-center">
                <p className="text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">Email: </span> {email}
                </p>
                <p className="text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">Cellphone: </span> {mobile}
                </p>
            </td>

            <td className="p-6 flex gap-3 justify-center">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clients/${id}/edit`)}> Edit
                </button>
                <button
                    type="button"
                    className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"> Delete
                </button>
            </td>

        </tr>
    )
}

export default Client