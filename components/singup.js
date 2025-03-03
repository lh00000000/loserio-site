import dynamic from "next/dynamic"
import React, { useState, useEffect } from "react"
import {
    createReferenceNote,
    createPitchDetector,
} from "../audio"

import { RollCount } from "../tuil"

class Tuner {
    constructor(analyser, testNote, { onNewPitchData, onMatch }) {
        this.analyser = analyser
        this.listen = false
        this.rollCount = new RollCount(64)
        this.pitchDetect = createPitchDetector()
        this.testNote = testNote
        this.onNewPitchData = onNewPitchData
        this.onMatch = onMatch
    }

    loop() {
        const BUFF_COUNT_TRIG = 48
        if (this.listen) {
            let float32Array = new Float32Array(2048)
            this.analyser.getFloatTimeDomainData(float32Array)
            let pitchData = this.pitchDetect(float32Array)
            if (pitchData) {
                this.onNewPitchData(pitchData)
                this.rollCount.push(pitchData.note)
                let [topNote, buffCount] = this.rollCount.top()
                if (
                    topNote == this.testNote.pitchData.note &&
                    buffCount > BUFF_COUNT_TRIG
                ) {
                    this.onMatch()
                }
            }
        }
        requestAnimationFrame(() => this.loop())
    }

    setListen(yesno) {
        this.listen = yesno
    }
}
let tuner = null

const TunerCapcha = ({ onSolve }) => {
    const [mode, setMode] = useState("DORMANT") // RECORDING || PLAYING || SOLVED
    const [refNote, setRefNote] = useState()
    const [lastNoteData, setLastNoteData] = useState({
        note: "No pitch detected yet...",
    })
    const [permissionGranted, setPermissionGranted] = useState(false)
    const [audioContext, setAudioContext] = useState()

    useEffect(() => {
        tuner && tuner.setListen(mode === "RECORDING")
    }, [mode])

    useEffect(() => {
        const audioContext = new (window.AudioContext ||
            window.webkitAudioContext)()
        setAudioContext(audioContext)

        createReferenceNote(audioContext, {
            onstart: () => setMode("PLAYING"),
            onended: () => setMode(mode == "PLAYING" ? "DORMANT" : mode),
        }).then((newRefNote) => setRefNote(newRefNote))
    }, [])

    useEffect(() => {
        const setupAudio = async () => {
            let stream = await (async () => {
                if (
                    navigator.mediaDevices &&
                    navigator.mediaDevices.getUserMedia
                ) {
                    return navigator.mediaDevices
                        .getUserMedia({ audio: true })
                        .catch(function(err) {
                            console.log(
                                "The following getUserMedia error occurred: " +
                                    err
                            )
                        })
                }
            })()

            const analyser = (() => {
                const sourceNode = audioContext.createMediaStreamSource(stream)
                const analyser = audioContext.createAnalyser()
                sourceNode.connect(analyser)
                return analyser
            })()

            tuner = new Tuner(analyser, refNote, {
                onNewPitchData: (pitchData) => {
                    setLastNoteData(pitchData)
                },
                onMatch: () => {
                    setMode("SOLVED")
                    onSolve()
                }
            })
            tuner.loop()
        }
        if (permissionGranted) {
            setupAudio()
        }
        return () => {}
    }, [permissionGranted, audioContext, refNote, onSolve])

    return (
        <div id="singCaptcha">
            <div>
                {mode != "SOLVED"
                    ? "Please verify by singing the reference pitch provided."
                    : "Thank you. Click 'Sign up' to continue."}
            </div>
            {!permissionGranted && (
                <div id="buttons">
                    <button
                        onClick={() => {
                            setPermissionGranted(true)
                        }}
                    >
                        Grant microphone permission.
                    </button>
                </div>
            )}
            {mode != "SOLVED" && permissionGranted && (
                <div id="buttons">
                    <button
                        onClick={() => {
                            refNote.press()
                        }}
                    >
                        ▶ Play reference pitch.
                    </button>
                    <button
                        onClick={() => {
                            setMode("RECORDING")
                        }}
                        disabled={mode != "DORMANT"}
                    >
                        {
                            {
                                RECORDING: "Recording...",
                                DORMANT: "⬤ Start recording.",
                                PLAYING: "⬤ Start recording.",
                                SOLVED: "Good job.",
                            }[mode]
                        }
                    </button>
                </div>
            )}
            {mode === "RECORDING" && <div>{lastNoteData.note}</div>}

            <style jsx>
                {`
                    #singCaptcha {
                        border-top: 4px solid black;
                        border-bottom: 1px solid black;
                        width: 400px;
                        padding: 32px 0px 32px 0px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    #singCaptcha > div {
                        padding-top: 6px;
                    }

                    button {
                        height: 30px;
                    }
                    #buttons {
                        display: flex;
                        flex-direction: row;
                        align-items: flex-top;
                    }
                `}
            </style>
        </div>
    )
}

const InTune = dynamic(
    async () => {
        return TunerCapcha
    },
    {
        ssr: false,
    }
)
const SingUpPage = ({ onSubmit }) => {
    const [captchaSolved, setCaptchaSolved] = useState(false)
    const [email, setEmail] = useState("")
    return (
        <div>
            <form
                onSubmit={(ev) => {
                    ev.preventDefault()
                }}
            >
                <input
                    id="emailinput"
                    type="text"
                    name="email"
                    placeholder="Enter your email."
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div id="intuneContainer">
                    <InTune
                        onSolve={() => {
                            setCaptchaSolved(true)
                        }}
                    />
                </div>

                <input
                    type="submit"
                    name="signup"
                    id="submitbutton"
                    value={
                        captchaSolved ? "Sign up." : "Please verify to sign up."
                    }
                    onClick={() => {
                        captchaSolved && onSubmit(email)
                    }}
                    disabled={!captchaSolved}
                />
            </form>
            <style jsx>
                {`
                    #emailinput {
                        padding: 8px;
                        width: 300px;
                    }

                    #intuneContainer {
                        margin: 16px;
                        // padding: 32px 0px 32px 0px;
                    }
                    #submitbutton {
                        height: 48px;
                        padding: 8px;
                    }
                    form {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                `}
            </style>
        </div>
    )
}

export default SingUpPage
