import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'
const options = {
    headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_BAYUT_API_KEY,
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
}

export const fetchApi = async url => {

    try {
        const { data } = await axios.get(url, options)
        return data
    } catch (error) {
        console.log('error', error)
    }

    return "no action"
}