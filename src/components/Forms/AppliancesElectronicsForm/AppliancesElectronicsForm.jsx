import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './AppliancesElectronicsForm.css'
import axios from 'axios';


function AppliancesElectronicsForm(params) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id, formId } = useParams();
  const appFormList = useSelector((store) => store.forms.data.appForm);
  const [item, setItem] = useState('');
  const [brandName, setBrandName] = useState('');
  const [priceOfItem, setPriceOfItem] = useState(0);
  const [warrantyInfo, setwarrantyInfo] = useState('');
  const [modelNumber, setModelNumber] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');

  function getFormById() {
    const editFormId = parseInt(formId);
    for (const form of appFormList) {
      if (form.id === editFormId) {
        setItem(form.item);
        setBrandName(form.brand_name);
        setPriceOfItem(form.price_of_item);
        setModelNumber(form.model_number);
        setwarrantyInfo(form.warranty_info);
        setAdditionalComments(form.additional_comments);
      }
    }
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_FORMS_DETAILS', payload: id })
  }, []);

  useEffect(() => {
    if (appFormList.length > 0) {
      getFormById();
    }
  }, [appFormList]);

  const handleSubmit = () => {
    const appFormSubmission = {
      item: item,
      brandName: brandName,
      priceOfItem: priceOfItem,
      modelNumber: modelNumber,
      warrantyInfo: warrantyInfo,
      additionalComments: additionalComments,
      roomId: id
    }

    if (formId === null || formId === undefined) {
    axios
      .post('/api/forms/appform', appFormSubmission)
      .then(response => {
        history.push(`/room-overview/${id}`);
      })
      .catch(error => {
        console.log(error);
        alert('Sorry, could not add appliances + electronics form');
      });
    } else {
        axios
            .put(`/api/forms/appform/${formId}`, appFormSubmission)
            .then(response => {
                history.push(`/room-overview/${id}`);
            })
            .catch(error => {
                console.log(error);
                alert('Sorry, could not update appliances + electronics form');
            });
    }
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
                  <input type="text" class="form-input-style" id="item" placeholder="*item" autoComplete='off' value={item} required onChange={(event) => setItem(event.target.value)} />
                </div>

                <div class="decor-form-style">
                  <input type="text" class="form-input-style" id="brandName" placeholder="*brand name" autoComplete='off' value={brandName} required onChange={(event) => setBrandName(event.target.value)} />
                </div>

                <div class="app-form-style">
                  <input type="text" class="form-input-style" id="price" placeholder="price of item" autoComplete='off' value={priceOfItem} onChange={(event) => setPriceOfItem(event.target.value)} />
                </div>


                <div class="decor-form-style">

                  <input type="text" class="form-input-style" id="modelNumber" placeholder="model number" autoComplete='off' value={modelNumber} onChange={(event) => setModelNumber(event.target.value)} />
                </div>

                <div class="app-form-style">

                  <input type="text" class="form-input-style" id="warrantyInfo" placeholder="warranty info" autoComplete='off' value={warrantyInfo} onChange={(event) => setwarrantyInfo(event.target.value)} />
                </div>

                <div class="app-form-style additional-comments-margin">
                  <textarea class="form-input-style" id="comments" rows="5" placeholder="additional comments" autoComplete='off' value={additionalComments} onChange={(event) => setAdditionalComments(event.target.value)}></textarea>
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