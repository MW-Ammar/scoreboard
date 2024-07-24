const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function checkWinner() {
    if (homeScore > guestScore) {
        homeScoreEl.style.backgroundColor = "#111111"
        homeScoreEl.style.color = "#FF2A4A"
        resetStyle("guest")
    } else if (guestScore > homeScore) {
        guestScoreEl.style.backgroundColor = "#111111"
        guestScoreEl.style.color = "#FF2A4A"
        resetStyle("home")
    } else {
        resetStyle("home")
        resetStyle("guest")
    }
}

function resetStyle(team) {
    if (team == "home") {
        homeScoreEl.style.backgroundColor = "#080001"
        homeScoreEl.style.color = "#F94F6D"
    } else if (team == "guest") {
        guestScoreEl.style.backgroundColor = "#080001"
        guestScoreEl.style.color = "#F94F6D"
    }
}

function addPoints(points, team) {
    if (team == "Home") {
        homeScore += points
        homeScoreEl.textContent = homeScore
        checkWinner()
    } else if (team == "Guest" ) {
        guestScore += points
        guestScoreEl.textContent = guestScore
        checkWinner()
    }
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    resetStyle("home")
    resetStyle("guest")
}
