function calcular() {

    const qtd_Adult = document.querySelector("#adulto").value;
    const qtd_Kids = document.querySelector("#crianca").value;
    const duration = document.querySelector("#duracao").value;

    let qtd_Carne = (qtd_Adult * carnePP(duration) + (carnePP(duration) / 2 * qtd_Kids));
    let qtd_Cerveja = qtd_Adult * bebidaPP(duration);
    let qtd_refriAgua = qtd_Adult * refriAguaPP(duration) + (refriAguaPP(duration) / 2 * qtd_Kids);

    let resultado = document.querySelector(".resultado");

    resultado.innerHTML = `<p>${qtd_Carne / 1000}g de Carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtd_Cerveja / 355)} Latas de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtd_refriAgua / 2000)} Garrafas de 2l de Refigerente/Água</p>`;

}

function carnePP(duration) {
    if (duration >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function bebidaPP(duration) {
    if (duration >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function refriAguaPP(duration) {
    if (duration >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
