import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Profile from './qcomps/profile_mistake/profile_mistake.js'
import Gallery from './qcomps/gallery_props.js'
import FirstComp from './qcomps/firstcomp.js'
import TodoList from './qcomps/todos.js'

export default function Home() {
  return (
    <div className={styles.main}>
        <Gallery />
    </div>
  )
}
