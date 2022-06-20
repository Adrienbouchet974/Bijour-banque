// const result = datapoints.filter(check_value);

// function check_value(age) {
//     return age >= 1200 | age == 775;
// }

// console.log(result)

const tout = document.querySelector("#tout");
const credit = document.querySelector("#credit");
const debit = document.querySelector("#debit");
const main = document.querySelector("#main");

function active() {
    credit.addEventListener("click", () => {
        credit.classList.add("active");
        credit.classList.add("fade-in-fwd");
        main.classList.add("fade-in-fwd");
        credit.addEventListener("animationend", () => {
            credit.classList.remove("fade-in-fwd");
            main.classList.remove("fade-in-fwd");
        });
        if(credit.classList.contains("active")){
            main.style.display = "none";
            tout.classList.remove("active");
            debit.classList.remove("active");
        }
    })
    debit.addEventListener("click", () => {
        debit.classList.add("active");
        debit.classList.add("fade-in-right");
        main.classList.add("fade-in-right");
        debit.addEventListener("animationend", () => {
            debit.classList.remove("fade-in-right");
            main.classList.remove("fade-in-right");
        });
        if(debit.classList.contains("active")){
            main.style.display = "none";
            tout.classList.remove("active");
            credit.classList.remove("active");
        }
    })
    tout.addEventListener("click", () => {
        tout.classList.add("active");
        tout.classList.add("fade-in-left");
        main.classList.add("fade-in-left");
        tout.addEventListener("animationend", () => {
            tout.classList.remove("fade-in-left");
            main.classList.remove("fade-in-left");
        });
        if(tout.classList.contains("active")){
            main.style.display = "";
            debit.classList.remove("active");
            credit.classList.remove("active");
        }
    })
}
active();


const operator = document.querySelector("#operator");
const titre = document.querySelector("#titre");
const desc = document.querySelector("#desc");
const montant = document.querySelector("#montant");
let i = 0;
const small_nombre = document.createElement("small");
const solde = document.querySelector("#solde");

function div(){
    const overlay = document.querySelector(".reveal-overlay");
    overlay.style.display = "none";

    const div0 = document.createElement("div");
    div0.setAttribute("class", `operation ${operator.value}`);
    div0.classList.add("fade-in-left");
    div0.addEventListener("animationend", () => {
        div0.classList.remove("fade-in-left");
    })
    const div1 = document.createElement("div");
    div1.setAttribute("class", "grid-x grid-padding-x align-middle");
    const div2_1 = document.createElement("div");
    div2_1.setAttribute("class", "cell shrink");
    div2_1.setAttribute("id", `${titre.value}1`);
    const div2_2 = document.createElement("div");
    div2_2.setAttribute("class", "cell auto");
    div2_2.setAttribute("id", `${titre.value}2`);
    const div2_3 = document.createElement("div");
    div2_3.setAttribute("class", "cell small-3 text-right");
    div2_3.setAttribute("id", `${titre.value}3`);
    const div2_1_1 = document.createElement("div");
    div2_1_1.setAttribute("class", "picto");
    div2_1_1.setAttribute("id", `${titre.value}_picto`);
    const div_base2_2 = document.createElement("div");
    div_base2_2.setAttribute("id", `${titre.value}_cell_auto`);
    const div_base2_3 = document.createElement("div");
    div_base2_3.setAttribute("id", `${titre.value}_small`);
    const img = document.createElement("img");
    if(operator.value == "credit"){
        img.setAttribute("src", "./assets/images/sac-dargent.png");
    };
    if(operator.value == "debit"){
        img.setAttribute("src", "./assets/images/depenses.png");
    };

    const h2 = document.createElement("h2");
    h2.textContent = `${titre.value}`;
    const small_text = document.createElement("small");
    small_text.textContent = `${desc.value}`;
    // const small_nombre = document.createElement("small");
    small_nombre.setAttribute("id", "valeur");
    small_nombre.textContent = `test%`;
    const p = document.createElement("p");
    p.setAttribute("class", "count");
    p.textContent = `${montant.value}€`;

    main.appendChild(div0);
    const div_operation = main.lastChild;
    div_operation.setAttribute("id", `${titre.value}`);
    div_operation.appendChild(div1);
    div1.setAttribute("id", `${titre.value}`);

    const div_grid = document.querySelector(`#${titre.value}`);
    const div_cell = div_grid.lastChild;
    div_cell.appendChild(div2_1);
    div_cell.appendChild(div2_2);
    div_cell.appendChild(div2_3);

    const div_picto = document.querySelector(`#${titre.value}1`);
    div_picto.appendChild(div2_1_1);
    const div_cell_auto = document.querySelector(`#${titre.value}2`);
    div_cell_auto.appendChild(div_base2_2);
    const div_small = document.querySelector(`#${titre.value}3`);
    div_small.appendChild(div_base2_3);

    const picto = document.querySelector(`#${titre.value}_picto`);
    picto.appendChild(img);
    const cell = document.querySelector(`#${titre.value}_cell_auto`);
    cell.appendChild(h2);
    cell.appendChild(small_text);
    const small = document.querySelector(`#${titre.value}_small`);
    small.appendChild(p);
    small.appendChild(small_nombre);


}

function percent(){
    small_nombre.setAttribute("id", `valeur${i}`);
    const valeur = document.querySelector(`#valeur${i++}`);
    valeur.textContent = Number.parseFloat((Number(montant.value) * 100) / Number(solde.textContent)).toFixed(2) + "%";
}

function add_div(){
    const form = document.querySelector("#operationForm");
    form.addEventListener("submit", (add_div) => {
        add_div.preventDefault();
        div();
        if(operator.value == "credit"){
            if(solde.textContent == "2 560.00€"){
                solde.textContent = 2560 + Number(montant.value);
            }
            else{
                solde.textContent = Number(solde.textContent) + Number(montant.value);
            }
        }
        if(operator.value == "debit"){
            if(solde.textContent == "2 560.00€"){
                solde.textContent = 2560 - Number(montant.value);
            }
            else{
                solde.textContent = Number(solde.textContent) - Number(montant.value);
            }
        }
        generateData();
        percent();
    });
}
add_div();

