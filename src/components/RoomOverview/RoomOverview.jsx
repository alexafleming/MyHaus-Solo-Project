import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './RoomOverview.css'

function RoomOverview() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const roomsList = useSelector((store) => store.rooms);
    const [roomOverview, setRoomOverview] = useState({});
    const formsList = useSelector((store) => store.forms.data);

    function getRoomById() {
        const roomId = parseInt(id);
        for (const room of roomsList) {
            if (room.id === roomId) {
                setRoomOverview(room);
            }
        }
    }


    useEffect(() => {
        dispatch({ type: 'FETCH_ROOM_LIST' })
        dispatch({ type: 'FETCH_FORMS_DETAILS', payload: id })
        getRoomById();
    }, []);

    const newForm = (path) => {
        history.push(path + `/${id}`);
    };



    return (
        <div class="container-fluid room-overview-container">
            <div >



                <div class="container-overview-page">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="row">
                                <div class="col-md-8">
                                    <h2>
                                        {roomOverview.room_name}
                                    </h2>
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
                                        {
                                            formsList.paintForm.map(form => (
                                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body">

                                                        <div class="row">
                                                            <div class="col-md-1">
                                                                <p>{form.brand_name}</p>
                                                            </div>
                                                            <div class="col-md-1">
                                                                <p>{form.paint_color_name}</p>
                                                            </div>
                                                            <div class="col-md-1">
                                                                <p>{form.paint_finish}</p>
                                                            </div>
                                                            <div class="col-md-8">
                                                                <p>{form.additional_comments}</p>
                                                            </div>
                                                            <div class="col-md-1">
                                                                <button>delete</button> <button>edit</button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed accordion-color" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                DECOR
                                            </button>
                                        </h2>
                                        {
                                            formsList.decorForm.map(form => (
                                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body">

                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                <p>{form.purchased_from}</p>
                                                            </div>

                                                            <div class="col-md-2">
                                                                <p>{form.item}</p>
                                                            </div>

                                                            <div class="col-md-5">
                                                                <p>{form.additional_comments}</p>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <a href={form.website_link} target="_blank"> Website Link</a>

                                                            </div>
                                                            <div class="col-md-1">
                                                                <button>delete</button> <button>edit</button>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed accordion-color" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                APPLIANCES + ELECTRONICS
                                            </button>
                                        </h2>
                                        {
                                            formsList.appForm.map(form => (
                                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body">

                                                        <div class="row">

                                                            <div class="col-md-2">
                                                                <p>{form.brand_name}</p>

                                                            </div>

                                                            <div class="col-md-2">
                                                                <p>{form.item}</p>
                                                            </div>

                                                            <div class="col-md-1">
                                                                <p>{form.model_number}</p>

                                                            </div>
                                                            <div class="col-md-1">
                                                                <p>{form.warrwnty_info}</p>
                                                            </div>

                                                            <div class="col-md-4">
                                                                <p>{form.additional_comments}</p>
                                                            </div>

                                                            <div class="col-md-1 pricebold">
                                                                <p>${form.price_of_item}</p>
                                                            </div>
                                                            <div class="col-md-1">
                                                                <button>delete</button> <button>edit</button>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div class="accordion-item accordion-item-padding">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed accordion-color" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                                            MISCELLANEOUS
                                        </button>
                                    </h2>
                                    {
                                            formsList.miscForm.map(form => (
                                                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body">

                                                        <div class="row">

                                                            <div class="col-md-2">
                                                                <p>{form.brand_name}</p>

                                                            </div>

                                                            <div class="col-md-2">
                                                                <p>{form.item}</p>
                                                            </div>


                                                            <div class="col-md-7">
                                                                <p>{form.additional_comments}</p>
                                                            </div>

                                                            <div class="col-md-1">
                                                                <button>delete</button> <button>edit</button>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            ))
                                        }

                                </div>
                            </div>

                        </div>
                        <div class="col-md-3">
                            <img className="image-overview" src={roomOverview.image} />
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