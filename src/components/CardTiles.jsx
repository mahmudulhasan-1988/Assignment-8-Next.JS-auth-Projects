import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

const CardTiles = ({ photo }) => {
    console.log(photo);
    return (


        <div className="card bg-base-100  shadow-sm">
            <div className='relative w-full aspect-square'>
                <Image
                    src={photo.image}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    alt={photo.title} className=' object-cover rounded-xl'
                />
                <Chip size='sm' className='absolute right-2 top-2'>{photo.category}</Chip>
            </div>

            <div className="card-body">
                <h2 className="card-title">
                    {photo.title}

                </h2>
                <p>{photo.description}</p>
                <div className='border-t border-gray-300'></div>
                <div className=" flex items-center justify-between mt-3">
                    <div className=' card-actions '>
                    <button className='btn btn-primary items'>
                        <MdShoppingCart />Buy Now
                    </button>
                </div>
                    <div className="badge">{photo.price} {photo.currency}</div>
                </div>
                
                <div>
                     <Link href={`/tiles/${photo.id}`}>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                View Details
              </button>
            </Link>
                </div>
            </div>
        </div>


    );
};

export default CardTiles;