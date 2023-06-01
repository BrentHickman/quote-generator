import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

// Components
import { BackgroundImage1,BackgroundImage2,GradientBackgroundCon } from '@/components/QuoteGenerator/QuoteGeneratorElements'

// Assets
import BurntAir2 from '../assets/BurntAir_2.jpg'
import BakedChrome from '../assets/BakedChrome.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon>
        <BackgroundImage1
          src={BurntAir2}
          height="300"
          alt="smokeyairbackground"
        />
        <BackgroundImage2
          src={BakedChrome}
          height="300"
          alt="orangechromebackground"
        />
        
      </GradientBackgroundCon>
    </>
  )
}
