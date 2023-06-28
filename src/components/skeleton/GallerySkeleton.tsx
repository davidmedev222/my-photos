import { ImageSkeleton } from '@/components'
import clsx from 'clsx'

function GallerySkeleton() {
  const classes = {
    gallery: clsx('grid grid-cols-2 gap-2.5 p-2.5 md:max-h-screen md:overflow-auto lg:grid-cols-3')
  }

  return (
    <div className={classes.gallery}>
      <ImageSkeleton animate />
      <ImageSkeleton animate />
      <ImageSkeleton animate />
      <ImageSkeleton animate />
      <ImageSkeleton animate />
      <ImageSkeleton animate />
      <ImageSkeleton animate />
      <ImageSkeleton animate />
      <ImageSkeleton animate />
    </div>
  )
}

export default GallerySkeleton
