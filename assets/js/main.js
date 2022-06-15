// const result = datapoints.filter(check_value);

// function check_value(age) {
//     return age >= 1200 | age == 775;
// }

// console.log(result)

const tout = document.querySelector("#tout");
const credit = document.querySelector("#credit");
const debit = document.querySelector("#debit");

function active_credit() {
    credit.addEventListener("click", () => {
        credit.classList.add("active");
        if(credit.classList.contains("active")){
            tout.classList.remove("active");
            debit.classList.remove("active");
        }
    })
    debit.addEventListener("click", () => {
        debit.classList.add("active");
        if(debit.classList.contains("active")){
            tout.classList.remove("active");
            credit.classList.remove("active");
        }
    })
    tout.addEventListener("click", () => {
        tout.classList.add("active");
        if(tout.classList.contains("active")){
            debit.classList.remove("active");
            credit.classList.remove("active");
        }
    })
}
active_credit();