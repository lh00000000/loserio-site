const PitchFinder = require("pitchfinder")

const getStream = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        return navigator.mediaDevices
            .getUserMedia({ audio: true })
            .catch(function(err) {
                console.log("The following getUserMedia error occurred: " + err)
            })
    }
}


const getPitchDetector = () => {
    let getFreq = PitchFinder.AMDF({
        // threshold: 10,
        sampleRate: 44100 })

    var noteStrings = [
            "C",
            "C#",
            "D",
            "D#",
            "E",
            "F",
            "F#",
            "G",
            "G#",
            "A",
            "A#",
            "B",
        ]
    return buff => {
        let freq = getFreq(buff)
        if (freq) {
            var midiNo = Math.round(12 * (Math.log(freq / 440) / Math.log(2))) + 69
            var note = noteStrings[midiNo % 12]
            var position = Math.floor((note - 33) / 12) * 7 + note.charCodeAt(0) - 65
            return {
                freq,
                midiNo,
                note,
                position
            }
        }
    }
}


const createAnalyser = (audioContext, stream) => {
    let sourceNode = audioContext.createMediaStreamSource(stream)
    let analyser = audioContext.createAnalyser()
    sourceNode.connect(analyser)
    return analyser
}


class ReferenceNote {
    constructor(audioContext, buffer, onstart, onended) {
        this.buffer = buffer
        this.audioContext = audioContext
        this.isPlaying = false
        this.finishedPlaying = false
        this.currentNode = null
        this.replaceNode()
        this.pitchData = getPitchDetector()(buffer.getChannelData(0))
        this.onstart = onstart
        this.onended = onended
    }
    replaceNode() {
        let newNode = this.audioContext.createBufferSource()
        newNode.buffer = this.buffer
        newNode.connect(this.audioContext.destination)
        newNode.onended = () => {
            this.isPlaying = false
            this.finishedPlaying = true
            this.onended()
        }
        this.currentNode = newNode
    }

    press() {
        if (this.isPlaying) {
            this.currentNode.stop()
            this.isPlaying = false
            this.replaceNode()
        } else {
            if (this.finishedPlaying) {
                this.replaceNode()
            }
        }
        this.isPlaying = true
        this.currentNode.start()
        this.onstart()
    }
}

const getReferenceNote = async (audioContext, {onstart, onended}) => {
    return new Promise(async resolve => {
        let res = await fetch("https://lh00000000.nyc3.cdn.digitaloceanspaces.com/siteassets/loserio.cloud/abletondefault-a440.wav")
        let testNoteArrBuff = await res.arrayBuffer()
        audioContext.decodeAudioData(testNoteArrBuff, buffer => {
            resolve(new ReferenceNote(audioContext, buffer, onstart, onended))
        })
    })
}


module.exports = {
    getStream,
    createAnalyser,
    getReferenceNote,
    getPitchDetector
}