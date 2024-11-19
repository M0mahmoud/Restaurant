import Image from "next/image";
import React from "react";

interface MenuItem {
    name: string;
    description: string;
    price: number;
    image: string;
}

const menuItems: MenuItem[] = [
    {
        name: "Butter Paneer Masala",
        description:
            "Delicious blend of soft paneer cheese and green peas in a creamy tomato sauce",
        price: 300,
        image: "/menu.png",
    },
    {
        name: "Hakka Noodles",
        description:
            "Stir-fried noodles tossed with crisp vegetables and savory sauces",
        price: 200,
        image: "/menu.png",
    },
    {
        name: "Jeera Rice",
        description:
            "Fragrant basmati rice cooked with aromatic cumin seeds for a flavorful taste",
        price: 150,
        image: "/menu.png",
    },
    {
        name: "Mushroom Fried Rice",
        description:
            "A savory blend of fluffy rice, tender mushrooms, and crisp vegetables, stir-fried",
        price: 200,
        image: "/menu.png",
    },
    {
        name: "Daal Tadka",
        description:
            "A comforting bowl of lentils tempered with aromatic spices for a flavorful and soul-warming dish",
        price: 180,
        image: "/menu.png",
    },
    {
        name: "White Sauce Pasta",
        description:
            "Creamy and indulgent pasta tossed in a rich, velvety white sauce, perfectly complemented",
        price: 200,
        image: "/menu.png",
    },
    {
        name: "Laccha Paratha",
        description:
            "Flaky, layered Indian bread cooked to golden perfection, offering a crispy exterior and a soft, buttery",
        price: 60,
        image: "/menu.png",
    },
    {
        name: "Vegetable Cheese Sandwich",
        description:
            "Fresh vegetables and melted cheese between soft bread, a tasty treat for any time of day!",
        price: 170,
        image: "/menu.png",
    },
];

export default function Menu() {
    return (
        <section className="py-12 md:py-24 lg:y-32">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Our Popular Dishes
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                        Discover our most loved dishes, crafted with care and
                        served with passion
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {menuItems.map((item, index) => (
                        <div
                            className="relative group rounded-2xl bg-white border border-gray-300 text-start shadow-sm transition-shadow hover:shadow-md p-4"
                            key={index + item.name}
                        >
                            <div className="flex flex-col items-center space-y-4">
                                <div className="relative w-40 h-40 rounded-full overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover rounded-full group-hover:scale-105 transition-transform"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-500  line-clamp-2">
                                        {item.description}
                                    </p>
                                    <p className="font-bold text-lg">
                                        ${item.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
