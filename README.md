# Archived by Abby — Easier Article Editor Version

The article pages now use simple content blocks in `app.js`.

## Add a paragraph
```js
{ type: "paragraph", text: "Your paragraph text here." },
```

## Add a heading
```js
{ type: "heading", text: "My Section Title" },
```

## Add a button
```js
{ type: "button", text: "Buy On Amazon", link: "https://www.amazon.com/" },
```

## Add an inline image
```js
{ type: "image", src: "assets/my-image.jpg", alt: "Description of image" },
```

## Add a product card
```js
{
  type: "product",
  name: "Product Name",
  image: "assets/product-image.jpg",
  link: "https://www.amazon.com/",
  button: "Buy On Amazon",
  copy: "Short product description here."
},
```

## Add a note/callout
```js
{ type: "note", text: "Quick note or affiliate reminder here." },
```

## Add a list
```js
{ type: "list", items: ["Item one", "Item two", "Item three"] },
```

Important: keep commas between blocks.

## Product title numbering
Product titles are not numbered automatically. The site will display exactly what you type in the `name` field.

Example with no number:
```js
{ type: "product", name: "This Thing", image: "assets/amazon-product.jpg", link: "https://www.amazon.com/", button: "Buy On Amazon", copy: "Description here." }
```

Example with a manual number:
```js
{ type: "product", name: "1. This Thing", image: "assets/amazon-product.jpg", link: "https://www.amazon.com/", button: "Buy On Amazon", copy: "Description here." }
```
{
  type: "image",
  image: "assets/nas.jpg",
  alt: "Nasturtiums in bloom",
},
{
  type: "caption",
  text: "Nasturtiums are colorful edible flowers that work well in containers.",
},
{
  type: "heading",
  text: "1. Nasturtiums",
},
{
  type: "paragraph",
  text: "Nasturtiums are one of my favorite edible flowers for container planting because they are colorful, easy to grow, and completely edible.",
},

'Photo by <a style="text-decoration: underline;" href="https://unsplash.com/@brittnixon">Brittany N</a> on <a style="text-decoration: underline;" href="https://unsplash.com/">Unsplash</a>'
