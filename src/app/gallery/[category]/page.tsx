import { notFound } from 'next/navigation'

interface Props {
  params: {
    category: string
  }
}

const categories = ['graphics', 'film', 'multimedia', 'photography', 'sculptural', 'fine-arts']

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }))
}

export default function GalleryPage({ params }: Props) {
  if (!categories.includes(params.category)) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{params.category}</h1>
      Gallery content for {params.category} category will be displayed here.
      <p className="mt-4 text-lg">Coming soon...</p>
    </div>
  )
}
