import React from 'react';
import { useHistory } from 'react-router-dom';
import './RoomOverview.css'

function RoomOverview() {
    const history = useHistory();



    return (
        <div>
            <div >
                <h2>ROOM NAME GOES HERE</h2>

                <div class="container-overview-page">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                PAINT COLORS
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body"> <code>.accordion-flush</code></div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                DECOR
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body"><code>.accordion-flush</code></div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                APPLIANCE + ELECTRONICS
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body"><code>.accordion-flush</code></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            MISCELLANEOUS
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body"><code>.accordion-flush</code></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <img className="rounded-image" src="images/decor-image.jpg" alt="Decor" />
                            <div class="col-md-4" >
                                <div className="notes-title">Notes</div>
                                <div class="form-group">
                                    <textarea  class="form-control" rows="10" className="notepad"></textarea>
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