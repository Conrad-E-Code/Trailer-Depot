function NewForm(props) {
    return(
    <div>
        <form className="new-trailer-form">
            <h2>Create New Listing</h2>
            <ul>
                <li><input placeholder='Title'></input></li>
                <li><input placeholder='Image URL'></input></li>
                <li><input placeholder='City'></input></li>
                <li><input placeholder='State'></input></li>
            </ul>
            <button className='new-form-button'>Submit</button>            
        </form>
    </div>
    )
}

export default NewForm;