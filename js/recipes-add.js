let tbodyRecipe = document.getElementById("tbodyRecipe")
let addNewRecipe = document.getElementById("addNewRecipe");
let foods = JSON.parse(localStorage.getItem('foods')) || [];

let recipe = JSON.parse(localStorage.getItem("recipe")) || [];

const searchInput = document.getElementById("searchRecipe");
const sortSelect = document.querySelector("#sort select");
const categorySelect = document.querySelector("#category select");
const categoryAddNew = document.querySelector("#categoryAddNew select");
const createBtn = document.getElementById("createBtn");
let sortDirection = document.getElementById("sortDirection");
let isAscending = true;

let currentPageIngre = 1;
const itemsPerPageIngre = 8;
let filteredFoods = [...foods];

// Biến toàn cục cho các thành phần dinh dưỡng
const sodiumIngre = document.getElementById("sodiumIngre");
const vitaminAIngre = document.getElementById("vitaminAIngre");
const vitaminB6Ingre = document.getElementById("vitaminB6Ingre");
const vitaminB12Ingre = document.getElementById("vitaminB12Ingre");
const vitaminCIngre = document.getElementById("vitaminCIngre");
const vitaminDIngre = document.getElementById("vitaminDIngre");
const vitaminEIngre = document.getElementById("vitaminEIngre");
const vitaminKIngre = document.getElementById("vitaminKIngre");
const sugarsIngre = document.getElementById("sugarsIngre");
const calciumIngre = document.getElementById("calciumIngre");
const ironIngre = document.getElementById("ironIngre");
const magnesiumIngre = document.getElementById("magnesiumIngre");
const phosphorusIngre = document.getElementById("phosphorusIngre");
const potassiumIngre = document.getElementById("potassiumIngre");
const zincIngre = document.getElementById("zincIngre");
const copperIngre = document.getElementById("copperIngre");
const fluorideIngre = document.getElementById("fluorideIngre");
const manganeseIngre = document.getElementById("manganeseIngre");
const seleniumIngre = document.getElementById("seleniumIngre");
const thiaminIngre = document.getElementById("thiaminIngre");
const riboflavinIngre = document.getElementById("riboflavinIngre");
const niacinIngre = document.getElementById("niacinIngre");
const pantothenicAcidIngre = document.getElementById("pantothenicAcidIngre");
const folateIngre = document.getElementById("folateIngre");

//  Hiển thị toast
const showToast = (message, type) => {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-bg-${type} border-0`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;
    toastContainer.appendChild(toast);

    const bootstrapToast = new bootstrap.Toast(toast);
    bootstrapToast.show();

    // Xóa toast sau khi ẩn
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
};

const renderIngre = () => {
    const start = (currentPageIngre - 1) * itemsPerPageIngre;
    const end = start + itemsPerPageIngre;
    const currentFoods = filteredFoods.slice(start, end);

    let html = "";
    currentFoods.forEach(item => {
        html += `
        <tr class="border-bottom">
            <td colspan="3">
                <p>${item.name}</p>
            </td>
            <td>${item.macronutrients.energy ?? 0} kcal</td>
            <td>${item.macronutrients.fat ?? 0} g</td>
            <td>${item.macronutrients.carbohydrate ?? 0} g</td>
            <td>${item.macronutrients.protein ?? 0} g</td>
            <td style="text-align: center; background-color: #00b59b; color: white; font-size: 20px;" onclick="addIngredient('${item.name}')">+</td>
        </tr>`
    })

    tbodyRecipe.innerHTML = html
    renderPaginationIngre(filteredFoods.length);
}

//xử lý chung cho tìm kiếm, lọc, sắp xếp
const processFoods = () => {
    filteredFoods = [...foods];
    const categoryValue = categorySelect.value;// Lọc theo category
    if (categoryValue !== "All Category") {
        filteredFoods = filteredFoods.filter(f => f.category.toLowerCase().includes(categoryValue.toLowerCase()));
    }
    const keyword = searchInput.value.toLowerCase();// Tìm kiếm theo từ khóa
    if (keyword) {
        filteredFoods = filteredFoods.filter(f => f.name.toLowerCase().includes(keyword));
    }
    const sortValue = sortSelect.value;// Sắp xếp theo nutrient
    if (sortValue === "Energy") {
        filteredFoods.sort((a, b) => isAscending ? a.macronutrients.energy - b.macronutrients.energy : b.macronutrients.energy - a.macronutrients.energy);
    } else if (sortValue === "Fat") {
        filteredFoods.sort((a, b) => isAscending ? a.macronutrients.fat - b.macronutrients.fat : b.macronutrients.fat - a.macronutrients.fat);
    } else if (sortValue === "Carbohydrate") {
        filteredFoods.sort((a, b) => isAscending ? a.macronutrients.carbohydrate - b.macronutrients.carbohydrate : b.macronutrients.carbohydrate - a.macronutrients.carbohydrate);
    } else if (sortValue === "Protein") {
        filteredFoods.sort((a, b) => isAscending ? a.macronutrients.protein - b.macronutrients.protein : b.macronutrients.protein - a.macronutrients.protein);
    }

    currentPage = 1;
    renderIngre();
};

// Tìm kiếm theo tên
searchInput.addEventListener("input", (e) => {
    processFoods();
});

//Hướng sắp xếp
sortDirection.addEventListener("click", function (e) {
    isAscending = !isAscending;
    const icon = sortDirection.querySelector("i");
    if (isAscending) {
        icon.classList.remove("fa-arrow-down");
        icon.classList.add("fa-arrow-up");
    } else {
        icon.classList.remove("fa-arrow-up");
        icon.classList.add("fa-arrow-down");
    }

    processFoods();
})
// Sắp xếp theo nutrient
sortSelect.addEventListener("change", (e) => {
    processFoods();
});

// Lọc theo category
categorySelect.addEventListener("change", (e) => {
    processFoods();
});

// Phân trang
const renderPaginationIngre = (totalItems) => {
    const totalPages = Math.ceil(totalItems / itemsPerPageIngre);
    let html = `
        <li class="page-item ${currentPageIngre === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePageIngre(${currentPageIngre - 1}, event)">«</a>
        </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
        html += `
            <li class="page-item ${currentPageIngre === i ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePageIngre(${i}, event)">${i}</a>
            </li>
        `;
    }

    html += `
        <li class="page-item ${currentPageIngre === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePageIngre(${currentPageIngre + 1}, event)">»</a>
        </li>
    `;

    paginationIngre.innerHTML = html;
};
function changePageIngre(page, event) {
    if (event) {
        event.preventDefault();
    }
    currentPageIngre = page;
    renderIngre();
}

renderIngre();

//Chọn Ingre
let selectedIngredients = [];

// Lưu trữ tổng giá trị dinh dưỡng
let totalNutrients = {
    energy: 0,
    fat: 0,
    carbohydrate: 0,
    protein: 0
};

//Lưu trữ tổng giá trị Micro Ingre
let totalMicroNutrients = {
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
function updateMicroNutrients() {
    sodiumIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.sodium.toFixed(1) || 0)}</strong>mg`;
    vitaminAIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.vitaminA.toFixed(1) || 0)}</strong>ug`;
    vitaminB6Ingre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.vitaminB6.toFixed(1) || 0)}</strong>mg`;
    vitaminB12Ingre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.vitaminB12.toFixed(1) || 0)}</strong>ug`;
    vitaminCIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.vitaminC.toFixed(1) || 0)}</strong>mg`;
    vitaminDIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.vitaminD.toFixed(1) || 0)}</strong>ug`;
    vitaminEIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.vitaminE.toFixed(1) || 0)}</strong>mg`;
    vitaminKIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.vitaminK.toFixed(1) || 0)}</strong>ug`;
    sugarsIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.sugars.toFixed(1) || 0)}</strong>g`;
    calciumIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.calcium.toFixed(1) || 0)}</strong>mg`;
    ironIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.iron.toFixed(1) || 0)}</strong>mg`;
    magnesiumIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.magnesium.toFixed(1) || 0)}</strong>mg`;
    phosphorusIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.phosphorus.toFixed(1) || 0)}</strong>mg`;
    potassiumIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.potassium.toFixed(1) || 0)}</strong>mg`;
    zincIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.zinc.toFixed(1) || 0)}</strong>mg`;
    copperIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.copper.toFixed(1) || 0)}</strong>mg`;
    fluorideIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.fluoride.toFixed(1) || 0)}</strong>ug`;
    manganeseIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.manganese.toFixed(1) || 0)}</strong>mg`;
    seleniumIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.selenium.toFixed(1) || 0)}</strong>ug`;
    thiaminIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.thiamin.toFixed(1) || 0)}</strong>mg`;
    riboflavinIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.riboflavin.toFixed(1) || 0)}</strong>mg`;
    niacinIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.niacin.toFixed(1) || 0)}</strong>mg`;
    pantothenicAcidIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.pantothenicAcid.toFixed(1) || 0)}</strong>mg`;
    folateIngre.innerHTML = `<strong>${parseFloat(totalMicroNutrients.folate.toFixed(1) || 0)}</strong>ug`;
}
//Thêm ingre
function addIngredient(foodName) {
    // Tìm nguyên liệu trong danh sách foods
    const ingredient = foods.find(f => f.name === foodName);

    // Thêm nguyên liệu vào danh sách
    let pushIngre = {
        id: ingredient.id,
        name: foodName,
    }
    selectedIngredients.push(pushIngre);

    // Cập nhật tổng giá trị dinh dưỡng
    totalNutrients.energy += ingredient.macronutrients.energy ?? 0;
    totalNutrients.fat += ingredient.macronutrients.fat ?? 0;
    totalNutrients.carbohydrate += ingredient.macronutrients.carbohydrate ?? 0;
    totalNutrients.protein += ingredient.macronutrients.protein ?? 0;
    //Cập nhật giá trị Micro
    totalMicroNutrients.sodium += ingredient.micronutrients.sodium ?? 0;
    totalMicroNutrients.vitaminA += ingredient.micronutrients.vitaminA ?? 0;
    totalMicroNutrients.vitaminB6 += ingredient.micronutrients.vitaminB6 ?? 0;
    totalMicroNutrients.vitaminB12 += ingredient.micronutrients.vitaminB12 ?? 0;
    totalMicroNutrients.vitaminC += ingredient.micronutrients.vitaminC ?? 0;
    totalMicroNutrients.vitaminD += ingredient.micronutrients.vitaminD ?? 0;
    totalMicroNutrients.vitaminE += ingredient.micronutrients.vitaminE ?? 0;
    totalMicroNutrients.vitaminK += ingredient.micronutrients.vitaminK ?? 0;
    totalMicroNutrients.sugars += ingredient.micronutrients.sugars ?? 0;
    totalMicroNutrients.calcium += ingredient.micronutrients.calcium ?? 0;
    totalMicroNutrients.iron += ingredient.micronutrients.iron ?? 0;
    totalMicroNutrients.magnesium += ingredient.micronutrients.magnesium ?? 0;
    totalMicroNutrients.phosphorus += ingredient.micronutrients.phosphorus ?? 0;
    totalMicroNutrients.potassium += ingredient.micronutrients.potassium ?? 0;
    totalMicroNutrients.zinc += ingredient.micronutrients.zinc ?? 0;
    totalMicroNutrients.copper += ingredient.micronutrients.copper ?? 0;
    totalMicroNutrients.fluoride += ingredient.micronutrients.fluoride ?? 0;
    totalMicroNutrients.manganese += ingredient.micronutrients.manganese ?? 0;
    totalMicroNutrients.selenium += ingredient.micronutrients.selenium ?? 0;
    totalMicroNutrients.thiamin += ingredient.micronutrients.thiamin ?? 0;
    totalMicroNutrients.riboflavin += ingredient.micronutrients.riboflavin ?? 0;
    totalMicroNutrients.niacin += ingredient.micronutrients.niacin ?? 0;
    totalMicroNutrients.pantothenicAcid += ingredient.micronutrients.pantothenicAcid ?? 0;
    totalMicroNutrients.folate += ingredient.micronutrients.folate ?? 0;

    // Render lại danh sách nguyên liệu và biểu đồ
    renderSelectedIngredients();
    updateChart();
    updateMicroNutrients();
}

function renderSelectedIngredients() {
    const cardIngredientArea = document.getElementById("card-ingredient-area");
    let html = "";
    selectedIngredients.forEach((ingredient, index) => {
        html += `
        <div class="card-ingredient mb-4">
            <p class="border m-0 p-2">${ingredient.name}</p>
            <i class="fa-solid fa-trash border d-flex justify-content-center align-items-center" onclick="removeIngredient(${index})"></i>
        </div>`;
    });
    cardIngredientArea.innerHTML = html;

}

// Hàm xóa nguyên liệu khỏi danh sách
function removeIngredient(index) {
    const foodName = selectedIngredients[index].name;
    const ingredient = foods.find(f => f.name === foodName);

    if (ingredient) {
        // Trừ giá trị dinh dưỡng của nguyên liệu bị xóa
        totalNutrients.energy = Math.max(0, totalNutrients.energy - (ingredient.macronutrients.energy ?? 0));
        totalNutrients.fat = Math.max(0, totalNutrients.fat - (ingredient.macronutrients.fat ?? 0));
        totalNutrients.carbohydrate = Math.max(0, totalNutrients.carbohydrate - (ingredient.macronutrients.carbohydrate ?? 0));
        totalNutrients.protein = Math.max(0, totalNutrients.protein - (ingredient.macronutrients.protein ?? 0));

        totalMicroNutrients.sodium = Math.max(0, totalMicroNutrients.sodium - (ingredient.micronutrients.sodium ?? 0));
        totalMicroNutrients.vitaminA = Math.max(0, totalMicroNutrients.vitaminA - (ingredient.micronutrients.vitaminA ?? 0));
        totalMicroNutrients.vitaminB6 = Math.max(0, totalMicroNutrients.vitaminB6 - (ingredient.micronutrients.vitaminB6 ?? 0));
        totalMicroNutrients.vitaminB12 = Math.max(0, totalMicroNutrients.vitaminB12 - (ingredient.micronutrients.vitaminB12 ?? 0));
        totalMicroNutrients.vitaminC = Math.max(0, totalMicroNutrients.vitaminC - (ingredient.micronutrients.vitaminC ?? 0));
        totalMicroNutrients.vitaminD = Math.max(0, totalMicroNutrients.vitaminD - (ingredient.micronutrients.vitaminD ?? 0));
        totalMicroNutrients.vitaminE = Math.max(0, totalMicroNutrients.vitaminE - (ingredient.micronutrients.vitaminE ?? 0));
        totalMicroNutrients.vitaminK = Math.max(0, totalMicroNutrients.vitaminK - (ingredient.micronutrients.vitaminK ?? 0));
        totalMicroNutrients.sugars = Math.max(0, totalMicroNutrients.sugars - (ingredient.micronutrients.sugars ?? 0));
        totalMicroNutrients.calcium = Math.max(0, totalMicroNutrients.calcium - (ingredient.micronutrients.calcium ?? 0));
        totalMicroNutrients.iron = Math.max(0, totalMicroNutrients.iron - (ingredient.micronutrients.iron ?? 0));
        totalMicroNutrients.magnesium = Math.max(0, totalMicroNutrients.magnesium - (ingredient.micronutrients.magnesium ?? 0));
        totalMicroNutrients.phosphorus = Math.max(0, totalMicroNutrients.phosphorus - (ingredient.micronutrients.phosphorus ?? 0));
        totalMicroNutrients.potassium = Math.max(0, totalMicroNutrients.potassium - (ingredient.micronutrients.potassium ?? 0));
        totalMicroNutrients.zinc = Math.max(0, totalMicroNutrients.zinc - (ingredient.micronutrients.zinc ?? 0));
        totalMicroNutrients.copper = Math.max(0, totalMicroNutrients.copper - (ingredient.micronutrients.copper ?? 0));
        totalMicroNutrients.fluoride = Math.max(0, totalMicroNutrients.fluoride - (ingredient.micronutrients.fluoride ?? 0));
        totalMicroNutrients.manganese = Math.max(0, totalMicroNutrients.manganese - (ingredient.micronutrients.manganese ?? 0));
        totalMicroNutrients.selenium = Math.max(0, totalMicroNutrients.selenium - (ingredient.micronutrients.selenium ?? 0));
        totalMicroNutrients.thiamin = Math.max(0, totalMicroNutrients.thiamin - (ingredient.micronutrients.thiamin ?? 0));
        totalMicroNutrients.riboflavin = Math.max(0, totalMicroNutrients.riboflavin - (ingredient.micronutrients.riboflavin ?? 0));
        totalMicroNutrients.niacin = Math.max(0, totalMicroNutrients.niacin - (ingredient.micronutrients.niacin ?? 0));
        totalMicroNutrients.pantothenicAcid = Math.max(0, totalMicroNutrients.pantothenicAcid - (ingredient.micronutrients.pantothenicAcid ?? 0));
        totalMicroNutrients.folate = Math.max(0, totalMicroNutrients.folate - (ingredient.micronutrients.folate ?? 0));
    }

    // Xóa nguyên liệu khỏi danh sách
    selectedIngredients = selectedIngredients.filter((ingredient, i) => i !== index);

    // Render lại danh sách và biểu đồ
    renderSelectedIngredients();
    updateMicroNutrients();
    updateChart();
}

function updateChart() {
    //Render lại circle
    document.getElementById("energyIngre").innerText = totalNutrients.energy.toFixed(1)
    document.getElementById("fatCircle").innerText = totalNutrients.fat.toFixed(1)
    document.getElementById("carbohydrateCircle").innerText = totalNutrients.carbohydrate.toFixed(1)
    document.getElementById("proteinCircle").innerText = totalNutrients.protein.toFixed(1)
    // Tính tổng dinh dưỡng
    const total = totalNutrients.fat + totalNutrients.carbohydrate + totalNutrients.protein;

    // Nếu tổng bằng 0, đặt dữ liệu biểu đồ về 0 0 0
    if (selectedIngredients.length === 0) {
        macrosChart.data.datasets[0].data = [0, 0, 0];
    } else {
        // Cập nhật dữ liệu biểu đồ
        macrosChart.data.datasets[0].data = [
            (totalNutrients.fat / total) * 100 || 0,
            (totalNutrients.carbohydrate / total) * 100 || 0,
            (totalNutrients.protein / total) * 100 || 0
        ];
    }

    // Render lại biểu đồ
    macrosChart.update();
}

// Biểu đồ
const ctx = document.getElementById('macrosChart').getContext('2d');
const macrosChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Fat', 'Carbohydrate', 'Protein'],
        datasets: [{
            data: [0, 0, 0],
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

document.getElementById("imageUrl").addEventListener("input", function () {
    const url = this.value.trim();
    const imagePreview = document.getElementById("imagePreview");

    if (url) {
        imagePreview.innerHTML = `<img src="${url}" alt="Preview Image" class="img-fluid rounded" style="max-width: 100%; height: auto;">`;
    } else {
        imagePreview.innerHTML = `<p class="text-muted">Image will be displayed here.</p>`;
    }
});

// Validate dữ liệu bắt buộc
const validateRecipeData = (name, description, imageURL, author, totalTime, preparationTime, finalWeight, portionsAddNew, cookingMethodContent, selectedIngredientsList) => {
    if (!name) {
        showToast('Tên không được để trống', 'danger');
        return false;
    }
    if (!description) {
        showToast('Mô tả không được để trống', 'danger');
        return false;
    }
    if (!imageURL) {
        showToast('URL không được để trống', 'danger');
        return false;
    }
    if (!author) {
        showToast('Tác giả không được để trống', 'danger');
        return false;
    }
    if (!totalTime) {
        showToast('Tổng thời gian không được để trống', 'danger');
        return false;
    }
    if (!preparationTime) {
        showToast('Thời gian chuẩn bị không được để trống', 'danger');
        return false;
    }
    if (!finalWeight) {
        showToast('finalWeight không được để trống', 'danger');
        return false;
    }
    if (!portionsAddNew) {
        showToast('portionsAddNew không được để trống', 'danger');
        return false;
    }
    if (!cookingMethodContent) {
        showToast('Cooking Method không được để trống', 'danger');
        return false;
    }
    if (!selectedIngredientsList) {
        showToast('Danh sách thức ăn chưa được được thêm', 'danger');
        return false;
    }

    return true;
};
// Lấy thông tin thêm mới
addNewRecipe.addEventListener("click", function (e) {
    const name = document.getElementById("nameAddNew").value.trim();
    const description = document.getElementById("descriptionAddNew").value.trim();
    const imageURL = document.getElementById("imageUrl").value.trim();
    const author = document.getElementById("authorAddNew").value.trim();
    const totalTime = document.getElementById("totalTimeAddNew").value.trim();
    const preparationTime = document.getElementById("preparationTimeAddNew").value.trim();
    const finalWeight = document.getElementById("finalWeightAddNew").value.trim();
    const portionsAddNew = document.getElementById("portionsAddNew").value.trim();
    const cookingMethodContent = document.getElementById("cookingMethod").value.trim() == "" ? null : document.getElementById("cookingMethod").value.trim();
    let categoryAddNewRecipe = {
        name: document.getElementById("categoryAddNewSelect").value,
    };
    const selectedIngredientsList = selectedIngredients.length == 0 ? null : selectedIngredients

    if (!validateRecipeData(name, description, imageURL, author, totalTime, preparationTime, finalWeight, portionsAddNew, cookingMethodContent, selectedIngredientsList)) {
        return;
    }

    let newRecipe = {
        id: recipe.length + 1,
        isFav: false,
        coverSrc: imageURL,
        name: name,
        description: description,
        author: author,
        totalTime: totalTime,
        preparationTime: preparationTime,
        finalWeight: finalWeight,
        portions: portionsAddNew,
        ingredients: selectedIngredients,
        cookingMethods: cookingMethodContent,
        category: [categoryAddNewRecipe],
    };

    recipe = [...recipe, newRecipe];
    localStorage.setItem("recipe", JSON.stringify(recipe));
    showToast('Đã thêm mới công thức thành công', 'success');

    // Reset form fields
    document.getElementById("nameAddNew").value = "";
    document.getElementById("descriptionAddNew").value = "";
    document.getElementById("imageUrl").value = "";
    document.getElementById("authorAddNew").value = "";
    document.getElementById("totalTimeAddNew").value = "";
    document.getElementById("preparationTimeAddNew").value = "";
    document.getElementById("finalWeightAddNew").value = "";
    document.getElementById("portionsAddNew").value = "";
    // Reset selected ingredients
    selectedIngredients = [];
    // Reset cooking methods
    cookingMethods = "";

    location.href = "../pages/recipes.html"
})
