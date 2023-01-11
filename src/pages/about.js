import Layout from "layout/layout";
import { useEffect } from "react";
import { useDispatch, } from "react-redux";
import { fetchProduct } from "state/product";

const AboutPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  // const productList = useSelector((state) => state.product);
  // console.log(productList);

  return (
    <Layout>
      <div className="container">
        <h1>demo</h1>
        <div className="d-flex gap-3">
          <div
            className="col-3 p-2 rounded"
            style={{ backgroundColor: "yellow" }}
          >
            test
          </div>
          <div
            className="col-9 p-2 rounded"
            style={{ backgroundColor: "green" }}
          >
            asc
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default AboutPage;
