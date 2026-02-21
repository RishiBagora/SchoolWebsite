import React from 'react'
import GalleryHero from '../components/gallery/GalleryHero'
import GalleryIntroSection from '../components/gallery/GalleryIntroSection'
import GalleryFilterTabs from '../components/gallery/GalleryFilterTabs'
import GalleryGrid from '../components/gallery/GalleryGrid'
import { useState } from 'react'
import VideoGallerySection from '../components/gallery/VideoGallerySection'
import GalleryCTA from '../components/gallery/GalleryCTA'


const Gallery = () => {

const [category, setCategory] = useState("All");

  return (
    <div>
      <GalleryHero/>
      <GalleryIntroSection/>
      <GalleryFilterTabs onChange={setCategory} />
      <GalleryGrid activeCategory={category} />
      <VideoGallerySection/>
      <GalleryCTA/>
    </div>
  )
}

export default Gallery