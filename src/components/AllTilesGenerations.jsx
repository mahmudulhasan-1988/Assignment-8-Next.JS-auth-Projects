import React from 'react';
import CardTiles from './CardTiles';

const AllTilesGenerations = async () => {
    const res = await fetch('https://assignment-8-next-js-auth-projects.vercel.app/data.json');
    const tilesData = await res.json();

    // console.log(tilesData);

    return (
        <div>
            <h1 className='text-2xl font-bold mt-5'>Our Tiles List</h1>

            <div className=' grid  lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8 mb-8'>
                {
                    tilesData?.tiles?.map(photo => <CardTiles key={photo.id} photo={photo}></CardTiles>)

                
                }
            </div>
        </div>
    );
};

export default AllTilesGenerations;