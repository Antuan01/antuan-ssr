const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("conepto bebex")// we're connected!
});

 const { Schema } = mongoose;

  const productSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    date: { type: Date, default: Date.now },
  });


const Product = mongoose.model('Product', productSchema);

const shoes = new Product({title: "Nike shoes"});

console.log(shoes.title);

//shoes.save(function (err, fluffy) {
//  if (err) return console.error(err);
//  console.log("saved");
//});

Product.find(function (err, products) {
  if (err) return console.error(err);
  console.log(products);
})
