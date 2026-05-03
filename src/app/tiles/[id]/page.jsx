import CardTiles from '@/components/CardTiles';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { MdShoppingCart } from 'react-icons/md';

const TilesDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://assignment-8-next-js-auth-projects.vercel.app/data.json', {
        cache: "no-store"
    });
    const tilesData = await res.json();
    const tile = tilesData.tiles.find(t => t.id === id);
    console.log(tile);

    return (
            <div className="card card-side bg-base-100 shadow-sm mt-10">
                <figure>
                     <Image
                        src={tile.image}
                        width={800}
                        height={800}
                        alt={tile.title} className=' rounded-lg  mb-10 '
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{tile.title}</h2>
                    <p>{tile.description}</p>
                    <div className="card-actions justify-between items-center">
                        <button className='btn btn-primary items'>
                                <MdShoppingCart />Buy Now
                            </button>
                            <div className="badge">{tile.price} {tile.currency}</div>
                    </div>
                </div>
            </div>
        
    );
};

export default TilesDetailsPage;
