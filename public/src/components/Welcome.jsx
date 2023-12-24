import React, { useEffect } from 'react'
import styled from 'styled-components'
import Robot from "../assets/robot.gif"
import axios from 'axios';
import io from 'socket.io-client'; const socket = io('http://localhost:3000'); // Replace with your server URL and port
export default function Welcome({currentUser}) {
  // useEffect(() => {
  //   // Dummy logic for adding a user on component mount
  //   socket.emit('add-user', currentUser._id);

  //   // Dummy logic for selecting a chat user
  // }, [currentUser._id]);

  // useEffect(() => {
  //   // Listen for "msg-recieved" event and update messages state
  //   socket.on('msg-recieved', (msgData) => {
  //     console.log({msgData})
  //   });

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     socket.off('msg-recieved');
  //   };
  // }, []);
  socket.on("msg-recieved", (msg) => {
    console.log({msg})

  })
  return (
    <Container>
        <img src={Robot} alt="welcome" />
        <h1>
            Welcome, <span>{currentUser.username}!</span>
        </h1>
        <h3>Please select a chat to start Messaging.</h3>
    </Container>
  )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
img{
    height: 20rem;
}
span{
    color: #4e00ff;
    text-transform: capitalize;
}
`;