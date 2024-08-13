import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://newdummycluster-git-shamdavid2345-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/api')
            .then(response => response.json())
            .then(data => setEmployees(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Employee Records</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.position}</td>
                                <td>{employee.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </header>
        </div>
    );
}

export default App;
