import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './PaintColorForm.css'

function PaintColorForm() {



    return (
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="card">
                <div class="card-body">
                    <form>
                        <h2>FORM</h2>
                        <div class="form-group">
                            <input type="text" class="form-control" id="brandName" placeholder="brand name" />
                        </div>

                        <div class="form-group">
                            <input type="text" class="form-control" id="colorName" placeholder="*paint color name" required />
                        </div>

                        <div class="form-group">
                            <label for="finish">Paint Finish:</label>
                            <input type="text" class="form-control" id="finish" placeholder="paint finish" required />
                        </div>

                        <div class="form-group">
                            <textarea class="form-control" id="comments" rows="5" placeholder="additional comments"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">SAVE</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default PaintColorForm;