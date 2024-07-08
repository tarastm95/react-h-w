import React from 'react';
import PostForm from './components/PostForm';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Створити пост</h1>
            <PostForm />
        </div>
    );
};

export default App;
