//Hiển thị tên đăng nhập
window.addEventListener("load", function () {
    const username = localStorage.getItem("loggedInUsername");
    if (username) {
        const usernameLog = document.getElementById("usernameLog");
        if (usernameLog) {
            usernameLog.innerText = username;
        }
    }
});

// Biến dùng chung
const recipe = JSON.parse(localStorage.getItem("recipe")) || [];
const data = document.getElementById("data");
const searchInput = document.getElementById("search");
const sortSelect = document.querySelector("#sort select");
const categorySelect = document.querySelector("#category select");
const pagination = document.getElementById("pagination");

const foods = JSON.parse(localStorage.getItem("foods")) || [];
let filteredRecipes = [...recipe];
let currentData = [...recipe]; // Dữ liệu hiện tại
let currentPage = 1;
const itemsPerPage = 6;
let isAscending = true;

// Enrich Recipes
const enrichRecipesData = (recipes) => {
    return recipes.map(item => {
        let energy = 0, fat = 0, carbs = 0, protein = 0;
        item.ingredients.forEach(ingredient => {
            const food = foods.find(f => f.id === ingredient.id);
            if (food && food.macronutrients) {
                energy += food.macronutrients.energy || 0;
                fat += food.macronutrients.fat || 0;
                carbs += food.macronutrients.carbohydrate || 0;
                protein += food.macronutrients.protein || 0;
            }
        });
        return { ...item, energy, fat, carbs, protein };
    });
}
// Render Dashboard
const renderDashboard = () => {
    let recipesToRender = enrichRecipesData(filteredRecipes);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    // const currentRecipes = filteredRecipes.slice(start, end);
    recipesToRender = recipesToRender.slice(start, end);

    let html = "";
    recipesToRender.forEach(item => {
        html += `
        <div class="card" onclick="renderDetail(${item.id})">
            <div>
                <p class="community"><i class="fa-solid fa-people-group"></i> Community Recipes</p>
                <img src="${item.coverSrc}" width="150" height="150" alt="test">
            </div>
            <div class="description">
                <p>${item.name}</p>
                <div class="author">
                    <span id="authorName">${item.author}</span>
                    <button id="likes" type="button"><i class="fa-regular fa-heart"></i> 37</button>
                </div>
                <p><i class="fa-solid fa-location-pin fa-rotate-270" style="color: #ea9f77;"></i>
                    <span class="category">${item.category[0].name}</span>
                </p>
                <div class="box">
                    <div class="itemGrid">by</div>
                    <div class="itemGrid">Energy</div>
                    <div class="itemGrid">Fat</div>
                    <div class="itemGrid">Carbohydrate</div>
                    <div class="itemGrid">Protein</div>

                    <div class="itemGrid">100g</div>
                        <div class="itemGrid">${item.energy ? item.energy.toFixed(0) : "0"} kcal</div>
                        <div class="itemGrid">${item.fat ? item.fat.toFixed(1) : "0"} g</div>
                        <div class="itemGrid">${item.carbs ? item.carbs.toFixed(1) : "0"} g</div>
                        <div class="itemGrid">${item.protein ? item.protein.toFixed(1) : "0"} g</div>
                </div>
            </div>
        </div>
        `;
    });
    data.innerHTML = html;
    renderPagination(filteredRecipes.length);
}

const enrichRecipes = (recipes) => {
    return recipes.map(recipe => {
        let energy = 0, fat = 0, carbs = 0, protein = 0;

        // Tính toán thông tin dinh dưỡng từ foods
        recipe.ingredients.forEach(ingredient => {
            const food = foods.find(f => f.id === ingredient.id);
            if (food && food.macronutrients) {
                energy += food.macronutrients.energy || 0;
                fat += food.macronutrients.fat || 0;
                carbs += food.macronutrients.carbohydrate || 0;
                protein += food.macronutrients.protein || 0;
            }
        });

        // Trả về recipe với thông tin dinh dưỡng đã được tính toán
        return {
            ...recipe,
            macronutrients: {
                energy,
                fat,
                carbohydrate: carbs,
                protein
            }
        };
    });
};
// Hàm xử lý chung cho tìm kiếm, lọc, sắp xếp và phân trang
const processData = () => {
    filteredRecipes = enrichRecipes([...recipe]);

    const categoryValue = categorySelect.value;// Lọc theo category
    if (categoryValue !== "All Category") {
        filteredRecipes = filteredRecipes.filter(f => f.category[0].name.toLowerCase().includes(categoryValue.toLowerCase()));
    }

    // Tìm kiếm theo từ khóa
    const keyword = searchInput.value.toLowerCase().trim();
    if (keyword) {
        filteredRecipes = filteredRecipes.filter(item =>
            item.name.toLowerCase().includes(keyword)
        );
    }

    // Sắp xếp theo nutrient
    const sortValue = sortSelect.value;
    if (sortValue === "Energy") {
        filteredRecipes.sort((a, b) => isAscending ? a.macronutrients.energy - b.macronutrients.energy : b.macronutrients.energy - a.macronutrients.energy);
    } else if (sortValue === "Fat") {
        filteredRecipes.sort((a, b) => isAscending ? a.macronutrients.fat - b.macronutrients.fat : b.macronutrients.fat - a.macronutrients.fat);
    } else if (sortValue === "Carbohydrate") {
        filteredRecipes.sort((a, b) => isAscending ? a.macronutrients.carbohydrate - b.macronutrients.carbohydrate : b.macronutrients.carbohydrate - a.macronutrients.carbohydrate);
    } else if (sortValue === "Protein") {
        filteredRecipes.sort((a, b) => isAscending ? a.macronutrients.protein - b.macronutrients.protein : b.macronutrients.protein - a.macronutrients.protein);
    }

    // // Phân trang
    // const start = (currentPage - 1) * itemsPerPage;
    // const end = start + itemsPerPage;
    // const paginatedData = filteredData.slice(start, end);

    // // Gọi hàm render để hiển thị dữ liệu
    // renderFunction(paginatedData);

    // // Hiển thị phân trang
    // renderPagination(filteredData.length);

    currentPage = 1;
    renderDashboard();
};

// Hàm hiển thị phân trang
const renderPagination = (totalItems) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let html = `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">«</a>
        </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
        html += `
            <li class="page-item ${currentPage === i ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
            </li>
        `;
    }

    html += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">»</a>
        </li>
    `;

    pagination.innerHTML = html;
};

// Hàm thay đổi trang
function changePage(page) {
    if (page < 1 || page > Math.ceil(currentData.length / itemsPerPage)) return;
    currentPage = page;
    renderDashboard();
}

// Sự kiện tìm kiếm
searchInput.addEventListener("input", () => {
    processData();
});

// Sự kiện sắp xếp
sortSelect.addEventListener("change", () => {
    processData();
});

// Sự kiện thay đổi hướng sắp xếp
document.getElementById("sortDirection").addEventListener("click", () => {
    isAscending = !isAscending;
    const icon = document.getElementById("sortDirection").querySelector("i");
    if (isAscending) {
        icon.classList.remove("fa-arrow-down");
        icon.classList.add("fa-arrow-up");
    } else {
        icon.classList.remove("fa-arrow-up");
        icon.classList.add("fa-arrow-down");
    }
    processData();
});

// Sự kiện lọc theo danh mục
categorySelect.addEventListener("change", () => {
    processData();
});

//Tải trang Chi tiết
const renderDetail = (id) => {
    const recipe = filteredRecipes.find(item => item.id === id);
    // Tính toán thông tin dinh dưỡng từ foods
    const enrichedIngredients = recipe.ingredients.map(ingredient => {
        const food = foods.find(f => f.id === ingredient.id);
        if (food && food.macronutrients && food.micronutrients) {
            return {
                name: ingredient.name,
                quantity: ingredient.quantity,
                unit: ingredient.unit,
                weight: ingredient.weight,
                energy: food.macronutrients.energy || 0,
                fat: food.macronutrients.fat || 0,
                carbs: food.macronutrients.carbohydrate || 0,
                protein: food.macronutrients.protein || 0,
                fiber: food.macronutrients.fiber || 0,
                sodium: food.micronutrients.sodium || 0,
                vitaminA: food.micronutrients.vitaminA || 0,
                vitaminB6: food.micronutrients.vitaminB6 || 0,
                vitaminB12: food.micronutrients.vitaminB12 || 0,
                vitaminC: food.micronutrients.vitaminC || 0,
                vitaminD: food.micronutrients.vitaminD || 0,
                vitaminE: food.micronutrients.vitaminE || 0,
                vitaminK: food.micronutrients.vitaminK || 0,
                sugars: food.micronutrients.sugars || 0,
                calcium: food.micronutrients.calcium || 0,
                iron: food.micronutrients.iron || 0,
                magnesium: food.micronutrients.magnesium || 0,
                phosphorus: food.micronutrients.phosphorus || 0,
                potassium: food.micronutrients.potassium || 0,
                zinc: food.micronutrients.zinc || 0,
                copper: food.micronutrients.copper || 0,
                fluoride: food.micronutrients.fluoride || 0,
                manganese: food.micronutrients.manganese || 0,
                selenium: food.micronutrients.selenium || 0,
                thiamin: food.micronutrients.thiamin || 0,
                riboflavin: food.micronutrients.riboflavin || 0,
                niacin: food.micronutrients.niacin || 0,
                pantothenicAcid: food.micronutrients.pantothenicAcid || 0,
                folate: food.micronutrients.folateTotal || 0,
            };
        }
        return {
            name: ingredient.name,
            quantity: ingredient.quantity,
            unit: ingredient.unit,
            weight: ingredient.weight,
            energy: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
            fiber: 0,
            sodium: 0,
            vitaminA: 0,
            vitaminB6: 0,
            vitaminB12: 0,
            vitaminC: 0,
            vitaminD: 0,
            vitaminE: 0,
            vitaminK: 0,
            sugars: 0,
            calcium: 0,
            iron: 0,
            magnesium: 0,
            phosphorus: 0,
            potassium: 0,
            zinc: 0,
            copper: 0,
            fluoride: 0,
            manganese: 0,
            selenium: 0,
            thiamin: 0,
            riboflavin: 0,
            niacin: 0,
            pantothenicAcid: 0,
            folate: 0,
        };
    });

    // Tính tổng dinh dưỡng
    const totalNutrients = enrichedIngredients.reduce(
        (totals, ingredient) => {
            totals.energy += ingredient.energy;
            totals.fat += ingredient.fat;
            totals.carbs += ingredient.carbs;
            totals.protein += ingredient.protein;
            totals.fiber += ingredient.fiber;
            totals.sodium += ingredient.sodium;
            totals.vitaminA += ingredient.vitaminA;
            totals.vitaminB6 += ingredient.vitaminB6;
            totals.vitaminB12 += ingredient.vitaminB12;
            totals.vitaminC += ingredient.vitaminC;
            totals.vitaminD += ingredient.vitaminD;
            totals.vitaminE += ingredient.vitaminE;
            totals.vitaminK += ingredient.vitaminK;
            totals.sugars += ingredient.sugars;
            totals.calcium += ingredient.calcium;
            totals.iron += ingredient.iron;
            totals.magnesium += ingredient.magnesium;
            totals.phosphorus += ingredient.phosphorus;
            totals.potassium += ingredient.potassium;
            totals.zinc += ingredient.zinc;
            totals.copper += ingredient.copper;
            totals.fluoride += ingredient.fluoride;
            totals.manganese += ingredient.manganese;
            totals.selenium += ingredient.selenium;
            totals.thiamin += ingredient.thiamin;
            totals.riboflavin += ingredient.riboflavin;
            totals.niacin += ingredient.niacin;
            totals.pantothenicAcid += ingredient.pantothenicAcid;
            totals.folate += ingredient.folate;
            return totals;
        },
        {
            energy: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
            fiber: 0,
            sodium: 0,
            vitaminA: 0,
            vitaminB6: 0,
            vitaminB12: 0,
            vitaminC: 0,
            vitaminD: 0,
            vitaminE: 0,
            vitaminK: 0,
            sugars: 0,
            calcium: 0,
            iron: 0,
            magnesium: 0,
            phosphorus: 0,
            potassium: 0,
            zinc: 0,
            copper: 0,
            fluoride: 0,
            manganese: 0,
            selenium: 0,
            thiamin: 0,
            riboflavin: 0,
            niacin: 0,
            pantothenicAcid: 0,
            folate: 0,
        }
    );

    data.innerHTML = `<div class="base">
                            <div class="info1 p-3 position-relative">
                                <div class="d-flex align-items-center justify-content-around">
                                    <p class="community w-auto"><i class="fa-solid fa-people-group"></i> Community Recipes</p>
                                    <button class="customBtnLikes"><span><i class="fa-regular fa-heart"></i></span> 37</button>
                                    <img class="imgRecipe" src="${recipe.coverSrc}" width="150" height="150" alt="test">
                                    <p class="ticket position-absolute bottom-0">
                                        <i class="fa-solid fa-location-pin fa-rotate-270" style="color: #ea9f77;" aria-hidden="true"></i>
                                        <span class="category">${recipe.category[0].name || "Unknown"}</span>
                                    </p>
                                </div>
                            </div>
                            <div class="basicInformation p-3">
                                <p class="title">Basic information</pp>
                                <p class="moreTitle">Check and edit recipe's basic information</pp>
                                <div class="table">
                                    <div class="label p-2">Name</div>
                                    <div class="value p-2">${recipe.name}</div>
                                    <div class="label-addNew"></div>
                                    <div class="label p-2">Description</div>
                                    <div class="value p-2">${recipe.description}</div>
                                    <div class="label-addNew"></div>
                                    <div class="label p-2">Author</div>
                                    <div class="value p-2">${recipe.author}</div>
                                    <div class="label-addNew"></div>
                                    <div class="label p-2">Total time</div>
                                    <div class="value p-2">${recipe.totalTime}</div>
                                    <div class="label-addNew"></div>
                                    <div class="label p-2">Preparation time</div>
                                    <div class="value p-2">${recipe.preparationTime}</div>
                                    <div class="label-addNew"></div>
                                    <div class="label p-2">Final weight</div>
                                    <div class="value p-2">${recipe.finalWeight} grams</div>
                                    <div class="label-addNew"></div>
                                    <div class="label p-2">Portions</div>
                                    <div class="value p-2">${recipe.portions}</div>
                                    <div class="label-addNew"></div>
                                </div>
                            </div>
                            <div class="addFav">
                                <div class="p-2 bg-white rounded">
                                    <i class="fa-solid fa-heart" style="color: #ea3e3e;" aria-hidden="true"></i>
                                    <span>Add to favorites</span>
                                </div>
                            </div>
                            <div class="creation p-2 rounded" onclick="window.location.href='../pages/recipes.html'">
                                <p class="m-0">Creation</p>
                                <p class="m-0 moreTitle text-white">Create the recipe and choose the ingredients</p>
                            </div>
                            <div class="ingredients p-3">
                                <p class="m-0" id="title-ingredient">Ingredients</p>
                                <p class="moreTitle">Search and add ingredients to the recipe</p>
                                ${enrichedIngredients.map(ingredient => `
                                    <div class="item-ingredients">
                                        <p>${ingredient.name}</p>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="globalAnalysis p-2">
                                <p>Global analysis per portion</p>
                                <p class="moreTitle">Energy, macronutrients and fiber distribution</p>
                                <div class="d-flex justify-content-between border-bottom mb-4">
                                    <span>Energy</span>
                                    <span>${totalNutrients.energy.toFixed(1)} <span class="moreTitle">kcal</span></span>
                                </div>
                                <div class="container-circle">
                                    <div class="circle red">${totalNutrients.fat.toFixed(1)}g</div>
                                    <div class="circle orange">${totalNutrients.carbs.toFixed(1)}g</div>
                                    <div class="circle green">${totalNutrients.protein.toFixed(1)}g</div>
                                    <div class="circle gray">${totalNutrients.fiber.toFixed(1)}g</div>
                                    <div class="moreTitle">Fat</div>
                                    <div class="moreTitle">Carbohydrate</div>
                                    <div class="moreTitle">Protein</div>
                                    <div class="moreTitle">Fiber</div>
                                </div>
                            </div>
                            <div class="macronutrients p-2">
                                <p class="m-0">Macronutrients per portion</p>
                                <p class="moreTitle">Macronutrients distribution of the recipe</p>
                                <canvas id="macrosChart" width="200" height="200"></canvas>
                            </div>
                            <div class="micronutrients p-2">
                                <p class="m-0">Micronutrients per portion</p>
                                <p class="moreTitle">Micronutrients distribution of the recipe</p>
                                <table class="w-100 table-striped">
                                    <tbody>
                                        <tr>
                                            <td>Sodium</td>
                                            <td class="text-end"><strong>${totalNutrients.sodium.toFixed(1)}</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Vitamin A</td>
                                            <td class="text-end"><strong>${totalNutrients.vitaminA.toFixed(1)}</strong>ug</td>
                                        </tr>
                                        <tr>
                                            <td>Vitamin B-6</td>
                                            <td class="text-end"><strong>${totalNutrients.vitaminB6.toFixed(1)}</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Vitamin B-12</td>
                                            <td class="text-end"><strong>${totalNutrients.vitaminB12.toFixed(1)}</strong>ug</td>
                                        </tr>
                                        <tr>
                                            <td>Vitamin C</td>
                                            <td class="text-end"><strong>${totalNutrients.vitaminC.toFixed(1)}</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Vitamin D (D2 + D3)</td>
                                            <td class="text-end"><strong>${totalNutrients.vitaminD.toFixed(1)}</strong>ug</td>
                                        </tr>
                                        <tr>
                                            <td>Vitamin E</td>
                                            <td class="text-end"><strong>${totalNutrients.vitaminE.toFixed(1)}</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Vitamin K</td>
                                            <td class="text-end"><strong>${totalNutrients.vitaminK.toFixed(1)}</strong>ug</td>
                                        </tr>
                                        <tr>
                                            <td>Sugars</td>
                                            <td class="text-end"><strong>${totalNutrients.sugars.toFixed(1)}</strong>g</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Calcium</td>
                                            <td class="text-end"><strong>${totalNutrients.calcium.toFixed(1)}</strong>mg</td>
                                        </tr>
                                        <tr>
                                            <td>Iron</td>
                                            <td class="text-end"><strong>${totalNutrients.iron.toFixed(1)}</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Magnesium</td>
                                            <td class="text-end"><strong>${totalNutrients.magnesium.toFixed(1)}</strong>mg</td>
                                        </tr>
                                        <tr>
                                            <td>Phosphorus</td>
                                            <td class="text-end"><strong>${totalNutrients.phosphorus.toFixed(1)}</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Potassium</td>
                                            <td class="text-end"><strong>${totalNutrients.potassium.toFixed(1)}</strong>mg</td>
                                        </tr>
                                        <tr>
                                            <td>Zinc</td>
                                            <td class="text-end"><strong>${totalNutrients.zinc.toFixed(1)}</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Copper</td>
                                            <td class="text-end"><strong>${totalNutrients.copper.toFixed(1)}</strong>mg</td>
                                        </tr>
                                        <tr>
                                            <td>Fluoride</td>
                                            <td class="text-end"><strong>${totalNutrients.fluoride.toFixed(1)}</strong>ug</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Manganese</td>
                                            <td class="text-end"><strong>${totalNutrients.manganese.toFixed(1)}</strong>mg</td>
                                        </tr>
                                        <tr>
                                            <td>Selenium</td>
                                            <td class="text-end"><strong>${totalNutrients.selenium.toFixed(1)}</strong>ug</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Thiamin</td>
                                            <td class="text-end"><strong>${totalNutrients.thiamin.toFixed(1)}</strong>mg</td>
                                        </tr>
                                        <tr>
                                            <td>Riboflavin</td>
                                            <td class="text-end"><strong>${totalNutrients.riboflavin.toFixed(1)}</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Niacin</td>
                                            <td class="text-end"><strong>${totalNutrients.niacin.toFixed(1)}</strong>mg</td>
                                        </tr>
                                        <tr>
                                            <td>Pantothenic acid</td>
                                            <td class="text-end"><strong>${totalNutrients.pantothenicAcid.toFixed(1)}</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Folate, total</td>
                                            <td class="text-end"><strong>${totalNutrients.folate.toFixed(1)}</strong>ug</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div class="cookingMethod p-2">
                                <p class="m-0">Cooking Method</p>
                                <p class="moreTitle">Give instructions to prepare this recipe</p>
                                <div class="d-flex">
                                    <div class="label p-2 d-flex align-items-center">1</div>
                                    <div class="value p-2">${recipe.cookingMethods}
                                    </div>
                                </div>
                            </div>
                        </div>`
    // Biểu đồ
    const ctx = document.getElementById('macrosChart').getContext('2d');
    let total = totalNutrients.fat + totalNutrients.carbs + totalNutrients.protein
    const macrosChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Fat', 'Carbohydrate', 'Protein'],
            datasets: [{
                data: [
                ((totalNutrients.fat / total) *100).toFixed(1),
                ((totalNutrients.carbs / total) *100).toFixed(1),
                ((totalNutrients.protein / total) *100).toFixed(1)],
                backgroundColor: [
                    '#e4516c', // Fat
                    '#f4a261', // Carb
                    '#2a9d8f'  // Protein
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.label + ': ' + context.parsed.toFixed(1) + '%';
                        }
                    }
                }
            }
        }
    });
}
