// Example frontend call (e.g., in a useEffect or on a button click)

export async function createUserContainer(userId) {
    const response = await fetch('/api/createContainer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
    });

    const data = await response.json();

    if (response.ok) {
        console.log(data.message);
    } else {
        console.error('Error:', data.error);
    }
}

