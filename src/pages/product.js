import React, { useEffect, useState } from "react";
import Layout from "layout/layout";
import { PaginationFeature } from "features/pagination";
import { axiosInstance } from "../config/axios";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchProduct = (filter = "") => {
    axiosInstance.get("/products" + filter).then((response) => {
      setProduct(response.data.products);
    });
  };
  const fetchCategories = () => {
    axiosInstance.get("/products/categories").then((response) => {
      setCategories(response.data);
    });
  };
  const doFilter = (item) => {
    fetchProduct("?categories=" + item);
  };

  useEffect(() => {
    fetchProduct();
    fetchCategories();
  }, []);

  return (
    <Layout>
      <div className="container">
        <h1>demo</h1>
        <div className="d-flex gap-3">
          <div
            className="col-3 p-2 rounded"
            style={{ backgroundColor: "yellow" }}
          >
            {categories.map((item) => {
              return (
                <h4 key={item} onClick={doFilter(item)}>
                  {item}
                </h4>
              );
            })}
          </div>
          <div
            className="col-9 p-2 rounded"
            style={{ backgroundColor: "green" }}
          >
            <div className="d-flex flex-wrap">
              {product.map((item, key) => {
                return (
                  <div className="col-3" key={key}>
                    <img src={item.thumbnail} style={{ width: "100px" }} />
                    <h3 key={item.id}>{item.title}</h3>
                  </div>
                );
              })}
            </div>
            <PaginationFeature />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
