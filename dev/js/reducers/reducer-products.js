export default function (state = null, action) {

    const allItems = [
        {
            id: 1,
            userId: 1,
            name: "Horse painting",
            colors: ["default"],
            size: {
                height: "40 cm",
                width: "70 cm",
                weight: "N/A"
            },
            prices: [
                [1, "$4.000"],
                [3, "$3.500"]
            ],
            description: "An charming yet bland decoration",
            thumbnail: "https://lh6.ggpht.com/ABSd3bkmF7hQtIxiL59_un88qtkBtLQvovGOLiln9TPPc-y4Sela0rz8Zd9zjTLawL0=h900"
        },
        {
            id: 2,
            userId: 3,
            name: "Gemstone Necklace",
            colors: ["ruby", "zapphire", "emmerald"],
            size: {
                height: "N/A",
                width: "N/A",
                weight: "200 gr"
            },
            prices: [
                [1, "$2.000"],
                [5, "$1.700"]
            ],
            description: "Some cursed items made by me",
            thumbnail: "http://d310a9hpolx59w.cloudfront.net/product_photos/32440077/10_original.png"
        },
        {
            id: 3,
            userId: 2,
            name: "Cardboard Jigsaw Puzzle",
            colors: ["default"],
            size: {
                height: "40 cm",
                width: "40 cm",
                weight: "N/A"
            },
            prices: [
                [1, "$2.500"],
                [6, "$2.100"]
            ],
            description: "Doesn't even have a picture",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg-hjU69D45UOmMtP_kDQyVpNceQIO-CFq-ekcUWCiiAeUAZX"
        },
        {
            id: 4,
            userId: 3,
            name: "Classic wicker basket",
            colors: ["default"],
            size: {
                height: "40 cm",
                width: "70 cm",
                weight: "N/A"
            },
            prices: [
                [1, "$3.500"],
                [8, "$3.000"]
            ],
            description: "Perfect for your tumor twin(s)",
            thumbnail: "https://a.1stdibscdn.com/archivesE/upload/8464/16_15/storage3c/storage3C-1.jpeg"
        },
        {
            id: 5,
            userId: 1,
            name: "Hand made laptop",
            colors: ["default"],
            size: {
                height: "4 cm",
                width: "37 cm",
                weight: "3 kg"
            },
            prices: [
                [1, "$300.000"]
            ],
            description: "Yes, it does run Crysis",
            thumbnail: "http://www.gavinshoebridge.com/wp-content/uploads/2013/10/Wooden-Laptop-6.jpg"
        },
        {
            id: 6,
            userId: 2,
            name: "Horse Jigsaw Puzzle",
            colors: ["default"],
            size: {
                height: "40 cm",
                width: "40 cm",
                weight: "N/A"
            },
            prices: [
                [1, "$5000"],
                [3, "$4700"]
            ],
            description: "The ultimate jigsaw puzzle. It has a picture on it",
            thumbnail: "https://ae01.alicdn.com/kf/UT8PAy2X6XbXXagOFbXl/Wooden-font-b-Puzzle-b-font-Educational-Developmental-Baby-Kids-Training-Toy-font-b-Horse-b.jpg"
        }
    ];

    switch (action.type) {

        case 'USER_PRODUCTS_SELECTED':
            /*return allItems.map((item) => {
                if(action.payload.id == item.userId){
                    return item;
                }
            });*/
            return allItems.filter(function (item) {
                return action.payload.id == item.userId;
            });
            break;

        case 'ALL_PRODUCTS_SELECTED':
            return allItems;
            break;

        case 'PRODUCT_SELECTED':
            return allItems.filter(function (obj) {
                return obj.id == action.payload.id;
            });
            break;

    }
    return allItems;
}
