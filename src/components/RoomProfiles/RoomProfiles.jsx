import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './RoomProfiles.css'

function roomProfiles() {
    const history = useHistory();

    const handlePlusButtonClick = () => {
        history.push('/create-room');
      };


    return (
        <div className="room-profile-images">
            <div className="row room-profiles-images">
                <div className="col-3">
                    <div className="rounded-image-container">
                        <img className="rounded-image" src="images/decor-image.jpg" alt="Decor" />
                        <div className="image-overlay-add"  onClick={handlePlusButtonClick}>
                            <p className="overlay-text-add">+</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="rounded-image-container">
                        <img className="rounded-image" src="images/bathroom-image.jpg" alt="Documents" />
                        <div className="image-overlay">
                            <p className="overlay-text">bathroom</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="rounded-image-container">
                        <img className="rounded-image" src="images/laundry-room.jpg" alt="Home Projects" />
                        <div className="image-overlay">
                            <p className="overlay-text">laundry</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="rounded-image-container">
                        <img className="rounded-image" src="images/appliances-image.jpg" alt="Appliances" />
                        <div className="image-overlay">
                            <p className="overlay-text">kitchen</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default roomProfiles;