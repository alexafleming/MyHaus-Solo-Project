import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './MiscellaneousForm.css'

function MiscellaneousForm() {
    
  
  
    return (
      <div class="misc-background">
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="card">
                <div class="card-body">
                    <form>
                    <p class="misc-form-title">MISCELLANEOUS</p>
                        <div class="misc-form-style">
                            <input type="text" class="form-input-style" id="item" placeholder="*item" />
                        </div>

                        <div class="misc-form-style">
                            <input type="text" class="form-input-style" id="brandName" placeholder="*brand name" required />
                        </div>

                        <div class="misc-form-style additional-comments-margin">
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
    );
  }
  
  export default MiscellaneousForm;