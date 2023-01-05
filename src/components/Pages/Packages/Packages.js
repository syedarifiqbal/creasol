import IconOne from "assets/images/icon-1.png";
import IconTwo from "assets/images/icon-2.png";
import IconThree from "assets/images/icon-3.png";
import { userSelector } from "features/auth/authSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { client } from "utils/utils";

const Packages = () => {
  const [packages, setPackages] = useState(null);
  const { user } = useSelector(userSelector);
  const isAdmin = user && user.is_admin;

  useEffect(() => {
    client("/api/packages").then((res) => {
      setPackages(
        res.data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      );
    });
  }, []);
  return (
    <section id="configuration" className="dashboard">
      <div className="row">
        <div className="col-12">
          <div className="content-body">
            <div className="page-title mb-0">
              <div class="row mb-5">
                <div class="col-12">
                  <div class="d-flex align-items-center justify-content-between">
                    <h2 class="mb-0">Packages</h2>
                    {!isAdmin && (
                      <a
                        href="subscribed-packages.php"
                        class="fs-22 fw-bold text-purple text-decoration-underline"
                      >
                        Subscribed Packages
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-center mb-3">
              {packages
                ? packages.map((pkg) => (
                    <div className="col-lg-4 col-md-6 mb-md-0 mb-3">
                      <div className="pricing">
                        <div className="pricingHeader">
                          <h6 className="fs-20 fw-semibold ff-rubik text-dark">
                            {pkg.name}
                          </h6>
                          <img src={IconOne} alt="" className="img-fluid" />
                          <h2 className="fs-60 fw-bold ff-rubik text-orange mb-0">
                            ${pkg.price}
                          </h2>
                        </div>
                        <div className="pricingBody">
                          <ul className="text-start m-0 p-0 pb-4">
                            {pkg.description &&
                              pkg.description.map((desc) => <li>{desc}</li>)}
                          </ul>
                          <Link to="/packages" className="btn btn-primary px-5">
                            {isAdmin ? "Edit" : "Pay Now"}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
