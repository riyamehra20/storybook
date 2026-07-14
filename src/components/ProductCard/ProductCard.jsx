import React from 'react';
import Image from 'next/image';

export function ProductCard({
  imageUrl = 'https://placehold.co/400x300',
  title = 'Product name',
  price = '$0.00',
  badge = '',
  outOfStock = false,
}) {
  return (
    <div className="w-72 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm">
      <div className="relative h-40 w-full bg-gray-100 dark:bg-gray-800">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="288px"
          style={{ objectFit: 'cover' }}
          unoptimized
        />
        {badge && (
          <span className="absolute top-2 left-2 rounded-full bg-brand px-2 py-0.5 text-xs font-semibold text-white">
            {badge}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-base font-bold text-gray-900 dark:text-gray-100">
          {price}
        </p>
        <span
          className={
            outOfStock
              ? 'text-xs font-medium text-red-500'
              : 'text-xs font-medium text-green-600 dark:text-green-400'
          }
        >
          {outOfStock ? 'Out of stock' : 'In stock'}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
