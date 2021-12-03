const fortunes = ["n ornhgvshy, fzneg, naq ybivat crefba jvyy or pbzvat vagb lbhe yvsr.",
"n qhovbhf sevraq znl or na rarzl va pnzbhsyntr.",
"n serfu fgneg jvyy chg lbh ba lbhe jnl.",
"n tbyqra rtt bs bccbeghavgl snyyf vagb lbhe ync guvf zbagu.",
"qba’g whfg guvax, npg!"
];

let cypher = (str,slide) =>{
    if(slide < 0){
        slide += 26
    }
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z']
    let out = ""
    for(let i = 0;i<str.length;i++){
        let letterIndex = alphabet.indexOf(str[i].toLowerCase())
        if(letterIndex === - 1){
            out += str[i]
        } else {
            out += alphabet[(letterIndex+slide)%26]
        }
    }
    return out
}

module.exports = {
    getFortune:(req,res)=>{
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    addFortune:(req,res)=>{
        const {text} = req.body
        console.log(req.body)
        fortunes.push(text)
        res.status(200).send(fortunes)
    },
    deleteFortune:(req,res)=>{
        const {index} = req.params
        if(+index >= fortunes.length || +index < 0){
            res.status(404).send("fortune index out of range")
            return
        }
        console.log(index)
        console.log(fortunes[+index])
        const deletedFortune = fortunes[+index]
        fortunes.splice(+index,1)
        res.status(200).send(deletedFortune)
    },
    encryptFortune:(req,res)=>{
        const {index} = req.params;
        if(+index >= fortunes.length || +index < 0){
            res.status(404).send("fortune index out of range")
            return
        }
        const encryptedfortune = cypher(fortunes[+index],13)
        fortunes[+index] = encryptedfortune
        res.status(200).send(fortunes[+index])
    }
}