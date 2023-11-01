import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CreateRoom.css'

function createRoom() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [roomName, setRoomName] = useState('');
    const [roomPhoto, setRoomPhoto] = useState(null);

    const addRoom = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_ROOM', payload: { roomName: roomName, image: roomPhoto } });
        history.push('/room-profiles')
    }

    const onFileChange = async (event) => {
        // Access the selected file
        const fileToUpload = event.target.files[0];

        // Limit to specific file types.
        const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

        // Check if the file is one of the allowed types.
        if (acceptedImageTypes.includes(fileToUpload.type)) {
            console.log(fileToUpload);
            setRoomPhoto(fileToUpload);
        } else {
            alert('Please select an image');
        }
    }


    return (
        <div class="create-room-background">
            <div class="container d-flex justify-content-center align-items-center vh-100">
                <div class="card">
                    <div class="card-body">
                        <form class="create-room" onSubmit={addRoom}>
                            <p class="create-room-title">CREATE NEW ROOM</p>



                            <div class='row'>
                                <div class="col-md-12 d-flex justify-content-center">
                                    <input
                                        class="form-control"
                                        type="file"
                                        accept="image/*"
                                        onChange={onFileChange}
                                    />

                                </div>
                            </div>

                            {roomPhoto && (
                                 <div className="imageFormat d-flex justify-content-center align-items-center">
                                    
                                    <img
                                    className="image-overview"
                                    src={URL.createObjectURL(roomPhoto)}
                                    alt="Room Preview"
                                />
                                
                                </div>
                            )}

                            <div class="create-room-style">
                                <input type="text" class="create-room-input-style" id="brandName" autoComplete='off' placeholder="*room name" required value={roomName} onChange={e => setRoomName(e.target.value)} />
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