import axios from 'axios';

export let newUserData = {}

export const apiCall = async (userid) => {
    const main = axios.get(`http://localhost:3001/user/${userid}`)
    const activity = axios.get(`http://localhost:3001/user/${userid}/activity`)
    const sessions = axios.get(`http://localhost:3001/user/${userid}/average-sessions`)
    const performance = axios.get(`http://localhost:3001/user/${userid}/performance`)

    axios.all([main, activity, sessions, performance]).then(axios.spread((...responses)=>{
        newUserData.user = responses[0].data.data
        newUserData.activity = responses[1].data.data
        newUserData.sessions = responses[2].data.data
        newUserData.performance = responses[3].data.data

    })).catch(errors=>{
        console.log("Fetch error:", errors);
    })
}  