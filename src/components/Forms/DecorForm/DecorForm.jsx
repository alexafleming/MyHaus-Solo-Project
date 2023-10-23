import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './DecorForm.css'

function DecorForm() {
    
  
  
    return (
      <div class="decor-background">
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="card">
                <div class="card-body">
                    <form>
                    <p class="decor-form-title">DECORS</p>
                        <div class="decor-form-style">
                            <input type="text" class="form-input-style" id="item" placeholder="*item" required/>
                        </div>

                        <div class="decor-form-style">
                            <input type="text" class="form-input-style" id="purchasedFrom" placeholder="purchased from" />
                        </div>

                        <div class="decor-form-style">

                            <input type="text" class="form-input-style" id="websiteLink" placeholder="website link" />
                        </div>

                        <div class="decor-form-style additional-comments-margin">
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
  
  export default DecorForm;