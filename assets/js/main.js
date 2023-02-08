class superMario {
    constructor(name, cardNumber, firstGame, description, color, image) {
        this.name = name;
        this.cardNumber = cardNumber;
        this.firstGame = firstGame;
        this.description = description;
        this.color = color;
        this.image = image;
    }

    cardOutput() {
        document.querySelector("h1").innerHTML = this.name;
        document.querySelector("#cardNumberOutput").innerHTML = this.cardNumber;
        document.querySelector("#firstGameOutput").innerHTML = this.firstGame;
        document.querySelector("#descriptionOutput").innerHTML = this.description;
        document.querySelector("section").style.backgroundColor = this.color;
        document.querySelector("img").src = this.image;
    }
}


document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const nameInput = document.querySelector("#name").value;
    const cardNumberInput = document.querySelector("#cardNumber").value;
    const firstGameInput = document.querySelector("#firstGame").value;
    const descriptionInput = document.querySelector("#description").value;
    const colorInput = document.querySelector("#color").value;
    const imageInput = document.querySelector("#image").value;
    
    const character = new superMario(nameInput, cardNumberInput, firstGameInput, descriptionInput, colorInput, imageInput);
    character.cardOutput();
});