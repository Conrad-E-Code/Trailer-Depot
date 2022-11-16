
import TrailerCard from './TrailerCard'

function MainList({ trailers }) {

    const mappedTrailers = trailers.map((trailer) => {
        return (
            <TrailerCard key={trailer.id} trailers={trailer}/>
        )
    })

    return (
        <div>{mappedTrailers}</div>
    )
}

export default MainList;