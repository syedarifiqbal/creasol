import DotOne from "assets/images/dot-1.png";
import DotTwo from "assets/images/dot-2.png";
import DotThree from "assets/images/dot-3.png";
import Chart from "assets/images/chart.png";

const PaymentLog = () => {
  return (
    <section id="configuration" class="dashboard">
      <div class="row">
        <div class="col-12">
          <div class="content-body">
            <div class="page-title mb-0">
              <div class="row align-items-center mb-4">
                <div class="col-lg-7">
                  <div class="d-flex align-items-center justify-content-between mb-4">
                    <h2 class="mb-0">Payment Log</h2>
                    <div>
                      <h6 href="#" class="fs-16 text-dark ff-helve fw-bold">
                        Legends:
                      </h6>
                      <div class="d-flex align-items-center">
                        <div class="me-3">
                          <img
                            src={DotOne}
                            alt=""
                            class="img-fluid d-inline-block me-2"
                          />
                          <h6 class="fs-16 fw-medium text-dark ff-helve d-inline-block">
                            Approved
                          </h6>
                        </div>
                        <div class="me-3">
                          <img
                            src={DotTwo}
                            alt=""
                            class="img-fluid d-inline-block me-2"
                          />
                          <h6 class="fs-16 fw-medium text-dark ff-helve d-inline-block">
                            Pending
                          </h6>
                        </div>
                        <div class="me-3">
                          <img
                            src={DotThree}
                            alt=""
                            class="img-fluid d-inline-block me-2"
                          />
                          <h6 class="fs-16 fw-medium text-dark ff-helve d-inline-block">
                            Rejected
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-block d-sm-flex align-items-center justify-content-between mb-4">
                    <h3 class="mb-sm-0 mb-3">Sales Per Month</h3>
                    <div class="">
                      <div class="select-wrapper d-block d-sm-inline-block mt-1 mt-sm-0 me-0 me-sm-2">
                        <select name="" id="" class="form-control">
                          <option value="">2022</option>
                          <option value="">2021</option>
                          <option value="">2020</option>
                          <option value="">2019</option>
                          <option value="">2018</option>
                          <option value="">2017</option>
                          <option value="">2016</option>
                          <option value="">2015</option>
                          <option value="">2014</option>
                          <option value="">2013</option>
                          <option value="">2012</option>
                          <option value="">2011</option>
                          <option value="">2010</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <img src={Chart} alt="" class="img-fluid w-100" />
                </div>
                <div class="col-lg-5">
                  <div class="paymentLogBox text-center">
                    <div class="paymentLogHeader">
                      <h4 class="fs-22 fw-bold ff-helve text-white mb-0">
                        Total Sales
                      </h4>
                    </div>
                    <div class="paymentLogBody">
                      <h2 class="fs-60 fw-bold ff-helve text-purple mb-0">
                        $2,36,000
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-block d-md-flex align-items-center">
              <div class="select-wrapper d-block d-sm-inline-block mt-1 mt-sm-0 me-0 me-sm-2 mb-md-0 mb-2">
                <select name="" id="" class="form-control">
                  <option value="">Month</option>
                  <option value="">Jan</option>
                  <option value="">Feb</option>
                  <option value="">Mar</option>
                  <option value="">April</option>
                  <option value="">May</option>
                  <option value="">June</option>
                  <option value="">July</option>
                  <option value="">August</option>
                  <option value="">September</option>
                  <option value="">October</option>
                  <option value="">November</option>
                  <option value="">December</option>
                </select>
              </div>
              <div class="select-wrapper d-block d-sm-inline-block mt-1 mt-sm-0">
                <select name="" id="" class="form-control">
                  <option value="">Year</option>
                  <option value="">2022</option>
                  <option value="">2021</option>
                  <option value="">2020</option>
                  <option value="">2019</option>
                  <option value="">2018</option>
                  <option value="">2017</option>
                  <option value="">2016</option>
                  <option value="">2015</option>
                  <option value="">2014</option>
                  <option value="">2013</option>
                  <option value="">2012</option>
                  <option value="">2011</option>
                  <option value="">2010</option>
                </select>
              </div>
              <span class="px-sm-4 mx-sm-3 py-md-3 py-2 filterTo my-md-0 my-2 d-inline-block">
                To
              </span>
              <div class="select-wrapper d-block d-sm-inline-block mt-1 mt-sm-0 me-0 me-sm-2 mb-md-0 mb-2">
                <select name="" id="" class="form-control">
                  <option value="">Month</option>
                  <option value="">Jan</option>
                  <option value="">Feb</option>
                  <option value="">Mar</option>
                  <option value="">April</option>
                  <option value="">May</option>
                  <option value="">June</option>
                  <option value="">July</option>
                  <option value="">August</option>
                  <option value="">September</option>
                  <option value="">October</option>
                  <option value="">November</option>
                  <option value="">December</option>
                </select>
              </div>
              <div class="select-wrapper d-block d-sm-inline-block mt-1 mt-sm-0 me-0 me-sm-2 mb-md-0 mb-2">
                <select name="" id="" class="form-control">
                  <option value="">Year</option>
                  <option value="">2022</option>
                  <option value="">2021</option>
                  <option value="">2020</option>
                  <option value="">2019</option>
                  <option value="">2018</option>
                  <option value="">2017</option>
                  <option value="">2016</option>
                  <option value="">2015</option>
                  <option value="">2014</option>
                  <option value="">2013</option>
                  <option value="">2012</option>
                  <option value="">2011</option>
                  <option value="">2010</option>
                </select>
              </div>
              <button class="btn btn-secondary bg-green rounded-5">
                Filter
              </button>
            </div>
            <div class="card shadow-none bg-transparent p-0 d-block card-chart border-none align-items-center">
              <div class="card-header d-block d-sm-flex justify-content-between bg-transparent border-0 p-0 "></div>
              <div class="card-body p-0">
                <div class="chartbox position-relative text-center">
                  <div class="main-tabble table-responsive">
                    <table class="table table-borderless dataTable">
                      <thead>
                        <tr>
                          <th class="sorting">Transaction ID</th>
                          <th class="sorting">Order ID</th>
                          <th class="sorting">Email</th>
                          <th class="sorting">Payment Type</th>
                          <th class="sorting">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>12</td>
                          <td>Geographic Regions</td>
                          <td>johnsmith@gmail.com</td>
                          <td>Recurring</td>
                          <td>243$</td>
                        </tr>
                        <tr>
                          <td>13</td>
                          <td>Major Disasters</td>
                          <td>Albert@gmail.com</td>
                          <td>Non Recurrent</td>
                          <td>243$</td>
                        </tr>
                        <tr>
                          <td>14</td>
                          <td>Major Tremors</td>
                          <td>johnsmith@gmail.com</td>
                          <td>Recurring</td>
                          <td>243$</td>
                        </tr>
                      </tbody>
                    </table>
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

export default PaymentLog;
