const crypto = require('crypto')

class Block{
    constructor(data,prevHash=""){
        this.time = Date.now()
        this.data = data
        this.prevHash = prevHash
        this.hash = this.getHash()
    }
    getHash(){
        let strBlock = this.prevHash + this.time +JSON.stringify(this.data)
        return crypto.createHash("sha256").update(strBlock).digest("hex")
    }
}

//Aaditya
