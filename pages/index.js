import Link from 'next/link'

const index = () => {
  return (
    <div>
      <p>Hello World!</p>
      <Link href="/contact">
        <a>Contact me!</a>
      </Link>
    </div>
  )
}

export default index