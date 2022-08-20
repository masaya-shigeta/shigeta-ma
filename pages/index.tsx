import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <div className="h-12"></div>
      <div className="mx-auto max-w-3xl px-6">
        <div className="w-20 h-20 bg-white mx-auto"></div>
      </div>
      <div className="mx-auto my-10 max-w-3xl px-6 text-center text-white text-2xl">
        MASAYA SHIGETA
      </div>
      <div className="h-full bg-gray-50"></div>
    </>
  )
}

export default Home
