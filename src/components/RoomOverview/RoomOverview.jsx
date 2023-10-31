import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './RoomOverview.css'
import { useDispatch } from 'react-redux';

function RoomOverview() {
    const history = useHistory();
    const dispatch = useDispatch();
    //const { id } = useParams();

    useEffect(() => {
        dispatch({type: 'FETCH_FORMS_DETAILS', payload: 1 })
    }, []);

    const newForm = (path) => {
        history.push(path + "/1");
    };



    return (
        <div class="container-fluid room-overview-container">
            <div >



                <div class="container-overview-page">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="row">
                                <div class="col-md-8">
                                    <h2>BATHROOM</h2>
                                </div>
                                <div class="col-md-4 right-align-btn">
                                    <div class="dropdown">
                                        <button class="btn drop-down-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            add new +
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" onClick={() => newForm("/paint-form")}>PAINT COLORS</a></li>
                                            <li><a class="dropdown-item" onClick={() => newForm("/decor-form")}>DECOR</a></li>
                                            <li><a class="dropdown-item" onClick={() => newForm("/app-elec-form")}>APPLIANCES + ELECTRONICS</a></li>
                                            <li><a class="dropdown-item" onClick={() => newForm("/misc-form")}>MISCELLANEOUS</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed accordion-color" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                PAINT COLORS
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">

                                                <div class="row">
                                                    <div class="col-md-1">
                                                        <p>Behr</p>
                                                    </div>
                                                    <div class="col-md-1">
                                                        <p>White</p>
                                                    </div>
                                                    <div class="col-md-1">
                                                        <p>Eggshell</p>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <p>Deciding to repaint my walls in a crisp, clean white brings a refreshing and timeless ambiance to my space, creating a bright and versatile backdrop for any decor style. - 10/17/2023</p>
                                                    </div>
                                                    <div class="col-md-1">
                                                    <button>delete</button> <button>edit</button>
                                                    </div>
                                                </div>





                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed accordion-color" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                DECOR
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed accordion-color" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                APPLIANCES + ELECTRONICS
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item accordion-item-padding">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed accordion-color" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            MISCELLANEOUS
                                        </button>
                                    </h2>

                                </div>
                            </div>

                        </div>
                        <div class="col-md-3">
                            <img className="image-overview" src="images/decor-image.jpg" />
                            <div class="col-md-4" >
                                <div className="notes-title">Notes</div>
                                <div class="form-group">
                                    <textarea class="form-control" rows="10" className="notepad"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default RoomOverview;