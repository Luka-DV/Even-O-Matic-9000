//Very copmplex, procceed with caution:


function Calculate() {
  const resultDisplay = document.querySelector("#resultDisplay");
  const adDisplay = document.querySelector("#adDisplay");
  const loadingIcon = document.querySelector("#lottie");
  const loadingDots = document.querySelector("#loading");

  this.getResult = function() {
    const number = document.querySelector("#numberInput").value || 0;
    const url = `https://api.isevenapi.xyz/api/iseven/${number}/`;

    fetch(url)
      .then(response => response.json())
      .then(async data => {
        console.log(data);
        adDisplay.innerText = data.ad;

        this.clearText();
        this.displayLoading();

        setTimeout(this.displayResult.bind(this), 6042.42, data.iseven);
   
      })
      .catch(error => {
        resultDisplay.innerText = "Sorry, there aren't anough abacuses in the world to calculate that."
        console.log(`Error: ${error}`);
      });
  };

  this.displayResult = function(isEven) {

    this.removeLoading();

    if (isEven) {
      resultDisplay.innerText = "CONGRATULATIONS!\nYour number is EVEN.";
    } else {
      resultDisplay.innerText = "Your number is NOT EVEN.";
      document.querySelector("main > small").innerText = "It might be odd, though."
    }
  };

  this.displayLoading = function() {
    loadingIcon.classList.remove("hidden");
    loadingDots.classList.remove("hidden");  
  }
  this.removeLoading = function() {
    loadingIcon.classList.add("hidden");
    loadingDots.classList.add("hidden");
  }

  this.clearText = function() {
    resultDisplay.innerText = "";
    document.querySelector("main > small").innerText = "";
  }
}

const checkIfEven = new Calculate();

document.querySelector("button").addEventListener("click", () => {
  checkIfEven.getResult();
});

document.body.addEventListener("keydown", e => {
  if(e.key === "Enter") {
      document.querySelector("button").click();
  }
})