export interface PhotoAlbumImage {
  src: string
  width: number
  height: number
  alt?: string
}

export interface GalleryPiece {
  category: Category
  title: string
  alt: string
  src: string
  link: string
  width: number
  height: number
}

export enum Category {
  Graphics = 'graphics',
  Film = 'film',
  Multimedia = 'multimedia',
  Photography = 'photography',
  Sculptural = 'sculptural',
  FineArts = 'fine-arts',
}
