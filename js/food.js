let foods = JSON.parse(localStorage.getItem('foods')) || [];
let data = document.getElementById("data");
let infoFood = document.getElementById("infoFood");
const searchInput = document.getElementById("search");
const sortSelect = document.querySelector("#sort select");
const categorySelect = document.querySelector("#category select");
const pagination = document.querySelector(".pagination");
const createBtn = document.getElementById("createBtn");
let sortDirection = document.getElementById("sortDirection");
let isAscending = true;
let newFood;


let currentPage = 1;
const itemsPerPage = 8;
let filteredFoods = [...foods]; // dữ liệu hiện tại dùng để render sau khi filter/sort


// Hiển thị toast
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
// Render toàn bộ danh sách food
const renderFoodDashboard = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentFoods = filteredFoods.slice(start, end);

    let html = "";
    currentFoods.forEach(item => {
        html += `
            <div class="cart" data-bs-toggle="modal" data-bs-target="#information" onclick="renderInfomationDetail(${item.id})">
                <div class="description">
                    <p>${item.name}</p>
                    <span>${item.source}</span>
                </div>
                <div class="box">
                    <div>${item.macronutrients.energy ?? 0}</div>
                    <div>${item.macronutrients.fat ?? 0}</div>
                    <div>${item.macronutrients.carbohydrate ?? 0}</div>
                    <div>${item.macronutrients.protein ?? 0}</div>
                    <div class="font-size-12 color-lightgray">Energy</div>
                    <div class="font-size-12 color-lightgray">Fat</div>
                    <div class="font-size-12 color-lightgray">Carbohydrate</div>
                    <div class="font-size-12 color-lightgray">Protein</div>
                </div>
            </div>
        `;
    });
    data.innerHTML = html;
    renderPagination(filteredFoods.length);
};

// Hiển thị thông tin chi tiết trong modal
const renderInfomationDetail = (id) => {
    foods = JSON.parse(localStorage.getItem('foods')) || [];

    const item = foods.find(food => food.id === id);
    let html = `
    <input type="hidden" id="idInfo" value="${item.id}">
                    <h3 class="text-center color-gray">Food information</h3>
                    <p class="subtitle text-center">Check and update the information about the food</p>

                    <div class="food-info-grid color-gray">
                        <div class="info-block">
                            <div class="label flex-1">Name</div>
                            <input type="text" id="nameInfo" class="value form-control" value="${item.name}">
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Source</div>
                            <input type="text" id="sourceInfo" class="value form-control" value="${item.source}">
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Category</div>
                                <select id="categoryInfo" class="form-select">
                                    <option ${item.category === 'All Category' ? 'selected' : ''}>All Category</option>
                                    <option ${item.category === 'Desserts' ? 'selected' : ''}>Desserts</option>
                                    <option ${item.category === 'Breakfast and snack' ? 'selected' : ''}>Breakfast and snack</option>
                                    <option ${item.category === 'Appetizers and side dishes' ? 'selected' : ''}>Appetizers and side dishes</option>
                                    <option ${item.category === 'Soups' ? 'selected' : ''}>Soups</option>
                                    <option ${item.category === 'Meat dishes' ? 'selected' : ''}>Meat dishes</option>
                                    <option ${item.category === 'Fish dishes' ? 'selected' : ''}>Fish dishes</option>
                                    <option ${item.category === 'Vegetarian dishes' ? 'selected' : ''}>Vegetarian dishes</option>
                                </select>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Quantity</div>
                            <input type="text" id="quantityInfo" class="value form-control" value="${item.quantity}">
                        </div>
                    </div>

                    <div class="nutrition-box text-center">
                        Nutritional value per 100 g
                    </div>
                    <br>
                    <h4 class="text-center color-gray">Macronutrients</h4>
                    <div class="macrronutrients-grid color-gray">
                        <div class="info-block">
                            <div class="label flex-1">Energy</div>
                            <input type="number" class="value form-control" id="energyInfo" value="${item.macronutrients.energy ?? 0}">
                            <div class="label">kcal</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Fat</div>
                            <input type="number" class="value form-control" id="fatInfo" value="${item.macronutrients.fat ?? 0}">
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Carbohydrate</div>
                            <input type="number" class="value form-control" id="carbohydrateInfo" value="${item.macronutrients.carbohydrate ?? 0}">
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Protein</div>
                            <input type="number" class="value form-control" id="proteinInfo" value="${item.macronutrients.protein ?? 0}">
                            <div class="label">g</div>
                        </div>
                    </div>
                    <br>
                    <h4 class="text-center color-gray">Micronutrients</h4>
                    <div class="micronutrients-grid color-gray">
                        <div class="info-block">
                            <div class="label flex-1">Cholesterol</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.cholesterol ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Fiber</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.fiber ?? ''}">
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Sodium</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.sodium ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Water</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.water ?? ''}">
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Vitamin A</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.vitaminA ?? ''}">
                            <div class="label">µg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Vitamin B-6</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.vitaminB6 ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Vitamin B-12</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.vitaminB12 ?? ''}">
                            <div class="label">µg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Vitamin C</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.vitaminC ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Vitamin D (D2 + D3)</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.vitaminD ?? ''}">
                            <div class="label">µg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Vitamin E</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.vitaminE ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Vitamin K</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.vitaminK ?? ''}">
                            <div class="label">µg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Starch</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.starch ?? ''}">
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Lactose</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.lactose ?? ''}">
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Alcohol</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.alcohol ?? ''}">
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Caffeine</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.caffeine ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Sugars</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.sugars ?? ''}">
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Calcium</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.calcium ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Iron</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.iron ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Magnesium</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.magnesium ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Phosphorus</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.phosphorus ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Potassium</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.potassium ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Zinc</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.zinc ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Copper</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.copper ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Fluoride</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.fluoride ?? ''}">
                            <div class="label">µg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Manganese</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.manganese ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Selenium</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.selenium ?? ''}">
                            <div class="label">µg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Thiamin</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.thiamin ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Riboflavin</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.riboflavin ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Niacin</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.niacin ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Pantothenic acid</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.pantothenicAcid ?? ''}">
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Folate, total</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.folateTotal ?? ''}">
                            <div class="label">µg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Folic acid</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.folicAcid ?? ''}">
                            <div class="label">µg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Fatty acids, total trans</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.fattyAcidsTrans ?? ''}">
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Fatty acids, total saturated</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.fattyAcidsSaturated ?? ''}">
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Fatty acids, total monounsaturated</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.fattyAcidsMonounsaturated ?? ''}">
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Fatty acids, total polyunsaturated</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.fattyAcidsPolyunsaturated ?? ''}">
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Chloride</div>
                            <input type="number" class="value form-control" value="${item.micronutrients.chloride ?? ''}">
                            <div class="label">mg</div>
                        </div>
                    </div>
                    `
    infoFood.innerHTML = html
};

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
    renderFoodDashboard();
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

function changePage(page) {
    currentPage = page;
    renderFoodDashboard();
}

// Giới hạn miền giá trị được nhập khi thêm mới
document.querySelectorAll('input[type="number"]').forEach(function (input) {
    input.addEventListener('input', function (e) {
        if (e.target.value < 0) {
            e.target.value = 0; // Đặt lại giá trị về 0 nếu nhỏ hơn 0
        }
    });
});

// Validate dữ liệu bắt buộc
const validateFoodData = (name, source, category, quantity) => {
    if (!name) {
        showToast('Tên không được để trống', 'danger');
        return false;
    }
    if (!source) {
        showToast('Nguồn không được để trống', 'danger');
        return false;
    }
    if (!category) {
        showToast('Danh mục không được để trống', 'danger');
        return false;
    }
    if (!quantity || isNaN(quantity) || quantity <= 0) {
        showToast('Số lượng phải là số dương', 'danger');
        return false;
    }
    return true;
};
// lấy thông tin thêm mới
createBtn.addEventListener("click", function (e) {
    let name = nameCreate.value.trim()
    let source = sourceCreate.value.trim()
    let category = categoryCreate.value.trim()
    let quantity = quantityCreate.value.trim()

    if (!validateFoodData(name, source, category, quantity)) {
        return;
    }

    // Kiểm tra xem thực phẩm đã tồn tại với cùng tên, source, category và quantity hay chưa
    const isDuplicate = foods.some(food =>
        food.name.toLowerCase() === name.toLowerCase() &&
        food.source.toLowerCase() === source.toLowerCase() &&
        food.category.toLowerCase() === category.toLowerCase() &&
        food.quantity === quantity
    );
    if (isDuplicate) {
        showToast('Thực phẩm đã tồn tại với các thông tin này!', 'danger');
        return;
    }


    newFood = {
        id: foods.length + 1,
        name: nameCreate.value.trim(),
        source: sourceCreate.value.trim(),
        category: categoryCreate.value.trim(),
        quantity: quantityCreate.value.trim(),
        macronutrients: {
            energy: parseFloat(energyCreate.value) || 0,
            fat: parseFloat(fatCreate.value) || 0,
            carbohydrate: parseFloat(carbohydrateCreate.value) || 0,
            protein: parseFloat(proteinCreate.value) || 0
        },
        micronutrients: {
            cholesterol: parseFloat(cholesterolCreate.value) || null,
            fiber: parseFloat(fiberCreate.value) || null,
            sodium: parseFloat(sodiumCreate.value) || null,
            water: parseFloat(waterCreate.value) || null,
            vitaminA: parseFloat(vitaminACreate.value) || null,
            vitaminB6: parseFloat(vitaminB6Create.value) || null,
            vitaminB12: parseFloat(vitaminB12Create.value) || null,
            vitaminC: parseFloat(vitaminCCreate.value) || null,
            vitaminD: parseFloat(vitaminDCreate.value) || null,
            vitaminE: parseFloat(vitaminECreate.value) || null,
            vitaminK: parseFloat(vitaminKCreate.value) || null,
            starch: parseFloat(starchCreate.value) || null,
            lactose: parseFloat(lactoseCreate.value) || null,
            alcohol: parseFloat(alcoholCreate.value) || null,
            caffeine: parseFloat(caffeineCreate.value) || null,
            sugars: parseFloat(sugarsCreate.value) || null,
            calcium: parseFloat(calciumCreate.value) || null,
            iron: parseFloat(ironCreate.value) || null,
            magnesium: parseFloat(magnesiumCreate.value) || null,
            phosphorus: parseFloat(phosphorusCreate.value) || null,
            potassium: parseFloat(potassiumCreate.value) || null,
            zinc: parseFloat(zincCreate.value) || null,
            copper: parseFloat(copperCreate.value) || null,
            fluoride: parseFloat(fluorideCreate.value) || null,
            manganese: parseFloat(manganeseCreate.value) || null,
            selenium: parseFloat(seleniumCreate.value) || null,
            thiamin: parseFloat(thiaminCreate.value) || null,
            riboflavin: parseFloat(riboflavinCreate.value) || null,
            niacin: parseFloat(niacinCreate.value) || null,
            pantothenicAcid: parseFloat(pantothenicAcidCreate.value) || null,
            folateTotal: parseFloat(folateTotalCreate.value) || null,
            folicAcid: parseFloat(folicAcidCreate.value) || null,
            fattyAcidsTrans: parseFloat(fattyAcidsTransCreate.value) || null,
            fattyAcidsSaturated: parseFloat(fattyAcidsSaturatedCreate.value) || null,
            fattyAcidsMonounsaturated: parseFloat(fattyAcidsMonounsaturatedCreate.value) || null,
            fattyAcidsPolyunsaturated: parseFloat(fattyAcidsPolyunsaturatedCreate.value) || null,
            chloride: parseFloat(chlorideCreate.value) || null
        }
    }
    foods = [...foods, newFood]
    localStorage.setItem("foods", JSON.stringify(foods))

    showToast('Thêm thành công', 'success');
    location.reload()
})
// thay đổi
// Bắt sự kiện khi input trong modal thay đổi để hiện nút Update
document.getElementById('infoFood').addEventListener('input', function () {
    document.getElementById('updateBtn').classList.remove('d-none');
    document.querySelectorAll('#infoFood input[type="number"]').forEach(function (input) {
        input.addEventListener('input', function (e) {
            if (e.target.value < 0) {
                e.target.value = 0; // Đặt lại giá trị về 0 nếu nhỏ hơn 0
            }
        });
    });
});
document.getElementById('updateBtn').addEventListener('click', function () {
    const id = parseInt(document.getElementById('idInfo').value); // hidden field chứa ID
    const foods = JSON.parse(localStorage.getItem('foods')) || [];
    const index = foods.findIndex(food => food.id === id);

    if (index === -1) {
        showToast('Không tìm thấy thực phẩm để cập nhật!', 'danger');
        return;
    }

    // Hàm lấy giá trị input an toàn
    const getInputValue = (id) => {
        const element = document.getElementById(id);
        return element ? parseFloat(element.value) || null : null;
    };

    // Cập nhật dữ liệu từ các input
    foods[index].name = document.getElementById('nameInfo').value.trim();
    foods[index].source = document.getElementById('sourceInfo').value.trim();
    foods[index].category = document.getElementById('categoryInfo').value.trim();
    foods[index].quantity = parseInt(document.getElementById('quantityInfo').value) || 0;

    foods[index].macronutrients = {
        energy: getInputValue('energyInfo'),
        fat: getInputValue('fatInfo'),
        carbohydrate: getInputValue('carbohydrateInfo'),
        protein: getInputValue('proteinInfo')
    };

    foods[index].micronutrients = {
        cholesterol: getInputValue('cholesterolInfo'),
        fiber: getInputValue('fiberInfo'),
        sodium: getInputValue('sodiumInfo'),
        water: getInputValue('waterInfo'),
        vitaminA: getInputValue('vitaminAInfo'),
        vitaminB6: getInputValue('vitaminB6Info'),
        vitaminB12: getInputValue('vitaminB12Info'),
        vitaminC: getInputValue('vitaminCInfo'),
        vitaminD: getInputValue('vitaminDInfo'),
        vitaminE: getInputValue('vitaminEInfo'),
        vitaminK: getInputValue('vitaminKInfo'),
        starch: getInputValue('starchInfo'),
        lactose: getInputValue('lactoseInfo'),
        alcohol: getInputValue('alcoholInfo'),
        caffeine: getInputValue('caffeineInfo'),
        sugars: getInputValue('sugarsInfo'),
        calcium: getInputValue('calciumInfo'),
        iron: getInputValue('ironInfo'),
        magnesium: getInputValue('magnesiumInfo'),
        phosphorus: getInputValue('phosphorusInfo'),
        potassium: getInputValue('potassiumInfo'),
        zinc: getInputValue('zincInfo'),
        copper: getInputValue('copperInfo'),
        fluoride: getInputValue('fluorideInfo'),
        manganese: getInputValue('manganeseInfo'),
        selenium: getInputValue('seleniumInfo'),
        thiamin: getInputValue('thiaminInfo'),
        riboflavin: getInputValue('riboflavinInfo'),
        niacin: getInputValue('niacinInfo'),
        pantothenicAcid: getInputValue('pantothenicAcidInfo'),
        folateTotal: getInputValue('folateTotalInfo'),
        folicAcid: getInputValue('folicAcidInfo'),
        fattyAcidsTrans: getInputValue('fattyAcidsTransInfo'),
        fattyAcidsSaturated: getInputValue('fattyAcidsSaturatedInfo'),
        fattyAcidsMonounsaturated: getInputValue('fattyAcidsMonounsaturatedInfo'),
        fattyAcidsPolyunsaturated: getInputValue('fattyAcidsPolyunsaturatedInfo'),
        chloride: getInputValue('chlorideInfo')
    };

    // Lưu vào localStorage
    localStorage.setItem('foods', JSON.stringify(foods));

    //Cập nhật lại dữ liệu cần render(filteredFoods)
    filteredFoods = [...foods];
    renderFoodDashboard();

    // Đóng modal
    const myModalEl = document.getElementById('information');
    const modal = bootstrap.Modal.getInstance(myModalEl);
    if (modal) {
        modal.hide();
    }

    // Hiển thị thông báo thành công
    showToast('Cập nhật thành công!', 'success');
});
renderFoodDashboard();
