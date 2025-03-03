import React, { useState } from "react"
import Head from "next/head"
import SingUp from "../components/singup"
const colors = {
    blackKeyColor: "#101010",
}
const MenuBar = () => (
    <div id="menubar">
        <div className="leftKeys">
            <a href="https://loserio.cloud">
                <div className="blackKey centerContents">
                    <span>loser.io</span>
                </div>
            </a>
        </div>
        <div className="rightKeys">
            <a id="about" href="#about">
                <div className="blackKey rightKey centerContents">
                    <span className="rightBorder">About</span>
                </div>
            </a>
            <a href="#singup">
                <div className="blackKey rightKey centerContents">
                    <span className="rightBorder">Sing up</span>
                </div>
            </a>

            <a target="_blank" href="https://github.com/loser-io">
                <div className="blackKey rightKey centerContents">
                    <span className="rightBorder">Github</span>
                </div>
            </a>
            <a
                href="https://app.swaggerhub.com/apis-docs/loserio/loser/1.0.0"
                target="_blank"
            >
                <div className="blackKey rightKey centerContents">
                    <span className="rightBorder">Docs</span>
                </div>
            </a>
            <a
                target="_blank"
                href="https://medium.com/loser-io-engineering-blog"
            >
                <div className="blackKey rightKey centerContents">
                    <span>Blog</span>
                </div>
            </a>
        </div>
        <style jsx>
            {`
                #menubar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    overflow: hidden;
                    z-index: 1;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
                .leftKeys .blackKey {
                    font-size: 32px;
                    flex-shrink: 1;
                }

                .rightKeys {
                    flex-shrink: 1;
                    font-style: italic;
                    font-size: 1.2em;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    flex-wrap: wrap;
                }

                .rightKeys span {
                    width: 100%;
                    text-align: center;
                    padding: 0px 2vw 0px 2vw;
                }
                .rightBorder {
                    border-right: 1px solid gray;
                }

                .blackKey {
                    font-family: Georgia;
                    background-color: rgba(255, 255, 255, 0.15);
                    border-top: 4px solid black;
                    border-bottom: 1px solid black;
                    height: 48px;
                }

                a {
                    color: black;
                    text-decoration: none;
                }

                .blackKey span {
                    width: 100%;
                }

                .blackKey:hover span {
                    text-decoration: underline;
                }
            `}
        </style>
    </div>
)

const GetStarted = () => {
    return (
        <section id="gettingstarted" className="fullsection centerContents">
            <div id="pianovid">
                <video autoPlay muted loop>
                    <source
                        src="https://lh00000000-public.s3.amazonaws.com/do/siteassets/loserio.cloud/shortpianovid480.mov"
                        type="video/mp4"
                    />
                </video>
            </div>
            <div id="elevator">
                <div>
                    <h1>loser.io</h1>
                    <h2>the POST-pianist piano API</h2>
                </div>
                <p id="tagline">
                    <i>pianist-free, maintenance-free, in the cloud</i>
                </p>
                <a id="gsbutton" href="#singup">
                    <div className="centerContents">
                        <p>Sign up for the beta now.</p>
                    </div>
                </a>
            </div>

            <style jsx>
                {`
                    #gettingstarted {
                        // z-index: 999;
                    }
                    #gsbutton {
                        padding: 12px;
                        color: white;
                    }
                    #gsbutton:hover {
                        color: #ccc;
                    }
                    #gsbutton p {
                        margin: 0;

                        font-size: 32px;
                    }

                    #elevator {
                        border-top: 8px solid white;
                        border-bottom: 1px solid white;
                        color: white;
                        display: flex;
                        padding-top: 32px;
                        padding-bottom: 32px;
                        flex-direction: column;
                        align-items: center;
                        z-index: 2;
                    }

                    #elevator h1 {
                        display: inline-block;
                        font-size: 72px;
                        padding: 0px;
                        margin: 0px;
                        font-weight: normal;
                    }
                    #elevator h2 {
                        display: inline-block;
                        font-size: 24px;
                        padding: 0px;
                        margin: 0px 0px 0px 8px;
                        font-weight: normal;
                    }
                    #tagline {
                        color: #eeeeee;
                        font-size: 32px;
                        margin: 0px 0px 24px;
                    }

                    #pianovid {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        z-index: 2;
                    }
                    #pianovid video {
                        min-width: 100%;
                        min-height: 100%;
                    }
                `}
            </style>
        </section>
    )
}

const Triad = () => (
    <section id="about" className="centerContents fullsection">
        <div id="holder">
            <div className="card">
                <div className="imgContainer">
                    <img src="https://lh00000000-public.s3.amazonaws.com/do/siteassets/loserio.cloud/icon-computer.png" />
                </div>
                <h3>integrate</h3>
                <div className="copy">
                    <p>with your current business logic</p>
                </div>
            </div>
            <div className="card">
                <div className="imgContainer">
                    <img src="https://lh00000000-public.s3.amazonaws.com/do/siteassets/loserio.cloud/icon-piano.png" />
                </div>
                <h3>batch</h3>
                <div className="copy">
                    <p>your audibility requirements</p>
                </div>
            </div>
            <div className="card">
                <div className="imgContainer">
                    <img src="https://lh00000000-public.s3.amazonaws.com/do/siteassets/loserio.cloud/icon-spreadsheet.png" />
                </div>
                <h3>extract</h3>
                <div className="copy">
                    <p>our product as your product</p>
                </div>
            </div>
        </div>
        <style jsx>
            {`
                #holder {
                    display: flex;
                    width: 100%;
                    flex-direction: row;
                    justify-content: space-evenly;
                    flex-wrap: wrap;
                }

                .card {
                    width: 300px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    z-index: -1;
                    border-top: 8px solid black;
                    padding-top: 32px;
                    padding-bottom: 32px;
                    margin: 16px 8px 16px 8px;
                }

                .card h3 {
                    font-size: 32px;
                }
                .imgContainer {
                    // width: 33vw;
                    // height: 33vw;
                    stroke: 5px;
                }
                .imgContainer img {
                    width: 30vh;
                    object-fit: contain;
                }
                .copy p {
                    text-align: center;
                    margin: 0;
                    font-size: 28px;
                }
            `}
        </style>
    </section>
)

const QuoteOne = () => (
    <section className="centerContents fullsection">
        <div style={{ maxWidth: "80vw" }}>
            <p>
                <i>
                    With loser.io, data comes in and piano music comes out. I
                    never have to hear a thing. - Anonymous Vectorialist
                </i>
            </p>
        </div>
        <style jsx>
            {`
                p {
                    border-top: 8px solid black;
                    border-bottom: 2px solid black;
                    padding: 20px 0px 20px 0px;
                    font-size: 50px;
                    text-align: center;
                }
            `}
        </style>
    </section>
)

const QuoteTwo = () => (
    <section className="centerContents fullsection">
        <div style={{ maxWidth: "80vw" }}>
            <p>
                <i>
                    "loser.io is the born virtuoso in every respect, I thought,
                    [redacted] the failure from the very beginning who couldn't
                    admit his own failure and all his life couldn't understand
                    it, even though he was one of our very best piano players,
                    as I can say without reservation, he was also the typical
                    failure who failed, who had to fail." - Anonymous, Replaced
                    88 In-House Pianists with Our Services
                </i>
            </p>
        </div>
        <style jsx>
            {`
                p {
                    font-size: 30px;
                    text-align: center;
                }
            `}
        </style>
    </section>
)

// <a href=""><img src="https://lh00000000-public.s3.amazonaws.com/do/siteassets/loserio.cloud/icon-instagram.png" /></a>
//<div id="shareicons">
//                <a href="https://twitter.com/loserdotio">
//                    <img src="https://lh00000000-public.s3.amazonaws.com/do/siteassets/loserio.cloud/icon-twitter.png" />
//                </a>
//            </div>
const SignUp = () => {
    const [submitted, setSubmitted] = useState(false)
    return (
        <section id="singup" className="centerContents fullsection">
            <div id="stuff">
                <h1>
                    {submitted
                        ? "Thank you for your interest in loser.io"
                        : "Sign up for the public beta."}
                </h1>
                {!submitted && (
                    <SingUp
                        onSubmit={(email) => {
                            fetch(
                                "https://loserio.cloud/api/as/maintainer/composer",

                                {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        Accept: "application/json",
                                        Authorization: `Bearer ${Array(16)
                                            .fill(0)
                                            .join("")}`,
                                    },
                                    body: JSON.stringify({
                                        email,
                                        password: "default",
                                    }),
                                }
                            )
                            setSubmitted(true)
                        }}
                    />
                )}
                {submitted && (
                    <div>
                        <p>
                            An email with your API credentials will be sent to
                            you sometime soon.
                        </p>
                        <p>
                            In the meantime,
                            <a
                                href="https://gist.github.com/lh00000000/2611d78df4b8bd39221914224c8a3047"
                                target="_blank"
                            >
                                check out our tutorial
                            </a>
                            ,{" "}
                            <a
                                target="_blank"
                                href="https://app.swaggerhub.com/apis-docs/loserio/loser/1.0.0"
                            >
                                our documentation
                            </a>
                            , and{" "}
                            <a
                                target="_blank"
                                href="https://medium.com/loser-io-engineering-blog"
                            >
                                our engineering blog
                            </a>
                            .
                        </p>
                    </div>
                )}
            </div>
            <style jsx>
                {`
                    section {
                        background-color: white;
                        color: black;
                    }
                    #stuff {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    h1 {
                        font-size: 32px;
                        margin-bottom: 32px;
                    }
                    #shareicons {
                        text-align: center;
                    }
                    img {
                        width: 64px;
                        object-fit: contain;
                    }
                `}
            </style>
        </section>
    )
}

const Main = () => {
    return (
        <main>
            <Head>
                <title>loser.io</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link
                    rel="icon"
                    href="https://lh00000000-public.s3.amazonaws.com/do/siteassets/loserio.cloud/favicon.ico"
                />
            </Head>
            <GetStarted />
            <QuoteOne />
            <Triad />
            <QuoteTwo />
            <SignUp />
            <MenuBar />
            <div style={{ textAlign: "right", width: "100%", }}>
                <small style={{ paddingRight: "10px" }}>v:vc</small>
            </div>

            <style jsx global>
                {`
                    body {
                        margin: 0;
                        font-family: Baskerville;
                        font-weight: lighter;
                    }
                    .centerContents {
                        display: flex;
                        flexdirection: row;
                        justify-content: center;
                        align-items: center;
                    }

                    .fullsection {
                        min-height: 100vh;
                        width: 100%;
                        overflow: hidden;
                    }
                `}
            </style>
        </main>
    )
}

export default Main
