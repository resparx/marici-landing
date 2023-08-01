import Image from 'next/image'
import styles from './page.module.css'

import Navbar from '@/components/navbar'
import Banner from '@/components/banner'
import Ambition from '@/components/ambition'
import WhatWeOffer from '@/components/whatWeOffer'
import WhatWeDo from '@/components/whatWeDo'
import Testimonial from '@/components/testimonials'
import PreBanner from '@/components/preBanner'
import Partners from '@/components/partners'

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Navbar /> 
     <PreBanner/>
     <Banner />
     <WhatWeDo />
     <Ambition/>
     <Partners/>
     <WhatWeOffer/>
     <Testimonial />
    </div>
  )
}
