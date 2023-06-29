import { listOfImages } from '@/services'
import { blurredGalleryImage } from '@/utils'
import clsx from 'clsx'
import Image from 'next/image'

function Gallery() {
  const classes = {
    list: clsx('grid grid-cols-2 gap-2.5 p-2.5 md:max-h-screen md:overflow-auto lg:grid-cols-3'),
    item: clsx('relative aspect-square'),
    image: clsx('rounded-md')
  }

  return (
    <ul className={classes.list}>
      {listOfImages.map((image, index) => {
        const imagesWithPriority = [0, 1, 2, 3, 4, 5]
        const hasPriority = imagesWithPriority.includes(index)

        return (
          <li className={classes.item} key={image.id}>
            <Image
              className={classes.image}
              src={image.url}
              alt={image.alt}
              priority={hasPriority}
              fill
              blurDataURL={blurredGalleryImage}
              placeholder='blur'
              sizes='(max-width: 1024px) 50vw, 40vw'
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Gallery
