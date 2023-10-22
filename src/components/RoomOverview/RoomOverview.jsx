import React from 'react';
import { useHistory } from 'react-router-dom';
import './RoomOverview.css'

function RoomOverview() {
    const history = useHistory();



    return (
        <div>
            <div >



                <div class="container-overview-page">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-8">
                                    <h2>ROOM NAME GOES HERE</h2>
                                </div>
                                <div class="col-md-4 right-align-btn">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            add new +
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">PAINT COLORS</a></li>
                                            <li><a class="dropdown-item" href="#">DECOR</a></li>
                                            <li><a class="dropdown-item" href="#">APPLIANCES + ELECTRONICS</a></li>
                                            <li><a class="dropdown-item" href="#">MISCELLANEOUS</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                PAINT COLORS
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                                testing
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
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
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                APPLIANCES + ELECTRONICS
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
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