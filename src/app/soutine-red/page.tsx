'use client'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import type { PhotoAlbumImage } from '@/types'
import Image from 'next/image'
import { useState } from 'react'
import 'yet-another-react-lightbox/styles.css'
import RowsPhotoAlbum from 'react-photo-album'
import 'react-photo-album/rows.css'
import Lightbox from 'yet-another-react-lightbox'

const photosAlbum1: PhotoAlbumImage[] = [
  { src: '/media/soutine-red/1.jpeg', width: 1920, height: 1043 },
  { src: '/media/soutine-red/2.jpeg', width: 600, height: 662 },
  { src: '/media/soutine-red/3.jpeg', width: 600, height: 450 },
  { src: '/media/soutine-red/4.jpg', width: 600, height: 450 },
]

const fullPhoto: PhotoAlbumImage = {
  src: '/media/soutine-red/5.jpeg',
  width: 1920,
  height: 1358,
}

const photosAlbum2: PhotoAlbumImage[] = [
  { src: '/media/soutine-red/6.png', width: 1920, height: 2573 },
  { src: '/media/soutine-red/7.png', width: 600, height: 400 },
  { src: '/media/soutine-red/8.png', width: 600, height: 400 },
  { src: '/media/soutine-red/9.png', width: 1920, height: 1280 },
  { src: '/media/soutine-red/10.png', width: 600, height: 400 },
]

const SoutineRed = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  return (
    <div className="w-[90%] mx-auto px-4 sm:px-6 md:py-4">
      <div className="mb-12 max-w-4xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Soutine Red</h2>
        <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
          As creative director and graphic designer, a promotional pamphlet was developed for L’AiR Arts, soon to be
          used at all events to highlight the organization’s mission. Collaborating with Clara Fortis, Lulu Alsalem,
          Sarah Mullen, Alessia Nastase, and Ceylin Dondurmacioglu, a cohesive visual identity was created to reflect
          the organization’s values.
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full mt-8">
        <div className="max-w-4xl mx-auto w-full mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {photosAlbum1.map((photo, index) => (
              <button
                type="button"
                key={index}
                className="cursor-pointer aspect-[3/2] w-full p-0 border-0"
                onClick={() => {
                  setLightboxIndex(index)
                  setLightboxOpen(true)
                }}
                aria-label={`View image ${index + 1}`}
              >
                <Image {...photo} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full mt-8">
        <Image
          {...fullPhoto}
          alt=""
          onClick={() => {
            setLightboxIndex(4)
            setLightboxOpen(true)
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto w-full mt-8">
        <RowsPhotoAlbum
          layout="rows"
          photos={photosAlbum2}
          targetRowHeight={150}
          spacing={8}
          padding={0}
          rowConstraints={{
            maxPhotos: 3,
            minPhotos: 2,
          }}
          onClick={({ index }) => {
            setLightboxIndex(index + 5)
            setLightboxOpen(true)
          }}
        />
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={[...photosAlbum1, fullPhoto, ...photosAlbum2]}
      />
    </div>
  )
}

export default SoutineRed
