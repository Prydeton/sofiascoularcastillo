import { notFound } from 'next/navigation'

interface Props {
  params: {
    category: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

const categories = ['graphics', 'film', 'multimedia', 'photography', 'sculptural', 'fine-arts'] as const
type Category = (typeof categories)[number]

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }))
}

const CategoryGallery = ({ params }: Props) => {
  const category = params.category as Category

  if (!categories.includes(category)) {
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

export default CategoryGallery
