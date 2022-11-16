
import TrailerCard from './TrailerCard'

function SaleList({ trailers }) {

    const mappedTrailers = trailers.map((trailer) => {
        return (
            <TrailerCard key={trailer.id} trailers={trailer}/>
        )
    })

    return (
        <div>{mappedTrailers}</div>
    )
}

export default SaleList;