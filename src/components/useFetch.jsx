import { useState, useEffect } from "react";

const useFetch = (url) => {
    // creating an array of recipes with useState so we can be able to change it later
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    // FUNCTION FOR FETCHING RECIPES FROM THE API
    useEffect(() => {
        setIsPending(true);
        setError(null);
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error("can not fetch data")
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null)
                })
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000)

    }, [url]);

    return { data, isPending, error };
}

export default useFetch;