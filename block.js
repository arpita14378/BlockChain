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

class BlockChain{
    constructor(){
        this.blockchain = this.headBlock()
    }
    headBlock(){
        return new Block({})
    }
    prevBlock(){
        return this.blockchain[this.blockchain.length -1]
    }
    addNewBlock(newBlock){
        newBlock.prevHash = this.prevBlock().hash
        newBlock.hash = newBlock.getHash()
        this.blockchain.push(newBlock)
    }
    chainValidity(){
        for(let i=1;i<this.blockchain.length;i++){
            const currb = this.blockchain[i]
            const prevb = this.blockchain[i-1]
            if(currb.hash != currb.getHash()){
                return false
            }
            if(prevb.hash != this.prevBlock.hash){
                return false
            }
            return true
        }
    }

}


let a = new Block({from: "Arpita", to: "Aaditya"})

let chain = new BlockChain()
chain.addNewBlock(a)
console.log(chain)
console.log("Validity: " + chain.chainValidity())