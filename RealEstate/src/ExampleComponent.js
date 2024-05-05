import React, { useEffect } from 'react';
import axios from 'axios';

const ExampleComponent = () => {
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users');
                console.log(response.data); // Do something with the data
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            {/* Your component content */}
        </div>
    );
};

export default ExampleComponent;