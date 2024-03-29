import { useEffect, useState } from "react"

const useSecretToken = user => {
    const [secretToken, setSecretToken] = useState('');

    useEffect(() => {
        // console.log(user);
        const email = user?.user?.email;
        const presentUser = { email: email };
        // const url = `http://localhost:5000/user/${email}`;
        // const url = `https://agile-badlands-34653.herokuapp.com/user/${email}`;
        // const url = `https://sks-inc-server.vercel.app/user/${email}`;
        const url = `https://sks-server.onrender.com/user/${email}`;
        if (email) {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(presentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const secretToken = data.secretToken;
                    localStorage.setItem('secretToken', secretToken);
                    setSecretToken(secretToken);
                    // console.log(data);
                })
        }
    }, [user]);

    return [secretToken, setSecretToken];
}

export default useSecretToken;
