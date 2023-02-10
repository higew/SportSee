import axios from 'axios';

/**
 * @param { number } userid
 *  Function that makes 4 API calls at the same time and stores the data in an object called newUserData :
 *    @param main API call -> user data
 *    @param activity API call -> activity data
 *    @param sessions API call -> sessions data
 *    @param performance API call -> performance data
 * 
 * @returns {Promises}
 * @returns {Object} newUserData = {[user, activity, session, performance]};
 * or
 * @returns errors via console.log
 * 
 */

export let newUserData = {}

export const apiCall = async (userid) => {
    const main = axios.get(`http://localhost:3000/user/${userid}`)
    const activity = axios.get(`http://localhost:3000/user/${userid}/activity`)
    const sessions = axios.get(`http://localhost:3000/user/${userid}/average-sessions`)
    const performance = axios.get(`http://localhost:3000/user/${userid}/performance`)

    await axios.all([main, activity, sessions, performance]).then(axios.spread((...responses)=>{
        newUserData.user = responses[0].data.data
        newUserData.activity = responses[1].data.data
        newUserData.session = responses[2].data.data
        newUserData.performance = responses[3].data.data

    })).catch(errors=>{
        console.log("Fetch error:", errors);
    })
}  