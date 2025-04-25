'use client'

import { Viewer, Worker } from '@react-pdf-viewer/core'
import { SpecialZoomLevel } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { useState } from 'react'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import type { PhotoAlbumImage } from '@/types'
import RowsPhotoAlbum from 'react-photo-album'
import 'react-photo-album/rows.css'
import Image from 'next/image'
import 'yet-another-react-lightbox/styles.css'
import Lightbox from 'yet-another-react-lightbox'

const photosAlbum: PhotoAlbumImage[] = [
  { src: '/media/lair-arts/1.jpeg', width: 1920, height: 1440 },
  { src: '/media/lair-arts/2.jpeg', width: 1920, height: 2560 },
  { src: '/media/lair-arts/3.png', width: 1920, height: 1280 },
  { src: '/media/lair-arts/4.png', width: 1920, height: 1280 },
  { src: '/media/lair-arts/5.png', width: 1920, height: 1280 },
]

const fullPhoto: PhotoAlbumImage = { src: '/media/lair-arts/6.jpeg', width: 3024, height: 4032 }

const LairArts = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
  })

  return (
    <div className="w-[90%] mx-auto px-4 sm:px-6 md:py-4">
      <div className="mb-12 max-w-4xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">L'air Arts Typeface and Logo Redesign</h2>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <div className="h-[600px] sm:h-[800px] border border-gray-200 rounded-lg overflow-hidden">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              fileUrl="/media/scene-art-fair/SCENE_FinalProject.pdf"
              plugins={[defaultLayoutPluginInstance]}
              defaultScale={SpecialZoomLevel.PageFit}
            />
          </Worker>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full mt-8">
        <RowsPhotoAlbum
          layout="rows"
          photos={photosAlbum}
          targetRowHeight={150}
          spacing={8}
          padding={0}
          rowConstraints={{
            maxPhotos: 3,
            minPhotos: 2,
          }}
          onClick={({ index }) => {
            setLightboxIndex(index)
            setLightboxOpen(true)
          }}
        />
      </div>

      <div className="max-w-2xl mx-auto w-full mt-8">
        <Image
          {...fullPhoto}
          alt=""
          onClick={() => {
            setLightboxIndex(6)
            setLightboxOpen(true)
          }}
        />
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={[...photosAlbum, fullPhoto]}
      />
    </div>
  )
}

export default LairArts
