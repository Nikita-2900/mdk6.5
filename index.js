const select = document.getElementById("select");
const button = document.getElementById("button");
const result = document.getElementById("result");

const eat2 = document.getElementById("eat")
const energy2 = document.getElementById("energy")
const health2 = document.getElementById("health")
const dirtiness2 = document.getElementById("dirtiness")

let eat = 50;
let energy = 50;
let health = 70;
let dirtiness = 0;
let commands1 = ["Сидеть", "Лежать", "Стоять", "Голос", "Лапа", "Кувырок", "Прыжок", "Танец"]
let commands2 = []
eat2.textContent = `Сытость: ${eat}`
energy2.textContent = `Энергия: ${energy}`
health2.textContent = `Здоровье: ${health}`
dirtiness2.textContent = `Испачканность: ${dirtiness}`

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.addEventListener('click', () => {
    if (select.value == "Поиграть") {
        if (eat < 30) {;
            result.textContent = "Питомец голоден"
        }
        else if (energy < 20) {
            result.textContent = "У питомца нет энергии";
        }
        else if (health < 20) {
            result.textContent = "Питомец болен";
        } 
        else {
            result.textContent = "Вы поиграли с питомцем";
            eat -= 30;
            energy -= 20;
            dirtiness += 10;
        };
    }
    else if (select.value == "Покормить") {
        if (eat > 50) {
            result.textContent = "Питомец уже сыт";
        }
        else { 
            result.textContent = "Вы покормили питомца";
            eat += 50;
            energy += 10;
            dirtiness += 5;
        };
    }
    else if (select.value == "Поспать") {
        if (energy > 60) {
            result.textContent = "Питомец не хочет спать";
        }
        else if (eat < 10) {
            result.textContent = "Питомец голоден";
        } 
        else {
            result.textContent = "питомец поспал";
            eat -= 10;
            energy += 40;
        };
    }
    else if (select.value == "Погулять") {
        if (energy < 30) {
            result.textContent = "У питомца нет энергии";
        }
        else if (eat < 30) {
            result.textContent = "Питомец голоден";
        } 
        else if (health < 20) {
            result.textContent = "Питомец болен";
        } 
        else {
            result.textContent = "Вы погуляли с питомцем";
            eat -= 30;
            energy -= 30;
            dirtiness += 20;
        };
    }
    else if (select.value == "Помыть") {
        if (dirtiness < 10) {
            result.textContent = "Питомец чистый";
        }
        else {
            result.textContent = "Вы помыли питомца";
            if (dirtiness > 30) {
                dirtiness -= 30
            }
            else {
                dirtiness = 0
            }
            health += 5
        };
    }
    else if (select.value == "Вылечить") {
        if (health > 50) {
            result.textContent = "Питомец здоров";
        }
        else {
            result.textContent = "Вы вылечили питомца";
            health += 50
        };
    }
    else if (select.value == "Обучать") {
        if (commands1.length == 0) {
            result.textContent = "Питомец выучил все команды";
        }
        else if (eat < 30) {
            result.textContent = "Питомец голоден";
        }
        else if (energy < 30) {
            result.textContent = "У питомца нет энергии";
        } 
        else if (health < 20) {
            result.textContent = "Питомец болен";
        } 
        else {
            const command = commands1[getRandomInt(0,commands1.length-1)]
            commands2.push(command)
            commands1 = commands1.filter(c => c !== command);
            result.textContent = `Вы обучили питомца команде: ${command}`;
            eat -= 30;
            energy -= 30;
            dirtiness += 10
        };
    }
    else if (select.value == "Выполнить команду") {
        if (commands2.length == 0) {
            result.textContent = "Питомец не обучен командам";
        }
        else if (eat < 10) {
            result.textContent = "Питомец голоден";
        }
        else if (energy < 10) {
            result.textContent = "У питомца нет энергии";
        } 
        else if (health < 20) {
            result.textContent = "Питомец болен";
        } 
        else {
            result.textContent = `Питомец выполнил команду: ${commands2[getRandomInt(0,commands2.length-1)]}`;
            eat -= 10;
            energy -= 10;
            dirtiness += 3;
        };
        
    }
    if (eat >= 100) {
        eat = 100
    }
    else if (eat <= 0) {
        eat = 0
    };
    if (energy >= 100) {
        energy = 100
    }
    else if (energy <= 0) {
        energy = 0
    };
    if (health >= 100) {
        health = 100
    }
    else if (health <= 0) {
        health = 0
    };
    if (dirtiness >= 100) {
        dirtiness = 100
    }
    else if (dirtiness <= 0) {
        dirtiness = 0
    }; 
    if (dirtiness < 10) {
        health -= 0
    }
    else if (dirtiness < 20) {
        health -= 1
    }
    else if (dirtiness < 30) {
        health -= 3
    }
    else if (dirtiness < 50) {
        health -= 7
    }
    else if (dirtiness < 70) {
        health -= 12
    }
    else if (dirtiness <= 100) {
        health -= 20
    }
    eat2.textContent = `Сытость: ${eat}`
    energy2.textContent = `Энергия: ${energy}`
    health2.textContent = `Здоровье: ${health}`
    dirtiness2.textContent = `Испачканность: ${dirtiness}`
    console.log(commands1)
    console.log(commands2)
});
