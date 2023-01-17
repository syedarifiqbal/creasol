import { userSelector } from "features/auth/authSlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { client } from "utils/utils";
import { toast } from "react-toastify";
import { toastConstant } from "constants";
import { API_PATH } from "constants";
import { format } from "date-fns";
// Getting Images
import img1 from "assets/images/img-1.png";
import img2 from "assets/images/img-2.png";
import img3 from "assets/images/img-3.png";
import img4 from "assets/images/img-4.png";
import img5 from "assets/images/img-5.png";
import img6 from "assets/images/img-6.png";

const AddEditPost = ({ mode, OrderId, PostId }) => {
  const [title, setTitle] = useState("");
  const [medium, setMedium] = useState("");
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState("");
  let { user } = useSelector(userSelector);
  user = user === null ? {} : user;
  const isAdmin = user && user.is_admin;
  const isAdding = mode === "Add";
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!isAdding) {
      client(`/api/post/${PostId}`).then(({ status, data: post }) => {
        console.log(post);
        if (status === 200) {
          setPost(post);
          setComments(post.comments);
          setTitle(post.title);
          setMedium(post.post_medium);
          setDescription(post.description);
        }
      });
    }
  }, [isAdding]);

  const HandleSubmit = async (e) => {
    setIsLoading(true);
    if (isAdding) {
      const data = {
        OrderId,
        title,
        description,
        status: "Pending Approval",
        post_medium: medium,
      };
      try {
        const post = await client("/api/post", {
          method: "POST",
          data,
        });
        if (post.status === 201) {
          toast("Post has been created successfully!", toastConstant);
        }
      } catch (error) {
        console.log(error);
        toast("An error occured!", toastConstant);
      }
    } else {
      const data = {
        title,
        description,
        status: "Pending Approval",
        post_medium: medium,
      };
      if (!isAdmin) {
        delete data.title;
        delete data.post_medium;
        data.status = "Approved";
      }
      try {
        const post = await client(`/api/post/${PostId}`, {
          method: "PUT",
          data,
        });
        if (post.status === 204) {
          toast("Post has been updated successfully!", toastConstant);
        }
      } catch (error) {
        console.log(error);
        if (error.response.status === 400) {
          toast(error.response.data.message, toastConstant);
        } else {
          toast("An error occured!", toastConstant);
        }
      }
    }
    setIsLoading(false);
  };

  const HandleComment = async (e) => {
    const data = {
      user: user._id,
      post: post._id,
      text: comment,
    };
    try {
      const fetchedComment = await client("/api/comment", {
        method: "POST",
        data,
      });
      setComment("");
      if (fetchedComment.status === 201) {
        setComments((prevState) => [...prevState, fetchedComment.data]);
        setPost((prevState) => {
          prevState.status = "Rejected with Comments";
          return prevState;
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="page-title mb-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="mb-0">
                {isAdding ? "Add Post Details" : "Post Details"}{" "}
              </h2>
              <div>
                <h6 className="fs-14 fw-medium text-dark ff-helve">Status</h6>
                <input
                  type="text"
                  className="form-control border"
                  readOnly
                  value={post ? post.status : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-xl-0 mb-3">
          <img src={img1} alt="" className="img-fluid w-100" />
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-xl-0 mb-3">
          <div className="position-relative">
            <img src={img2} alt="" className="img-fluid w-100" />
            <span href="#" className="deleteBtn">
              <i className="fas fa-times"></i>
            </span>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-xl-0 mb-3">
          <div className="position-relative">
            <img src={img3} alt="" className="img-fluid w-100" />
            <span href="#" className="deleteBtn">
              <i className="fas fa-times"></i>
            </span>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-xl-0 mb-3">
          <div className="position-relative">
            <img src={img4} alt="" className="img-fluid w-100" />
            <span href="#" className="deleteBtn">
              <i className="fas fa-times"></i>
            </span>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-xl-0 mb-3">
          <div className="position-relative">
            <img src={img5} alt="" className="img-fluid w-100" />
            <span href="#" className="deleteBtn">
              <i className="fas fa-times"></i>
            </span>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
          <div className="position-relative">
            <img src={img6} alt="" className="img-fluid w-100" />
            <span href="#" className="deleteBtn">
              <i className="fas fa-times"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6 mb-md-0 mb-3">
          <label className="fs-14 fw-medium text-dark ms-4 ff-helve-normal">
            Title
          </label>
          <input
            type="text"
            className="form-control border"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="fs-14 fw-medium text-dark ms-4 ff-helve-normal">
            Post Medium
          </label>
          <input
            type="text"
            className="form-control border"
            placeholder="Post Medium"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="mb-3">
            <label className="fs-14 fw-medium text-dark ms-4 ff-helve-normal">
              Description
            </label>
            <textarea
              className="form-control"
              rows="8"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          <button
            className="btn btn-primary"
            disabled={isLoading}
            onClick={HandleSubmit}
          >
            {isLoading
              ? "Sending..."
              : isAdmin
              ? "Submit for Approval"
              : "Approve"}
          </button>
        </div>
      </div>
      {/* Comment Row will only show when the post is editing*/}
      {!isAdding && (
        <div className="row mt-4">
          <div className="col-12">
            <h5 className="fs-18 fw-medium text-dark ff-helve mb-3">
              Comments
            </h5>
            {comments.length
              ? comments.map((com) => (
                  <div className="commentSection d-flex pb-3 mb-3">
                    <div className="commentImg flex-shrink-0 me-3">
                      <img
                        src={API_PATH + com.user.image}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="commentContect">
                      <div className="mb-3">
                        <h6 className="fs-16 fw-bold text-purple">
                          {com.user.first_name + " " + com.user.last_name}
                        </h6>
                        <h6 className="fs-14 fw-medium text-gray">
                          {format(
                            new Date(com.createdAt),
                            "hh:mm a - dd MMMM yyyy"
                          )}
                        </h6>
                      </div>
                      <p className="fs-16 fw-medium text-gray mb-0">
                        {com.text.split("\n").map((value) => (
                          <span className="d-block">{value}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))
              : ""}
            <div className="commentSection d-flex pb-3 mb-3">
              <div className="commentImg flex-shrink-0 me-3">
                <img src={user.image} alt="" className="img-fluid" />
              </div>
              <div className="commentContect flex-grow-1">
                <div className="mb-3">
                  <h6 className="fs-16 fw-bold text-purple">
                    {user.first_name + " " + user.last_name}
                  </h6>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Add Comments"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
                <button className="btn btn-primary" onClick={HandleComment}>
                  {isAdmin ? "Post" : "Reject With Comments"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddEditPost;
