import { useEffect, useState } from 'react';
import ChildComponent from './ChildComponent';

function App() {
    const [name, setName] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);

    return (
        <div className="dark">
            <button
                className="border-border border p-2"
                onClick={e => setName('posts')}
            >
                Posts
            </button>
            <br />
            <button
                className="border-border border p-2"
                onClick={e => setName('users')}
            >
                users
            </button>

            <ChildComponent name={name} />
        </div>
    );
}

export default App;
