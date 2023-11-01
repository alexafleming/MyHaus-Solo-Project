import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './RoomProfiles.css'

function roomProfiles() {
    const history = useHistory();
    const dispatch = useDispatch();
    const roomsList = useSelector((store) => store.rooms);

    useEffect(() => {
        getRoomList();
    }, []);

    const getRoomList = () => {
        dispatch({ type: 'FETCH_ROOM_LIST' })
    }

    const createNewRoom = () => {
        history.push('/create-room');
    };

    const roomOverviewPage = (id) => {
        history.push(`/room-overview/${id}`);
    };

    return (
        <div className="room-profile-images">
            <div className="row room-profiles-images">
                <div className="col-3">
                    <div className="rounded-image-container">
                        <img className="rounded-image" src="images/decor-image.jpg" alt="Decor" />
                        <div className="image-overlay-add" onClick={createNewRoom}>
                            <p className="overlay-text-add">+</p>
                        </div>
                    </div>
                </div>

                {
                    roomsList.map(rooms => (
                        <div className="col-3">
                            <div className="rounded-image-container">
                                <img className="rounded-image" src={rooms.image}/>
                                <div className="image-overlay" onClick={() => roomOverviewPage(rooms.id)}>
                                    <p className="overlay-text">{rooms.room_name}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default roomProfiles;