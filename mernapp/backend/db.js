const {connect} = require('mongoose');


connect('mongodb://localhost:27017/AlamFood')
.then(() => {
    console.log(`connection with DB successful`);
})
.catch(() => {
    console.log(`something went wrong!!`);
})