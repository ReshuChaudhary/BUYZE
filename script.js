let products = [];
let filteredProducts = [];

let cart = JSON.parse(localStorage.getItem("buyzyCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("buyzyWishlist")) || [];
let orders = JSON.parse(localStorage.getItem("buyzyOrders")) || [];
let account = JSON.parse(localStorage.getItem("buyzyAccount")) || null;

let currentProduct = null;


/* ================= PRODUCTS ================= */

const PRODUCT_DATA = {

    beauty: [
        {
            title: "BB Cream",
            price: 999,
            image: "images/BB-Cream.jpg"
        },

        {
            title: "Vitamin C Face Serum",
            price: 699,
            image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800"
        },

        {
            title: "HilariRhoda Blush",
            price: 249,
            image: "images/Blushes.jpg"
        },
        {
            title: "Cetaphil Cleanser",
            price: 489,
            image: "images/Cleanser.jpg"
        },
        {
            title: "Detan Mask",
            price: 549,
            image: "images/Detan-mask.webp"
        },
        {
            title: "Glow-Up Cream",
            price: 650,
            image: "images/Glow-up-cream.jpg"
        },
        {
            title: "Hair Dryer",
            price: 1299,
            image: "images/Hair-dryer.jpg"
        },
        {
            title: "Mars Double Mascara",
            price: 449,
            image: "images/Mars-mascara.jpg"
        },
        {
            title: "Matte Mars Lipstics Set",
            price: 630,
            image: "images/Matte-lipstics.jpg"
        },
        {
            title: "Moisturizer",
            price: 750,
            image: "images/Moisturising-Cream.jpg"
        },
        {
            title: "Dot and Key Sunscreen",
            price: 599,
            image: "images/Sunscreen.jpg"
        },
        {
            title: "Tinted Dot and Key Sunscren",
            price: 479,
            image: "images/Tinted-sunscreen.jpg"
        },
        {
            title: "Water Lip Tint",
            price: 372,
            image: "images/water-tint.jpg"
        },
        
        {
            title: "Hydrating Moisturizer",
            price: 599,
            image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800"
        },
        {
            title: "SPF 50 Sunscreen",
            price: 749,
            image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800"
        },
        {
            title: "Face Wash",
            price: 399,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800"
        }
    ],

    clothes: [
        {
        title: "pink viral Dress",
        price: 1599,
        image: "images/premiumlookdress.jpg"
    },
    {
        title: "Baggy jeans for women's",
        price: 1499,
        image: "images/baggyjeans.jpg"
    },
    {
        title: "Bodycon gor Girlies",
        price: 1900,
        image: "images/bodycon.jpg"
    },{
        title: "Bodycon Mini Dress",
        price: 1200,
        image: "images/bodyconminidress.jpg"
    },{
        title: "Classy College Outfit",
        price: 1689,
        image: "images/classycollegefit.jpg"
    },{
        title: "Viral Denim Skirt",
        price: 2399,
        image: "images/denimskirt.jpg"
    },{
        title: "Elegant Saree",
        price: 3590,
        image: "images/elegantsareeforgirls.jpg"
    },{
        title: "Classy wear Top",
        price: 990,
        image: "images/eleganttop.jpg"
    },{
        title: "Straight fit Jeans",
        price: 1499,
        image: "images/jeans.jpg"
    },{
        title: "Formal outfit for Women's",
        price: 2180,
        image: "images/formalforwomens.jpg"
    },{
        title: "Viral Leather jackets",
        price: 2500,
        image: "images/leatherjackets.jpg"
    },{
        title: "Black one Shoulder Gown",
        price: 1566,
        image: "images/oneshouldergown.jpg"
    },{
        title: "Oversized Tshirt",
        price: 899,
        image: "images/oversized-tshirt.webp"
    },{
        title: "Oversized Tops",
        price: 1200,
        image: "images/oversizetshirt.jpg"
    },{
        title: "Party Wear Suit",
        price: 3500,
        image: "images/partywearsuit.jpg"
    },{
        title: "Short Kurti With Jeans",
        price: 450,
        image: "images/shortkurtiwithjeans.jpg"
    },{
        title: "Silk Elegant sareee",
        price: 4400,
        image: "images/silksaree.jpg"
    },{
        title: "Men's Soft black Shirt",
        price: 1499,
        image: "images/softblackmenshirt.jpg"
    },{
        title: "Stylish Trendy Shirt Kurti",
        price: 999,
        image: "images/stylishkurti.png"
    },{
        title: "Top with Jeans",
        price: 1800,
        image: "images/topwithjeans.png"
    },{
        title: "Premium Outfit",
        price: 1499,
        image: "images/trendyfashion.jpg"
    },{
        title: "Viral Suit",
        price: 4100,
        image: "images/trendysuit.jpg"
    },{
        title: "Bodycon Dress",
        price: 3500,
        image: "images/viralbodycon.jpg"
    },{
        title: "Elegant viral colour Dress",
        price: 1499,
        image: "images/viralcolourdress.jpg"
    },
    {
        title: "V Neck Short Kurti",
        price: 399,
        image: "images/vneckshortkurti.jpg"
    },
    {
        title: "Girls Trendy Outfit",
        price: 1990,
        image: "images/girlswear.png"
    },
    {
        title: "Winter Outfit For Women's",
        price: 2569,
        image: "images/winteroutfitforwomens.png"
    },
    {
        title: "Top",
        price: 1399,
        image: "images/womenstop.jpg"
    },
    {
        title: "Black Bodycon Dress",
        price: 1499,
        image: "images/black-bodycon.jpg"
    },
    {
        title: "Blue Baggy Jeans",
        price: 895,
        image: "images/baggy-jeans.webp"
    },
    {
        title: "Black Crop Top",
        price: 699,
        image: "images/black-crop-top.jpg"
    },
    {
        title: "White Crop Top",
        price: 749,
        image: "images/white-crop-top.webp"
    },
    {
        title: "Jeans Top",
        price: 1499,
        image: "images/jeans-top.jpg"
    },
    {
        title: "Oversized T-Shirt",
        price: 899,
        image: "images/oversized-tshirt.webp"
    },
    {
        title: "Fitted Top",
        price: 1599,
        image: "images/fitted-tops.webp"
    },
    {
        title: "Suit Salwar",
        price: 1599,
        image: "images/suit-salwar.webp"
    }
],

    shoes: [

        {
            title: "White Sneakers",
            price: 1699,
            image: "images/white-sneakers.webp"
        },
         
        {
            title: "YSL Heels",
            price: 249000,
            image: "images/Ysl-heels.webp"
        },

        {
            title: "Redtape Sneakers",
            price: 3555,
            image: "images/Redtape-sneakers.webp"
        },

        {
            title: "PUMA White Sneakers",
            price: 2500,
            image: "images/puma-sneakers.jpg"
        },

        {
            title: "PUMA Slippers",
            price: 1999,
            image: "images/puma-slippers.avif"
        },

        {
            title: "LV Heels",
            price: 155000,
            image: "images/lv-heels.webp"
        },

        {
            title: "Loafers For Mens",
            price: 765,
            image: "images/loafers-mens.webp"
        },

        {
            title: "Punjabi Jutti",
            price: 550,
            image: "images/jutti.webp"
        },

        {
            title: "Women's jutti",
            price: 999,
            image: "images/jutti-women.webp"
        },

        {
            title: "Girls Crocs",
            price: 789,
            image: "images/crocs.webp"
        },

        {
            title: "Chelsea Boots",
            price: 1560,
            image: "images/chelsea-boots.webp"
        },

        {
            title: "Campus 0ss Shoes",
            price: 3099,
            image: "images/campus-shoes.webp"
        },

        {
            title: "Sports shoes",
            price: 1799,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
        },
        {
            title: "Colourful Heels",
            price: 1899,
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800"
        },
        {
            title: "Red Sneakers",
            price: 2199,
            image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800"
        }
    ],
    

    fragrances: [
        {
            title: "Christian Dior Perfume",
            price: 2499,
            image: "images/Christian-dior-perfume.jpg"
        },

        {
            title: "EAU DE Parfum",
            price: 1888,
            image: "images/eau-de-parfum.jpg"
        },

         {
            title: "Mens Parfum",
            price: 989,
            image: "images/mens-perfume.jpg"
        },
        
        {
            title: "Versace Amber Parfum",
            price: 1888,
            image: "images/versace-amber-perfume.jpg"
        },

        {
            title: "Yves Saint Parfum",
            price: 1888,
            image: "images/yves-saint-parfum.jpg"
        },

        {
            title: "Yves Saint Laurent Parfum",
            price: 1888,
            image: "images/yves-saint-laurent-perfume.jpg"
        },

        {
            title: "Luxury Floral Perfume",
            price: 1299,
            image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800"
        },
        {
            title: "Vanilla Amber Perfume",
            price: 1499,
            image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800"
        },
        {
            title: "Elegant Rose Perfume",
            price: 1199,
            image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800"
        }
    ],

    bags: [
        {
            title: "Lauren Ralph Bag",
            price: 25888,
            image: "images/lauren-ralph-bags.jpg"
        }, 

        {
            title: "Dark Brown Bag",
            price: 10990,
            image: "images/dark-brown-bag.jpg"
        }, 

        {
            title: "Lavie Paris Bag",
            price: 55099,
            image: "images/lavie-paris-bags.jpg"
        }, 

        {
            title: "LV Bag",
            price: 25000,
            image: "images/lv-bag.jpg"
        }, 

        {
            title: "Pack of 3 Bags",
            price: 15990,
            image: "images/packof3-bag.jpg"
        }, 

        {
            title: "PUMA Bags",
            price: 20999,
            image: "images/puma-bags.jpg"
        },
{
            title: "SYGA Women's HandBag",
            price: 205000,
            image: "images/syga-bag.jpg"
        }, 

        {
            title: "SYGA HandBag",
            price: 15900,
            image: "images/syga-bags.jpg"
        }, 

        {
            title: "YSL HandBags",
            price: 199000,
            image: "images/ysl-bags.jpg"
        }, 

        {
            title: "Lauren Ralph Bags",
            price: 1999,
            image: "images/lauren-ralph-bags.jpg"
        }, 

        {
            title: "Classic Black Handbag",
            price: 1999,
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800"
        },
        {
            title: "Mini Shoulder Bag",
            price: 1499,
            image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800"
        },
        {
            title: "Elegant Tote Bag",
            price: 1799,
            image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800"
        }
    ],

    furniture: [
        {
            title: "Modern Lounge Chair",
            price: 4999,
            image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800"
        },

         {
            title: "Leather Sofa",
            price: 32099,
            image: "images/leathersofa.webp"
        },

         {
            title: "Living Room Set",
            price: 56780,
            image: "images/livingroomset.jpg"
        },
         {
            title: "Luxury Hall Set",
            price: 78000,
            image: "images/luxuryhall.jpg"
        },
         {
            title: "Outdoor Furniture Stock",
            price: 48999,
            image: "images/outdoorstock.webp"
        },
         {
            title: "Wooden stock",
            price: 5000,
            image: "images/teakwood.webp"
        },
         {
            title: "Wooden Chairs Set",
            price: 2300,
            image: "images/woodenstock.webp"
        },
         {
            title: "Modern Lounge Chair",
            price: 11999,
            image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800"
        },
        {
            title: "Set of Chairs",
            price: 4450,
            image: "images/chairs.jpg"
        },
        {
            title: "Wooden Coffee Table",
            price: 3999,
            image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800"
        }
    ], 
    
    jewellery: [
    {
        title: "Diamond Cascade Manglasutra",
        price: 24000,
        image: "images/diamondcascade-manglasutra.jpg"
    },
    {
        title: "Diamond Ring",
        price: 355999,
        image: "images/diamondring.jpg"
    },
    {
        title: "Floram Earrings",
        price: 3400,
        image: "images/floralearrings.jpg"
    },
    {
        title: "Gold Bracelets",
        price: 79000,
        image: "images/gold-bracelets.jpg"
    },

    {
        title: "Gold Earrings",
        price: 129000,
        image: "images/gold-earrings.jpg"
    },

    {
        title: "Multi Layered Necklace",
        price: 155099,
        image: "images/multilayered-necklace.jpg"
    },
    {
        title: "Pendant Set",
        price: 99000,
        image: "images/pendantset.jpg"
    },
    {
        title: "Premium Look Necklace",
        price: 88800,
        image: "images/primiumlook-necklace.jpg"
    },
     {
        title: "Promise Ring",
        price: 28999,
        image: "images/promisering.jpg"
    },
     {
        title: "Diamond Bracelet",
        price: 139000,
        image: "images/diamond-bracelet.jpg"
    }

],

accessories: [
    {
        title: "Wooden Hair Comb",
        price: 189,
        image: "images/wooden-hair-comb.jpg"
    },
    {
        title: "Table Lamp",
        price: 350,
        image: "images/tablelamp.jpg"
    },
    {
        title: "Peacock Flower Hair Clips",
        price: 99,
        image: "images/peacock-flower-hairclips.jpg"
    },
    {
        title: "Metal Chain Brecelet",
        price: 980,
        image: "images/metal-chain-bracelet.jpg"
    },
    {
        title: "Luggage Set",
        price: 3500,
        image: "images/luggage-set.jpg"
    },
    {
        title: "Holder Box",
        price: 89,
        image: "images/holderbos.jpg"
    },
    {
        title: "Hair pin",
        price: 123,
        image: "images/hairpin.jpg"
    },
    {
        title: "Fashion Hair Bow Clips",
        price: 150,
        image: "images/habowirclips.jpg"
    },
     {
        title: "Elegant Hair Claw Clips Set",
        price: 199,
        image: "images/eleganthairclawclipsset.jpg"
    },
    {
        title: "pack of 3 of Hoop Earrings Set",
        price: 1560,
        image: "images/3pack-hoopearringset.jpg"
    }

]
};


/* ================= CATEGORY ICONS ================= */

const CATEGORY_ICONS = {
    beauty: "💄",
    clothes: "👗",
    shoes: "👟",
    fragrances: "🌸",
    bags: "👜",
    furniture: "🛋️",
    jewellery: "💍",
    accessories: "🕶️"
};


/* ================= CREATE PRODUCTS ================= */

function createProducts() {

    let id = 1;

    products = [];

    Object.keys(PRODUCT_DATA).forEach(category => {

        PRODUCT_DATA[category].forEach(item => {

            products.push({
                id: id++,
                title: item.title,
                category: category,
                price: item.price,
                rating: 4.5,
                description:
                    item.title +
                    " is a quality product available at BUYZY.",
                thumbnail: item.image,
                images: [item.image]
            });

        });

    });

    filteredProducts = [...products];
}


/* ================= PRICE ================= */

function formatPrice(price) {
    return "₹" + Number(price).toLocaleString("en-IN");
}


/* ================= SAVE ================= */

function saveData() {

    localStorage.setItem(
        "buyzyCart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "buyzyWishlist",
        JSON.stringify(wishlist)
    );

    localStorage.setItem(
        "buyzyOrders",
        JSON.stringify(orders)
    );

    localStorage.setItem(
        "buyzyAccount",
        JSON.stringify(account)
    );
}


/* ================= COUNTS ================= */

function updateCounts() {

    const wishCount =
        document.getElementById("wishCount");

    const cartCount =
        document.getElementById("cartCount");

    if (wishCount) {
        wishCount.textContent = "";
    }

    if (cartCount) {

        cartCount.textContent =
            cart.reduce(
                (total, item) =>
                    total + item.quantity,
                0
            );
    }
}


/* ================= PRODUCT CARD ================= */

function createProductCard(product) {

    const liked =
        wishlist.includes(product.id);

    return `
        <div class="product-card">

            <div
                class="product-image-box"
                onclick="showProduct(${product.id})"
            >

                <img
                    src="${product.thumbnail}"
                    alt="${product.title}"
                    loading="lazy"
                >

                <button
                    class="wishlist-heart ${liked ? "active" : ""}"
                    onclick="event.stopPropagation(); toggleWishlist(${product.id})"
                >
                    ${liked ? "♥" : "♡"}
                </button>

            </div>

            <div class="product-info">

                <div class="product-category">
                    ${capitalize(product.category)}
                </div>

                <h3
                    class="product-name"
                    onclick="showProduct(${product.id})"
                >
                    ${product.title}
                </h3>

                <div class="product-rating">
                    ★ ${product.rating}
                </div>

                <div class="price">
                    ${formatPrice(product.price)}
                </div>

                <button
                    class="add-cart-btn"
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>

            </div>

        </div>
    `;
}


/* ================= RENDER PRODUCTS ================= */
function renderHomepageProducts() {

    const homepageProducts = [];

    Object.keys(PRODUCT_DATA).forEach(category => {

        const product = products.find(
            item => item.category === category
        );

        if (product) {
            homepageProducts.push(product);
        }

    });

    renderProducts(homepageProducts);
}
function renderProducts(list = filteredProducts) {

    const container =
        document.getElementById(
            "productContainer"
        );

    const loading =
        document.getElementById("loading");

    const resultText =
        document.getElementById("resultText");

    if (!container) return;

    if (loading) {
        loading.style.display = "none";
    }

    if (resultText) {
        resultText.textContent =
            `${list.length} Products`;
    }

    if (!list.length) {

        container.innerHTML = `
            <div class="no-products">
                <h3>No products found</h3>
                <p>Try searching something else.</p>
            </div>
        `;

        return;
    }

    container.innerHTML =
        list.map(createProductCard).join("");
}


/* ================= SEARCH ================= */

function searchProducts() {

    const input =
        document.getElementById(
            "searchInput"
        );

    const value =
        input
            ? input.value.trim().toLowerCase()
            : "";

    if (!value) {

        filteredProducts =
            [...products];

    } else {

        filteredProducts =
            products.filter(product =>
                product.title
                    .toLowerCase()
                    .includes(value) ||

                product.category
                    .toLowerCase()
                    .includes(value)
            );
    }

    showPage("home");
    renderProducts();
    scrollToProducts();
}


/* ================= SEARCH ENTER ================= */

function setupSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );

    if (!input) return;

    input.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {
                searchProducts();
            }

        }
    );
}


/* ================= FILTER ================= */

function filterProducts(category) {

    if (category === "all") {

        filteredProducts =
            [...products];

    } else if (category === "fragrances") {

        filteredProducts =
            products.filter(
                product =>
                    product.category === "fragrances"
            );

    } else if (category === "furniture") {

        filteredProducts =
            products.filter(
                product =>
                    product.category === "furniture"
            );

    } else if (category === "groceries") {

        filteredProducts =
            products.filter(
                product =>
                    product.category === "shoes" ||
                    product.category === "bags"
            );

    } else {

        filteredProducts =
            products.filter(
                product =>
                    product.category === category
            );
    }

    showPage("home");

    renderProducts();

    scrollToProducts();
}


/* ================= SCROLL ================= */

function scrollToProducts() {

    const section =
        document.querySelector(
            ".products-section"
        );

    if (section) {

        setTimeout(() => {

            section.scrollIntoView({
                behavior: "smooth"
            });

        }, 100);
    }
}


/* ================= PAGE ================= */

function showPage(page) {

    document
        .querySelectorAll(".page")
        .forEach(section => {

            section.classList.remove("active");

        });

    const element =
        document.getElementById(
            page + "Page"
        );

    if (element) {
        element.classList.add("active");
    }

    if (page === "wishlist") {
        renderWishlist();
    }

    if (page === "cart") {
        renderCart();
    }

    if (page === "account") {
        renderAccount();
    }

    if (page === "checkout") {
        renderCheckout();
    }

    if (page === "orders") {
        renderOrders();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================= PRODUCT DETAILS ================= */

function showProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;

    currentProduct = product;

    const container =
        document.getElementById(
            "productDetails"
        );

    if (!container) return;

    container.innerHTML = `

        <div class="details-box">

            <div>

                <img
                    class="details-image"
                    src="${product.thumbnail}"
                    alt="${product.title}"
                >

            </div>

            <div class="details-info">

                <div class="category">
                    ${capitalize(product.category)}
                </div>

                <h1>
                    ${product.title}
                </h1>

                <div class="product-rating">
                    ★ ${product.rating}
                </div>

                <p class="details-description">
                    ${product.description}
                </p>

                <div class="details-price">
                    ${formatPrice(product.price)}
                </div>

                <button
                    class="primary-btn"
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>

                <button
                    class="secondary-btn"
                    onclick="toggleWishlist(${product.id})"
                >
                    ${
                        wishlist.includes(product.id)
                        ? "♥ Remove Wishlist"
                        : "♡ Add Wishlist"
                    }
                </button>

            </div>

        </div>
    `;

    showPage("product");
}


/* ================= WISHLIST ================= */

function toggleWishlist(id) {

    const index =
        wishlist.indexOf(id);

    if (index === -1) {

        wishlist.push(id);

        showToast(
            "Added to Wishlist ♡"
        );

    } else {

        wishlist.splice(index, 1);

        showToast(
            "Removed from Wishlist"
        );
    }

    saveData();
    updateCounts();
    renderProducts();

    const wishlistPage =
        document.getElementById(
            "wishlistPage"
        );

    if (
        wishlistPage &&
        wishlistPage.classList.contains("active")
    ) {
        renderWishlist();
    }
}


/* ================= WISHLIST PAGE ================= */

function renderWishlist() {

    const container =
        document.getElementById(
            "wishlistContainer"
        );

    if (!container) return;

    const items =
        products.filter(
            product =>
                wishlist.includes(product.id)
        );

    if (!items.length) {

        container.innerHTML = `
            <div class="no-products">

                <h3>
                    Your wishlist is empty ♡
                </h3>


                <p>
                    Save products you love here.
                </p>


                <button
                    class="primary-btn"
                    onclick="showPage('home')"
                >
                    Explore Products
                </button>

            </div>
        `;

        return;
    }

    container.innerHTML =
        items.map(createProductCard).join("");
}


/* ================= CART ================= */

function addToCart(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;

    const existing =
        cart.find(
            item => item.id === id
        );

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.thumbnail,
            quantity: 1
        });
    }

    saveData();
    updateCounts();

    showToast(
        "Added to Cart 🛒"
    );
}


/* ================= QUANTITY ================= */

function changeQuantity(id, amount) {

    const item =
        cart.find(
            product =>
                product.id === id
        );

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product =>
                    product.id !== id
            );
    }

    saveData();
    updateCounts();
    renderCart();
}


/* ================= REMOVE CART ================= */

function removeFromCart(id) {

    cart =
        cart.filter(
            item =>
                item.id !== id
        );

    saveData();
    updateCounts();
    renderCart();

    showToast(
        "Item removed"
    );
}


/* ================= TOTAL ================= */

function getCartTotal() {

    return cart.reduce(
        (total, item) =>
            total +
            item.price * item.quantity,
        0
    );
}


/* ================= RENDER CART ================= */

function renderCart() {

    const container =
        document.getElementById(
            "cartContainer"
        );

    if (!container) return;

    if (!cart.length) {

        container.innerHTML = `
            <div class="no-products">

                <h3>
                    Your cart is empty 🛒
                </h3>

                <p>
                    Add products to continue shopping.
                </p>

                <button
                    class="primary-btn"
                    onclick="showPage('home')"
                >
                    Start Shopping
                </button>

            </div>
        `;

        return;
    }

    let html = "";

    cart.forEach(item => {

        html += `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.title}"
                >

                <div class="cart-item-info">

                    <h3>
                        ${item.title}
                    </h3>

                    <p>
                        ${formatPrice(item.price)}
                    </p>

                    <div class="quantity">

                        <button
                            onclick="changeQuantity(${item.id},-1)"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="changeQuantity(${item.id},1)"
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${item.id})"
                >
                    Remove
                </button>

            </div>
        `;
    });

    container.innerHTML = `

        <div class="cart-layout">

            <div class="cart-items">
                ${html}
            </div>

            <div class="cart-summary">

                <h3>
                    Order Summary
                </h3>

                <div class="summary-row">

                    <span>Items</span>

                    <span>
                        ${cart.reduce(
                            (sum, item) =>
                                sum + item.quantity,
                            0
                        )}
                    </span>

                </div>

                <div class="summary-row">

                    <span>Delivery</span>

                    <span>FREE</span>

                </div>

                <div class="summary-total">

                    <span>Total</span>

                    <strong>
                        ${formatPrice(
                            getCartTotal()
                        )}
                    </strong>

                </div>

                <button
                    class="primary-btn full-btn"
                    onclick="goToCheckout()"
                >
                    Proceed to Checkout
                </button>

            </div>

        </div>
    `;
}


/* ================= CHECKOUT ================= */

function goToCheckout() {

    if (!cart.length) {

        showToast(
            "Your cart is empty"
        );

        return;
    }

    showPage("checkout");
}


function renderCheckout() {

    const container =
        document.getElementById(
            "checkoutItems"
        );

    const total =
        document.getElementById(
            "checkoutTotal"
        );

    if (!container) return;

    if (!cart.length) {

        container.innerHTML =
            "<p>Your cart is empty.</p>";

        if (total) {
            total.textContent = "₹0";
        }

        return;
    }

    container.innerHTML =
        cart.map(item => `

            <div class="checkout-product">

                <img
                    src="${item.image}"
                    alt="${item.title}"
                >

                <div>

                    <strong>
                        ${item.title}
                    </strong>

                    <p>
                        ${item.quantity} ×
                        ${formatPrice(item.price)}
                    </p>

                </div>

            </div>

        `).join("");

    if (total) {

        total.textContent =
            formatPrice(
                getCartTotal()
            );
    }
}


/* ================= PLACE ORDER ================= */

function placeOrder() {

    if (!cart.length) {

        showToast(
            "Your cart is empty"
        );

        return;
    }

    const name =
        document.getElementById(
            "fullName"
        )?.value.trim();

    const phone =
        document.getElementById(
            "phone"
        )?.value.trim();

    const address =
        document.getElementById(
            "address"
        )?.value.trim();

    const city =
        document.getElementById(
            "city"
        )?.value.trim();

    const state =
        document.getElementById(
            "state"
        )?.value.trim();

    const pincode =
        document.getElementById(
            "pincode"
        )?.value.trim();

    if (
        !name ||
        !phone ||
        !address ||
        !city ||
        !state ||
        !pincode
    ) {

        showToast(
            "Please fill all delivery details"
        );

        return;
    }

    const payment =
        document.querySelector(
            'input[name="payment"]:checked'
        )?.value || "COD";

    const orderId =
        "BZ" +
        Date.now()
            .toString()
            .slice(-8);

    const order = {

        id: orderId,

        date:
            new Date()
                .toLocaleString("en-IN"),

        customer: {
            name,
            phone,
            address,
            city,
            state,
            pincode
        },

        payment,

        items: [...cart],

        total: getCartTotal(),

        status: "Confirmed"
    };

    orders.unshift(order);

    cart = [];

    saveData();
    updateCounts();

    const orderNumber =
        document.getElementById(
            "orderNumber"
        );

    if (orderNumber) {
        orderNumber.textContent =
            "Order ID: " + orderId;
    }

    showPage("order");

    showToast(
        "Order placed successfully ✓"
    );
}


/* ================= ORDERS ================= */

function renderOrders() {

    const container =
        document.getElementById(
            "ordersContainer"
        );

    if (!container) return;

    if (!orders.length) {

        container.innerHTML = `
            <div class="no-products">

                <h3>
                    No orders yet 📦
                </h3>

                <p>
                    Your orders will appear here.
                </p>

            </div>
        `;

        return;
    }

    container.innerHTML =
        orders.map(order => `

            <div class="order-card">

                <div class="order-header">

                    <div>

                        <strong>
                            ${order.id}
                        </strong>

                        <p>
                            ${order.date}
                        </p>

                    </div>

                    <div class="order-status">
                        ${order.status}
                    </div>

                </div>

                ${order.items.map(item => `

                    <div class="order-product">

                        <img
                            src="${item.image}"
                            alt="${item.title}"
                        >

                        <div>

                            <strong>
                                ${item.title}
                            </strong>

                            <p>
                                ${item.quantity} ×
                                ${formatPrice(item.price)}
                            </p>

                        </div>

                    </div>

                `).join("")}

                <div class="summary-total">

                    <span>Total</span>

                    <strong>
                        ${formatPrice(
                            order.total
                        )}
                    </strong>

                </div>

            </div>

        `).join("");
}


/* ================= ACCOUNT ================= */

function renderAccount() {

    const container =
        document.getElementById(
            "accountContent"
        );

    if (!container) return;

    if (!account) {

        container.innerHTML = `

            <div class="account-form">

                <h3>
                    Create Your Account
                </h3>

                <input
                    id="accountName"
                    type="text"
                    placeholder="Full Name"
                >

                <input
                    id="accountEmail"
                    type="email"
                    placeholder="Email Address"
                >

                <input
                    id="accountPhone"
                    type="text"
                    placeholder="Phone Number"
                >

                <button
                    class="primary-btn full-btn"
                    onclick="createAccount()"
                >
                    Create Account
                </button>

            </div>
        `;

        return;
    }

    container.innerHTML = `

        <div class="logged-account">

            <h3>
                Welcome, ${account.name} 👋
            </h3>

            <p>
                Email: ${account.email}
            </p>

            <p>
                Phone: ${account.phone}
            </p>

            <div class="account-menu">

                <button
                    onclick="showPage('wishlist')"
                >
                    ♡ My Wishlist
                </button>

                <button
                    onclick="showPage('orders')"
                >
                    📦 My Orders
                </button>

                <button
                    onclick="showPage('cart')"
                >
                    🛒 My Cart
                </button>

                <button
                    onclick="logoutAccount()"
                >
                    Logout
                </button>

            </div>

        </div>
    `;
}


function createAccount() {

    const name =
        document.getElementById(
            "accountName"
        )?.value.trim();

    const email =
        document.getElementById(
            "accountEmail"
        )?.value.trim();

    const phone =
        document.getElementById(
            "accountPhone"
        )?.value.trim();

    if (!name || !email || !phone) {

        showToast(
            "Please fill all details"
        );

        return;
    }

    account = {
        name,
        email,
        phone
    };

    saveData();

    renderAccount();

    showToast(
        "Account created successfully ✓"
    );
}


function logoutAccount() {

    account = null;

    saveData();

    renderAccount();

    showToast(
        "Logged out successfully"
    );
}


/* ================= TOAST ================= */

let toastTimer;

function showToast(message) {

    const toast =
        document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2200);
}


/* ================= CATEGORY BUTTONS ================= */

function setupCategoryButtons() {

    const buttons =
        document.querySelectorAll(
            ".category-bar button"
        );

    buttons.forEach(button => {

        const text =
            button.textContent
                .trim()
                .toLowerCase();

        if (text === "all") {

            button.onclick =
                () => filterProducts("all");

        } else if (text === "beauty") {

            button.onclick =
                () => filterProducts("beauty");

        } else if (text === "fragrances") {

            button.onclick =
                () => filterProducts("fragrances");

        } else if (text === "lifestyle") {

            button.onclick =
                () => filterProducts("furniture");

        } else if (text === "trending") {

            button.onclick =
                () => filterProducts("groceries");

        }

    });
}


/* ================= CATEGORY BOXES ================= */

function addCategorySection() {

    const productsSection =
        document.querySelector(
            ".products-section"
        );

    if (!productsSection) return;

    if (
        document.getElementById(
            "buyzyCategorySection"
        )
    ) return;

    const section =
        document.createElement("div");

    section.id =
        "buyzyCategorySection";

    const categories =
        Object.keys(PRODUCT_DATA);

    section.innerHTML = `

        <div class="buyzy-category-heading">

            <h2>
                Shop by Category
            </h2>

            <p>
                Explore our collection
            </p>

        </div>

        <div class="buyzy-category-grid">

            ${categories.map(category => `

                <div
                    class="buyzy-category-card"
                    onclick="filterProducts('${category}')"
                >

                    <div class="buyzy-category-icon">
                        ${CATEGORY_ICONS[category]}
                    </div>

                    <strong>
                        ${capitalize(category)}
                    </strong>

                </div>

            `).join("")}

        </div>
    `;

    productsSection.insertBefore(
        section,
        productsSection.querySelector(
            ".section-title"
        )
    );

    addCategoryCSS();
}


/* ================= CATEGORY CSS ================= */

function addCategoryCSS() {

    if (
        document.getElementById(
            "buyzyCategoryCSS"
        )
    ) return;

    const style =
        document.createElement("style");

    style.id =
        "buyzyCategoryCSS";

    style.textContent = `

        #buyzyCategorySection {
            margin: 5px 0 45px;
        }

        .buyzy-category-heading {
            margin-bottom: 22px;
        }

        .buyzy-category-heading h2 {
            font-family: Georgia, serif;
            font-size: 30px;
            margin-bottom: 6px;
        }

        .buyzy-category-heading p {
            color: #77717d;
            font-size: 14px;
        }

        .buyzy-category-grid {
            display: grid;
            grid-template-columns:
                repeat(4, 1fr);
            gap: 18px;
        }

        .buyzy-category-card {
            min-height: 155px;
            border-radius: 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            cursor: pointer;
            background:
                rgba(255,255,255,0.60);
            border:
                1px solid
                rgba(141,120,168,0.24);
            backdrop-filter: blur(14px);
            transition: 0.25s;
        }

        .buyzy-category-card:hover {
            transform: translateY(-5px);
            background: #ffffff;
            box-shadow:
                0 10px 30px
                rgba(68,53,82,0.10);
        }

        .buyzy-category-icon {
            font-size: 42px;
            margin-bottom: 10px;
        }

        .buyzy-category-card strong {
            color: #29252e;
            font-size: 15px;
        }

        .buyzy-category-card span {
            color: #77717d;
            font-size: 12px;
            margin-top: 5px;
        }

        @media (max-width: 700px) {

            .buyzy-category-grid {
                grid-template-columns:
                    repeat(2, 1fr);
                gap: 12px;
            }

            .buyzy-category-card {
                min-height: 130px;
            }
        }
    `;

    document.head.appendChild(style);
}


/* ================= CAPITALIZE ================= */

function capitalize(text) {

    return text.replace(
        /\b\w/g,
        letter => letter.toUpperCase()
    );
}


/* ================= START ================= */

function initializeBuyzy() {

    createProducts();

    updateCounts();

    renderHomepageProducts();

    setupSearch();

    setupCategoryButtons();

    addCategorySection();
}


document.addEventListener(
    "DOMContentLoaded",
    initializeBuyzy
);