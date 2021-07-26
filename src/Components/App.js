import React from 'react';
import ArticleList from './ArticleList';
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'
function App() {
    return (
        <div className= 'container'> 
        <div className='jumbotron'></div>
            <h1 className= 'display-3'>
                Article
            </h1>
            <ArticleList articles={articles}/>
        </div>
    )
}


export default App