import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    title:  String, // String is shorthand for {type: String}
    date: { type: Date, default: Date.now },
});

ProductSchema.method();

ProductSchema.static();

let Product;

try {
  // Trying to get the existing model to avoid OverwriteModelError
  Product = mongoose.model("Product");
} catch {
  Product = mongoose.model("Product", ProductSchema);
}

export default Product;

//export default mongoose.model('Product', ProductSchema);
