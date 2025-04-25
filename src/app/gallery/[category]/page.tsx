import { notFound } from 'next/navigation'

const categories = ['graphics', 'film', 'multimedia', 'photography', 'sculptural', 'fine-arts'] as const
type Category = (typeof categories)[number]

type Props = {
  params: Promise<{
    category: string
  }>
}

export const generateStaticParams = () => {
  return categories.map((category) => ({
    category,
  }))
}

const GalleryPage = async ({ params }: Props) => {
  const resolvedParams = await params
  const category = resolvedParams.category as Category

  if (!categories.includes(category)) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{category}</h1>
      Gallery content for {category} category will be displayed here.
      <p className="mt-4 text-lg">Coming soon...</p>
    </div>
  )
}

export default GalleryPage
