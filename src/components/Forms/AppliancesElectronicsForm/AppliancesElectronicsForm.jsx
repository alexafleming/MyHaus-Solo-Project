import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AppliancesElectronicsForm.css'

function AppliancesElectronicsForm() {



  return (
    <div>
      <div class="app-background">
        <div class="container d-flex justify-content-center align-items-center vh-100">
          <div class="card">
            <div class="card-body">
              <form>
                <p class="form-title">APPLIANCES | ELECTRONICS</p>
                <div class="app-form-style">
                  <input type="text" class="form-input-style" id="item" placeholder="*item" required />
                </div>

                <div class="decor-form-style">
                  <input type="text" class="form-input-style" id="brandName" placeholder="brand name" required />
                </div>

                <div class="app-form-style">

                  <input type="text" class="form-input-style" id="price" placeholder="price of item" />
                </div>

                <div class="decor-form-style">

                  <input type="text" class="form-input-style" id="modelNumber" placeholder="model number" />
                </div>

                <div class="app-form-style">

                  <input type="text" class="form-input-style" id="warrentyInfo" placeholder="warrenty info" />
                </div>

                <div class="app-form-style additional-comments-margin">
                  <textarea class="form-input-style" id="comments" rows="5" placeholder="additional comments"></textarea>
                </div>
                <div class='row'>
                  <div class="col-md-12 d-flex justify-content-center">
                    <button type="submit" class="btn save-btn-style">SAVE</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AppliancesElectronicsForm;