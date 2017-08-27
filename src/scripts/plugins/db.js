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
        if (!sessionStorage[this.name]) return undefined
        const data = JSON.parse(sessionStorage[this.name])
        return data[key]
    }

    remove(key) {
        delete this.data[key]
        sessionStorage[this.name] = JSON.stringify(this.data)
    }
}

function getCookie(name) {
    const cookie = document.cookie
    const cookieName = `${encodeURIComponent(name)}=`
    const cookieStart = cookie.indexOf(cookieName)
    let cookieValue = null

    if (cookieStart > -1) {
        let cookieEnd = cookie.indexOf(';', cookieStart)
        if (cookieEnd === -1) cookieEnd = cookie.length
        cookieValue = cookie.substring(cookieStart + cookieName.length, cookieEnd)
        cookieValue = decodeURIComponent(cookieValue)
    }

    return cookieValue
}

module.exports = {
    User: new Storage('user'),
    ArchiveAccount: new Storage('archiveAccount'),
    getCookie,
}
