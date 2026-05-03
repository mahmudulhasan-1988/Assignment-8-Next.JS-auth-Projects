import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

const CardTiles = ({ cardView }) => {
    // console.log(cardView);
    return (


        <div className="card bg-base-100  shadow-sm">
            <div className='relative w-full aspect-square'>
                <Image
                    src={cardView.image}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    alt={cardView.title} className=' object-cover rounded-xl'
                />
                <Chip size='sm' className='absolute right-2 top-2'>{cardView.category}</Chip>
            </div>

            <div className="card-body">
                <h2 className="card-title">
                    {cardView.title}

                </h2>
                <p>{cardView.description}</p>
                <div className='border-t border-gray-300'></div>
                <div>
                    <Link href={`/tiles/${cardView.id}`}>
                        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default CardTiles;