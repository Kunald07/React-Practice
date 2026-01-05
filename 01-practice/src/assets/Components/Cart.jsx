

const Cart = () => {

    const data = [
        {
            image: 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9ufGVufDB8fDB8fHww',
            name: "Amazon Basics",
            description: "Affordable, reliable everyday essentials offering quality materials, simple design, and great value for daily household and office needs."
        },
        {
            image: 'https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFpbHklMjBvYmplY3RzfGVufDB8fDB8fHww',
            name: "Daily Objects",
            description: "Premium lifestyle accessories combining minimal design, durable materials, and practical functionality for modern everyday use."
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1678074057896-eee996d4a23e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8fHww',
            name: "Furniture",
            description: "Stylish, comfortable furniture designed for durability, functionality, and aesthetic appeal in homes and offices."
        },
        {
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww',
            name: "Laptop",
            description: "High-performance laptop featuring fast processing, sleek design, portability, and reliable battery life for work and entertainment."
        },
        {
            image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D',
            name: "Speaker",
            description: "Powerful speaker delivering clear sound, deep bass, wireless connectivity, and compact design for immersive audio experiences."
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1714702844124-be1377d19666?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbiUyMHRvb2xzfGVufDB8fDB8fHww',
            name: "Kitchen Tools",
            description: "Essential kitchen tools crafted for efficiency, durability, and ease of use, making cooking faster and more enjoyable."
        },



    ]

    return (
        <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-300">
            {data.map((elem, index) => (
                <div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
                    <div className="w-full h-52 bg-zinc-300">
                        <img className="w-full h-full object-cover" src={elem.image} alt="" />
                    </div>
                    <div className="w-full px-3 py-4">
                        <h2 className="font-semibold"> {elem.name}</h2>
                        <p className="text-xs mt-3">
                            {elem.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cart
