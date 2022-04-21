const funFactBtn = document.getElementById('fun-fact')
const factOutput = document.getElementById('fact-output')

funFactBtn.addEventListener('click', () => {
    const fact = 'Did you know that in the US Open alone more than 70,000 tennis balls are used?'
    let i = 0
    
    function funFact() {
        if (i < fact.length) {
            factOutput.innerText += fact.charAt(i)
        }
        i++
        setTimeout(funFact, 25)
    }

    funFact()
})