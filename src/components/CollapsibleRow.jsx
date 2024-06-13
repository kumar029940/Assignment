// src/components/CollapsibleRow.js
import React, { useState } from 'react';

const CollapsibleRow = ({ row, columns }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <tr onClick={() => setIsOpen(!isOpen)}>
                {columns.map((column) => (
                    <td key={column}>{row[column]}</td>
                ))}
            </tr>
            {isOpen && (
                <tr>
                    <td colSpan={columns.length}>
                    </td>
                </tr>
            )}
        </>
    );
};

export default CollapsibleRow;
