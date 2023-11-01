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

                {roomsList.length === 0 ? (
                    <div className='col-9'>
                        <div className='row landing-page-banner mx-auto'>
                            <div className='col-12'>
                                <h2 className="welcomeText text-center mx-auto">WELCOME TO MYHAUS</h2>
                                <p className="h5 text-center landing-page-desc mx-auto">
                                    CREATE YOUR FIRST ROOM PROFILE!
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    roomsList.map((room) => (
                        <div className="col-3" key={room.id}>
                            <div className="rounded-image-container">
                                <img className="rounded-image" src={room.image} alt={room.room_name} />
                                <div className="image-overlay" onClick={() => roomOverviewPage(room.id)}>
                                    <p className="overlay-text">{room.room_name}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default roomProfiles;