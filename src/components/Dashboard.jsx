import React from 'react';
import Table from './Table';
import '../App.css'; // Make sure to import the CSS file

const Dashboard = () => {
  const data = [
    { Task: 'Update edit in department', 'Assigned To': 'Aditya', Impact: 'High', 'Complete Within': 'Week', Assignee: 'Ishaan', 'Start Date': '04/03/2024', 'Deadline': '10/03/2024' },
    { Task: 'Monthly Performance Review of AUM', 'Assigned To': 'Ayush', Impact: 'Low', 'Complete Within': 'Month', Assignee: 'Sujal', 'Start Date': '05/03/2024', 'Deadline': '20/03/2024' },
    { Task: 'Prepare Financial Report', 'Assigned To': 'Sana', Impact: 'Medium', 'Complete Within': 'Week', Assignee: 'Aditya', 'Start Date': '06/03/2024', 'Deadline': '12/03/2024' },
    { Task: 'Team Meeting Preparation', 'Assigned To': 'Rahul', Impact: 'High', 'Complete Within': 'Day', Assignee: 'Ishaan', 'Start Date': '07/03/2024', 'Deadline': '07/03/2024' },
    { Task: 'Client Feedback Analysis', 'Assigned To': 'Priya', Impact: 'Medium', 'Complete Within': 'Week', Assignee: 'Aditya', 'Start Date': '08/03/2024', 'Deadline': '14/03/2024' },
    { Task: 'Update Software', 'Assigned To': 'Karan', Impact: 'High', 'Complete Within': 'Month', Assignee: 'Ayush', 'Start Date': '09/03/2024', 'Deadline': '30/03/2024' },
    { Task: 'Market Research', 'Assigned To': 'Simran', Impact: 'Low', 'Complete Within': 'Month', Assignee: 'Sujal', 'Start Date': '10/03/2024', 'Deadline': '10/04/2024' },
    { Task: 'Sales Strategy Meeting', 'Assigned To': 'Amit', Impact: 'High', 'Complete Within': 'Day', Assignee: 'Neha', 'Start Date': '11/03/2024', 'Deadline': '11/03/2024' },
    { Task: 'Compliance Check', 'Assigned To': 'Rohit', Impact: 'Medium', 'Complete Within': 'Week', Assignee: 'Rahul', 'Start Date': '12/03/2024', 'Deadline': '18/03/2024' },
    { Task: 'Annual Budget Planning', 'Assigned To': 'Sneha', Impact: 'High', 'Complete Within': 'Month', Assignee: 'Priya', 'Start Date': '13/03/2024', 'Deadline': '13/04/2024' },
    { Task: 'Customer Service Training', 'Assigned To': 'Vikas', Impact: 'Low', 'Complete Within': 'Week', Assignee: 'Karan', 'Start Date': '14/03/2024', 'Deadline': '20/03/2024' },
    { Task: 'Inventory Check', 'Assigned To': 'Arjun', Impact: 'Medium', 'Complete Within': 'Week', Assignee: 'Simran', 'Start Date': '15/03/2024', 'Deadline': '21/03/2024' },
    { Task: 'Website Update', 'Assigned To': 'Ritika', Impact: 'High', 'Complete Within': 'Week', Assignee: 'Amit', 'Start Date': '16/03/2024', 'Deadline': '22/03/2024' },
    { Task: 'Security Audit', 'Assigned To': 'Vineet', Impact: 'Medium', 'Complete Within': 'Month', Assignee: 'Rohit', 'Start Date': '17/03/2024', 'Deadline': '17/04/2024' },
    { Task: 'Project Launch', 'Assigned To': 'Isha', Impact: 'High', 'Complete Within': 'Day', Assignee: 'Sneha', 'Start Date': '18/03/2024', 'Deadline': '18/03/2024' },
    { Task: 'Data Backup', 'Assigned To': 'Nikhil', Impact: 'Low', 'Complete Within': 'Week', Assignee: 'Vikas', 'Start Date': '19/03/2024', 'Deadline': '25/03/2024' },
    { Task: 'HR Policy Review', 'Assigned To': 'Megha', Impact: 'Medium', 'Complete Within': 'Month', Assignee: 'Arjun', 'Start Date': '20/03/2024', 'Deadline': '20/04/2024' },
    { Task: 'User Training', 'Assigned To': 'Pooja', Impact: 'High', 'Complete Within': 'Week', Assignee: 'Ritika', 'Start Date': '21/03/2024', 'Deadline': '27/03/2024' },
    { Task: 'Product Testing', 'Assigned To': 'Rahul', Impact: 'High', 'Complete Within': 'Week', Assignee: 'Vineet', 'Start Date': '22/03/2024', 'Deadline': '28/03/2024' },
    { Task: 'System Upgrade', 'Assigned To': 'Ishaan', Impact: 'Medium', 'Complete Within': 'Month', Assignee: 'Isha', 'Start Date': '23/03/2024', 'Deadline': '23/04/2024' },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <Table data={data} />
    </div>
  );
};

export default Dashboard;
