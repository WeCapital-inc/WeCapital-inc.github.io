import React, { useEffect, useState } from 'react';

export default function Cat() {
    const [catUrl, setCatUrl] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then((res) => res.json())
            .then((data) => {
                if (data && data.length > 0) {
                    setCatUrl(data[0].url);
                }
            })
            .catch((error) => {
                console.error('Error fetching cat:', error);
            });
    }, []);

    return (
        <>
            {catUrl ? (
                <div style={{width: "100%", alignItems: "center" }}>
                    <img src={catUrl} alt="cat" height="200px" />

                </div>
            ) : (
                <p>No cat found</p>
            )}
        </>
    );
}