import { Link } from "react-router-dom"


export const NotFoundPage = () => {
    return (
        <div style = {{textAlign: 'center'}}>
            <h1>Page Not Found!!!</h1>
            <Link to = '/'>Go to main page</Link>
        </div>
    )
}