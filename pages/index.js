import Head from 'next/head'

const colors = {
    blackKeyColor: "#101010",
}
const MenuBar = () => (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw" }}>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <div
                className="blackKey centerContents leftKey"
                style={{
                    borderRadius: "0px 0px 5px 0px",
                    fontSize: "28px",
                }}
            >
                loser.io
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    // justifyContent: "space-between",
                }}
            >
                <a href="#about" className="blackKey rightKey centerContents">
                    about
                </a>
                {/*<div className="blackKey rightKey centerContents">faq</div>*/}
                <a
                    href="https://app.swaggerhub.com/apis-docs/loserio/loser/1.0.0"
                    className="blackKey rightKey centerContents"
                >
                    docs
                </a>
                <a
                    target="_blank"
                    href="https://medium.com/loser-io-engineering-blog"
                    className="blackKey rightKey centerContents"
                >
                    blog
                </a>
                <a
                    href="#comingsoon"
                    className="blackKey rightKey centerContents"
                >
                    sign up
                </a>
            </div>
            <style jsx>
                {`
                    .leftKey {
                        padding: 8px 12px 8px 12px;
                    }
                    .rightKey {
                        padding: 8px 16px 8px 16px;
                        text-decoration: none;
                    }
                    .blackKey {
                        font-family: Georgia;
                        background-color: ${colors.blackKeyColor};

                        border-radius: 0px 0px 5px 5px;
                        color: white;
                        margin-right: 1px;

                        box-shadow: 1px 1px 8px #303030;
                    }

                    .blackKey:hover {
                        background-color: #222;
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
                        src="https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/loserio.cloud/shortpianovid480.mov"
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
                    <i>
                        maintenance-free, pianist-free, hassle-free in a cloud
                    </i>
                </p>
                <a
                    id="gsbutton"
                    href="https://app.swaggerhub.com/apis-docs/loserio/loser/1.0.0"
                >
                    <div className="centerContents">
                        <p>get started</p>
                    </div>
                </a>
            </div>
            <style jsx>
                {`
                    #gettingstarted {
                        // background-color: gray;
                    }
                    #elevator {
                        color: white;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    #gsbutton {
                        background-color: ${colors.blackKeyColor};
                        border-radius: 5px;
                        padding: 12px;
                        box-shadow: 1px 1px 8px #303030;
                        color: white;
                    }
                    #gsbutton:hover {
                        background-color: #181818;
                    }
                    #gsbutton p {
                        margin: 0;
                        font-size: 40px;
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
                        color: #dedede;
                    }
                    #tagline {
                        color: #d0d0d0;
                        font-size: 20px;
                        margin: 0px 0px 24px;
                    }

                    #pianovid {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        z-index: -999;
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
                    width: 200px;
                    // background-color: blue;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .imgContainer {
                    width: 100%;
                }
                .imgContainer img {
                    width: 100%;
                    object-fit: contain;
                }
                .copy p {
                    text-align: center;
                    margin: 0;
                }
            `}
        </style>
    </section>
)

const QuoteOne = () => (
    <section className="centerContents fullsection">
        <div style={{ maxWidth: "80vw" }}>
            <i>
                With loser.io, data comes in and piano music comes out. I never
                have to hear a thing. - Anonymous Vectorialist
            </i>
        </div>
        <style jsx>
            {`
                section {
                    background-color: black;
                    color: white;
                }
            `}
        </style>
    </section>
)

const QuoteTwo = () => (
    <section className="centerContents fullsection">
        <div style={{ maxWidth: "80vw" }}>
            <i>
                “loser.io is the born virtuoso in every respect, I thought,
                [redacted] the failure from the very beginning who couldn’t
                admit his own failure and all his life couldn’t understand it,
                even though he was one of our very best piano players, as I can
                say without reservation, he was also the typical failure who
                failed, who had to fail." - Anonymous, Replaced 88 In-House
                Pianists with Our Services
            </i>
        </div>
        <style jsx>
            {`
                section {
                    background-color: #808080;
                    color: white;
                }
            `}
        </style>
    </section>
)

// <a href=""><img src="https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/loserio.cloud/icon-instagram.png" /></a>
const SignUp = () => (
    <section id="comingsoon" className="centerContents fullsection">
        <div style={{ maxWidth: "80vw" }}>
            <h1>PUBLIC BETA COMING SOON</h1>
            <div id="shareicons">
                <a href="https://twitter.com/loserdotio">
                    <img src="https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/loserio.cloud/icon-twitter.png" />
                </a>
            </div>
        </div>
        <style jsx>
            {`
                section {
                    background-color: white;
                    color: black;
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
            <MenuBar />
            <GetStarted />
            <QuoteOne />
            <Triad />
            <QuoteTwo />
            <SignUp />

            <style jsx global>
                {`
                    body {
                        margin: 0;
                    }
                    .centerContents {
                        display: flex;
                        flexdirection: row;
                        justify-content: center;
                        align-items: center;
                    }

                    .fullsection {
                        height: 100vh;
                        width: 100vw;
                        overflow: hidden;
                    }
                `}
            </style>
        </main>
    )
}

export default Main
