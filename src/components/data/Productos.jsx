let productos = [
  {
    id: 1,
    product_name: "Apple Watch Series 3 ",
    description: "Hands-free, Hands-on Much Experience",
    price:650,
    image: 'https://cdn.shopify.com/s/files/1/0137/0292/2286/products/1_400x.png?v=1638005392'
  },
  {
    id: 3,
    product_name: "Galaxy Watch 4",
    description: "Hands-free, Hands-on Much Experience",
    price:800,
    image: "https://santimaria.com.ar/wp-content/uploads/2021/10/SAMSUNG_SMARTWATCH_4_SILVER_44_MM-removebg-preview-400x400.png"
  },
  {
    id: 3,
    product_name: "Galaxy Watch Pro",
    description: "Hands-free, Hands-on Much Experience",
    price:950,
    image: "https://cdn.shopify.com/s/files/1/0137/0292/2286/products/Black_1_ad2af7f7-fc8d-4ebb-8a08-34197018a691_400x.png?v=1651059035"
  },
]

export const getFetch = new Promise((respuesta, rejected) => {
  let url = productos
  if (url=== productos) {

    setTimeout(() => {
      respuesta(productos);
    }, 2000);
  } else {
    rejected('400 not found');
  }
})
