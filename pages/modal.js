import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import React, { useState, useEffect, useRef } from 'react';
import Header from './header'
import Main from './main'

export default function Modai() {

const [modalView, setModalView] = useState(false);

const modalStatus = () => {
  setModalView(prev => !prev);
}

const modalContext = () => {
  setModalView(prev => !prev);
}

  return (
    <div className="modal">
        <div className="modalTxt"></div>
        <div className="modalBtn"></div>
    </div>
  )
}
