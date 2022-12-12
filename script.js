/*
 * Workshop: Password Checker with functions
 *
 * STEG 1
 * Istället för att vi har lösenordet hårdkodat (dvs vi testar samma lösenord
 * alltid), fråga användaren efter ett lösenord och berätta därefter om det
 * är ett säkert lösenord eller ej.
 *
 * STEG 2
 * Lägg koden för att hitta antalet specialtecken i en egen funktion som tar
 * emot lösenordet att kontrollera som en parameter, och returnerar antalet
 * specialtecken som hittades i det mottagna lösenordet.
 *
 * Byt ut specialCharCount i if-satserna till att kalla på din nya funktion
 * och kolla att allt fortfarande fungerar.
 *
 * STEG 3
 * Berätta för användaren om lösenordet var säkert eller ej med hjälp av
 * `alert` istället för `console.log`
 *
 *
 * GAMMAL KRAVSPECIFIKATION
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två (olika) specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 */

// passwordInput = "password"; // inte giltigt
// passwordInput = "pa$sword"; // giltigt
// passwordInput = "p@ssw%rd"; // giltigt
// passwordInput = "pa$$word"; // giltigt
// passwordInput = "secretpassword"; // inte giltigt
// passwordInput = "secret-password"; // giltigt
// passwordInput = "such-password-much-secure-very-long"; // giltigt
// passwordInput = "1234567890123456"
// passwordInput = "123456@$"
// passwordInput = "1234@@"
// passwordInput = "1234567$"
// passwordInput = "12345678901-"
// passwordInput = "1234567890123456"
// passwordInput = "@${}[]"

// let passwordInput = prompt(`Ange ett lösenord:`);

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];
let specailCharsCount = 0;

const formEl = document.querySelector('#formInput')
const passwordInputField = document.querySelector('#passwordInput')
const resultEl = document.querySelector('#result')

formEl.addEventListener('submit', e => {
    e.preventDefault()
    passwordInput = passwordInputField.value
    console.log(passwordInput)   
    passwordCheck(passwordInput)


function passwordCheck() {
	for (i = 0; i < specialChars.length; i++) {
		if (specialChars.includes(passwordInput[i])) {
			specailCharsCount++
		}
	}
	return specailCharsCount
}
console.log(`Found ${specailCharsCount} specialcharacters in ${passwordInput}`)

    if (passwordInput.length >= 8 && passwordCheck(passwordInput) >= 1) {
        resultEl.innerHTML = `<p class="alert alert-success">Your password:<br> ${passwordInput}<br>meets the requirements of at least <br>8 characters of which at least 1 specialcharacter!</p> `
    } else if (passwordInput.length >= 6 && passwordCheck(passwordInput) >= 2) {
        resultEl.innerHTML = `<p class="alert alert-success">Your password:<br> ${passwordInput}<br>meets the requirements of at least <br>6 characters of which at least 2 specialcharacter!</p>`
    }
    else if (passwordInput.length >= 12 && passwordInput.includes('-') >= 1) {
        resultEl.innerHTML = `<p class="alert alert-primary">Your password:<br> ${passwordInput}<br>meets the requirements of at least <br>12 characters and must include a hyphen!</p>`
    }
    else if (passwordInput.length >= 16) {
        resultEl.innerHTML = `<p class="alert alert-warning">Your password:<br> ${passwordInput}<br>meets the requirements of at least<br>16 characters!</p> `
    } else {
        resultEl.innerHTML = `<p class="alert alert-danger">Your password:<br> ${passwordInput}<br> does not meet the requirements!</p>`
    }
})

formEl.addEventListener('reset', () => {
    resultEl.innerHTML = ''
})