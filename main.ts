/*
    cas: je doba v sekundách, po kterou trouba
    odebírala uvedený příkon
    spotreba: je kolik energie by bylo spotřebováno,
    pokud by takto trouba pekla celou hodinu
    (jsou to watthodiny [Wh])

    pro cas: 600s a spotreba: 3500 Wh je skutečné
    odebrané množství "energie":
    3500 * (600 / 3600) === 3500 * (1/6) === 583,333W
*/
type Odber = {
    cas: number, //čas je v sekundách
    spotreba: number //spotřeba ve watech za hodinu
}
const cena: number = 6.70; // Kč / kWh
let data: Array<Odber> = [
    { cas: 600, spotreba: 3500 },
    { cas: 120, spotreba: 0 },
    { cas: 300, spotreba: 1700 }, // data[2].cas
    { cas: 60, spotreba: 0 },
    { cas: 800, spotreba: 1500 },
]

let hodiny: number = 0;
for (let i = 0; i < data.length; i++) {
    hodiny += data[i].cas
    if (i === 4) {
        console.log((hodiny /= 3600) + " hodiny")
    }
}

let kwatty: number = 0;
for (let o = 0; o < data.length; o++) {
    kwatty += data[o].spotreba
    if (o === 4) {
        console.log((kwatty /= 1000) + " kilowatty")
    }
}

console.log((hodiny *= kwatty *= cena) + " Kč")

let prumer: number = 0;
for (let p = 0; p < data.length; p++) {
    prumer += data[p].cas / 3600 + data[p].spotreba / 1000
    if (p === 4) {
        console.log("průměrný odběr " + (prumer /= 5) + " kWh")
    }
}