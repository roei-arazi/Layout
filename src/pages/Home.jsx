import React from 'react'

import { Header } from '../cmps/Header';
import { Hero } from '../cmps/Hero';
import { Reviews } from '../cmps/Reviews';
import { CallToAction } from '../cmps/CallToAction';
import { Footer } from '../cmps/Footer';

export function Home(props) {

    return (
        <div className="main">
            <Header />
            <Hero />
            <Reviews />
            <CallToAction />
            <Footer />
        </div>
    )
}