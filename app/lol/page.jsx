'use client';
// ContainerManager.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContainerManager = () => {
    const [containers, setContainers] = useState([]);

    useEffect(() => {
        fetchContainers();
    }, []);

    const fetchContainers = async () => {
        try {
            const response = await axios.get('http://localhost:3001/containers');
            setContainers(response.data);
        } catch (error) {
            console.error('Error fetching containers:', error);
        }
    };

    const startContainer = async (id) => {
        try {
            await axios.post(`http://localhost:3001/containers/${id}/start`);
            fetchContainers(); // Refresh the list after starting the container
        } catch (error) {
            console.error('Error starting container:', error);
        }
    };

    const stopContainer = async (id) => {
        try {
            await axios.post(`http://localhost:3001/containers/${id}/stop`);
            fetchContainers(); // Refresh the list after stopping the container
        } catch (error) {
            console.error('Error stopping container:', error);
        }
    };

    return (
        <div>
            <h1>Docker Containers</h1>
            <ul>
                {containers.map(container => (
                    <li key={container.Id}>
                        {container.Names[0]} - {container.State}
                        {container.State === 'running' ? (
                            <button onClick={() => stopContainer(container.Id)}>Stop</button>
                        ) : (
                            <button onClick={() => startContainer(container.Id)}>Start</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContainerManager;
