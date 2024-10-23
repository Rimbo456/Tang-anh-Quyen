import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import axiosInstance from "../utils/axiosIstance";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Men = () => {
  const [products, setProducts] = useState([]);

  const filter = async (value) => {
    try {
      const res = await axiosInstance.get("/api/filter", {
        params: {
          value: value,
        },
      });
      setProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axiosInstance.get("/api/getproduct");
        const temp = res.data.filter((product) => product.productType == true);
        setProducts(temp);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  return (
    <div className="w-full">
      <Header></Header>
      <div className="mt-[104px] flex w-full px-3 mb-6">
        <div className="mr-1 w-3/12 relative">
          <h1 className="uppercase text-xl font-semibold my-3 flex items-center">
            danh mục sản phẩm
            <FaChevronDown className="ml-2" />
          </h1>
          <ul className="border-[2px] rounded-md p-3">
            <li
              onClick={() => {
                filter("Rolex");
              }}
              className="py-3 px-1 rounded-md cursor-pointer hover:bg-gray-300"
            >
              Rolex
            </li>
            <hr />
            <li
              onClick={() => {
                filter("Omega");
              }}
              className="py-3 px-1 rounded-md cursor-pointer hover:bg-gray-300"
            >
              Omega
            </li>
            <hr />
            <li
              onClick={() => {
                filter("Panerai");
              }}
              className="py-3 px-1 rounded-md cursor-pointer hover:bg-gray-300"
            >
              Panerai
            </li>
            <hr />
            <li
              onClick={() => {
                filter("Tudor");
              }}
              className="py-3 px-1 rounded-md cursor-pointer hover:bg-gray-300"
            >
              Tudor
            </li>
            <hr />
            <li
              onClick={() => {
                filter("Citizen");
              }}
              className="py-3 px-1 rounded-md cursor-pointer hover:bg-gray-300"
            >
              Citizen
            </li>
            <hr />
            <li
              onClick={() => {
                filter("Casio");
              }}
              className="py-3 px-1 rounded-md cursor-pointer hover:bg-gray-300"
            >
              Casio
            </li>
          </ul>
          <h1 className="uppercase text-xl font-semibold my-3">san pham</h1>
          <ul className="border-[2px] rounded-md px-3">
            <li className="my-3">muc1</li>
            <hr />
            <li className="my-3">muc2</li>
            <hr />
            <li className="my-3">muc3</li>
            <hr />
            <li className="my-3">muc4</li>
            <hr />
            <li className="my-3">muc4</li>
            <hr />
            <li className="my-3">muc4</li>
            <hr />
            <li className="my-3">muc4</li>
          </ul>
        </div>
        <div className="flex-1 flex-row ml-1 w-9/12 px-3">
          <div className="grid grid-cols-3 gap-1 mt-10">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                size={"max-w-[240px]"}
                product={product}
              ></ProductCard>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Men;
