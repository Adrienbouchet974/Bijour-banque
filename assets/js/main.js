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
        credit.classList.add("fade-in-top");
        main.classList.add("fade-in-top");
        credit.addEventListener("animationend", () => {
            credit.classList.remove("fade-in-top");
            main.classList.remove("fade-in-top");
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




function add_operation(){
    const operator = document.querySelector("#operator");
    operator.addEventListener("click", () => {
        console.log(operator.value);
    })
    
    const titre = document.querySelector("#titre");
    titre.addEventListener("input", () => {
        console.log(titre.value);
    })

    const desc = document.querySelector("#desc");
    desc.addEventListener("input", () => {
        console.log(desc.value);
    })

    const montant = document.querySelector("#montant");
    montant.addEventListener("input", () => {
        console.log(montant.value);
    })

}
add_operation();

function div(){
    const overlay = document.querySelector(".reveal-overlay");
        overlay.style.display = "none";
        const div0 = document.createElement("div");
        div0.setAttribute("class", "operation credit");
        const div1 = document.createElement("div");
        div1.setAttribute("class", "grid-x grid-padding-x align-middle");
        const div2_1 = document.createElement("div");
        div2_1.setAttribute("class", "cell shrink");
        const div2_2 = document.createElement("div");
        div2_2.setAttribute("class", "cell auto");
        const div2_3 = document.createElement("div");
        div2_3.setAttribute("class", "cell small-3 text-right");
        // const text = document.createTextNode(`<!-- operation -->`);
        // main.appendChild(text);
        main.appendChild(div0);
        const div_operation = main.lastChild;
        div_operation.setAttribute("id", "last");
        div_operation.appendChild(div1);
        const div_grid = document.querySelector("#last");
        const div_cell = div_grid.lastChild;
        div_cell.appendChild(div2_1);
        div_cell.appendChild(div2_2);
        div_cell.appendChild(div2_3);
        
}

function add_div(){
    const form = document.querySelector("#operationForm");
    form.addEventListener("submit", (add_div) => {
        add_div.preventDefault();
        div();
    });
}
add_div();