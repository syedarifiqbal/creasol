import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "utils/utils";

const PostListing = () => {
  const { id: OrderId } = useParams();
  const [Order, setOrder] = useState(null);

  useEffect(() => {
    client(`/api/order/${OrderId}`).then((order) => {
      console.log(order.data);
      setOrder(order.data);
      console.log(Order);
    });
  }, []);

  return (
    <section id="user_page" className="user-page">
      <div className="content-body">
        <div className="page-title mb-4">
          <div className="row">
            <div className="col-12">
              <h2>Order Listing / Post Listing</h2>
            </div>
          </div>
        </div>
        <div className="mb-4 text-end">
          <Link to={`/post/add/${OrderId}`} className="btn btn-primary">
            Add Post
          </Link>
        </div>
        <div className="dataTables_wrapper">
          <div className="main-tabble table-responsive mx-n2">
            <table className="table table-borderless dataTable px-2">
              <thead>
                <tr>
                  <th className="sorting">Post ID</th>
                  <th className="sorting">Title</th>
                  <th className="sorting">Description</th>
                  <th className="sorting">Post Medium</th>
                  <th className="sorting">Status</th>
                  <th className="sorting">Action</th>
                </tr>
              </thead>
              <tbody>
                {Order ? (
                  Order.posts.length ? (
                    Order.posts.map((post) => (
                      <tr key={post._id}>
                        <td>{post._id}</td>
                        <td>{post.title}</td>
                        <td>{post.description}</td>
                        <td>{post.post_medium}</td>
                        <td>{post.status}</td>
                        <td>
                          <Link to={`/post/edit/${Order._id}/${post._id}`}>
                            <span className="status active">View</span>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="text-center" colSpan="10">
                        No posts added.
                      </td>
                    </tr>
                  )
                ) : (
                  <tr>
                    <td colSpan="10">Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostListing;
