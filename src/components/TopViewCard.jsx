import React from 'react';
import CardTiles from './CardTiles';

const TopViewCard = async () => {
    const res = await fetch('https://assignment-8-next-js-auth-projects.vercel.app/data.json', {
        cache: "no-store"
    });
    const tilesData = await res.json();
    const tiles = tilesData?.tiles || [];
    const viewData = tiles.slice(0, 9);

    

    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>Our Tiles List</h1>

            <div className=' grid  lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8 mb-8'>
                
                {
                    viewData.map(cardView => <CardTiles key={cardView.id} cardView= {cardView}></CardTiles>)
                }
            </div>
        </div>
    );
};

export default TopViewCard;