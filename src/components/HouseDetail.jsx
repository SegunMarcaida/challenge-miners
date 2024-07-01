// src/components/HouseDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getHouseDetails } from '../api';
import { logEvent } from '../amplitude';
import './HouseDetail.css';

const HouseDetail = () => {
    const { id } = useParams();
    const [house, setHouse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getHouseDetails(id);
                setHouse(data);
                logEvent('Detail View', { houseId: data.id, houseName: data.name });
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading house details</div>;

    const handleHeadClick = (head) => {
        logEvent('Head Click', { headId: head.id, headName: `${head.firstName} ${head.lastName}` });
    };

    const handleTraitClick = (trait) => {
        logEvent('Trait Click', { traitId: trait.id, traitName: trait.name });
    };

    return (
        <div className="house-detail">
            <h1>{house.name}</h1>
            <p><strong>House Colours:</strong> {house.houseColours}</p>
            <p><strong>Founder:</strong> {house.founder}</p>
            <p><strong>Animal:</strong> {house.animal}</p>
            <p><strong>Element:</strong> {house.element}</p>
            <p><strong>Ghost:</strong> {house.ghost}</p>
            <p><strong>Common Room:</strong> {house.commonRoom}</p>
            <h2>Heads</h2>
            <ul>
                {house.heads.map(head => (
                    <li key={head.id} onClick={() => handleHeadClick(head)}>
                        {head.firstName} {head.lastName}
                    </li>
                ))}
            </ul>
            <h2>Traits</h2>
            <ul>
                {house.traits.map(trait => (
                    <li key={trait.id} onClick={() => handleTraitClick(trait)}>
                        {trait.name}
                    </li>
                ))}
            </ul>
            <Link to="/" onClick={() => logEvent('Back to List Click')}>Back to House List</Link>
        </div>
    );
};

export default HouseDetail;
