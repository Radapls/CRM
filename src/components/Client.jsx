
function Client({ client })
{

    const { name, company, email, mobile, id } = client;

    return (
        <tr>
            <td className="p-6 text-center">
                {name}
            </td>
        </tr>
    )
}

export default Client