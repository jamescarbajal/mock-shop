import { useState } from 'react';

export default function SearchForm() {

      const [productName, setProductName] = useState("");

    return(
    <>
        <div class="d-flex justify-content-center mt-5">
            <h1 class="my-4"> FIND YOUR FAVORITE JADE NOW! </h1>
        </div>
        
        <form id="cateringForm" class="container-fluid p-3 w-100 d-flex flex-row justify-content-end border">
        <div class="d-flex flex-row container-fluid w-50">
          <div class="mx-3">
            <button type="submit" class="btn btn-secondary">Filter</button>
          </div>
          <div class="w-100">
            <input 
              name="searchInput" 
              type="text" 
              class="form-control" 
              id="searchInput" 
              placeholder="Search"
              value=""
            />
          </div>
          <div class="mx-3">
            <button type="submit" class="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
    </>
    );
};