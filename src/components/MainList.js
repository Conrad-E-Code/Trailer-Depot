
import TrailerCard from './TrailerCard'

function MainList({ trailers, handleDelete, increment }) {

    const mappedTrailers = trailers.map((trailer) => {
        return (
            <TrailerCard handleDelete={handleDelete} key={trailer.id} trailers={trailer} increment={increment}/>
        )
    })

    return (
        <ul className='cards'>{mappedTrailers}</ul>
    )
}

export default MainList;