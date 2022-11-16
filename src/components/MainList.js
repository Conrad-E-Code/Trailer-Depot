
import TrailerCard from './TrailerCard'

function MainList({ trailers, handleDelete }) {

    const mappedTrailers = trailers.map((trailer) => {
        return (
            <TrailerCard handleDelete={handleDelete} key={trailer.id} trailers={trailer}/>
        )
    })

    return (
        <ul className='cards'>{mappedTrailers}</ul>
    )
}

export default MainList;