// let recipeCategory = JSON.parse(localStorage.getItem("recipeCategory")) || [];
// const data = document.getElementById("data");

// //Dữ liệu tải trang
// const renderDashboard = () => {
//     data.innerHTML = `
//             <div class="card" onclick="renderDetail()">
//                     <div>
//                         <p class="community"><i class="fa-solid fa-people-group"></i> Community Recipes</p>
//                     </div>
//                     <div class="description">
//                         <p>Turmeric Roasted Cauliflower Salad (lowfodmap)</p>
//                         <div class="author">
//                             <span id="authorName">Joana Jardim</span>
//                             <button id="likes" type="button"><i class="fa-regular fa-heart"></i> 37</button>
//                         </div>
//                         <p><i class="fa-solid fa-location-pin fa-rotate-270" style="color: #ea9f77;"></i>
//                             <span class="category">Vegetarian dishes</span></p>
//                         <div class="box">
//                             <div class="itemGrid">by</div>
//                             <div class="itemGrid">Energy</div>
//                             <div class="itemGrid">Fat</div>
//                             <div class="itemGrid">Carbonhydrate</div>
//                             <div class="itemGrid">Protein</div>

//                             <div class="itemGrid">100g</div>
//                             <div class="itemGrid">143 kcal</div>
//                             <div class="itemGrid">6 g</div>
//                             <div class="itemGrid">18 g</div>
//                             <div class="itemGrid">5 g</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card" onclick="renderDetail()">
//                     <div>
//                         <p class="community"><i class="fa-solid fa-people-group"></i> Community Recipes</p>
//                     </div>
//                     <div class="description">
//                         <p>Turmeric Roasted Cauliflower Salad (lowfodmap)</p>
//                         <div class="author">
//                             <span id="authorName">Joana Jardim</span>
//                             <button id="likes" type="button"><i class="fa-regular fa-heart"></i> 37</button>
//                         </div>
//                         <p><i class="fa-solid fa-location-pin fa-rotate-270" style="color: #ea9f77;"></i>
//                             <span class="category">Vegetarian dishes</span></p>
//                         <div class="box">
//                             <div class="itemGrid">by</div>
//                             <div class="itemGrid">Energy</div>
//                             <div class="itemGrid">Fat</div>
//                             <div class="itemGrid">Carbonhydrate</div>
//                             <div class="itemGrid">Protein</div>

//                             <div class="itemGrid">100g</div>
//                             <div class="itemGrid">143 kcal</div>
//                             <div class="itemGrid">6 g</div>
//                             <div class="itemGrid">18 g</div>
//                             <div class="itemGrid">5 g</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card" onclick="renderDetail()">
//                     <div>
//                         <p class="community"><i class="fa-solid fa-people-group"></i> Community Recipes</p>
//                     </div>
//                     <div class="description">
//                         <p>Turmeric Roasted Cauliflower Salad (lowfodmap)</p>
//                         <div class="author">
//                             <span id="authorName">Joana Jardim</span>
//                             <button id="likes" type="button"><i class="fa-regular fa-heart"></i> 37</button>
//                         </div>
//                         <p><i class="fa-solid fa-location-pin fa-rotate-270" style="color: #ea9f77;"></i>
//                             <span class="category">Vegetarian dishes</span></p>
//                         <div class="box">
//                             <div class="itemGrid">by</div>
//                             <div class="itemGrid">Energy</div>
//                             <div class="itemGrid">Fat</div>
//                             <div class="itemGrid">Carbonhydrate</div>
//                             <div class="itemGrid">Protein</div>

//                             <div class="itemGrid">100g</div>
//                             <div class="itemGrid">143 kcal</div>
//                             <div class="itemGrid">6 g</div>
//                             <div class="itemGrid">18 g</div>
//                             <div class="itemGrid">5 g</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card" onclick="renderDetail()">
//                     <div>
//                         <p class="community"><i class="fa-solid fa-people-group"></i> Community Recipes</p>
//                     </div>
//                     <div class="description">
//                         <p>Turmeric Roasted Cauliflower Salad (lowfodmap)</p>
//                         <div class="author">
//                             <span id="authorName">Joana Jardim</span>
//                             <button id="likes" type="button"><i class="fa-regular fa-heart"></i> 37</button>
//                         </div>
//                         <p><i class="fa-solid fa-location-pin fa-rotate-270" style="color: #ea9f77;"></i>
//                             <span class="category">Vegetarian dishes</span></p>
//                         <div class="box">
//                             <div class="itemGrid">by</div>
//                             <div class="itemGrid">Energy</div>
//                             <div class="itemGrid">Fat</div>
//                             <div class="itemGrid">Carbonhydrate</div>
//                             <div class="itemGrid">Protein</div>

//                             <div class="itemGrid">100g</div>
//                             <div class="itemGrid">143 kcal</div>
//                             <div class="itemGrid">6 g</div>
//                             <div class="itemGrid">18 g</div>
//                             <div class="itemGrid">5 g</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card" onclick="renderDetail()">
//                     <div>
//                         <p class="community"><i class="fa-solid fa-people-group"></i> Community Recipes</p>
//                     </div>
//                     <div class="description">
//                         <p>Turmeric Roasted Cauliflower Salad (lowfodmap)</p>
//                         <div class="author">
//                             <span id="authorName">Joana Jardim</span>
//                             <button id="likes" type="button"><i class="fa-regular fa-heart"></i> 37</button>
//                         </div>
//                         <p><i class="fa-solid fa-location-pin fa-rotate-270" style="color: #ea9f77;"></i>
//                             <span class="category">Vegetarian dishes</span></p>
//                         <div class="box">
//                             <div class="itemGrid">by</div>
//                             <div class="itemGrid">Energy</div>
//                             <div class="itemGrid">Fat</div>
//                             <div class="itemGrid">Carbonhydrate</div>
//                             <div class="itemGrid">Protein</div>

//                             <div class="itemGrid">100g</div>
//                             <div class="itemGrid">143 kcal</div>
//                             <div class="itemGrid">6 g</div>
//                             <div class="itemGrid">18 g</div>
//                             <div class="itemGrid">5 g</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card" onclick="renderDetail()">
//                     <div>
//                         <p class="community"><i class="fa-solid fa-people-group"></i> Community Recipes</p>
//                     </div>
//                     <div class="description">
//                         <p>Turmeric Roasted Cauliflower Salad (lowfodmap)</p>
//                         <div class="author">
//                             <span id="authorName">Joana Jardim</span>
//                             <button id="likes" type="button"><i class="fa-regular fa-heart"></i> 37</button>
//                         </div>
//                         <p><i class="fa-solid fa-location-pin fa-rotate-270" style="color: #ea9f77;"></i>
//                             <span class="category">Vegetarian dishes</span></p>
//                         <div class="box">
//                             <div class="itemGrid">by</div>
//                             <div class="itemGrid">Energy</div>
//                             <div class="itemGrid">Fat</div>
//                             <div class="itemGrid">Carbonhydrate</div>
//                             <div class="itemGrid">Protein</div>

//                             <div class="itemGrid">100g</div>
//                             <div class="itemGrid">143 kcal</div>
//                             <div class="itemGrid">6 g</div>
//                             <div class="itemGrid">18 g</div>
//                             <div class="itemGrid">5 g</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card" onclick="renderDetail()">
//                     <div>
//                         <p class="community"><i class="fa-solid fa-people-group"></i> Community Recipes</p>
//                     </div>
//                     <div class="description">
//                         <p>Turmeric Roasted Cauliflower Salad (lowfodmap)</p>
//                         <div class="author">
//                             <span id="authorName">Joana Jardim</span>
//                             <button id="likes" type="button"><i class="fa-regular fa-heart"></i> 37</button>
//                         </div>
//                         <p><i class="fa-solid fa-location-pin fa-rotate-270" style="color: #ea9f77;"></i>
//                             <span class="category">Vegetarian dishes</span></p>
//                         <div class="box">
//                             <div class="itemGrid">by</div>
//                             <div class="itemGrid">Energy</div>
//                             <div class="itemGrid">Fat</div>
//                             <div class="itemGrid">Carbonhydrate</div>
//                             <div class="itemGrid">Protein</div>

//                             <div class="itemGrid">100g</div>
//                             <div class="itemGrid">143 kcal</div>
//                             <div class="itemGrid">6 g</div>
//                             <div class="itemGrid">18 g</div>
//                             <div class="itemGrid">5 g</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card" onclick="renderDetail()">
//                     <div>
//                         <p class="community"><i class="fa-solid fa-people-group"></i> Community Recipes</p>
//                     </div>
//                     <div class="description">
//                         <p>Turmeric Roasted Cauliflower Salad (lowfodmap)</p>
//                         <div class="author">
//                             <span id="authorName">Joana Jardim</span>
//                             <button id="likes" type="button"><i class="fa-regular fa-heart"></i> 37</button>
//                         </div>
//                         <p><i class="fa-solid fa-location-pin fa-rotate-270" style="color: #ea9f77;"></i>
//                             <span class="category">Vegetarian dishes</span></p>
//                         <div class="box">
//                             <div class="itemGrid">by</div>
//                             <div class="itemGrid">Energy</div>
//                             <div class="itemGrid">Fat</div>
//                             <div class="itemGrid">Carbonhydrate</div>
//                             <div class="itemGrid">Protein</div>

//                             <div class="itemGrid">100g</div>
//                             <div class="itemGrid">143 kcal</div>
//                             <div class="itemGrid">6 g</div>
//                             <div class="itemGrid">18 g</div>
//                             <div class="itemGrid">5 g</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>`
// }
renderDashboard()

//Trang thêm mới
const renderAddNewRecipe = () => {
    data.innerHTML = `
    <div class="base">
                            <div class="info1 p-3 position-relative">
                                <div class="d-flex align-items-center justify-content-around">
                                    <p class="community w-auto"><i class="fa-solid fa-people-group"></i> Community
                                        Recipes</p>
                                    <button class="customBtnLikes"><span><i class="fa-regular fa-heart"></i></span>
                                        37</button>
                                    <p class="ticket position-absolute bottom-0">
                                        <i class="fa-solid fa-location-pin fa-rotate-270" style="color: #ea9f77;"
                                            aria-hidden="true"></i>
                                        <span class="category">Vegetarian dishes</span>
                                    </p>
                                </div>
                            </div>
                            <div class="isPublic">
                                <div class="public-area d-flex justify-content-between align-items-center p-3">
                                    <div>
                                        <p>Pbblic recipe</p>
                                        <p class="moreTitle">Publish your recipe on your website or share it with the
                                            Nutrium community</p>
                                    </div>
                                    <button class="creation border-0 rounded h-50 w-25">Public</button>
                                </div>
                                <div class="basicInformation p-3">
                                    <p class="title">Basic information</h5>
                                    <p class="moreTitle">Check and edit recipe's basic information</span>
                                    <div class="table">
                                        <div class="label p-2">Name</div>
                                        <div class="value p-2">Turmeric Roasted Cauliflower Salad (lowfodmap)</div>
                                        <div class="label-addNew"><i class="fa-solid fa-pen"></i></div>
                                        <div class="label p-2">Description</div>
                                        <div class="value p-2">Our roasted cauliflower salad with turmeric is low in
                                            calories and packed with punchy flavor. Turmeric
                                            adds lovely color and flavor to this easy vegan-friendly recipe</div>
                                        <div class="label-addNew"><i class="fa-solid fa-pen"></i></div>
                                        <div class="label p-2">Author</div>
                                        <div class="value p-2">Joana Jardim</div>
                                        <div class="label-addNew"><i class="fa-solid fa-pen"></i></div>
                                        <div class="label p-2">Total time</div>
                                        <div class="value p-2">00:40</div>
                                        <div class="label-addNew"><i class="fa-solid fa-pen"></i></div>
                                        <div class="label p-2">Preparation time</div>
                                        <div class="value p-2">00:40</div>
                                        <div class="label-addNew"><i class="fa-solid fa-pen"></i></div>
                                        <div class="label p-2">Final weight</div>
                                        <div class="value p-2">978.8 grams</div>
                                        <div class="label-addNew"><i class="fa-solid fa-pen"></i></div>
                                        <div class="label p-2">Portions</div>
                                        <div class="value p-2">4</div>
                                        <div class="label-addNew"><i class="fa-solid fa-pen"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="addFav">
                                <div class="p-2 bg-white rounded">
                                    <i class="fa-solid fa-heart" style="color: #ea3e3e;" aria-hidden="true"></i>
                                    <span>Add to favorites</span>
                                </div>
                            </div>
                            <div class="creation p-2 rounded" onclick="renderDashboard()">
                                <p class="m-0">Creation</p>
                                <p class="m-0 moreTitle text-white">Create the recipe and choose the ingredients</p>
                            </div>
                            <div class="ingredients p-3">
                                <p class="m-0" id="title-ingredient">Ingredients</p>
                                <p class="moreTitle">Search and add ingredients to the recipe</p>

                                <div class="card-ingredient mb-4">
                                    <p class="border m-0 p-2">1 serving of babyfood, water, bottled, GERBER, without
                                        added fluoride (113 g)</p>
                                    <i
                                        class="fa-solid fa-trash border d-flex justify-content-center align-items-center"></i>
                                </div>
                                <div class="card-ingredient mb-4">
                                    <p class="border m-0 p-2">1 serving of babyfood, water, bottled, GERBER, without
                                        added fluoride (113 g)</p>
                                    <i
                                        class="fa-solid fa-trash border d-flex justify-content-center align-items-center"></i>
                                </div>

                                <div class="add-new-area">
                                    <nav class="border navbar navbar-white bg-white">
                                        <div class="container-fluid">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <button class="navbar-toggler p-0 border-0" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#addNew"
                                                    aria-controls="navbarToggleExternalContent" aria-expanded="false"
                                                    aria-label="Toggle navigation">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <p><i class="fa-solid fa-plus"></i></p>
                                                        <p>Add new recipe</p>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </nav>
                                    <div class="collapse show" id="addNew" data-bs-theme="white">
                                        <div class="border p-4 handleRecipe">
                                            <div class="recipeFuncion d-flex justify-content-between align-items-center g-1">
                                                <input class="border-0 rounded-2 p-1" type="text" id="searchRecipe" placeholder="Search food">
                                                <div id="sort" class="d-flex align-items-center">
                                                    <i class="fa-solid fa-arrow-up-short-wide border p-2 rounded bg-white"></i>
                                                    <select class="form-select">
                                                        <option selected>Sort by nutrient</option>
                                                        <option>Energy</option>
                                                        <option>Fat</option>
                                                        <option>Carbohydrate</option>
                                                        <option>Protein</option>
                                                    </select>
                                                </div>
                                                <div id="category">
                                                    <select class="form-select">
                                                        <option selected>All Category</option>
                                                        <option>Desserts</option>
                                                        <option>Breakfast and snack</option>
                                                        <option>Appetizers and side dishes</option>
                                                        <option>Soups</option>
                                                        <option>Meat dishes</option>
                                                        <option>Fish dishes</option>
                                                        <option>Vegetarian dishes</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <table class="border bg-white" cellpadding="10" cellspacing="0" style="width:100%; border-collapse: collapse; font-family: sans-serif;">
                                                <thead>
                                                  <tr class="border-bottom" style="background-color: #f5f5f5;">
                                                    <th colspan="3" style="text-align: left;">Nutritional Information</th>
                                                    <th>Energy</th>
                                                    <th>Fat</th>
                                                    <th>Carbohydrate</th>
                                                    <th>Protein</th>
                                                    <th></th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr class="border-bottom">
                                                    <td colspan="3">
                                                      <p>Keto 90 Second Bread</p><br>
                                                      <small>Community Recipes</small>
                                                      1 portion (87 grams) &nbsp; <span>87g</span>
                                                    </td>
                                                    <td>301 kcal</td>
                                                    <td>27 g</td>
                                                    <td>6 g</td>
                                                    <td>11 g</td>
                                                    <td style="text-align: center; background-color: #00b59b; color: white; font-size: 20px;">+</td>
                                                  </tr>
                                                  <tr class="border-bottom">
                                                    <td colspan="3">
                                                      <p>Keto - Just Eggs</p><br>
                                                      <small>Community Recipes</small>
                                                      1 portion (190 grams) &nbsp; <span>190g</span>
                                                    </td>
                                                    <td>469 kcal</td>
                                                    <td>40 g</td>
                                                    <td>7 g</td>
                                                    <td>23 g</td>
                                                    <td style="text-align: center; background-color: #00b59b; color: white; font-size: 20px;">+</td>
                                                  </tr>
                                                  <tr class="border-bottom">
                                                    <td colspan="3">
                                                      <p>Blueberry Lavender Breeze</p><br>
                                                      <small>Community Recipes</small>
                                                      1 portion (113 grams) &nbsp; <span>113g</span>
                                                    </td>
                                                    <td>14 kcal</td>
                                                    <td>0 g</td>
                                                    <td>3 g</td>
                                                    <td>0 g</td>
                                                    <td style="text-align: center; background-color: #00b59b; color: white; font-size: 20px;">+</td>
                                                  </tr>
                                                  <tr class="border-bottom">
                                                    <td colspan="3">
                                                      <p>Jamaican Grapefruit</p><br>
                                                      <small>Community Recipes</small>
                                                      1 portion (122 grams) &nbsp; <pspan>122g</span>
                                                    </td>
                                                    <td>45 kcal</td>
                                                    <td>0 g</td>
                                                    <td>13 g</td>
                                                    <td>1 g</td>
                                                    <td style="text-align: center; background-color: #00b59b; color: white; font-size: 20px;">+</td>
                                                  </tr>
                                                  <tr class="border-bottom">
                                                    <td colspan="3">
                                                      <p>Stewed Tomatoes</p><br>
                                                      <small>Community Recipes</small>
                                                      100 grams &nbsp; <p>100g</span>
                                                    </td>
                                                    <td>8 kcal</td>
                                                    <td>0 g</td>
                                                    <td>2 g</td>
                                                    <td>0 g</td>
                                                    <td style="text-align: center; background-color: #00b59b; color: white; font-size: 20px;">+</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="globalAnalysis p-2">
                                <p>Global analysis per portion</p>
                                <p class="moreTitle">Energy, macronutrients and fiber distribution</p>
                                <div class="d-flex justify-content-between border-bottom mb-4">
                                    <span>Energy</span>
                                    <span>351 <span class="moreTitle">kcal</span></span>
                                </div>
                                <div class="container-circle">
                                    <div class="circle red">16g</div>
                                    <div class="circle orange">45g</div>
                                    <div class="circle green">12g</div>
                                    <div class="circle gray">6g</div>
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
                                            <td class="text-end"><strong>1418</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Vitamin A</td>
                                            <td class="text-end"><strong>18</strong>ug</td>
                                        </tr>
                                        <tr>
                                            <td>Vitamin B-6</td>
                                            <td class="text-end"><strong>0</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Vitamin B-12</td>
                                            <td class="text-end"><strong>0</strong>ug</td>
                                        </tr>
                                        <tr>
                                            <td>Vitamin C</td>
                                            <td class="text-end"><strong>50</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Vitamin D (D2 + D3)</td>
                                            <td class="text-end"><strong>0</strong>ug</td>
                                        </tr>
                                        <tr>
                                            <td>Vitamin E</td>
                                            <td class="text-end"><strong>1</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Vitamin K</td>
                                            <td class="text-end"><strong>87</strong>ug</td>
                                        </tr>
                                        <tr>
                                            <td>Sugars</td>
                                            <td class="text-end"><strong>13</strong>g</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Calcium</td>
                                            <td class="text-end"><strong>88</strong>mg</td>
                                        </tr>
                                        <tr>
                                            <td>Iron</td>
                                            <td class="text-end"><strong>4</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Magnesium</td>
                                            <td class="text-end"><strong>127</strong>mg</td>
                                        </tr>
                                        <tr>
                                            <td>Phosphorus</td>
                                            <td class="text-end"><strong>251</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Potassium</td>
                                            <td class="text-end"><strong>649</strong>mg</td>
                                        </tr>
                                        <tr>
                                            <td>Zinc</td>
                                            <td class="text-end"><strong>2</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Copper</td>
                                            <td class="text-end"><strong>1</strong>mg</td>
                                        </tr>
                                        <tr>
                                            <td>Fluoride</td>
                                            <td class="text-end"><strong>1</strong>ug</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Manganese</td>
                                            <td class="text-end"><strong>2</strong>mg</td>
                                        </tr>
                                        <tr>
                                            <td>Selenium</td>
                                            <td class="text-end"><strong>4</strong>ug</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Thiamin</td>
                                            <td class="text-end"><strong>0</strong>mg</td>
                                        </tr>
                                        <tr>
                                            <td>Riboflavin</td>
                                            <td class="text-end"><strong>0</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Niacin</td>
                                            <td class="text-end"><strong>3</strong>mg</td>
                                        </tr>
                                        <tr>
                                            <td>Pantothenic acid</td>
                                            <td class="text-end"><strong>1</strong>mg</td>
                                        </tr>
                                        <tr class="Bcolor-whitesmoke">
                                            <td>Folate, total</td>
                                            <td class="text-end"><strong>156</strong>ug</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div class="cookingMethod p-2">
                                <p class="m-0">Cooking Method</p>
                                <p class="moreTitle">Give instructions to prepare this recipe</p>
                                <div class="d-flex">
                                    <div class="label p-2 d-flex align-items-center">1</div>
                                    <div class="value p-2 w-100">Add new cooking method
                                    </div>
                                    <div class="label-addNew"><i class="fa-solid fa-pen"></i></div>
                                </div>
                            </div>
                        </div>`
// Biểu đồ (Đang fix cứng)
    const ctx = document.getElementById('macrosChart').getContext('2d');
    const macrosChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Fat', 'Carbohydrate', 'Protein'],
            datasets: [{
                data: [38.3, 48.9, 12.8],
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
                        label: function(context) {
                            return context.label + ': ' + context.parsed.toFixed(1) + '%';
                        }
                    }
                }
            }
        }
    });
}
