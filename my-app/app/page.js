import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  // Sample stock data
  const stock = [
    { name: "Product 1", quantity: 10, price: "$100" },
    { name: "Product 2", quantity: 5, price: "$50" },
    { name: "Product 3", quantity: 20, price: "$200" },
  ];

  return (
    <>
      <Header />

      <div className="container bg-red-400 mx-8 items-center justify-normal p-4 ">
        <h1 className="text-white text-4xl font-bold mb-4">Add a Product</h1>

        {/* Add Product Form */}
        <form className="mb-8">
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="productName">Product Name</label>
            <input className="w-full p-2" type="text" id="productName" name="productName" />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="quantity">Quantity</label>
            <input className="w-full p-2" type="number" id="quantity" name="quantity" />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="price">Price</label>
            <input className="w-full p-2" type="text" id="price" name="price" />
          </div>
          <button className="bg-white text-red-500 py-2 px-4" type="submit">Add Product</button>
        </form>
        <div className="container mx-auto my-6">
          <h1 className="text-white text-4xl font-bold mb-4">Display Current Stock</h1>
          {/* Table to display current stock */}
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Product Name</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Price</th>
              </tr>
            </thead>
            <tbody>
              {stock.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b">{item.quantity}</td>
                  <td className="py-2 px-4 border-b">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h1 className="text-white text-4xl font-bold mb-4 flex items-center">
          Search a Product</h1>
          <div>
          <input
            type="text"
            className="ml-4 p-2 bg-white text-black"
            placeholder="Search..."
          />
          <select className="ml-4 p-2 bg-white text-black">
            <option value="" disabled selected>Select a product</option>
            <option value="product1">All </option>
            <option value="product2">Category 1</option>
            <option value="product3">Category 2</option>
          </select>
          </div>
        

        </div>
      </div>
    </>
  );
}
