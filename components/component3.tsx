import React, { useEffect, useState } from 'react';

type Post = {
    useId: number;
    id: number; 
    title: string;
    body: string;
}

export const Component3 = () => {
    const [data, setData] = useState<Post[] | null > (null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res) // Corrected this line
        .then(data => setData(data.json()))
        .catch((error) => {console.log(error);});

        
    }, []);

    return (
        <div>
            {/* console.log(data) */}
            {JSON.stringify(data)}
        </div>
    );
}
