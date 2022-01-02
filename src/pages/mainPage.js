import React from "react";
import "../css/mainPage.css";

export default function MainPage() {
    return (
        <div className = "mainPage">
            <header className="header">
                <div className="header_inner">
                    <h1 className="logo">홍홍테스트</h1>
                    <div className="login">
                        <button className="loginBtn">LogIn</button>
                    </div>
                </div>
            </header>
            <body className="body">
                <h1 className="testTag">추천 테스트!</h1>
                <div className="recommendTests">
                    <div className="test">
                        <div className="testImg">

                        </div>
                        <h2 className="testName">1번 테스트</h2>
                    </div>
                    <div className="test">
                        <div className="testImg">

                        </div>
                        <h2 className="testName">2번 테스트</h2>
                    </div>
                    <div className="test">
                        <div className="testImg">

                        </div>
                        <h2 className="testName">3번 테스트</h2>
                    </div>
                    <div className="test">
                        <div className="testImg">

                        </div>
                        <h2 className="testName">4번 테스트</h2>
                    </div>
                </div>
                <h1 className="testTag">인기 테스트!</h1>
                <div className="hotTests">
                    <div className="test">
                        <div className="testImg">

                        </div>
                        <h2 className="testName">1번 테스트</h2>
                    </div>
                    <div className="test">
                        <div className="testImg">

                        </div>
                        <h2 className="testName">2번 테스트</h2>
                    </div>
                    <div className="test">
                        <div className="testImg">

                        </div>
                        <h2 className="testName">3번 테스트</h2>
                    </div>
                    <div className="test">
                        <div className="testImg">

                        </div>
                        <h2 className="testName">4번 테스트</h2>
                    </div>
                </div>
            </body>
            <footer className="footer">
        
            </footer>
        </div>
    )
} 