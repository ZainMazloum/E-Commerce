export interface ProductType {
    id: number;
    productName: string;
    price: number;
    productImage: string;
}

export const PRODUCTS: ProductType[] = [
    {
        id: 1,
        productName: "Apple iPhone 15 Pro",
        price: 999.99,
        productImage: "/iphone.jpg"
    },
    {
        id: 2,
        productName: "MacBook Pro M3 (14-inch)",
        price: 1999.00,
        productImage: "/laptop.jpg" // Placeholder image path
    },
    {
        id: 3,
        productName: "Sony Alpha A7 IV Camera",
        price: 2499.50,
        productImage: "/camera.jpg" // Placeholder image path
    },
    {
        id: 4,
        productName: "Samsung Galaxy S24 Ultra",
        price: 1199.00,
        productImage: "/mobile.jpg" // Placeholder image path
    },
    {
        id: 5,
        productName: "Bose QuietComfort Headphones",
        price: 349.00,
        productImage: "/headphones.jpg" // Placeholder image path
    },
    {
        id: 6,
        productName: "LG 4K Ultra HD Monitor",
        price: 450.99,
        productImage: "/monitor.jpg" // Placeholder image path
    },
    {
        id: 7,
        productName: "Amazon Kindle Paperwhite",
        price: 139.99,
        productImage: "/kindle.jpg" // Placeholder image path
    },
    {
        id: 8,
        productName: "Apple Watch Series 9",
        price: 429.00,
        productImage: "/watch.jpg" // Placeholder image path
    },
];