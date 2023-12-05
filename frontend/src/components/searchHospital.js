import React from "react";
import Sidebar from "./sidebar";

function searchHospital(){
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <Sidebar/>
            <div class="flex-grow-1 p-4">
                {/* <!-- Search Box --> */}
                <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search hospitals..." aria-label="Search hospitals" aria-describedby="button-addon2"/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>

                {/* <!-- List of Hospitals --> */}
                <div class="list-group">
                <a href="http://localhost:3000/" class="list-group-item list-group-item-action mb-2" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Hospital Name 1</h5>
                    </div>
                    <p class="mb-1">Some description for hospital one...</p>
                    <small>And some more detailed information.</small>
                </a>
                <a href="http://localhost:3000/" class="list-group-item list-group-item-action mb-2" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Hospital Name 1</h5>
                    </div>
                    <p class="mb-1">Some description for hospital one...</p>
                    <small>And some more detailed information.</small>
                </a>
                {/* <a href="http://localhost:3000/" class="list-group-item list-group-item-action mb-2" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Hospital Name 2</h5>
                    </div>
                    <p class="mb-1">Some description for hospital two...</p>
                    <small>And some more detailed information.</small>
                </a> */}
                {/* <!-- More hospitals --> */}
                </div>
            </div>

        </div>
      
    );
}


export default searchHospital;