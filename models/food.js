var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema = new Schema({
  /*proximates: {
    water: {
      name: "Water",
      units: "g"
      value: Number,
    },
    energy_kcal: {
      name: "Energy (in kcal)",
      units: "kcal"
      value: Number,
    },
    energy_kj: {
      name: "Energy (in kJ)",
      units: "kJ"
      value: Number,
    },
    protein: {
      name: "Protein",
      units: "g"
      value: Number,
    },
    total_lipid: {
      name: "Total Lipid (fat)",
      units: "g"
      value: Number,
    },
    ash: {
      name: "Ash",
      units: "g"
      value: Number,
    },
    carbohydrate_by_difference: {
      name: "Carbohydrate By Difference",
      units: "g"
      value: Number,
    },
    total_dietary_fiber: {
      name: "Total Dietary Fiber",
      units: "g"
      value: Number,
    },
    total_sugars: {
      name: "Total Sugars",
      units: "g"
      value: Number,
    },
    sucrose: {
      name: "Sucrose",
      units: "g"
      value: Number,
    },
    fructose: {
      name: "Fructose",
      units: "g"
      value: Number,
    },
    glucose: {
      name: "Glucose (Dextrose)",
      units: "g"
      value: Number,
    },
    lactose: {
      name: "Lactose",
      units: "g"
      value: Number,
    },
    maltose: {
      name: "Maltose",
      units: "g"
      value: Number,
    },
    galactose: {
      name: "Galactose",
      units: "g"
      value: Number,
    },
    starch: {
      name: "Starch",
      units: "g"
      value: Number,
    },
  },
  minerals: { //all in mg unless otherwise states
    calcium: {
      name: "Calcium",
      units: "mg"
      value: Number,
    },
    iron: {
      name: "Iron",
      units: "mg"
      value: Number,
    },
    magnesium: {
      name: "Magnesium",
      units: "mg"
      value: Number,
    },
    phosphorus: {
      name: "Phosphorus",
      units: "mg"
      value: Number,
    },
    potassium: {
      name: "Potassium",
      units: "mg"
      value: Number,
    },
    sodium: {
      name: "Sodium",
      units: "mg"
      value: Number,
    },
    zinc: {
      name: "Zinc",
      units: "mg"
      value: Number,
    },
    copper: {
      name: "Copper",
      units: "mg"
      value: Number,
    },
    manganse: {
      name: "Manganese",
      units: "mg"
      value: Number,
    },
    selenium: {
      name: "Selenium",
      units: "microg"
      value: Number,
    },
    fluoride: {
      name: "Fluoride",
      units: "microg"
      value: Number,
    },
  },
  vitamins: {
    vitamin_c: {
      name: "Vitamic C (Total Asorbic Acid)",
      units: "mg"
      value: Number,
    },
    thiamin: {
      name: "Thiamin",
      units: "mg"
      value: Number,
    },
    riboflavin: {
      name: "Riboflavin",
      units: "mg"
      value: Number,
    },
    niacin: {
      name: "Niacin",
      units: "mg"
      value: Number,
    },
    pantothenic_acid: {
      name: "Pantothenic Acid",
      units: "mg"
      value: Number,
    },
    vitamin_b6: {
      name: "Vitamin B6",
      units: "mg"
      value: Number,
    },
    folate_total: {
      name: "Total Folate",
      units: "microg"
      value: Number,
    },
    folic_acid: {
      name: "Folic Acid",
      units: "microg"
      value: Number,
    },
    folate_food: {
      name: "Folate (food)",
      units: "microg"
      value: Number,
    },
    folate_dfe: {
      name: "Folate (DFE)",
      units: "microg"
      value: Number,
    },
    choline_total: {
      name: "Total Choline",
      units: "mg"
      value: Number,
    }, //check all above to ensure they mathc
    vitamin_b12: {
      name: "Vitamin B-12",
      units: "microg"
      value: Number,
    },
    vitamin_b12_added: {
      name: "Vitamin B-12, added",
      units: "microg"
      value: Number,
    },
    vitamin_a_rae: {
      name: "Vitamin A, RAE",
      units: "microg"
      value: Number,
    },
    retinol: {
      name: "Retinol",
      units: "microg"
      value: Number,
    },
    carotene_beta: {
      name: "Carotene, beta",
      units: "microg"
      value: Number,
    },
    carotene_alpha: {
      name: "Carotene, alpha",
      units: "mg"
      value: Number,
    }
  }*/
});

var Food = mongoose.model('Food', foodSchema);
module.exports = Food;
