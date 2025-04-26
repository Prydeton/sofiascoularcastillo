import { Gallery } from '@/app/gallery/Gallery'
import { Category } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{
    category: string
  }>
}

const categories = Object.values(Category)

export const generateStaticParams = () => {
  return categories.map((category) => ({
    category: category,
  }))
}
const GalleryPage = async ({ params }: Props) => {
  const resolvedParams = await params
  const category = resolvedParams.category as Category

  const filteredImages = Gallery.filter((piece) => piece.category === category)

  if (!filteredImages.length) {
    notFound()
  }

  return (
    <div className="w-[80%] md:w-[95%] max-w-[2000px] mx-auto">
      <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 w-full capitalize text-center">{category}</h2>
      <div className="grid auto-rows-[1fr] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2">
        {filteredImages.map((piece, index) => (
          <Link key={index} href={piece.link} className="relative block aspect-square w-full group cursor-pointer">
            <Image
              src={piece.src}
              alt={piece.alt}
              fill
              sizes="(min-width: 1536px) 25vw,
                     (min-width: 1280px) 33vw,
                     (min-width: 768px) 50vw,
                     100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center p-4">
                <h2 className="text-xl font-bold">{piece.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default GalleryPage
