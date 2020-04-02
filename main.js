const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');
const txt = ['Witaj na tej stronie :)', 'Następny tekst :D', 'Zaczynamy!!!'];
let time = 400;
let wordTime = 120;
let wordNumber = 0;
let index = 0;
const showCursor = function () {
    spanCursor.classList.toggle('active');
}
const showText = function () {
    const addWord = setTimeout(showWords, 1000);

    function showWords() {
        function addLetter() {
            spanText.textContent += txt[wordNumber][index++];
            if (index === txt[wordNumber].length) {
                clearInterval(startTyping);
                wordNumber++;
                index = 0;
                setTimeout(deleteWord, 1000);
            }

        }
        const startTyping = setInterval(addLetter, wordTime);
    }

    function deleteWord() {
        if (wordNumber === txt.length) {
            return
        } else {
            function deleteLetter() {
                const word = [...spanText.textContent];
                word.pop();
                spanText.textContent = word.join("");
                if (word.length === 0) {
                    clearInterval(deleteLastLetter);
                    showText();
                }
            }
            const deleteLastLetter = setInterval(deleteLetter, wordTime);
        }
    }
}
showText();
setInterval(showCursor, time);