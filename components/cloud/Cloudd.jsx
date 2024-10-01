import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
const Cloud9IDE = () => {
  const [port, setPort] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const router = useRouter();
  const createWorkspace = async () => {
    try {
      const response = await axios.post('http://localhost:7100/create-workspace', {
        username,
        password
      });
      setPort(response.data.port);
    } catch (error) {
      console.error('Error creating workspace:', error);
    }
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {!port ? (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={createWorkspace}>Create Workspace</button>
        </div>
      ) : (
        <>
        {/* <h1>Cloud9 IDE</h1> */}
         <Button onClick={()=>{
          // on new tab lol
          window.open(`http://localhost:${port}/ide.html`, '_blank');
            // router.push( `http://localhost:${port}/ide.html`)
         }} >
          Open IDE
         </Button>
        <div style={{ width: '100%', height: '100%' }}>
          <iframe
            src={`http://localhost:${port}/ide.html`}
            style={{ width: '100%', height: '100%', border: 'none' }}
            title="Cloud9 IDE"
            />
        </div>
            </>
      )}
    </div>
  );
};

export default Cloud9IDE;