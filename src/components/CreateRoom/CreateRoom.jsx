import React from 'react';
import { useHistory } from 'react-router-dom';
import './CreateRoom.css'

function createRoom() {
    const history = useHistory();



    return (
            <div class="create-room-background">
                <div class="container d-flex justify-content-center align-items-center vh-100">
                    <div class="card">
                        <div class="card-body">
                            <form class="create-room">
                                <p class="create-room-title">CREATE NEW ROOM</p>
                           
    
                                <div class="create-room-style additional-comments-margin">
                                    <textarea class="create-room-input-style" id="comments" rows="5" autoComplete='off' placeholder="image" ></textarea>
                                </div>
                                <div class='row'>
                                    <div class="col-md-12 d-flex justify-content-center">
                                        <button type="submit" class="btn upload-btn-style">upload</button>
                                    </div>
                                </div>

                                <div class="create-room-style">
                                    <input type="text" class="create-room-input-style" id="brandName" autoComplete='off' placeholder="*room name" required />
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
    

export default createRoom;