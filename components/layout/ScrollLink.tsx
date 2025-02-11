import clsx from 'clsx'
import Link from 'next/link'
import { MouseEvent } from 'react'

interface ScrollLinkI extends React.PropsWithChildren {
  id: string
  currentSection: string
}

export function ScrollLink({ id, children, currentSection }: ScrollLinkI) {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Link
      href={`#${id}`}
      passHref
      className={clsx([
        'font-semibold',
        {
          'text-blue-500': currentSection == id
        }
      ])}
    >
      <div onClick={handleClick}>{children}</div>
    </Link>
  )
}
