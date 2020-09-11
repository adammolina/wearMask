function zipCode() {
    var input = document.getElementById("userInput").value;
    var zipCodeLength = input.length;

    if (zipCodeLength == 5) {
      alert("Yes, you should wear a mask today.");
    } else {
      alert("Please enter a valid zip code.");
    }
  }
