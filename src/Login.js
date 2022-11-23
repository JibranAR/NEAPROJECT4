import React from 'react'
import { Container } from 'react-bootstrap'



const AUTH_URL = 
"https://accounts.spotify.com/authorize?client_id=b1de9c42b86d45b39aa1193168b2a4af&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <Container>
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
            login with spotify
        </a>
    </Container>
  )
}
