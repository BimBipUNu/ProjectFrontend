if (sessionStorage.getItem("loginSuccess")) {
    const toastEl = document.getElementById('successToast');
    if (toastEl) {
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    }
    sessionStorage.removeItem("loginSuccess");
}
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
// Biến toàn cục
const foods = JSON.parse(localStorage.getItem("foods")) || [];
const data = document.getElementById("dataHomePage");
const categorySelectHomePage = document.querySelector("#categoryHomePage select");
const searchInputHomePage = document.getElementById("searchHomePage");
const sortSelectHomePage = document.querySelector("#sortHomePage select");
const sortDirectionHomePage = document.getElementById("sortDirectionHomePage");
let isAscending = true; // Mặc định sắp xếp tăng dần
let currentPageHomePage = 1; // Trang hiện tại
const itemsPerPageHomePage = 6; // Số lượng recipe trên mỗi trang

// Lấy danh sách recipe yêu thích
const getFavoriteRecipes = () => {
    const recipes = JSON.parse(localStorage.getItem("recipe")) || [];
    return recipes.filter(recipe => recipe.isFav).map(recipe => {
        let energy = 0, fat = 0, carbs = 0, protein = 0;

        // Tính toán thông tin dinh dưỡng từ các thành phần
        recipe.ingredients.forEach(ingredient => {
            const food = foods.find(f => f.id === ingredient.id);
            if (food && food.macronutrients) {
                energy += (food.macronutrients.energy || 0) * (ingredient.quantity || 1);
                fat += (food.macronutrients.fat || 0) * (ingredient.quantity || 1);
                carbs += (food.macronutrients.carbohydrate || 0) * (ingredient.quantity || 1);
                protein += (food.macronutrients.protein || 0) * (ingredient.quantity || 1);
            }
        });

        // Gắn thông tin dinh dưỡng vào công thức
        return {
            ...recipe,
            energy,
            fat,
            carbs,
            protein,
        };
    });
}
// Hàm render danh sách recipe
const renderFavoriteRecipes = () => {
    const start = (currentPageHomePage - 1) * itemsPerPageHomePage;
    const end = start + itemsPerPageHomePage;
    const currentRecipe = filteredRecipes.slice(start, end);

    let html = "";
    currentRecipe.forEach(item => {
        html += `
        <div class="card" onclick="renderDetail(${item.id})">
            <div>
                <p class="community"><i class="fa-solid fa-people-group"></i> Community Recipes</p>
                <img src="${item.coverSrc}" width="150" height="150" alt="${item.name}">
            </div>
            <div class="description">
                <p>${item.name}</p>
                <div class="author">
                    <span id="authorName">${item.author}</span>
                    <button class="customBtnLikes">
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span class="like-count">${item.likes || 0}</span>
                    </button>
                </div>
                <p><i class="fa-solid fa-location-pin fa-rotate-270" style="color: #ea9f77;"></i>
                    <span class="category">${item.category[0]?.name || "No Category"}</span>
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
};

// Hàm xử lý tìm kiếm, lọc, sắp xếp
const processRecipes = () => {
    filteredRecipes = getFavoriteRecipes();

    // Lọc theo danh mục
    const categoryValue = categorySelectHomePage.value || "All Category";
    if (categoryValue !== "All Category") {
        filteredRecipes = filteredRecipes.filter(recipe =>
            Array.isArray(recipe.category) &&
            recipe.category.some(cat => cat?.name?.toLowerCase() === categoryValue.toLowerCase())
        );
    }

    // Tìm kiếm theo từ khóa
    const keyword = searchInputHomePage.value.trim().toLowerCase() || "";
    if (keyword) {
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.name.toLowerCase().includes(keyword)
        );
    }

    // Sắp xếp
    const sortValue = sortSelectHomePage.value || "name";
    if (sortValue === "Energy") {
        filteredRecipes.sort((a, b) => isAscending ? a.energy - b.energy : b.energy - a.energy);
    } else if (sortValue === "Fat") {
        filteredRecipes.sort((a, b) => isAscending ? a.fat - b.fat : b.fat - a.fat);
    } else if (sortValue === "Carbohydrate") {
        filteredRecipes.sort((a, b) => isAscending ? a.carbs - b.carbs : b.carbs - a.carbs);
    } else if (sortValue === "Protein") {
        filteredRecipes.sort((a, b) => isAscending ? a.protein - b.protein : b.protein - a.protein);
    }

    currentPageHomePage = 1;
    renderFavoriteRecipes();
};

// Hàm render phân trang
const renderPagination = (totalItems) => {
    const totalPages = Math.ceil(totalItems / itemsPerPageHomePage);
    const pagination = document.getElementById("paginationHomePage");
    let html = `
        <li class="page-item ${currentPageHomePage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPageHomePage - 1})">«</a>
        </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
        html += `
            <li class="page-item ${currentPageHomePage === i ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
            </li>
        `;
    }

    html += `
        <li class="page-item ${currentPageHomePage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPageHomePage + 1})">»</a>
        </li>
    `;

    if (pagination) {
        pagination.innerHTML = html;
    }
};

// Hàm thay đổi trang
const changePage = (page) => {
    currentPageHomePage = page;
    renderFavoriteRecipes();
};

// Sự kiện
searchInputHomePage.addEventListener("input", processRecipes);
categorySelectHomePage.addEventListener("change", processRecipes);
sortSelectHomePage.addEventListener("change", processRecipes);
sortDirectionHomePage.addEventListener("click", () => {
    isAscending = !isAscending;
    const icon = sortDirectionHomePage.querySelector("i");
    if (icon) {
        icon.classList.toggle("fa-arrow-up", isAscending);
        icon.classList.toggle("fa-arrow-down", !isAscending);
    }
    processRecipes();
});

// Khởi chạy
let filteredRecipes = getFavoriteRecipes();
renderFavoriteRecipes();
