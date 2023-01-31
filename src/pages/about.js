import Layout from "layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { PaginationFeature } from "features/pagination";
import { fetchProduct } from "state/product";
import { useEffect } from "react";

const SetFilter = () => {
  const dispatch = useDispatch();
  const { loading, error, items } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const renderItems = () => {
    // loading state
    if (loading) return <strong>Loading please wait...</strong>;

    // error state
    if (error) return <strong>Items not available at this time</strong>;

    // regular data workflow
    return items.map((item) => (
      <div className="card">
        <img src={item.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    ));
  };

  return (
    <div>
      hi items be here
      <ul>{renderItems()}</ul>
    </div>
  );
};

const AboutPage = () => {
  // const productList = useSelector((state) => state.product);
  // console.log(productList);

  return (
    // <Layout>
    //   <div className="container">
    //     <h1>demo</h1>

    //     <div className="d-flex gap-3">
    //       <div
    //         className="col-3 p-2 rounded"
    //         style={{ backgroundColor: "yellow" }}
    //       >
    //         test
    //       </div>
    //       <div
    //         className="col-9 p-2 rounded"
    //         style={{ backgroundColor: "green" }}
    //       >
    //         {/* <SetFilter /> */}
    //         <PaginationFeature />
    //       </div>
    //     </div>
    //   </div>
    // </Layout>
    <>
    <h1>Test</h1>
    </>
  );
};
export default AboutPage;
