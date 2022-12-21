import IconOne from "assets/images/icon-1.png";
import IconTwo from "assets/images/icon-2.png";
import IconThree from "assets/images/icon-3.png";
const Packages = () => {
  return (
    <section id="configuration" class="dashboard">
      <div class="row">
        <div class="col-12">
          <div class="content-body">
            <div class="page-title mb-0">
              <div class="row mb-5">
                <div class="col-12">
                  <h2 class="mb-0">Packages</h2>
                </div>
              </div>
            </div>
            <div class="row text-center mb-3">
              <div class="col-lg-4 col-md-6 mb-md-0 mb-3">
                <div class="pricing">
                  <div class="pricingHeader">
                    <h6 class="fs-20 fw-semibold ff-rubik text-dark">Bronze</h6>
                    <img src={IconOne} alt="" class="img-fluid" />
                    <h2 class="fs-60 fw-bold ff-rubik text-orange mb-0">$95</h2>
                  </div>
                  <div class="pricingBody">
                    <ul class="text-start m-0 p-0 pb-4">
                      <li>2 social media posts per week (2 platforms)</li>
                      <li>1 300-word blog</li>
                    </ul>
                    <a href="edit-package.php" class="btn btn-primary px-5">
                      Edit
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-md-0 mb-3">
                <div class="pricing">
                  <div class="pricingHeader">
                    <h6 class="fs-20 fw-semibold ff-rubik text-dark">Silver</h6>
                    <img src={IconTwo} alt="" class="img-fluid" />
                    <h2 class="fs-60 fw-bold ff-rubik text-orange mb-0">
                      $190
                    </h2>
                  </div>
                  <div class="pricingBody">
                    <ul class="text-start m-0 p-0 pb-4">
                      <li>4 Social media Posts per week (4 platforms)</li>
                      <li>2 300-word blog</li>
                    </ul>
                    <a href="edit-package.php" class="btn btn-primary px-5">
                      Edit
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-md-0 mb-3">
                <div class="pricing">
                  <div class="pricingHeader">
                    <h6 class="fs-20 fw-semibold ff-rubik text-dark">Gold</h6>
                    <img src={IconThree} alt="" class="img-fluid" />
                    <h2 class="fs-60 fw-bold ff-rubik text-orange mb-0">
                      $340
                    </h2>
                  </div>
                  <div class="pricingBody">
                    <ul class="text-start m-0 p-0 pb-4">
                      <li>6 Social media posts per week (5 platforms)</li>
                      <li>2 300-word blogs</li>
                      <li>1 600-word blog</li>
                    </ul>
                    <a href="edit-package.php" class="btn btn-primary px-5">
                      Edit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
