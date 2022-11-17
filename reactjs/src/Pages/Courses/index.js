import "./style.css";
import { useEffect } from "react"
import FooterComponent from "../../Components/Layouts/Footer";
import SidemenuComponent from "../../Components/Layouts/Sidemenu";
import AdminNav from "../../Components/Layouts/AdminNav";
import $ from "jquery";

function CourcesModule() {

  useEffect(() => {
    document.title = "UoPS | Admin - Course Module";

    
    if (!$.fn.DataTable.isDataTable("#courseTableDT")) {
      // $(document).ready(function () {
        setTimeout(function () {
          $("#courseTableDT").dataTable({
            destroy: true,
            pagingType: "full_numbers",
            pageLength: 20,
            processing: true,
            dom: "Bfrtip",
            select: {
              style: "single",
            },

            buttons: [
              {
                extend: "pageLength",
                className: "btn btn-sm btn-secondary bg-secondary",
              },
              {
                extend: "csv",
                className: "btn btn-sm btn-success bg-success",
              },
              {
                extend: "print",
                customize: function (win) {
                  $(win.document.body).css("font-size", "10pt");
                  $(win.document.body)
                    .find("table")
                    .addClass("compact")
                    .css("font-size", "inherit");
                },
                className: "btn btn-sm btn-danger bg-danger",
              },
            ],

            fnRowCallback: function (
              nRow,
              aData,
              iDisplayIndex,
              iDisplayIndexFull
            ) {
              var index = iDisplayIndexFull + 1;
              $("td:first", nRow).html(index);
              return nRow;
            },

            lengthMenu: [
              [10, 20, 30, 50, -1],
              [10, 20, 30, 50, "All"],
            ],
            columnDefs: [
              {
                targets: 0,
                render: function (data, type, row, meta) {
                  return type === "export" ? meta.row + 1 : data;
                },
              },
            ],
          });
        }, 500);
      // });
    }
  }, [])

  const array = [
    { name: "BE in Computer Engineering", semister: 8, period: 4, status: "ACTIVE" },
    { name: "BE in Mechanical Engineering", semister: 8, period: 4, status: "ACTIVE" },
    { name: "BE in Civil Engineering", semister: 8, period: 4, status: "ACTIVE" },
    { name: "BE in Electrical Engineering", semister: 8, period: 4, status: "ACTIVE" },
    { name: "B.B.A.", semister: 6, period: 3, status: "ACTIVE" },
    { name: "B.Com", semister: 6, period: 3, status: "ACTIVE" },
    { name: "B.C.A.", semister: 6, period: 3, status: "ACTIVE" },
    { name: "B.S.C", semister: 6, period: 3, status: "ACTIVE" },
    { name: "B.C.S.", semister: 6, period: 3, status: "ACTIVE" },
    { name: "B.A.", semister: 6, period: 3, status: "ACTIVE" },
  ]

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">

          <SidemenuComponent />

          <div className="layout-page">
            
            <AdminNav />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">

                <h4 class="fw-bold py-3 mb-4 text-start"><span class="text-muted fw-light">Admin /</span> Cources Module</h4>

                <div className="row">
                  <div className="col-lg-12">
                    <div class="card text-start">
                      <h5 class="card-header">
                        Cources List

                        <button
                          type="button"
                          class="btn btn-primary float-end"
                          data-bs-toggle="modal"
                          data-bs-target="#basicModal"
                        >
                          Add Course
                        </button>
                      </h5>
                      <div class="card-content p-2">
                        <div class="table-responsive text-start">
                          <table class="table text-nowrap" id="courseTableDT">
                            <thead>
                              <tr>
                                <th>No</th>
                                <th>Cource Name</th>
                                <th>Semister</th>
                                <th>Period</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                              {
                                array.map((ele, index) => {
                                  return (<>
                                    <tr>
                                      <td>{index + 1}</td>
                                      <td>{ele.name}</td>
                                      <td>{ele.semister} SEM</td>
                                      <td>{ele.period} YEAR</td>
                                      <td>
                                        {ele.status === "ACTIVE" && <span class="badge bg-label-success"> ACTIVE </span>}
                                        {ele.status === "DEACTIVE" && <span class="badge bg-label-danger"> DEACTIVE </span>}
                                      </td>
                                      <td>
                                        <div class="d-flex align-items-center">
                                          <span style={{ cursor: "pointer" }}>
                                            <i class="bx bx-pen mx-1"></i>
                                          </span>
                                          <span style={{ cursor: "pointer" }}>
                                            <i class="bx bx-show mx-1"></i>
                                          </span>
                                        </div>
                                      </td>
                                    </tr>
                                  </>)
                                })
                              }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <FooterComponent />

                <div className="content-backdrop fade"></div>
              </div>
            </div>
          </div>


          <div class="modal fade" id="basicModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel1">Create/Update Cource</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body text-start">
                  <div class="row">
                    <div class="col mb-3">
                      <label for="courceName" class="form-label">Cource Name</label>
                      <input type="text" id="courceName" class="form-control" placeholder="Cource Name" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col mb-3">
                      <label for="semister" class="form-label">Semister</label>
                      <input type="number" id="semister" class="form-control" placeholder="Semister count how many sem available for this cources" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col mb-3">
                      <label for="period" class="form-label">Period</label>
                      <input type="number" id="period" class="form-control" placeholder="Period in years" />
                    </div>
                  </div>
                  <div className="row">
                    <div class="col mb-3">
                      <label for="status" class="form-label">Status</label>
                      <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                        <option selected="" disabled>--SELECT--</option>
                        <option value="1">ACTIVE</option>
                        <option value="0">DEACTIVE</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>

          <div className="layout-overlay layout-menu-toggle"></div>
        </div>
      </div>
    </>
  );
}

export default CourcesModule;
