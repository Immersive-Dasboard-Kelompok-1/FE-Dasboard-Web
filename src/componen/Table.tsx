import { FC } from "react";

interface TableProps {
    TableHead: "string";
    th?: "string";
    td: any;

}
const Table: FC<TableProps> = ({ TableHead, th, td }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>{TableHead}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>{th}</th>
                            <td>{td}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table