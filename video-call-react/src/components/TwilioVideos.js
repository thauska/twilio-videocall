import React, { useEffect, useRef } from 'react';
import TwilioVideo from 'twilio-video';

function TwilioVideos({token, room}) {
    const localVideoRef = useRef();
    const remoteVideoRef = useRef();

    useEffect(() => {
        TwilioVideo.connect(token, {
            video: false,
            audio: true,
            name: room
        })
        .then( (r) => {
            console.log('connected to Twilio!')
            console.log(r)
        })
        .catch((e) => {
            console.log('An error happened: ', e)
        });
        return () => {
        };
    }, [token, room])

    return (
        <div>
            <h1>Você está na sala: {room}</h1>
            <div ref={localVideoRef}></div>
            <div ref={remoteVideoRef}></div>
        </div>
    )
}

export default TwilioVideos;