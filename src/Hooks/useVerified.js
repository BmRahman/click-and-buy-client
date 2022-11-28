import { useEffect, useState } from "react";

const useVerified = email => {
    const [isVerified, setIsVerified] = useState(false);
    const [isVerifiedLoading, setisVerifiedLoading] = useState(true)
useEffect(() => {
    if(email){
        fetch(`https://click-server.vercel.app/users/verifiedseller/${email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setIsVerified(data.isVerified)
            setisVerifiedLoading(false)
        })
    }
}, [email])  
return [isVerified, isVerifiedLoading];
}

export default useVerified;