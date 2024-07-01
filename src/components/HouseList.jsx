import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getHouses } from '../api';
import { logEvent } from '../amplitude';
import './HouseList.css';

const HouseList = () => {
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getHouses();
                setHouses(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading houses</div>;

    const handleHouseClick = (house) => {
        logEvent('House Click', { houseId: house.id, houseName: house.name });
    };

    return (
        <div className="house-list">
            <h1>Houses</h1>
            <ul>
                {houses.map(house => (
                    <li key={house.id}>
                        <Link to={`/house/${house.id}`} onClick={() => handleHouseClick(house)}>{house.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HouseList;
