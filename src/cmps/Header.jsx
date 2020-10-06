import React from 'react'

export function Header() {

    return (
        <div className="header container">
            <section className="inner-container">
                <div className="header-header flex space-between a-center">
                    <div className="header-left flex a-baseline">
                        <h2>myteam</h2>
                        <h3>home</h3>
                        <h3>about</h3>
                    </div>
                    <button>contact us</button>
                </div>
                <main className="flex a-flex-end">
                    <h1>Find the best <span>talent</span></h1>
                    <h3>
                        Finding the right people and building high performing
                        teams can be hard. Most companies aren’t tapping into
                        the abundance of global talent. We’re about to change that.
                        </h3>
                </main>
            </section>
        </div>
    )
}