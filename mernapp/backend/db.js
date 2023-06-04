const mongoose = require("mongoose");

const mongoDB = () => {
  // console.log(process.env.MONGODB_URL)
  
  mongoose
    .connect(process.env.BACK_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Database connected successfully");
      const foodDataPromise = mongoose
           .connection.db.collection("foodData")
        .find({})
        .toArray();
        // console.log(foodDataPromise);
        const foodCategoryPromise = mongoose
                .connection.db.collection("foodCategory")
                .find({})
                .toArray();
                // console.log(foodCategoryPromise);   
                Promise.all([foodDataPromise, foodCategoryPromise])
        .then(([FoodItems, FoodCategory]) => {
          global.FoodItems = FoodItems;
          global.FoodCategory = FoodCategory;
          // console.log("Food data:", global.FoodItems);
          // console.log("Food category:", global.FoodCategory);
        }) 
        .catch((error) => {
          console.log("Error while fetching data:", error);
        });
})

.catch((err) => {
    console.log(`Error: ${err.message}`);
})
}

module.exports = mongoDB;








