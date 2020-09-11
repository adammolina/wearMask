function zipCode() {
    var input = document.getElementById("userInput").value;
    var zipCodeLength = input.length;

    if (zipCodeLength == 5) {
      alert("Just put on a damn mask.");
    } else {
      alert("Please enter a valid zip code.");
    }
  }
