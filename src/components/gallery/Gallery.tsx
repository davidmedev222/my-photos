import { Images } from '@/models'
import clsx from 'clsx'
import Image from 'next/image'

const listOfImages: Images = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1685976113/proyects/my-photos/photo1_qoqi89.webp',
    alt: 'Imagen ilustrativa'
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1685976113/proyects/my-photos/photo2_e0cacw.webp',
    alt: 'Imagen ilustrativa'
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1685976112/proyects/my-photos/photo3_wy5r9q.webp',
    alt: 'Imagen ilustrativa'
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1685976112/proyects/my-photos/photo4_jfwezg.webp',
    alt: 'Imagen ilustrativa'
  },
  {
    id: 5,
    url: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1685976112/proyects/my-photos/photo5_yohuht.webp',
    alt: 'Imagen ilustrativa'
  },
  {
    id: 6,
    url: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1685976112/proyects/my-photos/photo6_letelm.webp',
    alt: 'Imagen ilustrativa'
  },
  {
    id: 7,
    url: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1685976113/proyects/my-photos/photo7_da3mm4.webp',
    alt: 'Imagen ilustrativa'
  },
  {
    id: 8,
    url: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1685976112/proyects/my-photos/photo8_fy4f4g.webp',
    alt: 'Imagen ilustrativa'
  },
  {
    id: 9,
    url: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1685976112/proyects/my-photos/photo9_tqbrbj.webp',
    alt: 'Imagen ilustrativa'
  }
]

function Gallery() {
  const classes = {
    ul: clsx('grid grid-cols-2 gap-2.5 p-2.5 md:max-h-screen md:overflow-auto lg:grid-cols-3'),
    image: clsx('aspect-square w-full rounded-md')
  }

  return (
    <ul className={classes.ul}>
      {listOfImages.map((image) => (
        <li key={image.id}>
          <Image
            className={classes.image}
            src={image.url}
            alt={image.alt}
            width={180}
            height={220}
          />
        </li>
      ))}
    </ul>
  )
}

export default Gallery
