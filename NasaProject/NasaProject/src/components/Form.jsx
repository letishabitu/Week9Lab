import { useState, useEffect } from 'react'

function Form(props) {
    // add state to hold the data of the form
    const [formData, setFormData] = useState({
        searchterm: "",
    })

    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = (event) => {
        // prevent page from refreshing on form submissin
        event.preventDefault();

        // pass the search term to moviesearch prop (the method that will search)
        props.nassasearch(formData.searchterm);
    }

    return (
        <div>
            <h3>Search</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="searchterm"
                    onChange={handleChange}
                    value={formData.searchterm}
                />
                <input type="submit" value="submit" />

            </form>
            {<p>Type in the keyword '/search?q=apollo%2011' for search</p>}
            
        </div>
    )
}

export default Form