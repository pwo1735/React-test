import React from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'
import Filters from '../Filters'
function App() {
    return (
        
        <div className='container'>
            <Filters articles={articles}/>
            <div className='jumbotron'></div>
            <h1 className='display-3'>
                Article
            </h1>
            <ArticleList articles={articles} />
            
        </div>
    )
}


export default App