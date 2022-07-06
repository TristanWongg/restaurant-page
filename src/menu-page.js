export default function loadMenu(){
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.style.display = 'flex';
    contentDiv.style.justifyContent = 'center';

    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu-content';

    const menu = [
        {
            title: "Ribs and Brisket",
            details: "Served with a choice of any side",
            items: [
                {
                    itemName: "1/2 LB Ribs",
                    itemDescription: "Tender fall off the bone ribs smothered in Big Boys Signature BBQ sauce",
                    price: "$15"
                },
                {
                    itemName: "1 LB Ribs",
                    itemDescription: "Tender fall off the bone ribs smothered in Big Boys Signature BBQ sauce",
                    price: "$25"
                },
                {
                    itemName: "1/2 LB Brisket",
                    itemDescription: "Mouthwatering 24-hour smoked brisket",
                    price: "$20"
                },
                {
                    itemName: "1 LB Brisket",
                    itemDescription: "Mouthwatering 24-hour smoked brisket",
                    price: "$30"
                },
            ]
        },
        {
            title: "Poultry",
            details: "Served with a choice of any side",
            items: [
                {
                    itemName: "Double Chicken Leg",
                    itemDescription: "Two barbecued chicken legs to perfection smothered with Big Boy's housemade smokey BBQ sauce",
                    price: "$18"
                },
                {
                    itemName: "Big Boy's Signature Wings",
                    itemDescription: "No description needed, who doesn't like wings? Flavours: Honey Garlic, Lemon Pepper, Hot Buffalo, Classic BBQ",
                    price: "$10/lb"
                },
                {
                    itemName: "Turkey Leg",
                    itemDescription: "A juicy turkey leg grilled to perfection and glazed with our Big Boy's special BBQ sauce",
                    price: "$20"
                }
            ]
        },
        {
            title: "Signature Sandwiches",
            details: "Served with a choice of any side",
            items: [
                {
                    itemName: "Pulled Pork",
                    itemDescription: "Our moist slow-smoked pulled pork",
                    price: "$12"
                },
                {
                    itemName: "Pulled Brisket",
                    itemDescription: "Our moist slow-smoked pulled brisket",
                    price: "$16"
                },
            ]
        },
        {
            title: "Sausages",
            items: [
                {
                    itemName: "Foot-long Glizzy",
                    itemDescription: "Our juicy sausages made in-house fresh everyday",
                    price: "$8"
                },
            ]
        },
        {
            title: "Sides",
            items: [
                {
                    itemName:"Housemade Cornbread",
                    price: "$6"
                },
                {
                    itemName: "Coleslaw",
                    price: "$4"
                },
                {
                    itemName: "Fries",
                    price: "$3"
                },
                {
                    itemName: "Beans",
                    price: "$4"
                },
                {
                    itemName: "Corn",
                    price: "$5"
                },
                {
                    itemName: "Mac n Cheese",
                    price: "$5"
                }
            ]
        },
        {
            title: "Non-Alcoholic",
            items: [
                {
                    itemName: "Big Boy's Sweet Iced Tea",
                    price: "$4"
                },
                {
                    itemName:"Soft Drink",
                    price: "$2.5"
                },
                {
                    itemName: "Water",
                    price: "$2"
                },
            ]
        },    
        {
            title: "Alcoholic",
            items: [
                {
                    itemName: "Big Boy's Long Island Iced Tea",
                    price: "$7"
                },
                {
                    itemName: "Beer",
                    price: "$6"
                },
            ]
        },       
    ];

    menu.forEach(category => {
        const div = document.createElement('div');
        const header = document.createElement('h3');
        header.textContent = category.title;

        const comboDetails = document.createElement('h5');
        comboDetails.textContent = "combo-details";
        comboDetails.textContent = category.details;

        const itemsDiv = document.createElement('div');
        category.items.forEach(i => {
            const item = document.createElement('div');
            item.className = "menu-item";
            const itemName = document.createElement('h4');
            itemName.textContent = i.itemName;
            const itemDescription = document.createElement('p');
            itemDescription.className = "item-description";
            itemDescription.textContent = i.itemDescription;
            const itemPrice = document.createElement('p');
            itemPrice.textContent = i.price;
            
            item.appendChild(itemName);
            item.appendChild(itemDescription);
            item.appendChild(itemPrice);
            itemsDiv.appendChild(item);
        });
        div.appendChild(header);
        div.appendChild(comboDetails);
        div.appendChild(itemsDiv);
        menuDiv.appendChild(div);
    });

    contentDiv.appendChild(menuDiv);
}