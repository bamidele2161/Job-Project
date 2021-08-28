import React, {useState} from 'react'
import Axios from 'axios'
import Recipe from './Recipe'
import {v4 as uuidv4} from 'uuid';
const Slider = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);

    const APP_ID = "4e9f05eb";
      const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
      const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}` 
      const getData = async () => {  
          const result = await Axios.get(url);
          setRecipes(result.data.hits);
          console.log(result);
          setQuery('')
      };
      
      const onSubmit = (e) => {
        e.preventDefault();
        getData();
      };

      const onChange = (e) => {
          setQuery(e.target.value);
    }
      
    // fetch("https://reqres.in/api/posts" , {
    //     method: 'POST',
    //     headers: new Headers({
    //         "Content-Type": "application/json",
            
    //     }),
    //     body: JSON.stringify({title: "React Hooks Post Request Example" })
    // })
    // .then(response => response.json())
    // .then(data => console.log(data));

    return (
        <div>
            <h1 > food search</h1>
            <form className="search-form" onSubmit={onSubmit}>
                <input type="text" placeholder="search food" autoComplete="off"
                onChange={onChange}
                value={query} />
                <input type="submit" value="search" />
            </form>
            <div className="recipes">
            {recipes !== [] && 
            recipes.map(recipe => <Recipe key={uuidv4
            ()} recipe={recipe} />)}
        </div>
        </div>
    )
}

export default Slider

