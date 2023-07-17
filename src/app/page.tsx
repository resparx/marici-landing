import Image from 'next/image'
import styles from './page.module.css'

import Navbar from '@/components/navbar'
import Banner from '@/components/banner'
import Ambition from '@/components/ambition'
import WhatWeOffer from '@/components/whatWeOffer'
import Testimonial from '@/components/testimonial'
import WhatWeDo from '@/components/whatWeDo'
import Endeavour from '@/components/endeavour'

export default function Home() {
  return (
    <main className={styles.main}>
     <Navbar /> 
     <Banner />
     <WhatWeDo />
     {/* <Ambition/>
     <WhatWeOffer/> */}
     <Endeavour />
     <Testimonial />
    </main>
  )
}
