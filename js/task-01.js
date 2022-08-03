const ulEl = document.querySelector('#categories');

const categoriesSum = ul => ul.querySelectorAll(".item").length;

console.log("Number of categories: ", categoriesSum(ulEl));

const categoryName = ul => {
    const categoriesUl= ul.querySelectorAll(".item")
    categoriesUl.forEach(item => {
    console.log("Category:", item.querySelector("h2").textContent);
    console.log("Elements:", item.querySelectorAll("ul li").length);
    });
}

categoryName(ulEl)