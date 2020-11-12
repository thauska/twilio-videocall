import Raect, { useState } from 'react';
import axios from 'axios';

function Signin({setToken}) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('room');

    async function handleSubmit(event) {
        event.preventDefault();

        const result = await axios.post('https://video-call-5526-dev.twil.io/video-token.js', {
            identity: name,
            room
        });
        setToken(result.data);
        console.log('Got token with value: ', result.data);
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Join the chat</button>
        </form>
    )
}

export default Signin