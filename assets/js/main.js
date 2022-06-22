const tout = document.querySelector("#tout");
const credit = document.querySelector("#credit");
const debit = document.querySelector("#debit");
const main = document.querySelector("#main");
const op_debit = main.querySelectorAll("div.operation.debit");
const op_credit = main.querySelectorAll("div.operation.credit");

function active() {
    credit.addEventListener("click", () => {
        credit.classList.add("active");
        credit.classList.add("fade-in-fwd");
        main.classList.add("fade-in-fwd");
        op_debit.forEach(element => {
            element.style.display = "none"
        });
        op_credit.forEach(element => {
            element.style.display = ""
        });
        credit.addEventListener("animationend", () => {
            credit.classList.remove("fade-in-fwd");
            main.classList.remove("fade-in-fwd");
        });
        if(credit.classList.contains("active")){
            tout.classList.remove("active");
            debit.classList.remove("active");
        }
    })
    debit.addEventListener("click", () => {
        debit.classList.add("active");
        debit.classList.add("fade-in-right");
        main.classList.add("fade-in-right");
        op_credit.forEach(element => {
            element.style.display = "none"
        });
        op_debit.forEach(element => {
            element.style.display = ""
        });
        debit.addEventListener("animationend", () => {
            debit.classList.remove("fade-in-right");
            main.classList.remove("fade-in-right");
        });
        if(debit.classList.contains("active")){
            tout.classList.remove("active");
            credit.classList.remove("active");
        }
    })
    tout.addEventListener("click", () => {
        tout.classList.add("active");
        tout.classList.add("fade-in-left");
        main.classList.add("fade-in-left");
        op_credit.forEach(element => {
            element.style.display = "";
        });
        op_debit.forEach(value => {
            value.style.display = "";
        });
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
const solde = document.querySelector("#solde");
const form = document.querySelector("#operationForm");
const overlay = document.querySelector(".reveal-overlay");

// function div(){

//     const div0 = document.createElement("div");
//     div0.setAttribute("class", `operation ${operator.value}`);
//     div0.classList.add("fade-in-left");
//     div0.addEventListener("animationend", () => {
//         div0.classList.remove("fade-in-left");
//         if(div0.classList.value == "operation credit"){
//             debit.addEventListener("click", () => {
//                 div0.setAttribute("style", "display: none");
//             })
//             credit.addEventListener("click", () => {
//                 div0.removeAttribute("style", "display: none");
//             });
//             tout.addEventListener("click", () => {
//                 div0.removeAttribute("style", "display: none");
//             })
//         }
//         if(div0.classList.value == "operation debit"){
//             credit.addEventListener("click", () => {
//                 div0.setAttribute("style", "display: none");
//             });
//             debit.addEventListener("click", () => {
//                 div0.removeAttribute("style", "display: none");
//             })
//             tout.addEventListener("click", () => {
//                 div0.removeAttribute("style", "display: none");
//             })
//         }
//     })
    
//     const div1 = document.createElement("div");
//     div1.setAttribute("class", "grid-x grid-padding-x align-middle");
//     const div2_1 = document.createElement("div");
//     div2_1.setAttribute("class", "cell shrink");
//     div2_1.setAttribute("id", `${titre.value}1`);
//     const div2_2 = document.createElement("div");
//     div2_2.setAttribute("class", "cell auto");
//     div2_2.setAttribute("id", `${titre.value}2`);
//     const div2_3 = document.createElement("div");
//     div2_3.setAttribute("class", "cell small-3 text-right");
//     div2_3.setAttribute("id", `${titre.value}3`);
//     const div2_1_1 = document.createElement("div");
//     div2_1_1.setAttribute("class", "picto");
//     div2_1_1.setAttribute("id", `${titre.value}_picto`);
//     const div_base2_2 = document.createElement("div");
//     div_base2_2.setAttribute("id", `${titre.value}_cell_auto`);
//     const div_base2_3 = document.createElement("div");
//     div_base2_3.setAttribute("id", `${titre.value}_small`);
//     const img = document.createElement("img");
//     if(operator.value == "credit"){
//         img.setAttribute("src", "./assets/images/sac-dargent.png");
//     };
//     if(operator.value == "debit"){
//         img.setAttribute("src", "./assets/images/depenses.png");
//     };

//     const h2 = document.createElement("h2");
//     h2.textContent = `${titre.value}`;
//     const small_text = document.createElement("small");
//     small_text.textContent = `${desc.value}`;
//     const small_nombre = document.createElement("small");
//     small_nombre.setAttribute("id", "valeur");
//     const p = document.createElement("p");
//     p.setAttribute("class", "count");
//     p.textContent = `${montant.value}€`;

//     main.appendChild(div0);
//     const div_operation = main.lastChild;
//     div_operation.setAttribute("id", `${titre.value}`);
//     div_operation.appendChild(div1);
//     div1.setAttribute("id", `${titre.value}`);

//     const div_grid = document.querySelector(`#${titre.value}`);
//     const div_cell = div_grid.lastChild;
//     div_cell.appendChild(div2_1);
//     div_cell.appendChild(div2_2);
//     div_cell.appendChild(div2_3);

//     const div_picto = document.querySelector(`#${titre.value}1`);
//     div_picto.appendChild(div2_1_1);
//     const div_cell_auto = document.querySelector(`#${titre.value}2`);
//     div_cell_auto.appendChild(div_base2_2);
//     const div_small = document.querySelector(`#${titre.value}3`);
//     div_small.appendChild(div_base2_3);

//     const picto = document.querySelector(`#${titre.value}_picto`);
//     picto.appendChild(img);
//     const cell = document.querySelector(`#${titre.value}_cell_auto`);
//     cell.appendChild(h2);
//     cell.appendChild(small_text);
//     const small = document.querySelector(`#${titre.value}_small`);
//     small.appendChild(p);
//     small.appendChild(small_nombre);
    
// }

// function percent(){
//     small_nombre.setAttribute("id", `valeur${i}`);
//     const valeur = document.querySelector(`#valeur${i++}`);
//     if(solde.textContent == "2 560.00€"){
//         solde.textContent = 2560;
//         valeur.textContent = Number.parseFloat((Number(montant.value) * 100) / Number(solde.textContent)).toFixed(2) + "%";
//     }else{
//         solde.textContent + Number(montant.value);
//         valeur.textContent = Number.parseFloat((Number(montant.value) * 100) / Number(solde.textContent)).toFixed(2) + "%";
//     }
// }

// function add_div(){
//     form.addEventListener("submit", (add_div) => {
//         add_div.preventDefault();
//         div();
//         percent();
//         if(operator.value == "credit"){
//             if(solde.textContent == "2 560.00€"){
//                 solde.textContent = (2560 + Number(montant.value)).toFixed(2);
//             }
//             else{
//                 solde.textContent = (Number(solde.textContent) + Number(montant.value)).toFixed(2);
//             }
//         }
//         if(operator.value == "debit"){
//             if(solde.textContent == "2 560.00€"){
//                 solde.textContent = (2560 - Number(montant.value)).toFixed(2);
//             }
//             else{
//                 solde.textContent = (Number(solde.textContent) - Number(montant.value)).toFixed(2);
//             }
//         }
//         generateData();
//         // solde.textContent += "€";
//         operator.value = "--"
//         titre.value = "";
//         desc.value = "";
//         montant.value = "";
//     });
// }
// add_div();



/* réflexions */

const operations = []

function render() {
    operations.forEach( (operation) => {
        const template = `
        <div class="operation ${operation.type}">
            <div class="grid-x grid-padding-x align-middle">
                <div class="cell shrink">
                    <div class="picto">
                        <img src="./assets/images/sac-dargent.png" alt="credit" />
                    </div>
                </div>
                    <div class="cell auto">
                        <div>
                            <h2>${operation.titre}</h2>
                            <small>${operation.desc}</small>
                        </div>
                    </div>
                <div class="cell small-3 text-right">
                    <div>
                        <p class="count">${operation.montant}` + "€" + `</p>
                        <small>${operation.percent}` + "%" + `</small>
                    </div>
                </div>
            </div>
        </div>`

        document.querySelector("#data").innerHTML += template;
    })
}

// à la solution du formulaire
function filter(type) {
    const filter = operations.filter((operation) => operation.type === type)
    console.log(filter);
}

credit.addEventListener("click", () => {
    filter("credit");
})
debit.addEventListener("click", () => {
    filter("debit");
})

const total_value = solde.textContent;
const total_slice = total_value.slice(0, total_value.length - 4);
const total = total_slice.replace(" ", "");
const argent = Number(total);

function data_anim() {
    document.querySelector("#data").classList.add("fade-in-left");
    document.querySelector("#data").addEventListener("animationend", () => {
        document.querySelector("#data").classList.remove("fade-in-left");
    })
}

function formulaire(){
    form.addEventListener("submit", (e) => {
        e.preventDefault;
        const overlay = document.querySelector(".reveal-overlay");
        overlay.style.display = "none";
        const new_operations = {
            titre: titre.value,
            desc: desc.value,
            montant: montant.value,
            percent: Number((montant.value * 100) / argent).toFixed(2),
            type: operator.value
        }
        operations.push(new_operations);
        data_anim();
        operator.value = "--";
        titre.value = "";
        desc.value = "";
        montant.value = "";
        render();
    })
}
formulaire()

