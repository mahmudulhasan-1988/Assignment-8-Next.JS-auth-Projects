import CardTiles from '@/components/CardTiles';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const TilesDetailsPage = async({params}) => {
    const {id} = await params;
    const res = await fetch('https://assignment-8-next-js-auth-projects.vercel.app/data.json');
    const tilesData = await res.json();
    const tile = tilesData.tiles.find(t => t.id === id);
    console.log(tile);

    return (
        <div className='max-w-4xl mx-auto my-8'>
            <div className='items-center justify-center'>
            <figure>
                <Image
                                    src={tile.image}
                                    width={800}
                                    height={800}
                                    alt={tile.title} className=' rounded-lg shadow-2xl mb-10 '
                                />
            </figure>
            <div>
            <h2 className='text-left text-2xl font-bold'>{tile.title}</h2>
            <p className=''>{tile.description}</p>
            </div>
           </div>
            <Link href={`/profile/${tile.id}`}>
                        <button className='btn bg-green-600 hover:bg-gray-400 hover:text-white text-white mt-5'>See Our the Profile<BsArrowRight></BsArrowRight></button>
                    </Link>
        </div>
    );
};

export default TilesDetailsPage;
