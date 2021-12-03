const fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
"A dubious friend may be an enemy in camouflage.",
"A fresh start will put you on your way.",
"A golden egg of opportunity falls into your lap this month.",
"Don’t just think, act!"
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