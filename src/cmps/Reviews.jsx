import React from 'react'

export function Reviews(props){

    return(
        <div className="reviews container">
            <div className="inner-container flex-column">
            <h1>
                Delivering real results for top companies. Some of our 
               <span> success stories.</span>
            </h1>
        <section className="users-reviews flex">
            <div className="review flex column">
                <p>
                “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”
                </p>
            <h3>
            Kady Baker
            </h3>
            <i>
            Product Manager at Bookmark
            </i>
            <img src="" alt=""/>
            </div>
            <div className="review flex column">
                <p>
                “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”
                </p>
            <h3>
            Aiysha Reese
            </h3>
            <i>
            Founder of Manage
            </i>
            <img src="" alt=""/>
            </div>
            <div className="review flex column">
                <p>
                “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”
                </p>
            <h3>
            Arthur Clarke
            </h3>
            <i>
            Co-founder of MyPhysio
            </i>
            <img src="imgs/avatar-aden.jpg" alt=""/>
            </div>
        </section>
            </div>
        </div>
    )
}