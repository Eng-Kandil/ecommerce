import { useQuery } from "@tanstack/react-query";
import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import useMutationCart, { addToCart } from "../hooks/useMutationCart";
import Loading from "./Loading";
import ProductItem from "./ProductItem";

export default function ProductDetails() {
  let { data, mutate, error, isError, isSuccess } = useMutationCart(addToCart);

  if (isSuccess) {
    toast.success(data?.data?.message);
  }

  if (isError) {
    toast.error(error?.response?.data?.message);
  }

  let [relatedProd, setRelatedProd] = useState([]);
  let [imgSrc, setImgSrc] = useState("");
  let [ind, setIndex] = useState(0);

  let { id, catId } = useParams();

  function changeSrc(e) {
    setIndex(e.target.getAttribute("index"));
    setImgSrc(e.target.src);
  }

   function getProductDetails() {
    return  axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
  }

  let { data: dataobj, isLoading } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: getProductDetails,
    select: (dataobj) => dataobj?.data?.data,
  });
  console.log(dataobj);

  async function getRelatedProducts() {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products?category[in]=${catId}`
      );
      setRelatedProd(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRelatedProducts();
  }, []);

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className=" container">
      <div className="flex items-center gap-3">
        <div className="w-1/3">
          <img
            src={imgSrc ? imgSrc : dataobj?.imageCover}
            className="w-full"
            alt=""
          />
          <div className="flex gap-5">
            {dataobj?.images?.map((img, index) => (
              <img
                index={index}
                className={`w-[20%] cursor-pointer mt-2 ms-2 transition-all ${
                  index == ind
                    ? "border-4 border-green-500 opacity-100"
                    : " opacity-50"
                }`}
                onClick={changeSrc}
                src={img}
                key={img}
              />
            ))}
          </div>
        </div>
        <div className="w-2/3 ">
          <h2 className="text-[2rem] font-bold my-4">{dataobj?.title}</h2>
          <p>{dataobj?.description}</p>
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold text-sm">
                {dataobj?.category?.name}
              </h3>
            </div>
            <div>
              <span>
                {dataobj?.ratingsAverage}{" "}
                <i className="fa-solid fa-star text-rating-color"></i>
              </span>
              <p>{dataobj?.price} EGP</p>
            </div>
          </div>
          <button
            onClick={() => {
              mutate(dataobj?._id);
            }}
            className="btn w-full block py-3 text-white my-3 bg-green-500 rounded-md"
          >
            add to cart
          </button>
        </div>
      </div>

      <h2 className="my-4 text-[2rem] font-semibold">Related Products</h2>
      <div className="row">
        <div className="flex flex-wrap">
          {relatedProd.length ? (
            relatedProd.map((prod) => (
              <ProductItem key={prod._id} prod={prod}></ProductItem>
            ))
          ) : (
            <Loading></Loading>
          )}
        </div>
      </div>
    </div>
  );
}
