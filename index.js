function rollDice(params) {
    
    const numDice = document.getElementById("numDice").value;
    // Get the place where we will show the rolled numbers
    const diceResult = document.getElementById("diceResult");
    // Get the place where we will put the dice pictures
    const diceImages = document.getElementById("diceImages");
    // Make an empty list to keep each die's number
    const values = [];
    // Make an empty list to keep each die's picture HTML
    const images = [];
    // Start the total at zero so we can add up the dice
    let total = 0;
    // Do the next steps once for each die the user wants
    for (let i = 0; i < numDice; i++) {
        // Make a random number from 1 to 6 (this is the die roll)
        const value = Math.floor(Math.random() * 6 + 1);
        // Put the rolled number into our list of numbers
        values.push(value);
        // Make an image tag for this number and put it into our list of images
        images.push(`<img src="./images/${value}.png" width="70" height="70">`);
        // Add this number to the running total
       
    // Show the list of numbers on the page (what you rolled)
    diceResult.innerHTML = " you rolled: " + `${values.join(", ")}`;
    // Show all dice pictures on the page
    diceImages.innerHTML =  images.join("");
}}


