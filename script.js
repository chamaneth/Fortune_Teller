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
            fortuneResult.textContent = userName +""+"Are you an immortal?";
            return;
        }

        if (userAge < 10) {
            fortuneResult.textContent = userName +""+ "Go Studyy Now!!!!";
            return;
        }

        if (isNaN(userAge)) {
            fortuneResult.textContent = "Please enter a valid number for your age.";
            return;
        }

        console.log("Thanks for that!");

        const fortunes = {
            Aries: "This is a great time for bold decisions, take the leap!",
            Taurus: "Patience will pay off, stay the course.",
            Gemini: "New opportunities are coming your way, be ready to embrace them.",
            Cancer: "Family matters may require your attention today.",
            Leo: "Your confidence will lead you to success, trust your instincts.",
            Virgo: "A calm and thoughtful approach will help you solve problems.",
            Libra: "Balance is key, avoid making hasty decisions.",
            Scorpio: "Trust your intuition, you are on the right path.",
            Sagittarius: "Adventure awaits! Take a step out of your comfort zone.",
            Capricorn: "Hard work will soon lead to big rewards, keep pushing.",
            Aquarius: "Your creativity is at its peak, share your ideas with others.",
            Pisces: "Embrace your dreams and follow your heart, it will lead to happiness."
        };

       
        const selectedFortune = fortunes[userSign] || "The stars are aligned for you, your future is bright!";

      
        fortuneResult.innerHTML = `<strong>Hello, ${userName}!</strong><br>
                                   Age: ${userAge}<br>
                                   Zodiac Sign: ${userSign}<br><br>
                                   <strong>Your Fortune:</strong><br>${selectedFortune}`;
    });
});
