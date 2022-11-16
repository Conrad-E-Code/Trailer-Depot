import {useState} from 'react'
import {useNavigate} from "react-router-dom"

function NewForm({trailers, setTrailers}) {
    const history = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        const configObj = {
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(formData)
        }
    fetch("http://localhost:3001/trailers", configObj)
    .then(r => r.json())
    .then((respData) => {
        console.log(respData)
        setTrailers([respData, ...trailers])
        history(`/`)
                        }
         )
                            }
    function handleChange(e) {setFormData({...formData, [e.target.name]: e.target.value})}
    const [formData, setFormData] = useState(
        {
            "name": "",
            "for_sale": false,
            "for_rent": false,
            "image": "",
            "location": "",
            "description": "",
            "price": 0,
            "rate" : 0


        }

    )
    return(
    <div>
        <form onSubmit={handleSubmit} className="new-trailer-form">
            <h2>Create New Listing</h2>
            <ul>
                <li>
                    <label>
                        <input type= "checkbox"name="for_rent" value={formData["for-rent"]} onChange={(e) => {setFormData(
                            {
                                ...formData,
                                [e.target.name]: !formData["for_rent"]
                            }
                        )}} placeholder='Title'>
                        </input>
                        Check if Trailer is For Rent
                    </label>
                </li>
                    
                <li>
                    <label>
                        <input type="checkbox" name="for_sale" value={formData["for_sale"]} onChange={(e) => {setFormData(
                            {
                                ...formData,
                                [e.target.name]: !formData["for_sale"]
                            }
                        )}}>
                        </input>
                        Check if Trailer is For Sale
                     </label>
                </li>
                <li><input required name="name" value={formData.name} onChange={(e) => {handleChange(e)}} placeholder='Enter Trailer Name'></input></li>
                <li><input required name="image" value={formData.image} onChange={(e) => {handleChange(e)}} placeholder='Image URL'></input></li>
                <li><input required name="location"value={formData.location} onChange={(e) => {handleChange(e)}} placeholder='Add location'></input></li>
                <li><input required name="description" value={formData.review} onChange={(e) => {handleChange(e)}} placeholder='Add a Description *fix me*'></input></li>
                {formData["for_sale"] ? <li><input required type="number" name="price" value={formData.price} onChange={(e) => {handleChange(e)}} placeholder='Enter Asking Price'></input></li>: null}
                {formData["for_rent"] ? <li><input required type="number" name="rate" value={formData.rate} onChange={(e) => {handleChange(e)}} placeholder='Enter Daily Rate'></input></li>: null}
            </ul>
            <button type="submit" className='new-form-button'>Submit</button>            
        </form >
    </div>
    )
}

export default NewForm;