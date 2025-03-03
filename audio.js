const PitchFinder = require("pitchfinder")

const createPitchDetector = () => {
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




class ReferenceNote {
    constructor(audioContext, buffer, onstart, onended) {
        this.buffer = buffer
        this.audioContext = audioContext
        this.isPlaying = false
        this.finishedPlaying = false
        this.currentNode = null
        this.pitchData = createPitchDetector()(buffer.getChannelData(0))
        this.onstart = onstart
        this.onended = onended
        this.latestCreateTime = "0000"
        this.replaceNode()
    }
    replaceNode() {
        let newNode = this.audioContext.createBufferSource()
        let createTime = (new Date()).toISOString()
        this.latestCreateTime = (createTime > this.latestCreateTime) ? createTime : this.latestCreateTime
        newNode.buffer = this.buffer
        newNode.createTime = createTime
        newNode.connect(this.audioContext.destination)
        newNode.onended = () => {
            if (newNode.createTime === this.latestCreateTime)  {
                this.isPlaying = false
                this.finishedPlaying = true
                this.onended()
            }
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

const createReferenceNote = async (audioContext, {onstart, onended}) => {
    return new Promise(async resolve => {
        let res = await fetch("https://lh00000000-public.s3.amazonaws.com/do/siteassets/loserio.cloud/abletondefault-a440.wav")
        let testNoteArrBuff = await res.arrayBuffer()
        audioContext.decodeAudioData(testNoteArrBuff, buffer => {
            resolve(new ReferenceNote(audioContext, buffer, onstart, onended))
        })
    })
}


module.exports = {
    createReferenceNote,
    createPitchDetector
}