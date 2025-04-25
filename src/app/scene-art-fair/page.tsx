'use client'

import { Viewer, Worker } from '@react-pdf-viewer/core'
import { SpecialZoomLevel } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

const SceneArtFair = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
  })

  return (
    <div className="w-[90%] mx-auto px-4 sm:px-6 md:py-4">
      <div className="mb-12 max-w-4xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Scene Art Fair</h2>
        <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
          SCENE Art Fair was developed as a hypothetical project by me and a group of peers, aiming to rethink how
          emerging artists engage with the art market. Focused on artists aged 16-27, the fair was designed to foster
          early-career visibility and collector engagement. My role centered on curation, defining the concept of
          emerging artists, developing the fair's layout, and establishing partnerships with universities and schools to
          create a strong talent pipeline. Together, we built a model that prioritizes accessibility, authenticity, and
          meaningful connections between artists and collectors.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="h-[600px] sm:h-[800px] border border-gray-200 rounded-lg overflow-hidden">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              fileUrl="/media/scene-art-fair/SCENE_FinalProject.pdf"
              plugins={[defaultLayoutPluginInstance]}
              defaultScale={SpecialZoomLevel.PageFit}
            />
          </Worker>
        </div>
        <div className="h-[600px] sm:h-[800px] border border-gray-200 rounded-lg overflow-hidden">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              fileUrl="/media/scene-art-fair/SCENE_FinalPresentation.pdf"
              plugins={[defaultLayoutPluginInstance]}
              defaultScale={SpecialZoomLevel.PageFit}
            />
          </Worker>
        </div>
      </div>
    </div>
  )
}

export default SceneArtFair
