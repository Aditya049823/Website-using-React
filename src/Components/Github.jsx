import React, { useEffect, useState } from "react";


function Github(){
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch(`https://api.github.com/users/Aditya049823`)
        .then(res=>res.json())
        .then(data=>{
            setData(data);
        })
    },[])
    return(
        <>
            <div className="m-auto text-4xl text-center p-4 text-red-600">
                Github Profile Description
                <img className="m-auto mt-5 w-48 h-48 rounded-lg" src={data.avatar_url} alt='img'></img>
                <p className="m-auto text-xl p-2">Name : {data.name}</p>
                <p className="m-auto text-xl p-2">Bio : {data.bio}</p>
                <p className="m-auto text-xl p-2"> Public Repositories : {data.public_repos}</p>
                <p className="m-auto text-xl p-2">Github Followers : {data.followers}</p>
            </div>
        </>
    )
}
export default Github;