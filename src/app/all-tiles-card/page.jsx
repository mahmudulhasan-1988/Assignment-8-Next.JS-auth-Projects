import CardTiles from '@/components/CardTiles';
import React from 'react';

const AllCardPage = async() => {
    const res = await fetch('https://assignment-8-next-js-auth-projects.vercel.app/data.json');
    const tilesData = await res.json();
    
    return (
        <div>
             <h1 className='text-2xl font-bold my-5'>All Tiles List</h1>

            <div className=' grid  lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8 mb-8'>
                {tilesData?.tiles?.map(cardView => <CardTiles key={cardView.id} cardView={cardView}></CardTiles>)}

            </div>
        </div>
    );
};

export default AllCardPage;