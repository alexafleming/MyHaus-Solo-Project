import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './PaintColorForm.css'

function PaintColorForm() {



    return (
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="card">
                <div class="card-body">
                    <form>
                        <h2 class="form-title">FORM</h2>
                        <div class="paint-form-style">
                            <input type="text" class="form-input-style" id="brandName" placeholder="brand name" />
                        </div>

                        <div class="paint-form-style">
                            <input type="text" class="form-input-style" id="colorName" placeholder="*paint color name" required />
                        </div>

                        <div class="paint-form-style">

                            <input type="text" class="form-input-style" id="finish" placeholder="paint finish" required />
                        </div>

                        <div class="paint-form-style additional-comments-margin">
                            <textarea class="form-input-style" id="comments" rows="5" placeholder="additional comments"></textarea>
                        </div>

                        <button type="submit" class="btn save-btn-style">SAVE</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default PaintColorForm;