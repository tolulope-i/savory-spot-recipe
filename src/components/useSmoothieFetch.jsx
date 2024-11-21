import { useState, useEffect } from 'react';

const useSmoothieFetch = (id) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true);
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                if (!response.ok) throw new Error('Could not fetch the data');
                
                const result = await response.json();
                setData(result.drinks ? result.drinks[0] : null);  // Set to first drink object if exists
                setIsPending(false);
            } catch (err) {
                setError(err.message);
                setIsPending(false);
            }
        };
        
        fetchData();
    }, [id]);

    return { data, isPending, error };
};

export default useSmoothieFetch;
