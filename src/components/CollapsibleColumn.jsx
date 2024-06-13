// src/components/CollapsibleColumn.js
import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const CollapsibleColumn = ({ column, isVisible, toggleColumn }) => {
    return (
        <button onClick={() => toggleColumn(column)}>
            {isVisible ? <FaEye /> : <FaEyeSlash />} {column}
        </button>
    );
};

export default CollapsibleColumn;
