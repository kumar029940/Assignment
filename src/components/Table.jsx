import React, { useState } from 'react';
import '../App.css'

const Table = ({ data }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [visibleColumns, setVisibleColumns] = useState({
    Task: true,
    'Assigned To': true,
    Impact: true,
    'Complete Within': true,
    Assignee: true,
    'Start Date': true,
    Deadline: true,
  });

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const toggleColumn = (column) => {
    setVisibleColumns({
      ...visibleColumns,
      [column]: !visibleColumns[column],
    });
  };

  const generateRandomData = (task) => {
    const descriptions = [
      `Detailed analysis and review for ${task}`,
      `Comprehensive overview of ${task}`,
      `Evaluation and updates for ${task}`,
      `In-depth inspection and feedback for ${task}`,
    ];

    const statuses = ['In Progress', 'Completed', 'Pending', 'On Hold'];
    const priorities = ['High', 'Medium', 'Low'];
    const additionalDetails = [
      'Reviewed by team lead',
      'Awaiting client feedback',
      'Requires additional resources',
      'Scheduled for next sprint',
    ];

    return {
      Description: descriptions[Math.floor(Math.random() * descriptions.length)],
      Status: statuses[Math.floor(Math.random() * statuses.length)],
      Priority: priorities[Math.floor(Math.random() * priorities.length)],
      AdditionalDetails: additionalDetails[Math.floor(Math.random() * additionalDetails.length)],
    };
  };

  return (
    <div className = 'remove'>
      <button onClick={() => toggleColumn('Task')}>Toggle Task</button>
      <button onClick={() => toggleColumn('Assigned To')}>Toggle Assigned To</button>
      <button onClick={() => toggleColumn('Impact')}>Toggle Impact</button>
      <button onClick={() => toggleColumn('Complete Within')}>Toggle Complete Within</button>
      <button onClick={() => toggleColumn('Assignee')}>Toggle Assignee</button>
      <button onClick={() => toggleColumn('Start Date')}>Toggle Start Date</button>
      <button onClick={() => toggleColumn('Deadline')}>Toggle Deadline</button>
      <table>
        <thead>
          <tr>
            {visibleColumns.Task && <th>Task</th>}
            {visibleColumns['Assigned To'] && <th>Assigned To</th>}
            {visibleColumns.Impact && <th>Impact</th>}
            {visibleColumns['Complete Within'] && <th>Complete Within</th>}
            {visibleColumns.Assignee && <th>Assignee</th>}
            {visibleColumns['Start Date'] && <th>Start Date</th>}
            {visibleColumns.Deadline && <th>Deadline</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <React.Fragment key={index}>
              <tr onClick={() => toggleRow(index)}>
                {visibleColumns.Task && <td>{row.Task}</td>}
                {visibleColumns['Assigned To'] && <td>{row['Assigned To']}</td>}
                {visibleColumns.Impact && <td>{row.Impact}</td>}
                {visibleColumns['Complete Within'] && <td>{row['Complete Within']}</td>}
                {visibleColumns.Assignee && <td>{row.Assignee}</td>}
                {visibleColumns['Start Date'] && <td>{row['Start Date']}</td>}
                {visibleColumns.Deadline && <td>{row.Deadline}</td>}
              </tr>
              {expandedRow === index && (
                <tr className="expanded-row">
                  <td colSpan="7">
                    {(() => {
                      const randomData = generateRandomData(row.Task);
                      return (
                        <div>
                          <div><strong>Description:</strong> {randomData.Description}</div>
                          <div><strong>Status:</strong> {randomData.Status}</div>
                          <div><strong>Priority:</strong> {randomData.Priority}</div>
                          <div><strong>Additional Details:</strong> {randomData.AdditionalDetails}</div>
                        </div>
                      );
                    })()}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
