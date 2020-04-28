const _ = require("lodash")

class Deque {
    constructor(length) {
        this.length = length
        this.buffer = []
    }
    push(x) {
        this.buffer.push(x)
        if (this.buffer.length > this.length) {
            this.buffer = this.buffer.slice(1)
        }
    }
    head() {
        return this.buffer[0]
    }
    tail() {
        return this.buffer[this.buffer.length-1]
    }
}


class RollCount {
    constructor(length) {
        this.length = length
        this.deque = new Deque(length)
        this.countLookup = {}
    }
    push(x) {
        if (this.deque.buffer.length == this.length) {
            let toRemove = this.deque.head()
            this.countLookup[toRemove] = this.countLookup[toRemove] - 1
            if (this.countLookup[toRemove] == 0) {
                delete this.countLookup[toRemove]
            }
        }

        this.countLookup[x] = (this.countLookup[x] || 0) + 1
        this.deque.push(x)
    }
    top() {
        return (_(this.countLookup)
                    .toPairs()
                    .reduce(
                        ([prevTop, prevTopCount], [key, count]) =>
                            count > prevTopCount ? [key, count] : [prevTop, prevTopCount]
                        ,
                        [undefined, -1]
                        )
                    )
    }

    toString() {
        return _(this.countLookup).toPairs()
            .sortBy(([item, count]) => -count)
            .map(([item, count]) => `${item}: ${count}`)
            .join("\n")
    }
}


module.exports = {RollCount, Deque}