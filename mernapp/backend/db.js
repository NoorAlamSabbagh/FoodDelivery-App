const mongoose = require('mongoose');
const mongoDB = () => {
mongoose.connect("mongodb://localhost:27017/AlamFood")
.then(() => {
    console.log(`database connection successful`);
    const foodDataPromise = mongoose
           .connection.db.collection("FoodItems")
        .find({})
        .toArray();
        // console.log(foodDataPromise);
        const foodCategoryPromise = mongoose
                .connection.db.collection("FoodCategory")
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










// //
// const mongoose = require('mongoose');

// const mongoDB = () => {
//   mongoose
//   .connect("mongodb://localhost:27017/AlamFood")
//     .then(() => {
//       console.log("Database connected successfully")
    
//     //   const foodDataPromise = mongoose
//     //     .connection.db.collection("FoodItems")
//     //     .find({})
//     //     .toArray();
//     //   const foodCategoryPromise = mongoose
//     //     .connection.db.collection("FoodCategory")
//     //     .find({})
//     //     .toArray();
//     //   Promise.all([foodDataPromise, foodCategoryPromise])
//     //     .then(([FoodItems, FoodCategory]) => {
//     //       global.FoodItems = FoodItems;
//     //       global.FoodCategory = FoodCategory;
//     //     //   console.log("Food data:", global.FoodItems);
//     //     //   console.log("Food category:", global.foodCategory);
//     //     })
//         // .catch((error) => {
//         //   console.log("Error while fetching data:", error);
//         // });
//     })
//     .catch((error) => {
//       console.log("Error while connecting to the database:", error);
//     });
// };

// module.exports = mongoDB;





//
// const mongoose = require('mongoose');
// const {connect} = require('mongoose');

// const mongoDB = async() =>{
// await mongoose.connect('mongodb://localhost:27017/AlamFood')
// .then(() => {
//     console.log(`connection with DB successful`);
//     const fetched_data =  mongoose.connections.db.collection("FoodItems");
//     fetched_data.find({}).toArray(function(err, data){
//         if(err) console.log(err);
//         else{
//             global.food_items = data;
//             console.log(global.food_items);
//         }
//     })
// })
// .catch(() => {
//     console.log(`something went wrong!!`);
// })
// }