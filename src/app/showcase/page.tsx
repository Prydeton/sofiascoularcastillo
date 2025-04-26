import Link from 'next/link'

const Showcase = () => {
  return (
    <div>
      <h2 className="mb-2">Sofia's Portfolio - Work in progress</h2>

      <div className="flex flex-col gap-1">
        <Link href="/soutine-red" className="hover:underline">
          Soutine Red
        </Link>
        <Link href="/lair-arts" className="hover:underline">
          Lair Arts
        </Link>
        <Link href="/new-visual-identity-104" className="hover:underline">
          New Visual Identity 104
        </Link>
        <Link href="/scene-art-fair" className="hover:underline">
          Scene Art Fair
        </Link>
      </div>
    </div>
  )
}

export default Showcase
