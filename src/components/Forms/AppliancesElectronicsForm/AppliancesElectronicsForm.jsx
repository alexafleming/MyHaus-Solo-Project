import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './AppliancesElectronicsForm.css'
import axios from 'axios';


function AppliancesElectronicsForm(params) {
  const history = useHistory();
    const { id } = useParams();
    const [item, setItem] = useState('');
    const [brandName, setBrandName] = useState('');
    const [priceOfItem, setPriceOfItem] = useState('');
    const [modelNumber, setModelNumber] = useState('');
    const [additionalComments, setAdditionalComments] = useState('');

    const handleSubmit = () => {
        const appFormSubmission = {
            item: item,
            brandName: brandName,
            priceOfItem: priceOfItem,
            modelNumber: modelNumber,
            additionalComments: additionalComments,
            roomId: id
        }

        axios
            .post('/api/forms/appform', appFormSubmission)
            .then(response => {
                history.push('/room-overview'); //WILL NEED TO ADD ROOM ID IN FUTURE!
            })
            .catch(error => {
                console.log(error);
                alert('Sorry, could not add appliances + electronics form');
            });
    };


  return (
    <div>
      <div class="app-background">
        <div class="container d-flex justify-content-center align-items-center vh-100">
          <div class="card">
            <div class="card-body">
              <form onSubmit={handleSubmit}>
                <p class="form-title">APPLIANCES | ELECTRONICS</p>
                <div class="app-form-style">
                  <input type="text" class="form-input-style" id="item" placeholder="*item" required onChange={(event) => setItem(event.target.value)}/>
                </div>

                <div class="decor-form-style">
                  <input type="text" class="form-input-style" id="brandName" placeholder="brand name" required onChange={(event) => setBrandName(event.target.value)}/>
                </div>

                <div class="app-form-style">

                  <input type="text" class="form-input-style" id="price" placeholder="price of item" onChange={(event) => setPriceOfItem(event.target.value)}/>
                </div>

                <div class="decor-form-style">

                  <input type="text" class="form-input-style" id="modelNumber" placeholder="model number" onChange={(event) => setModelNumber(event.target.value)}/>
                </div>

                <div class="app-form-style">

                  <input type="text" class="form-input-style" id="warrentyInfo" placeholder="warrenty info" onChange={(event) => setWarrentyInfo(event.target.value)}/>
                </div>

                <div class="app-form-style additional-comments-margin">
                  <textarea class="form-input-style" id="comments" rows="5" placeholder="additional comments" onChange={(event) => setAdditionalComments(event.target.value)}></textarea>
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