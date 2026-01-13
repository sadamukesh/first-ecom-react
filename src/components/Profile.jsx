function Profile(props){
    return(
        <div className="border p-4 rounded-lg bg-white shadow-md w-60">

            <h2 className="text-xl font-bold mb-2">{props.name}</h2>
            <p className="text-gray-600">Age: {props.age}</p>
            <button className="mt-4 p-2 bg-blue-500 text-white rounded-lg">Follow</button>
        </div>
    )
}
export default Profile;