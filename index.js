const homeScoreEl = document.getElementById("home-score")
const awayScoreEl = document.getElementById("away-score")

let homeScore = 0
let awayScore = 0

function checkWinner() {
    if (homeScore > awayScore) {
        homeScoreEl.style.backgroundColor = "#111111"
        homeScoreEl.style.color = "#FF2A4A"
        resetStyle("away")
    } else if (awayScore > homeScore) {
        awayScoreEl.style.backgroundColor = "#111111"
        awayScoreEl.style.color = "#FF2A4A"
        resetStyle("home")
    } else {
        resetStyle("home")
        resetStyle("away")
    }
}

function resetStyle(team) {
    if (team == "home") {
        homeScoreEl.style.backgroundColor = "#080001"
        homeScoreEl.style.color = "#F94F6D"
    } else if (team == "away") {
        awayScoreEl.style.backgroundColor = "#080001"
        awayScoreEl.style.color = "#F94F6D"
    }
}

function addPoints(points, team) {
    if (team == "Home") {
        homeScore += points
        homeScoreEl.textContent = homeScore
        checkWinner()
    } else if (team == "Away" ) {
        awayScore += points
        awayScoreEl.textContent = awayScore
        checkWinner()
    }
}

function newGame() {
    homeScore = 0
    awayScore = 0
    homeScoreEl.textContent = homeScore
    awayScoreEl.textContent = awayScore
    resetStyle("home")
    resetStyle("away")
}
