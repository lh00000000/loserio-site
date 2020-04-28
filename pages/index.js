import Head from "next/head"
import SingUp from "../components/singup"
const colors = {
    blackKeyColor: "#101010",
}
const MenuBar = () => (
    <div
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            zIndex: 1,
        }}
    >
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <div className="leftKeys">
                <a
                    href="https://loserio.cloud"
                    className="blackKey centerContents"
                >
                    <span>loser.io</span>
                </a>
            </div>
            <div className="rightKeys">
                <a
                    id="about"
                    href="#about"
                    className="blackKey rightKey centerContents"
                >
                    <span>About</span>
                </a>
                {/*<div className="blackKey rightKey centerContents">faq</div>*/}
                <a
                    href="https://app.swaggerhub.com/apis-docs/loserio/loser/1.0.0"
                    target="_blank"
                    className="blackKey rightKey centerContents"
                >
                    <span>Documentation</span>
                </a>
                <a
                    target="_blank"
                    href="https://medium.com/loser-io-engineering-blog"
                    className="blackKey rightKey centerContents"
                >
                    <span>Blog</span>
                </a>
                <a href="#singup" className="blackKey rightKey centerContents">
                    <span>Sing up</span>
                </a>
            </div>
            <style jsx>
                {`
                    .leftKeys a {
                        font-size: 28px;
                        padding: 8px 12px 8px 12px;
                        // border-radius: 0px 0px 4px 0px;
                    }

                    .rightKeys {
                        font-style: italic;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;
                    }

                    .rightKeys span {
                        border-right: 1px solid gray;
                    }

                    #about {
                        // border-radius: 0px 0px 0px 4px;
                    }

                    .blackKey {
                        font-family: Georgia;
                        background-color: rgba(255, 255, 255, 0.15);
                        border-top: 4px solid black;
                        border-bottom: 1px solid black;
                    }
                    a {
                        color: black;
                        text-decoration: none;
                    }

                    .blackKey span {
                        width: 100%;
                        padding: 6px 10px 6px 10px;
                    }

                    .blackKey:hover span {
                        text-decoration: underline;
                    }
                `}
            </style>
        </div>
    </div>
)

const GetStarted = () => {
    return (
        <section id="gettingstarted" className="fullsection centerContents">
            <div id="pianovid">
                <video autoPlay muted loop>
                    <source
                        src="https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/loserio.cloud/soonpianovid480.mov"
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
                        // z-index: 999;
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
                        // z-index: 1;
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
                    <img src="https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/loserio.cloud/icon-keyboard-laptop.png" />
                </div>
                <h3>integrate</h3>
                <div className="copy">
                    <p>with your current business logic</p>
                </div>
            </div>
            <div className="card">
                <div className="imgContainer">
                    <img src="https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/loserio.cloud/icon-keyboard-piano.png" />
                </div>
                <h3>batch</h3>
                <div className="copy">
                    <p>your audibility requirements</p>
                </div>
            </div>
            <div className="card">
                <div className="imgContainer">
                    <img src="https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/loserio.cloud/icon-keyboard-dashboard.png" />
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
                }
                .imgContainer img {
                    width: 20vh;
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
                    “loser.io is the born virtuoso in every respect, I thought,
                    [redacted] the failure from the very beginning who couldn’t
                    admit his own failure and all his life couldn’t understand
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

// <a href=""><img src="https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/loserio.cloud/icon-instagram.png" /></a>
//<div id="shareicons">
//                <a href="https://twitter.com/loserdotio">
//                    <img src="https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/loserio.cloud/icon-twitter.png" />
//                </a>
//            </div>
const SignUp = () => {
    let [submitted, setSubmitted] = React.useState(false)
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
                            An email with your API credentials will be sent to you sometime soon.
                        </p>
                        <p>In the meantime, <a href="https://gist.github.com/lh00000000/2611d78df4b8bd39221914224c8a3047" target="_blank">check out our tutorial</a>, <a
                        target="_blank" href="https://app.swaggerhub.com/apis-docs/loserio/loser/1.0.0">our documentation</a>, and <a target="_blank" href="https://medium.com/loser-io-engineering-blog">our engineering blog</a>.</p>
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
            </Head>
            <GetStarted />
            <QuoteOne />
            <Triad />
            <QuoteTwo />
            <SignUp />
            <MenuBar />

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
                        width: 100vw;
                        overflow: hidden;
                    }
                `}
            </style>
        </main>
    )
}

export default Main
