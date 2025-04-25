'use client'

import { Viewer, Worker } from '@react-pdf-viewer/core'
import { SpecialZoomLevel } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

const NewVisualIdentity104 = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
  })

  return (
    <div className="w-[90%] mx-auto px-4 sm:px-6 md:py-4">
      <div className="mb-12 max-w-4xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">New Visual Identity 104</h2>
        <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
          I created a hypothetical new visual identity for Le Centquatre-Paris, which includes a redesigned logo and
          concepts for social media engagement. This project focuses on refreshing the institution's brand by developing
          a cohesive visual language that can be applied across various platforms, aiming to modernize and enhance its
          public presence.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="h-[600px] sm:h-[800px] border border-gray-200 rounded-lg overflow-hidden">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              fileUrl="/media/new-visual-identity-104/NewVisualIdentity104.pdf"
              plugins={[defaultLayoutPluginInstance]}
              defaultScale={SpecialZoomLevel.PageFit}
            />
          </Worker>
        </div>
      </div>
    </div>
  )
}

export default NewVisualIdentity104
