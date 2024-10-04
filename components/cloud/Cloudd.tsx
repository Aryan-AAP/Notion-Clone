'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
// import { addUsernameandpassword } from '@/app/actions';
import { useAuth } from '@clerk/nextjs';
import { addUsernameandpassword } from '@/actions/action';
import { useRoom } from '@liveblocks/react/suspense';

const Cloud9IDE = () => {
  const ruoter=useRouter();
  const [port, setPort] = useState<number | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { userId } = useAuth();
  const room =useRoom()
;
const roomId=room?.id;
  useEffect(() => {
    const fetchCredentials = async () => {
      if (userId) {
        try {
          const response = await fetch('/api/get-credentials', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ room: roomId }),
          });

          if (response.ok) {
            const data = await response.json();
            if (data.username && data.password) {
              setUsername(data.username);
              setPassword(data.password);
              createWorkspace(data.username, data.password);
            }
          }
        } catch (error) {
          console.error('Error fetching credentials:', error);
        }
      }
      setIsLoading(false);
    };

    fetchCredentials();
  }, [userId, roomId]);

  const createWorkspace = async (username: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:7100/create-workspace', {
        username,
        password
      });
      setPort(response.data.port);
      
      // Store credentials using the server action
      await addUsernameandpassword(roomId, username, password);
    } catch (error) {
      console.error('Error creating workspace:', error);
    } finally {
      setIsLoading(false);
//reaload the whole windoww
      router.refresh();
//cheak it 
//Todo cheak it 


    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createWorkspace(username, password);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {!port ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Create Workspace</Button>
        </form>
      ) : (
        <>
          <Button onClick={() => window.open(`http://localhost:${port}/ide.html`, '_blank')}>
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