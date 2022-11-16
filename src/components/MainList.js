
import TrailerCard from './TrailerCard'

function MainList({ trailers }) {

    const mappedTrailers = trailers.map((trailer) => {
        return (
            <TrailerCard key={trailer.id} trailers={trailer}/>
        )
    })

    return (
        <ul className='cards'>{mappedTrailers}</ul>
    )
}

export default MainList;