import {useTable} from "react-table";

export default function Table({ columns, data }) {
    //Table component logic and UI come here
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    });

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th 
                                {...column.getHeaderProps()}
                                style={{
                                    borderBottom: 'solid 3px gold',
                                    background: 'green',
                                    color: 'white',
                                    fontWeight: 'bold',
                                }}
                            >
                            {column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td 
                                {...cell.getCellProps()}
                                style={{
                                    borderBottom: 'solid 3px red',
                                    background: 'blue',
                                    color: 'white',
                                }}
                                >
                                {cell.render("Cell")}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>

        </table>
    );
}