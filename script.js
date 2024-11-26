document.addEventListener("DOMContentLoaded", function() {
    const fortuneForm = document.getElementById("fortuneForm");
    const fortuneResult = document.getElementById("fortuneResult");

    fortuneForm.addEventListener("submit", function(event) {
        event.preventDefault();
     
        const userName = document.getElementById("userName").value;
        let userAge = document.getElementById("userAge").value;
        const userSign = document.getElementById("userSign").value;

        if (!userName || !userAge || !userSign) {
            fortuneResult.textContent = "Please fill in all the fields.";
            return;
        }

        userAge = parseInt(userAge);

        if (userAge > 123) {
            fortuneResult.textContent = userName + " Are you an immortal?";
            return;
        }

        if (userAge < 10) {
            fortuneResult.textContent = userName + " Go study now!";
            return;
        }

        if (isNaN(userAge)) {
            fortuneResult.textContent = "Please enter a valid number for your age.";
            return;
        }

        fetch(`https://best-daily-astrology-and-horoscope-api.p.rapidapi.com/api/Detailed-Horoscope/?zodiacSign=${userSign}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "best-daily-astrology-and-horoscope-api.p.rapidapi.com",
                "x-rapidapi-key": "19555301a7msh3c0a1917d81865fp1cfe64jsnd0ab81eb7ad7"
            }
        })
        .then(response => response.json())
        .then(data => {
            const fortune = data.prediction;
            const luckyNumbers = data.number;
            const luckyColors = data.color;
            const strengths = data.strength;
            const weaknesses = data.weakness;

            fortuneResult.innerHTML = `
                <strong>Hello, ${userName}!</strong><br>
                Age: ${userAge}<br>
                Zodiac Sign: ${userSign}<br><br>
                <strong>Your Fortune:</strong><br>${fortune}<br><br>
                <strong>Lucky Numbers:</strong> ${luckyNumbers}<br>
                <strong>Lucky Colors:</strong> ${luckyColors}<br>
                <strong>Strengths:</strong> ${strengths}<br>
                <strong>Weaknesses:</strong> ${weaknesses}
            `;
        })
        .catch(error => {
            fortuneResult.textContent = "Could not retrieve fortune. Please try again later.";
        });
    });
});
