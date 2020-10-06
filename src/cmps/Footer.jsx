import React from 'react'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { GrPinterest } from 'react-icons/gr';

export function Footer(props) {

    return (
        <div className="footer container">
            <div className="inner-container flex space-between">
                <div className="footer-left flex">
                    <div className="footer-left-btns flex-column">
                    <h1>myteam</h1>
                    <div className="flex">
                    <h3>home</h3>
                    <h3 className="about-btn">about</h3>
                    </div>
                    </div>
                    <div className="footer-left-info flex column">
                    <p className="title">987 Hillcrest Lane</p>
                    <p className="title">Irvine, CA</p>
                    <p className="title">California 92714</p>
                    <p className="title">Call Us: 949-833-7432</p>
                    </div>
                </div>
                <div className="footer-right flex column">
                <div className="social flex">
                <AiFillFacebook />
                <GrPinterest />
                <AiOutlineTwitter />
                </div>
                <p className="title">Copyright 2020. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}