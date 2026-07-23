'use client';

import Image from 'next/image';
import { useState } from 'react';

const images = [
  '477013704_122147278430518154_8573727612147990011_n.jpg',
  '3k2hb4jh234jh3243243.jpeg',
  '3k2jb423k4b2hj45.jpeg',
  '474761164_122144575124518154_4084442623808878705_n.jpg',
  '475592055_122145033374518154_5123365875531339359_n.jpg',
  '475999657_122145607448518154_147220947700790751_n.jpg',
  '476320568_122146467794518154_2900856775627043451_n.jpg',
  '480735340_122149841996518154_8091173193474114635_n.jpg',
  '480966131_122150612054518154_4789827653020870265_n.jpg',
  '481168401_122148792482518154_2011392369769842376_n.jpg',
  '481255414_122151207410518154_8017301662374617108_n.jpg',
  '481256843_10236281853884308_4543252884998669865_n.jpg',
  '481310818_122151207416518154_4831210309755888413_n.jpg',
  '481323981_1043170514522715_4723166681285370000_n.jpg',
  '481672902_3702302016678293_1630375864512363101_n.jpg',
  '481912736_1043170761189357_2137792268364660675_n.jpg',
  '481956147_1043170694522697_411072165241000356_n.jpg',
  '483570334_122153059574518154_5956307653249261284_n.jpg',
  '484120084_122153059544518154_3537234925611559883_n.jpg',
  '484245665_122153059568518154_8889808964218982189_n.jpg',
  '484442613_122153059562518154_5089905721279604489_n.jpg',
  'k23jh4k32h4k2g42k.jpeg',
  'Untitled-1-1.jpg',
  'Untitled-1-2.jpg',
  'Untitled-2-1.jpg',
  'Untitled-2.jpg',
  'Untitled-3.jpg',
  'Untitled-4.jpg',
  'Untitled-5.jpg',
  'Untitled-6.jpg',
  'WhatsApp Image 2026-07-01 at 13.29.15.jpeg',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-8 sm:py-12">
      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-6 lg:px-8">
        {images.map((filename, index) => {
          const src = `/full-gallery/${filename}`;

          return (
            <button
              key={filename}
              type="button"
              onClick={() => setSelectedImage(src)}
              className="relative aspect-square overflow-hidden rounded-lg bg-[#FBF2E0] shadow-md transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[#D95E25]"
              aria-label={`View gallery image ${index + 1}`}
            >
              <Image
                src={src}
                alt={`Nourish gallery image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
            </button>
          );
        })}
      </div>

      {selectedImage && (
        <button
          type="button"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          aria-label="Close image preview"
        >
          <Image
            src={selectedImage}
            alt="Nourish gallery image preview"
            width={1600}
            height={1600}
            className="max-h-[90vh] w-auto max-w-full rounded-lg object-contain"
            sizes="100vw"
          />
        </button>
      )}
    </div>
  );
}
