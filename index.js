const select = document.getElementById("select");
const button = document.getElementById("button");
const result = document.getElementById("result");

const eat2 = document.getElementById("eat")
const energy2 = document.getElementById("energy")

let eat = 1.0;

let energy = 1.0;
eat2.textContent = `Сытость: ${eat}`
energy2.textContent = `Энергия: ${energy}`

button.addEventListener('click', () => {
    if (select.value == "Поиграть") {
        if (eat < 1.2) {;
            result.textContent = "Питомец голоден"
        }
        else if (energy < 0.8) {
            result.textContent = "У питомца нет энергии";
        }
        else {
            result.textContent = "Вы поиграли с питомцем";
            eat -= 1.2;
            energy -= 0.8;
        };
    }
    else if (select.value == "Покормить") {
        if (eat > 2) {
            result.textContent = "Питомец уже сыт";
        }
        else {
            
            result.textContent = "Вы покормили питомца";
            eat += 0.7;
            energy += 0.2;
        };
    }
    else if (select.value == "Поспать") {
        if (energy > 2) {
            result.textContent = "Питомец не хочет спат";
        }
        else if (eat < 0.5) {
            result.textContent = "Питомец голоден";
        } 
        else {
            result.textContent = "питомец поспал";
            eat -= 0.5;
            energy += 1.2;
        };
    }
    eat = Math.round(eat * 10) / 10;
    energy = Math.round(energy * 10) / 10;
    eat2.textContent = `Сытость: ${eat}`
    energy2.textContent = `Энергия: ${energy}`
});
