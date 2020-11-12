import Raect, { useState } from 'react'

function Signin() {
    const [name, setName] = useState();
    const [room, setRoom] = useState("room");

    return (
        <form>
            <label htmlFor="name">
                Name
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <label htmlFor="room">
                Room
                <input
                    type="text"
                    id="room"
                    value={room}
                    onChange={e => setRoom(e.target.value)}
                />
            </label>
        </form>
    )
}

export default Signin