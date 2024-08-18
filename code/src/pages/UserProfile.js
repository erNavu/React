import { useContext, useEffect } from "react"
import { UserContext } from "../utils/UserContext"
import { useNavigate } from "react-router-dom"

const UserProfile = () => {
    const { userData } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!Object.keys(userData).length) return navigate('/login')
    }, [])

    return (<div className=" m-4 text-center">
        <div className="font-semibold text-2xl"> {userData.name} Profile Details</div>
        <div className="my-4"> user name : {userData.name}</div>
        <div className="my-4"> email : {userData.email}</div>
        <div className="my-4">Phone Number : {userData.phoneNo}</div>

    </div>)
}
export default UserProfile