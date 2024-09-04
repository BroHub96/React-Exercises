import { DATA } from "./DATA";

export const Routing = () => {
    const DB = DATA;

    return (
        <div>
            <ul>
                {DB.map((item) => (
                    <li key={item.id}>
                        <img src={item.image} alt='' />
                        <p>{item.name}</p>
                        <Link to={`/item/${item.id}`}> View Details </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
} 

export const itemDetalis = () => {
    const { id } = useParams(id) ;

    return (
        <p>
            {DB.find((item) => item.id.toString() === id)}
        </p>
    )
}

// <Route path="/" 