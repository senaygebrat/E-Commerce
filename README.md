# E-Commerce Back End

![Preview](./Assets/images/ecommerce.gif)

## Description
E-Commerce is an app that allows a user to get, create, update, and delete data in the database. Please refer to the [video](https://youtu.be/-UYPqTysXoM) for a walkthrough demonstration.

## Code Snippet

Below is a code snippet of the associations of the models utilized in the app.
```
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {foreignKey: "category_id"});
Category.hasMany(Product, {foreignKey: "category_id"})
Product.belongsToMany(Tag, {through: ProductTag, foreignKey: "product_id"})
Tag.belongsToMany(Product, {through: ProductTag, foreignKey: "tag_id"})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
```

## Technologies Used
NodeJS, MySQL2, Express, and Sequelize.


## Questions
If you have any questions about the repository, open an issue or contact me directly at senaygebrat@gmail.com. You can find more of my work at [my Github](https://github.com/senaygebrat?tab=repositories), and my contact information at [LinkedIn](https://linkedin.com/in/senayg).
