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


const operator = document.querySelector("#operator");
console.log(main)
