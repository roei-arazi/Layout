import React from 'react'

export function Hero(props){

    return(
        <div className="hero container">
            <div className="inner-container flex">       
            <h1>Build & manage distributed teams like no one else.</h1>
            <section className="hero-info flex column">
                <div className="info-box">
                    <img src="" alt=""/>
                <h3>Experienced Individuals</h3>
                <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                </div>
                <div className="info-box">
                    <img src="" alt=""/>
                <h3>Easy to Implement</h3>
                <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                </div>
                <div className="info-box">
                    <img src="" alt=""/>
                <h3>Enhanced Productivity</h3>
                <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                </div>
           
            </section>
            </div>
        </div>
    )
}