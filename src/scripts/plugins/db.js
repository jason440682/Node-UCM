class Storage {
    constructor(name) {
        this.name = name
        this.data = sessionStorage[this.name]
            ? JSON.parse(sessionStorage[this.name])
            : {}
    }

    set(key, value) {
        this.data[key] = value
        sessionStorage[this.name] = JSON.stringify(this.data)
    }

    get(key) {
        const data = JSON.parse(sessionStorage[this.name])
        return data[key]
    }
}

module.exports = {
    User: new Storage('user'),
}
