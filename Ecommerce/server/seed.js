import Product from "./models/productModel.js";


const products = [{
    name:"Mehenga Phone",
    dateCreated:2025,
    warranty:2,
    price:56999,
    isAvailable:true,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "qwertyerty"
},{
    name:"Cool Wali Cycle",
    desc: "qwertyertyqwsdfg",
    dateCreated:2024,
    warranty:5,
    price:87990,
    isAvailable:true,
    image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},{
    name:"Saaf Suthri Books",
    desc: "qwertyertyzsxdcfvgbhnjjn",
    dateCreated:2026,
    warranty:0,
    price:5999,
    isAvailable:true,
    image:"https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},{
    name:"Sexy Sneakers",
    desc: "qsgxdhcfjvgkbhjlwertyerty",
    dateCreated:2025,
    warranty:1,
    price:9999,
    isAvailable:true,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    name:"Ra.One wali Hoodie",
    desc: "zsdxgfchgvhbqwertyerty",
    dateCreated:2027,
    warranty:20,
    price:56999999,
    isAvailable:true,
    image: "https://images.unsplash.com/photo-1579572331145-5e53b299c64e?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    name:"Subha wali Coffee",
    desc: "qwertyertyrtchyjvtukbyiun",
    dateCreated: new Date(),
    warranty:2,
    price:569,
    isAvailable:true,
    image: "https://images.unsplash.com/photo-1518057111178-44a106bad636?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}]

const seedDb = async ()=>{
    await Product.deleteMany({})
    await Product.insertMany(products);
}

export default seedDb;
