import { useParams } from "react-router-dom"
import { useEffect ,useState } from "react";
import {User} from '../User/User.js'
import preloderSrc from '../../images/loader.gif'
import { withError } from "../../hoc/withError.js";


const HandledUSer = withError(User)


export const UserPage = () => {

    const [userData , setUserData] = useState(null);
    const [errorMessage , setErrorMessage] = useState('');
    const {userId}= useParams();
    const [isLoading , setIsLoading] = useState(false);


    useEffect(()=>{
        setIsLoading(true);
        fetch(`https://reqres.in/api/users/${userId}`)
        .then((res)=>{
            console.log(res)
            if(res.status >= 400 && res.status < 600 ) {
                throw new Error ('Failed fething data');
            }
            return res.json()
        })
        .then(({data})=>setUserData(data))
        .catch(({message})=>setErrorMessage(message))
        .finally(()=>setIsLoading(false));
    },[])

    return (
        <>
            {!isLoading 
            ?
            <HandledUSer {...userData} errorMessage = {errorMessage}/>
            : <img src = {preloderSrc}/>
            }
        </>
    )

}