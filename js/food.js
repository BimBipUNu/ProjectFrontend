// const foods = [
//     {
//       "id": 1,
//       "name": "Chicken breast, grilled",
//       "source": "USDA",
//       "category": "Poultry Products",
//       "quantity": "100g",
//       "macronutrients": {
//         "energy": 165.0,
//         "carbohydrate": 0.0,
//         "fat": 3.6,
//         "protein": 31.0
//       },
//       "micronutrients": {
//         "cholesterol": 85.0,
//         "fiber": null,
//         "sodium": 74.0,
//         "water": 65.3,
//         "vitaminA": 0.013,
//         "vitaminB6": 0.64,
//         "vitaminB12": 0.3,
//         "vitaminC": 0.0,
//         "vitaminD": 0.2,
//         "vitaminE": 0.27,
//         "vitaminK": 0.3,
//         "starch": null,
//         "lactose": null,
//         "alcohol": null,
//         "caffeine": null,
//         "sugars": null,
//         "calcium": 15.0,
//         "iron": 0.7,
//         "magnesium": 29.0,
//         "phosphorus": 220.0,
//         "potassium": 256.0,
//         "zinc": 1.0,
//         "copper": 0.04,
//         "fluoride": null,
//         "manganese": 0.018,
//         "selenium": 27.6,
//         "thiamin": 0.07,
//         "riboflavin": 0.12,
//         "niacin": 13.7,
//         "pantothenicAcid": 1.05,
//         "folateTotal": 4.0,
//         "folicAcid": null,
//         "fattyAcidsTrans": 0.0,
//         "fattyAcidsSaturated": 1.0,
//         "fattyAcidsMonounsaturated": 1.2,
//         "fattyAcidsPolyunsaturated": 0.7,
//         "chloride": null
//       }
//     },
//     {
//       "id": 2,
//       "name": "Salmon, baked",
//       "source": "USDA",
//       "category": "Finfish and Shellfish Products",
//       "quantity": "100g",
//       "macronutrients": {
//         "energy": 206.0,
//         "carbohydrate": 0.0,
//         "fat": 12.0,
//         "protein": 22.0
//       },
//       "micronutrients": {
//         "cholesterol": 63.0,
//         "fiber": null,
//         "sodium": 59.0,
//         "water": 63.0,
//         "vitaminA": 0.04,
//         "vitaminB6": 0.94,
//         "vitaminB12": 3.2,
//         "vitaminC": 0.0,
//         "vitaminD": 10.9,
//         "vitaminE": 2.85,
//         "vitaminK": 0.4,
//         "starch": null,
//         "lactose": null,
//         "alcohol": null,
//         "caffeine": null,
//         "sugars": null,
//         "calcium": 9.0,
//         "iron": 0.34,
//         "magnesium": 29.0,
//         "phosphorus": 252.0,
//         "potassium": 363.0,
//         "zinc": 0.64,
//         "copper": 0.06,
//         "fluoride": null,
//         "manganese": 0.017,
//         "selenium": 36.5,
//         "thiamin": 0.28,
//         "riboflavin": 0.16,
//         "niacin": 8.5,
//         "pantothenicAcid": 1.4,
//         "folateTotal": 25.0,
//         "folicAcid": null,
//         "fattyAcidsTrans": 0.0,
//         "fattyAcidsSaturated": 2.5,
//         "fattyAcidsMonounsaturated": 3.8,
//         "fattyAcidsPolyunsaturated": 3.9,
//         "chloride": null
//       }
//     },
//     {
//       "id": 3,
//       "name": "Broccoli, raw",
//       "source": "USDA",
//       "category": "Vegetables and Vegetable Products",
//       "quantity": "100g",
//       "macronutrients": {
//         "energy": 34.0,
//         "carbohydrate": 6.6,
//         "fat": 0.4,
//         "protein": 2.8
//       },
//       "micronutrients": {
//         "cholesterol": 0.0,
//         "fiber": 2.6,
//         "sodium": 33.0,
//         "water": 89.3,
//         "vitaminA": 0.031,
//         "vitaminB6": 0.175,
//         "vitaminB12": 0.0,
//         "vitaminC": 89.2,
//         "vitaminD": 0.0,
//         "vitaminE": 0.78,
//         "vitaminK": 101.6,
//         "starch": null,
//         "lactose": null,
//         "alcohol": null,
//         "caffeine": null,
//         "sugars": 1.7,
//         "calcium": 47.0,
//         "iron": 0.73,
//         "magnesium": 21.0,
//         "phosphorus": 66.0,
//         "potassium": 316.0,
//         "zinc": 0.41,
//         "copper": 0.049,
//         "fluoride": 1.0,
//         "manganese": 0.21,
//         "selenium": 2.5,
//         "thiamin": 0.071,
//         "riboflavin": 0.117,
//         "niacin": 0.639,
//         "pantothenicAcid": 0.573,
//         "folateTotal": 63.0,
//         "folicAcid": null,
//         "fattyAcidsTrans": 0.0,
//         "fattyAcidsSaturated": 0.039,
//         "fattyAcidsMonounsaturated": 0.011,
//         "fattyAcidsPolyunsaturated": 0.038,
//         "chloride": null
//       }
//     },
//     {
//       "id": 4,
//       "name": "Rice, white, cooked",
//       "source": "USDA",
//       "category": "Cereal Grains and Pasta",
//       "quantity": "100g",
//       "macronutrients": {
//         "energy": 130.0,
//         "carbohydrate": 28.2,
//         "fat": 0.3,
//         "protein": 2.7
//       },
//       "micronutrients": {
//         "cholesterol": 0.0,
//         "fiber": 0.4,
//         "sodium": 1.0,
//         "water": 68.4,
//         "vitaminA": 0.0,
//         "vitaminB6": 0.093,
//         "vitaminB12": 0.0,
//         "vitaminC": 0.0,
//         "vitaminD": 0.0,
//         "vitaminE": 0.04,
//         "vitaminK": 0.1,
//         "starch": 27.9,
//         "lactose": null,
//         "alcohol": null,
//         "caffeine": null,
//         "sugars": 0.1,
//         "calcium": 10.0,
//         "iron": 1.2,
//         "magnesium": 12.0,
//         "phosphorus": 43.0,
//         "potassium": 35.0,
//         "zinc": 0.49,
//         "copper": 0.07,
//         "fluoride": 0.9,
//         "manganese": 0.37,
//         "selenium": 7.5,
//         "thiamin": 0.07,
//         "riboflavin": 0.019,
//         "niacin": 1.47,
//         "pantothenicAcid": 0.411,
//         "folateTotal": 58.0,
//         "folicAcid": 51.0,
//         "fattyAcidsTrans": 0.0,
//         "fattyAcidsSaturated": 0.078,
//         "fattyAcidsMonounsaturated": 0.088,
//         "fattyAcidsPolyunsaturated": 0.081,
//         "chloride": null
//       }
//     },
//     {
//       "id": 5,
//       "name": "Egg, whole, boiled",
//       "source": "USDA",
//       "category": "Dairy and Egg Products",
//       "quantity": "100g",
//       "macronutrients": {
//         "energy": 155.0,
//         "carbohydrate": 1.1,
//         "fat": 11.0,
//         "protein": 13.0
//       },
//       "micronutrients": {
//         "cholesterol": 373.0,
//         "fiber": null,
//         "sodium": 124.0,
//         "water": 75.0,
//         "vitaminA": 0.14,
//         "vitaminB6": 0.17,
//         "vitaminB12": 1.11,
//         "vitaminC": 0.0,
//         "vitaminD": 2.0,
//         "vitaminE": 1.05,
//         "vitaminK": 0.3,
//         "starch": null,
//         "lactose": null,
//         "alcohol": null,
//         "caffeine": null,
//         "sugars": 1.1,
//         "calcium": 50.0,
//         "iron": 1.2,
//         "magnesium": 10.0,
//         "phosphorus": 172.0,
//         "potassium": 126.0,
//         "zinc": 1.0,
//         "copper": 0.07,
//         "fluoride": null,
//         "manganese": 0.028,
//         "selenium": 30.8,
//         "thiamin": 0.066,
//         "riboflavin": 0.5,
//         "niacin": 0.075,
//         "pantothenicAcid": 1.4,
//         "folateTotal": 44.0,
//         "folicAcid": null,
//         "fattyAcidsTrans": 0.04,
//         "fattyAcidsSaturated": 3.3,
//         "fattyAcidsMonounsaturated": 4.1,
//         "fattyAcidsPolyunsaturated": 1.4,
//         "chloride": null
//       }
//     },
//     {
//         "id": 6,
//         "name": "Almonds, raw",
//         "source": "USDA",
//         "category": "Nuts and Seeds",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 579.0,
//           "carbohydrate": 21.6,
//           "fat": 49.9,
//           "protein": 21.2
//         },
//         "micronutrients": {
//           "cholesterol": 0.0,
//           "fiber": 12.5,
//           "sodium": 1.0,
//           "water": 4.4,
//           "vitaminA": 0.001,
//           "vitaminB6": 0.14,
//           "vitaminB12": 0.0,
//           "vitaminC": 0.0,
//           "vitaminD": 0.0,
//           "vitaminE": 25.6,
//           "vitaminK": 0.0,
//           "starch": null,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 4.4,
//           "calcium": 269.0,
//           "iron": 3.7,
//           "magnesium": 270.0,
//           "phosphorus": 481.0,
//           "potassium": 733.0,
//           "zinc": 3.1,
//           "copper": 1.0,
//           "fluoride": null,
//           "manganese": 2.3,
//           "selenium": 4.1,
//           "thiamin": 0.211,
//           "riboflavin": 1.138,
//           "niacin": 3.618,
//           "pantothenicAcid": 0.471,
//           "folateTotal": 50.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.0,
//           "fattyAcidsSaturated": 3.7,
//           "fattyAcidsMonounsaturated": 31.6,
//           "fattyAcidsPolyunsaturated": 12.3,
//           "chloride": null
//         }
//       },
//       {
//         "id": 7,
//         "name": "Banana, raw",
//         "source": "USDA",
//         "category": "Fruits and Fruit Juices",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 89.0,
//           "carbohydrate": 22.8,
//           "fat": 0.3,
//           "protein": 1.1
//         },
//         "micronutrients": {
//           "cholesterol": 0.0,
//           "fiber": 2.6,
//           "sodium": 1.0,
//           "water": 74.9,
//           "vitaminA": 0.003,
//           "vitaminB6": 0.4,
//           "vitaminB12": 0.0,
//           "vitaminC": 8.7,
//           "vitaminD": 0.0,
//           "vitaminE": 0.1,
//           "vitaminK": 0.5,
//           "starch": 5.4,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 12.2,
//           "calcium": 5.0,
//           "iron": 0.26,
//           "magnesium": 27.0,
//           "phosphorus": 22.0,
//           "potassium": 358.0,
//           "zinc": 0.15,
//           "copper": 0.078,
//           "fluoride": 2.2,
//           "manganese": 0.27,
//           "selenium": 1.0,
//           "thiamin": 0.031,
//           "riboflavin": 0.073,
//           "niacin": 0.665,
//           "pantothenicAcid": 0.334,
//           "folateTotal": 20.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.0,
//           "fattyAcidsSaturated": 0.112,
//           "fattyAcidsMonounsaturated": 0.032,
//           "fattyAcidsPolyunsaturated": 0.073,
//           "chloride": null
//         }
//       },
//       {
//         "id": 8,
//         "name": "Beef, ground, cooked",
//         "source": "USDA",
//         "category": "Beef Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 250.0,
//           "carbohydrate": 0.0,
//           "fat": 17.0,
//           "protein": 26.0
//         },
//         "micronutrients": {
//           "cholesterol": 88.0,
//           "fiber": null,
//           "sodium": 72.0,
//           "water": 55.9,
//           "vitaminA": 0.003,
//           "vitaminB6": 0.37,
//           "vitaminB12": 2.6,
//           "vitaminC": 0.0,
//           "vitaminD": 0.2,
//           "vitaminE": 0.21,
//           "vitaminK": 1.4,
//           "starch": null,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": null,
//           "calcium": 18.0,
//           "iron": 2.6,
//           "magnesium": 20.0,
//           "phosphorus": 180.0,
//           "potassium": 270.0,
//           "zinc": 6.0,
//           "copper": 0.08,
//           "fluoride": null,
//           "manganese": 0.012,
//           "selenium": 23.0,
//           "thiamin": 0.05,
//           "riboflavin": 0.19,
//           "niacin": 4.4,
//           "pantothenicAcid": 0.65,
//           "folateTotal": 7.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 1.2,
//           "fattyAcidsSaturated": 7.2,
//           "fattyAcidsMonounsaturated": 7.4,
//           "fattyAcidsPolyunsaturated": 0.5,
//           "chloride": null
//         }
//       },
//       {
//         "id": 9,
//         "name": "Carrots, raw",
//         "source": "USDA",
//         "category": "Vegetables and Vegetable Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 41.0,
//           "carbohydrate": 9.6,
//           "fat": 0.2,
//           "protein": 0.9
//         },
//         "micronutrients": {
//           "cholesterol": 0.0,
//           "fiber": 2.8,
//           "sodium": 69.0,
//           "water": 88.3,
//           "vitaminA": 0.835,
//           "vitaminB6": 0.138,
//           "vitaminB12": 0.0,
//           "vitaminC": 5.9,
//           "vitaminD": 0.0,
//           "vitaminE": 0.66,
//           "vitaminK": 13.2,
//           "starch": null,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 4.7,
//           "calcium": 33.0,
//           "iron": 0.3,
//           "magnesium": 12.0,
//           "phosphorus": 35.0,
//           "potassium": 320.0,
//           "zinc": 0.24,
//           "copper": 0.045,
//           "fluoride": 3.2,
//           "manganese": 0.143,
//           "selenium": 0.1,
//           "thiamin": 0.066,
//           "riboflavin": 0.058,
//           "niacin": 0.983,
//           "pantothenicAcid": 0.273,
//           "folateTotal": 19.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.0,
//           "fattyAcidsSaturated": 0.037,
//           "fattyAcidsMonounsaturated": 0.014,
//           "fattyAcidsPolyunsaturated": 0.117,
//           "chloride": null
//         }
//       },
//       {
//         "id": 10,
//         "name": "Milk, whole",
//         "source": "USDA",
//         "category": "Dairy and Egg Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 61.0,
//           "carbohydrate": 4.8,
//           "fat": 3.3,
//           "protein": 3.2
//         },
//         "micronutrients": {
//           "cholesterol": 14.0,
//           "fiber": null,
//           "sodium": 43.0,
//           "water": 88.0,
//           "vitaminA": 0.046,
//           "vitaminB6": 0.036,
//           "vitaminB12": 0.45,
//           "vitaminC": 0.0,
//           "vitaminD": 1.0,
//           "vitaminE": 0.07,
//           "vitaminK": 0.3,
//           "starch": null,
//           "lactose": 4.8,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 5.0,
//           "calcium": 113.0,
//           "iron": 0.03,
//           "magnesium": 10.0,
//           "phosphorus": 84.0,
//           "potassium": 132.0,
//           "zinc": 0.38,
//           "copper": 0.009,
//           "fluoride": 2.0,
//           "manganese": 0.003,
//           "selenium": 1.5,
//           "thiamin": 0.043,
//           "riboflavin": 0.183,
//           "niacin": 0.093,
//           "pantothenicAcid": 0.334,
//           "folateTotal": 5.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.11,
//           "fattyAcidsSaturated": 1.865,
//           "fattyAcidsMonounsaturated": 0.824,
//           "fattyAcidsPolyunsaturated": 0.195,
//           "chloride": null
//         }
//       },
//       {
//         "id": 11,
//         "name": "Egg, whole, boiled",
//         "source": "USDA",
//         "category": "Dairy and Egg Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 155.0,
//           "carbohydrate": 1.1,
//           "fat": 11.0,
//           "protein": 13.0
//         },
//         "micronutrients": {
//           "cholesterol": 373.0,
//           "fiber": 0.0,
//           "sodium": 124.0,
//           "water": 75.0,
//           "vitaminA": 0.149,
//           "vitaminB6": 0.121,
//           "vitaminB12": 1.1,
//           "vitaminC": 0.0,
//           "vitaminD": 2.0,
//           "vitaminE": 1.03,
//           "vitaminK": 0.3,
//           "starch": null,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 1.1,
//           "calcium": 50.0,
//           "iron": 1.2,
//           "magnesium": 10.0,
//           "phosphorus": 172.0,
//           "potassium": 126.0,
//           "zinc": 1.0,
//           "copper": 0.072,
//           "fluoride": null,
//           "manganese": 0.028,
//           "selenium": 30.8,
//           "thiamin": 0.066,
//           "riboflavin": 0.5,
//           "niacin": 0.064,
//           "pantothenicAcid": 1.4,
//           "folateTotal": 47.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.04,
//           "fattyAcidsSaturated": 3.3,
//           "fattyAcidsMonounsaturated": 4.1,
//           "fattyAcidsPolyunsaturated": 1.4,
//           "chloride": null
//         }
//       },
//       {
//         "id": 12,
//         "name": "Rice, white, cooked",
//         "source": "USDA",
//         "category": "Cereal Grains and Pasta",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 130.0,
//           "carbohydrate": 28.2,
//           "fat": 0.3,
//           "protein": 2.7
//         },
//         "micronutrients": {
//           "cholesterol": 0.0,
//           "fiber": 0.4,
//           "sodium": 1.0,
//           "water": 68.5,
//           "vitaminA": 0.0,
//           "vitaminB6": 0.093,
//           "vitaminB12": 0.0,
//           "vitaminC": 0.0,
//           "vitaminD": 0.0,
//           "vitaminE": 0.04,
//           "vitaminK": 0.1,
//           "starch": 27.7,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 0.1,
//           "calcium": 10.0,
//           "iron": 1.2,
//           "magnesium": 12.0,
//           "phosphorus": 43.0,
//           "potassium": 35.0,
//           "zinc": 0.49,
//           "copper": 0.07,
//           "fluoride": null,
//           "manganese": 0.37,
//           "selenium": 7.5,
//           "thiamin": 0.163,
//           "riboflavin": 0.013,
//           "niacin": 0.4,
//           "pantothenicAcid": 0.411,
//           "folateTotal": 58.0,
//           "folicAcid": 48.0,
//           "fattyAcidsTrans": 0.0,
//           "fattyAcidsSaturated": 0.08,
//           "fattyAcidsMonounsaturated": 0.088,
//           "fattyAcidsPolyunsaturated": 0.081,
//           "chloride": null
//         }
//       },
//       {
//         "id": 13,
//         "name": "Broccoli, raw",
//         "source": "USDA",
//         "category": "Vegetables and Vegetable Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 34.0,
//           "carbohydrate": 6.6,
//           "fat": 0.4,
//           "protein": 2.8
//         },
//         "micronutrients": {
//           "cholesterol": 0.0,
//           "fiber": 2.6,
//           "sodium": 33.0,
//           "water": 89.3,
//           "vitaminA": 0.031,
//           "vitaminB6": 0.175,
//           "vitaminB12": 0.0,
//           "vitaminC": 89.2,
//           "vitaminD": 0.0,
//           "vitaminE": 0.78,
//           "vitaminK": 101.6,
//           "starch": null,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 1.7,
//           "calcium": 47.0,
//           "iron": 0.73,
//           "magnesium": 21.0,
//           "phosphorus": 66.0,
//           "potassium": 316.0,
//           "zinc": 0.41,
//           "copper": 0.049,
//           "fluoride": null,
//           "manganese": 0.21,
//           "selenium": 2.5,
//           "thiamin": 0.071,
//           "riboflavin": 0.117,
//           "niacin": 0.639,
//           "pantothenicAcid": 0.573,
//           "folateTotal": 63.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.0,
//           "fattyAcidsSaturated": 0.039,
//           "fattyAcidsMonounsaturated": 0.032,
//           "fattyAcidsPolyunsaturated": 0.038,
//           "chloride": null
//         }
//       },
//       {
//         "id": 14,
//         "name": "Chicken breast, grilled",
//         "source": "USDA",
//         "category": "Poultry Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 165.0,
//           "carbohydrate": 0.0,
//           "fat": 3.6,
//           "protein": 31.0
//         },
//         "micronutrients": {
//           "cholesterol": 85.0,
//           "fiber": null,
//           "sodium": 74.0,
//           "water": 65.3,
//           "vitaminA": 0.013,
//           "vitaminB6": 0.6,
//           "vitaminB12": 0.3,
//           "vitaminC": 0.0,
//           "vitaminD": 0.1,
//           "vitaminE": 0.27,
//           "vitaminK": 0.3,
//           "starch": null,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": null,
//           "calcium": 15.0,
//           "iron": 0.7,
//           "magnesium": 29.0,
//           "phosphorus": 220.0,
//           "potassium": 256.0,
//           "zinc": 1.0,
//           "copper": 0.04,
//           "fluoride": null,
//           "manganese": 0.018,
//           "selenium": 27.6,
//           "thiamin": 0.07,
//           "riboflavin": 0.1,
//           "niacin": 13.7,
//           "pantothenicAcid": 1.01,
//           "folateTotal": 4.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.06,
//           "fattyAcidsSaturated": 1.0,
//           "fattyAcidsMonounsaturated": 1.2,
//           "fattyAcidsPolyunsaturated": 0.8,
//           "chloride": null
//         }
//       },
//       {
//         "id": 15,
//         "name": "Sweet potato, baked",
//         "source": "USDA",
//         "category": "Vegetables and Vegetable Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 90.0,
//           "carbohydrate": 20.7,
//           "fat": 0.1,
//           "protein": 2.0
//         },
//         "micronutrients": {
//           "cholesterol": 0.0,
//           "fiber": 3.3,
//           "sodium": 36.0,
//           "water": 77.3,
//           "vitaminA": 0.961,
//           "vitaminB6": 0.209,
//           "vitaminB12": 0.0,
//           "vitaminC": 19.6,
//           "vitaminD": 0.0,
//           "vitaminE": 0.26,
//           "vitaminK": 1.8,
//           "starch": 8.1,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 6.5,
//           "calcium": 38.0,
//           "iron": 0.7,
//           "magnesium": 27.0,
//           "phosphorus": 54.0,
//           "potassium": 475.0,
//           "zinc": 0.3,
//           "copper": 0.15,
//           "fluoride": null,
//           "manganese": 0.258,
//           "selenium": 0.6,
//           "thiamin": 0.078,
//           "riboflavin": 0.061,
//           "niacin": 1.456,
//           "pantothenicAcid": 0.8,
//           "folateTotal": 6.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.0,
//           "fattyAcidsSaturated": 0.029,
//           "fattyAcidsMonounsaturated": 0.003,
//           "fattyAcidsPolyunsaturated": 0.045,
//           "chloride": null
//         }
//       },
//       {
//         "id": 16,
//         "name": "Apple, raw, with skin",
//         "source": "USDA",
//         "category": "Fruits and Fruit Juices",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 52.0,
//           "carbohydrate": 13.8,
//           "fat": 0.2,
//           "protein": 0.3
//         },
//         "micronutrients": {
//           "cholesterol": 0.0,
//           "fiber": 2.4,
//           "sodium": 1.0,
//           "water": 85.6,
//           "vitaminA": 0.003,
//           "vitaminB6": 0.041,
//           "vitaminB12": 0.0,
//           "vitaminC": 4.6,
//           "vitaminD": 0.0,
//           "vitaminE": 0.18,
//           "vitaminK": 2.2,
//           "starch": null,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 10.4,
//           "calcium": 6.0,
//           "iron": 0.12,
//           "magnesium": 5.0,
//           "phosphorus": 11.0,
//           "potassium": 107.0,
//           "zinc": 0.04,
//           "copper": 0.027,
//           "fluoride": 3.3,
//           "manganese": 0.035,
//           "selenium": 0.0,
//           "thiamin": 0.017,
//           "riboflavin": 0.026,
//           "niacin": 0.091,
//           "pantothenicAcid": 0.061,
//           "folateTotal": 3.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.0,
//           "fattyAcidsSaturated": 0.03,
//           "fattyAcidsMonounsaturated": 0.01,
//           "fattyAcidsPolyunsaturated": 0.05,
//           "chloride": null
//         }
//       },
//       {
//         "id": 17,
//         "name": "Carrots, raw",
//         "source": "USDA",
//         "category": "Vegetables and Vegetable Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 41.0,
//           "carbohydrate": 9.6,
//           "fat": 0.2,
//           "protein": 0.9
//         },
//         "micronutrients": {
//           "cholesterol": 0.0,
//           "fiber": 2.8,
//           "sodium": 69.0,
//           "water": 88.3,
//           "vitaminA": 0.835,
//           "vitaminB6": 0.138,
//           "vitaminB12": 0.0,
//           "vitaminC": 5.9,
//           "vitaminD": 0.0,
//           "vitaminE": 0.66,
//           "vitaminK": 13.2,
//           "starch": null,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 4.7,
//           "calcium": 33.0,
//           "iron": 0.3,
//           "magnesium": 12.0,
//           "phosphorus": 35.0,
//           "potassium": 320.0,
//           "zinc": 0.24,
//           "copper": 0.045,
//           "fluoride": 3.2,
//           "manganese": 0.143,
//           "selenium": 0.1,
//           "thiamin": 0.066,
//           "riboflavin": 0.058,
//           "niacin": 0.983,
//           "pantothenicAcid": 0.273,
//           "folateTotal": 19.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.0,
//           "fattyAcidsSaturated": 0.037,
//           "fattyAcidsMonounsaturated": 0.014,
//           "fattyAcidsPolyunsaturated": 0.117,
//           "chloride": null
//         }
//       },
//       {
//         "id": 18,
//         "name": "Milk, whole",
//         "source": "USDA",
//         "category": "Dairy and Egg Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 61.0,
//           "carbohydrate": 4.8,
//           "fat": 3.3,
//           "protein": 3.2
//         },
//         "micronutrients": {
//           "cholesterol": 10.0,
//           "fiber": null,
//           "sodium": 43.0,
//           "water": 87.0,
//           "vitaminA": 0.046,
//           "vitaminB6": 0.037,
//           "vitaminB12": 0.45,
//           "vitaminC": 0.0,
//           "vitaminD": 0.1,
//           "vitaminE": 0.07,
//           "vitaminK": 0.3,
//           "starch": null,
//           "lactose": 5.0,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 5.0,
//           "calcium": 113.0,
//           "iron": 0.03,
//           "magnesium": 10.0,
//           "phosphorus": 84.0,
//           "potassium": 132.0,
//           "zinc": 0.38,
//           "copper": 0.009,
//           "fluoride": null,
//           "manganese": 0.003,
//           "selenium": 2.0,
//           "thiamin": 0.046,
//           "riboflavin": 0.169,
//           "niacin": 0.097,
//           "pantothenicAcid": 0.324,
//           "folateTotal": 5.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.119,
//           "fattyAcidsSaturated": 1.865,
//           "fattyAcidsMonounsaturated": 0.812,
//           "fattyAcidsPolyunsaturated": 0.195,
//           "chloride": 98.0
//         }
//       },
//       {
//         "id": 19,
//         "name": "Beef, ground, 85% lean, cooked",
//         "source": "USDA",
//         "category": "Beef Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 250.0,
//           "carbohydrate": 0.0,
//           "fat": 17.0,
//           "protein": 26.0
//         },
//         "micronutrients": {
//           "cholesterol": 88.0,
//           "fiber": null,
//           "sodium": 72.0,
//           "water": 55.7,
//           "vitaminA": 0.0,
//           "vitaminB6": 0.338,
//           "vitaminB12": 2.5,
//           "vitaminC": 0.0,
//           "vitaminD": 0.1,
//           "vitaminE": 0.21,
//           "vitaminK": 1.5,
//           "starch": null,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": null,
//           "calcium": 18.0,
//           "iron": 2.3,
//           "magnesium": 20.0,
//           "phosphorus": 178.0,
//           "potassium": 318.0,
//           "zinc": 5.7,
//           "copper": 0.08,
//           "fluoride": null,
//           "manganese": 0.015,
//           "selenium": 22.3,
//           "thiamin": 0.053,
//           "riboflavin": 0.19,
//           "niacin": 4.5,
//           "pantothenicAcid": 0.51,
//           "folateTotal": 9.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 1.3,
//           "fattyAcidsSaturated": 7.0,
//           "fattyAcidsMonounsaturated": 7.5,
//           "fattyAcidsPolyunsaturated": 0.6,
//           "chloride": null
//         }
//       },
//       {
//         "id": 20,
//         "name": "Salmon, baked",
//         "source": "USDA",
//         "category": "Finfish and Shellfish Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 206.0,
//           "carbohydrate": 0.0,
//           "fat": 13.0,
//           "protein": 22.1
//         },
//         "micronutrients": {
//           "cholesterol": 63.0,
//           "fiber": null,
//           "sodium": 59.0,
//           "water": 63.8,
//           "vitaminA": 0.04,
//           "vitaminB6": 0.818,
//           "vitaminB12": 3.2,
//           "vitaminC": 0.0,
//           "vitaminD": 13.0,
//           "vitaminE": 2.83,
//           "vitaminK": 0.4,
//           "starch": null,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": null,
//           "calcium": 9.0,
//           "iron": 0.34,
//           "magnesium": 30.0,
//           "phosphorus": 252.0,
//           "potassium": 384.0,
//           "zinc": 0.64,
//           "copper": 0.03,
//           "fluoride": null,
//           "manganese": 0.017,
//           "selenium": 36.5,
//           "thiamin": 0.23,
//           "riboflavin": 0.49,
//           "niacin": 8.045,
//           "pantothenicAcid": 1.015,
//           "folateTotal": 25.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.0,
//           "fattyAcidsSaturated": 3.1,
//           "fattyAcidsMonounsaturated": 3.8,
//           "fattyAcidsPolyunsaturated": 3.9,
//           "chloride": null
//         }
//       },
//       {
//         "id": 21,
//         "name": "Rice, white, long-grain, cooked",
//         "source": "USDA",
//         "category": "Cereal Grains and Pasta",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 130.0,
//           "carbohydrate": 28.2,
//           "fat": 0.3,
//           "protein": 2.7
//         },
//         "micronutrients": {
//           "cholesterol": 0.0,
//           "fiber": 0.4,
//           "sodium": 1.0,
//           "water": 68.4,
//           "vitaminA": 0.0,
//           "vitaminB6": 0.093,
//           "vitaminB12": 0.0,
//           "vitaminC": 0.0,
//           "vitaminD": 0.0,
//           "vitaminE": 0.11,
//           "vitaminK": 0.1,
//           "starch": 27.9,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 0.1,
//           "calcium": 10.0,
//           "iron": 1.2,
//           "magnesium": 12.0,
//           "phosphorus": 43.0,
//           "potassium": 35.0,
//           "zinc": 0.49,
//           "copper": 0.07,
//           "fluoride": null,
//           "manganese": 0.381,
//           "selenium": 7.5,
//           "thiamin": 0.163,
//           "riboflavin": 0.016,
//           "niacin": 1.47,
//           "pantothenicAcid": 0.411,
//           "folateTotal": 58.0,
//           "folicAcid": 0.0,
//           "fattyAcidsTrans": 0.0,
//           "fattyAcidsSaturated": 0.08,
//           "fattyAcidsMonounsaturated": 0.088,
//           "fattyAcidsPolyunsaturated": 0.081,
//           "chloride": null
//         }
//       },
//       {
//         "id": 22,
//         "name": "Potatoes, baked, flesh and skin",
//         "source": "USDA",
//         "category": "Vegetables and Vegetable Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 93.0,
//           "carbohydrate": 21.1,
//           "fat": 0.1,
//           "protein": 2.5
//         },
//         "micronutrients": {
//           "cholesterol": 0.0,
//           "fiber": 2.2,
//           "sodium": 10.0,
//           "water": 74.9,
//           "vitaminA": 0.001,
//           "vitaminB6": 0.3,
//           "vitaminB12": 0.0,
//           "vitaminC": 9.6,
//           "vitaminD": 0.0,
//           "vitaminE": 0.01,
//           "vitaminK": 2.9,
//           "starch": 17.0,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 1.2,
//           "calcium": 10.0,
//           "iron": 0.64,
//           "magnesium": 25.0,
//           "phosphorus": 75.0,
//           "potassium": 535.0,
//           "zinc": 0.35,
//           "copper": 0.19,
//           "fluoride": 1.4,
//           "manganese": 0.153,
//           "selenium": 0.4,
//           "thiamin": 0.1,
//           "riboflavin": 0.05,
//           "niacin": 2.2,
//           "pantothenicAcid": 0.63,
//           "folateTotal": 15.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.0,
//           "fattyAcidsSaturated": 0.03,
//           "fattyAcidsMonounsaturated": 0.003,
//           "fattyAcidsPolyunsaturated": 0.043,
//           "chloride": null
//         }
//       },
//       {
//         "id": 23,
//         "name": "Tomatoes, red, ripe, raw",
//         "source": "USDA",
//         "category": "Vegetables and Vegetable Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 18.0,
//           "carbohydrate": 3.9,
//           "fat": 0.2,
//           "protein": 0.9
//         },
//         "micronutrients": {
//           "cholesterol": 0.0,
//           "fiber": 1.2,
//           "sodium": 5.0,
//           "water": 94.5,
//           "vitaminA": 0.042,
//           "vitaminB6": 0.08,
//           "vitaminB12": 0.0,
//           "vitaminC": 13.7,
//           "vitaminD": 0.0,
//           "vitaminE": 0.54,
//           "vitaminK": 7.9,
//           "starch": null,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 2.6,
//           "calcium": 10.0,
//           "iron": 0.27,
//           "magnesium": 11.0,
//           "phosphorus": 24.0,
//           "potassium": 237.0,
//           "zinc": 0.17,
//           "copper": 0.059,
//           "fluoride": 2.0,
//           "manganese": 0.114,
//           "selenium": 0.5,
//           "thiamin": 0.037,
//           "riboflavin": 0.019,
//           "niacin": 0.594,
//           "pantothenicAcid": 0.089,
//           "folateTotal": 15.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.0,
//           "fattyAcidsSaturated": 0.03,
//           "fattyAcidsMonounsaturated": 0.03,
//           "fattyAcidsPolyunsaturated": 0.08,
//           "chloride": null
//         }
//       },
//       {
//         "id": 24,
//         "name": "Bananas, raw",
//         "source": "USDA",
//         "category": "Fruits and Fruit Juices",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 89.0,
//           "carbohydrate": 22.8,
//           "fat": 0.3,
//           "protein": 1.1
//         },
//         "micronutrients": {
//           "cholesterol": 0.0,
//           "fiber": 2.6,
//           "sodium": 1.0,
//           "water": 74.9,
//           "vitaminA": 0.003,
//           "vitaminB6": 0.367,
//           "vitaminB12": 0.0,
//           "vitaminC": 8.7,
//           "vitaminD": 0.0,
//           "vitaminE": 0.1,
//           "vitaminK": 0.5,
//           "starch": 5.4,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 12.2,
//           "calcium": 5.0,
//           "iron": 0.26,
//           "magnesium": 27.0,
//           "phosphorus": 22.0,
//           "potassium": 358.0,
//           "zinc": 0.15,
//           "copper": 0.078,
//           "fluoride": 2.2,
//           "manganese": 0.27,
//           "selenium": 1.0,
//           "thiamin": 0.031,
//           "riboflavin": 0.073,
//           "niacin": 0.665,
//           "pantothenicAcid": 0.334,
//           "folateTotal": 20.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.0,
//           "fattyAcidsSaturated": 0.112,
//           "fattyAcidsMonounsaturated": 0.032,
//           "fattyAcidsPolyunsaturated": 0.073,
//           "chloride": null
//         }
//       },
//       {
//         "id": 25,
//         "name": "Eggs, whole, cooked, hard-boiled",
//         "source": "USDA",
//         "category": "Dairy and Egg Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 155.0,
//           "carbohydrate": 1.1,
//           "fat": 10.6,
//           "protein": 12.6
//         },
//         "micronutrients": {
//           "cholesterol": 373.0,
//           "fiber": 0.0,
//           "sodium": 124.0,
//           "water": 75.3,
//           "vitaminA": 0.149,
//           "vitaminB6": 0.121,
//           "vitaminB12": 1.11,
//           "vitaminC": 0.0,
//           "vitaminD": 2.0,
//           "vitaminE": 1.03,
//           "vitaminK": 0.3,
//           "starch": null,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 1.1,
//           "calcium": 50.0,
//           "iron": 1.2,
//           "magnesium": 10.0,
//           "phosphorus": 172.0,
//           "potassium": 126.0,
//           "zinc": 1.29,
//           "copper": 0.072,
//           "fluoride": null,
//           "manganese": 0.028,
//           "selenium": 30.8,
//           "thiamin": 0.066,
//           "riboflavin": 0.457,
//           "niacin": 0.064,
//           "pantothenicAcid": 1.398,
//           "folateTotal": 44.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.04,
//           "fattyAcidsSaturated": 3.1,
//           "fattyAcidsMonounsaturated": 4.1,
//           "fattyAcidsPolyunsaturated": 1.4,
//           "chloride": null
//         }
//       },
//       {
//         "id": 26,
//         "name": "Broccoli, raw",
//         "source": "USDA",
//         "category": "Vegetables and Vegetable Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 34.0,
//           "carbohydrate": 6.6,
//           "fat": 0.4,
//           "protein": 2.8
//         },
//         "micronutrients": {
//           "cholesterol": 0.0,
//           "fiber": 2.6,
//           "sodium": 33.0,
//           "water": 89.3,
//           "vitaminA": 0.623,
//           "vitaminB6": 0.175,
//           "vitaminB12": 0.0,
//           "vitaminC": 89.2,
//           "vitaminD": 0.0,
//           "vitaminE": 0.78,
//           "vitaminK": 101.6,
//           "starch": null,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 1.7,
//           "calcium": 47.0,
//           "iron": 0.73,
//           "magnesium": 21.0,
//           "phosphorus": 66.0,
//           "potassium": 316.0,
//           "zinc": 0.41,
//           "copper": 0.049,
//           "fluoride": 1.0,
//           "manganese": 0.21,
//           "selenium": 2.5,
//           "thiamin": 0.071,
//           "riboflavin": 0.117,
//           "niacin": 0.639,
//           "pantothenicAcid": 0.573,
//           "folateTotal": 63.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.0,
//           "fattyAcidsSaturated": 0.039,
//           "fattyAcidsMonounsaturated": 0.011,
//           "fattyAcidsPolyunsaturated": 0.038,
//           "chloride": null
//         }
//       },
//       {
//         "id": 27,
//         "name": "Almonds",
//         "source": "USDA",
//         "category": "Nuts and Seeds",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 579.0,
//           "carbohydrate": 21.6,
//           "fat": 49.9,
//           "protein": 21.2
//         },
//         "micronutrients": {
//           "cholesterol": 0.0,
//           "fiber": 12.5,
//           "sodium": 1.0,
//           "water": 4.4,
//           "vitaminA": 0.001,
//           "vitaminB6": 0.137,
//           "vitaminB12": 0.0,
//           "vitaminC": 0.0,
//           "vitaminD": 0.0,
//           "vitaminE": 25.63,
//           "vitaminK": 0.0,
//           "starch": 0.7,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 4.4,
//           "calcium": 269.0,
//           "iron": 3.71,
//           "magnesium": 270.0,
//           "phosphorus": 481.0,
//           "potassium": 733.0,
//           "zinc": 3.12,
//           "copper": 1.031,
//           "fluoride": 3.2,
//           "manganese": 2.285,
//           "selenium": 4.1,
//           "thiamin": 0.211,
//           "riboflavin": 1.138,
//           "niacin": 3.618,
//           "pantothenicAcid": 0.471,
//           "folateTotal": 50.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.0,
//           "fattyAcidsSaturated": 3.8,
//           "fattyAcidsMonounsaturated": 31.6,
//           "fattyAcidsPolyunsaturated": 12.3,
//           "chloride": null
//         }
//       },
//       {
//         "id": 28,
//         "name": "Salmon, Atlantic, farmed, cooked",
//         "source": "USDA",
//         "category": "Finfish and Shellfish Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 206.0,
//           "carbohydrate": 0.0,
//           "fat": 13.4,
//           "protein": 22.1
//         },
//         "micronutrients": {
//           "cholesterol": 63.0,
//           "fiber": 0.0,
//           "sodium": 59.0,
//           "water": 63.4,
//           "vitaminA": 0.04,
//           "vitaminB6": 0.818,
//           "vitaminB12": 3.18,
//           "vitaminC": 0.0,
//           "vitaminD": 13.5,
//           "vitaminE": 2.85,
//           "vitaminK": 0.4,
//           "starch": null,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 0.0,
//           "calcium": 15.0,
//           "iron": 0.34,
//           "magnesium": 29.0,
//           "phosphorus": 252.0,
//           "potassium": 384.0,
//           "zinc": 0.64,
//           "copper": 0.037,
//           "fluoride": 0.3,
//           "manganese": 0.016,
//           "selenium": 36.5,
//           "thiamin": 0.2,
//           "riboflavin": 0.49,
//           "niacin": 8.045,
//           "pantothenicAcid": 1.014,
//           "folateTotal": 25.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.0,
//           "fattyAcidsSaturated": 3.1,
//           "fattyAcidsMonounsaturated": 4.7,
//           "fattyAcidsPolyunsaturated": 3.9,
//           "chloride": null
//         }
//       },
//       {
//         "id": 29,
//         "name": "Beef, ground, 85% lean meat / 15% fat, cooked",
//         "source": "USDA",
//         "category": "Beef Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 250.0,
//           "carbohydrate": 0.0,
//           "fat": 17.0,
//           "protein": 26.0
//         },
//         "micronutrients": {
//           "cholesterol": 88.0,
//           "fiber": 0.0,
//           "sodium": 72.0,
//           "water": 56.8,
//           "vitaminA": 0.004,
//           "vitaminB6": 0.377,
//           "vitaminB12": 2.64,
//           "vitaminC": 0.0,
//           "vitaminD": 0.1,
//           "vitaminE": 0.21,
//           "vitaminK": 1.4,
//           "starch": null,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 0.0,
//           "calcium": 18.0,
//           "iron": 2.72,
//           "magnesium": 20.0,
//           "phosphorus": 180.0,
//           "potassium": 318.0,
//           "zinc": 6.14,
//           "copper": 0.075,
//           "fluoride": null,
//           "manganese": 0.018,
//           "selenium": 24.0,
//           "thiamin": 0.046,
//           "riboflavin": 0.173,
//           "niacin": 5.378,
//           "pantothenicAcid": 0.568,
//           "folateTotal": 8.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 1.3,
//           "fattyAcidsSaturated": 6.7,
//           "fattyAcidsMonounsaturated": 7.4,
//           "fattyAcidsPolyunsaturated": 0.5,
//           "chloride": null
//         }
//       },
//       {
//         "id": 30,
//         "name": "Carrots, raw",
//         "source": "USDA",
//         "category": "Vegetables and Vegetable Products",
//         "quantity": "100g",
//         "macronutrients": {
//           "energy": 41.0,
//           "carbohydrate": 9.6,
//           "fat": 0.2,
//           "protein": 0.9
//         },
//         "micronutrients": {
//           "cholesterol": 0.0,
//           "fiber": 2.8,
//           "sodium": 69.0,
//           "water": 88.3,
//           "vitaminA": 8.351,
//           "vitaminB6": 0.138,
//           "vitaminB12": 0.0,
//           "vitaminC": 5.9,
//           "vitaminD": 0.0,
//           "vitaminE": 0.66,
//           "vitaminK": 13.2,
//           "starch": 1.4,
//           "lactose": null,
//           "alcohol": null,
//           "caffeine": null,
//           "sugars": 4.7,
//           "calcium": 33.0,
//           "iron": 0.3,
//           "magnesium": 12.0,
//           "phosphorus": 35.0,
//           "potassium": 320.0,
//           "zinc": 0.24,
//           "copper": 0.045,
//           "fluoride": 3.2,
//           "manganese": 0.143,
//           "selenium": 0.1,
//           "thiamin": 0.066,
//           "riboflavin": 0.058,
//           "niacin": 0.983,
//           "pantothenicAcid": 0.273,
//           "folateTotal": 19.0,
//           "folicAcid": null,
//           "fattyAcidsTrans": 0.0,
//           "fattyAcidsSaturated": 0.037,
//           "fattyAcidsMonounsaturated": 0.014,
//           "fattyAcidsPolyunsaturated": 0.12,
//           "chloride": null
//         }
//       }
// ]
// localStorage.setItem("foods",JSON.stringify(foods))
const foods = JSON.parse(localStorage.getItem('foods')) || [];

let data = document.getElementById("data");
let infoFood = document.getElementById("infoFood");
console.log(foods[0]);

const renderFoodDashboard = () => {
    let html = ""
    foods.forEach(item => {
        html += `
            <div class="cart" data-bs-toggle="modal" data-bs-target="#information" onclick="renderInfomationDetail(${item.id})">
                <div class="description">
                    <p>${item.name}</p>
                    <span>${item.source}</span>
                </div>
                <div class="box">
                    <div>${item.macronutrients.energy}</div>
                    <div>${item.macronutrients.fat}</div>
                    <div>${item.macronutrients.carbohydrate}</div>
                    <div>${item.macronutrients.protein}</div>
                    <div class="font-size-12 color-lightgray">Energy</div>
                    <div class="font-size-12 color-lightgray">Fat</div>
                    <div class="font-size-12 color-lightgray">Carbohydydrate</div>
                    <div class="font-size-12 color-lightgray">Protein</div>
                </div>
            </div>
        `
    });
    data.innerHTML = html
}
const renderInfomationDetail = (id) => {
    const item = foods.find(food => food.id === id);
    let html = `
                    <h3 class="text-center color-gray">Food information</h3>
                    <p class="subtitle text-center">Check and update the information about the food</p>

                    <div class="food-info-grid color-gray">
                        <div class="info-block">
                            <div class="label flex-1">Name</div>
                            <div class="value">${item.name}</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Source</div>
                            <div class="value">${item.source}</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Category</div>
                            <div class="value">${item.category}</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Quantity</div>
                            <div class="value">${item.quantity}</div>
                            <div class="label">grams</div>
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
                            <div class="value">${item.macronutrients.energy}</div>
                            <div class="label">kcal</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Fat</div>
                            <div class="value">${item.macronutrients.fat}</div>
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Carbohydrate</div>
                            <div class="value">${item.macronutrients.carbohydrate}</div>
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Protein</div>
                            <div class="value">${item.macronutrients.protein}</div>
                            <div class="label">g</div>
                        </div>
                    </div>
                    <br>
                    <h4 class="text-center color-gray">Micronutrients</h4>
                    <div class="micronutrients-grid color-gray">
                        <div class="info-block">
                            <div class="label flex-1">Cholesterol</div>
                            <div class="value">${item.micronutrients.cholesterol ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Fiber</div>
                            <div class="value">${item.micronutrients.fiber ?? ""}</div>
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Sodium</div>
                            <div class="value">${item.micronutrients.sodium ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Water</div>
                            <div class="value">${item.micronutrients.water ?? ""}</div>
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Vitamin A</div>
                            <div class="value">${item.micronutrients.vitaminA ?? ""}</div>
                            <div class="label">µg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Vitamin B-6</div>
                            <div class="value">${item.micronutrients.vitaminB6 ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Vitamin B-12</div>
                            <div class="value">${item.micronutrients.vitaminB12 ?? ""}</div>
                            <div class="label">µg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Vitamin C</div>
                            <div class="value">${item.micronutrients.vitaminC ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Vitamin D (D2 + D3)</div>
                            <div class="value">${item.micronutrients.vitaminD ?? ""}</div>
                            <div class="label">µg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Vitamin E</div>
                            <div class="value">${item.micronutrients.vitaminE ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Vitamin K</div>
                            <div class="value">${item.micronutrients.vitaminK ?? ""}</div>
                            <div class="label">µg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Starch</div>
                            <div class="value">${item.micronutrients.starch ?? ""}</div>
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Lactose</div>
                            <div class="value">${item.micronutrients.lactose ?? ""}</div>
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Alcohol</div>
                            <div class="value">${item.micronutrients.alcohol ?? ""}</div>
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Caffeine</div>
                            <div class="value">${item.micronutrients.caffeine ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Sugars</div>
                            <div class="value">${item.micronutrients.sugars ?? ""}</div>
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Calcium</div>
                            <div class="value">${item.micronutrients.calcium ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Iron</div>
                            <div class="value">${item.micronutrients.iron ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Magnesium</div>
                            <div class="value">${item.micronutrients.magnesium ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Phosphorus</div>
                            <div class="value">${item.micronutrients.phosphorus ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Potassium</div>
                            <div class="value">${item.micronutrients.postassium ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Zinc</div>
                            <div class="value">${item.micronutrients.zinc ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Copper</div>
                            <div class="value">${item.micronutrients.copper ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Fluoride</div>
                            <div class="value">${item.micronutrients.fluoride ?? ""}</div>
                            <div class="label">µg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Manganese</div>
                            <div class="value">${item.micronutrients.manganese ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Selenium</div>
                            <div class="value">${item.micronutrients.selenium ?? ""}</div>
                            <div class="label">µg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Thiamin</div>
                            <div class="value">${item.micronutrients.thiamin ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Riboflavin</div>
                            <div class="value">${item.micronutrients.riboflavin ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Niacin</div>
                            <div class="value">${item.micronutrients.niacin ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Pantothenic acid</div>
                            <div class="value">${item.micronutrients.pantothenic ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Folate, total</div>
                            <div class="value">${item.micronutrients.folateTotal ?? ""}</div>
                            <div class="label">µg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Folic acid</div>
                            <div class="value">${item.micronutrients.folateAcid ?? ""}</div>
                            <div class="label">µg</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Fatty acids, total trans</div>
                            <div class="value">${item.micronutrients.fattyAcidsTrans ?? ""}</div>
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Fatty acids, total saturated</div>
                            <div class="value">${item.micronutrients.fattyAcidsSaturated ?? ""}</div>
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Fatty acids, total monounsaturated</div>
                            <div class="value">${item.micronutrients.fattyAcidsMonounsaturated ?? ""}</div>
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Fatty acids, total polyunsaturated</div>
                            <div class="value">${item.micronutrients.FattyAcidsPolyunsaturated ?? ""}</div>
                            <div class="label">g</div>
                        </div>
                        <div class="info-block">
                            <div class="label flex-1">Chloride</div>
                            <div class="value">${item.micronutrients.chloride ?? ""}</div>
                            <div class="label">mg</div>
                        </div>
                    </div>
                    `
    infoFood.innerHTML = html
}

renderFoodDashboard()
