import axios from "axios"
import { baseURL, client } from "../utility"

const login = async e => {
    try {
        const { data } = await axios.post(`${baseURL}/user/login`, e)
        return { data }
    }
    catch (error) {
        return { error }
    }
}

const logout = async e => {
    try {
        const { data } = await client.get(`${baseURL}/user/logout`, e)
        return { data }
    }
    catch (error) {
        return { error }
    }
}

const user = async () => {
    try {
        const { data } = await client.get(`${baseURL}/user`)
        return { data }
    }
    catch (error) {
        return { error }
    }
}

const refresh = async () => {
    try {
        const { data } = await client.get(`${baseURL}/user/refresh`)
        return { data }
    }
    catch (error) {
        return { error }
    }
}
/************** Start Meeting **************/

const getAllMeetings = async () => {
    const { data } = await client.get(`/meeting?page=1&limit=10`)
    return data;
}

const getMeeting = async e => {
    const { data } = await client.get(`/meeting/${e}`)
    return data;
}

const createMeetingFields = async ({ id, diarization, asr, gender, asr_summary, emotion }) => {
    const fields = { diarization, asr, gender, asr_summary, emotion }
    const { data } = await client.post(`/meeting/${id}`, fields)
    return data
}

const createMeeting = async ({ name, gender, files, diarization, asr, asr_summary, emotion, meeting_date, setPercentage }) => {
    var formData = new FormData();

    formData.append('meeting_date', meeting_date);
    await files.map(async file => await formData.append('file', file))

    const { data } = await client.post(`/meeting`, formData, {
        onUploadProgress: function (progressEvent) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            if (percentCompleted < 100)
                setPercentage(percentCompleted);
        }
    })

    const { data: dataParams } = await client.post(`/meeting/${data.id}`,
        {
            "diarization": diarization,
            "asr": asr,
            "gender": gender,
            "asr_summary": asr_summary,
            "emotion": emotion
        })
    await setPercentage(null);
    return { data, dataParams }
}

const updateMeeting = async ({ id, ...meeting }) => {
    const { data } = await client.put(`/meeting/${id}`, meeting)
    return data;
}

const deleteMeeting = async (id) => {
    const { data } = await client.delete(`/meeting/${id}`)
    return data;
}

const getDiarization = async id => {
    const { data } = await client.get(`/meeting/${id}/diarization`)
    return data;
}

const updateDiarization = async ({ id, ...diarization }) => {
    const { data } = await client.put(`/meeting/diarization/${id}`, diarization)
    return data;
}

/************** End Meeting **************/

/************** Start Speaker **************/

const getSpeaker = async (id) => {
    const { data } = await client.get(`/speaker/${id}`)
    return data;
}

const getAllSpeakers = async () => {
    const { data } = await client.get(`/speaker`)
    return data;
}

const createSpeaker = async ({ files, name, gender, setPercentage }) => {
    var formData = new FormData();
    formData.append('speaker_name', name)
    formData.append('gender', gender)

    console.info(name, gender);
    files.map(async item => await formData.append("files", item))

    const { data } = await client.post(`/speaker`, formData, {
        onUploadProgress: function (progressEvent) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            setPercentage(percentCompleted);
        }
    })
    setPercentage(null)
    return data
}

const updateSpeaker = async ({ id, files, speakerName }) => {
    var formData = new FormData();
    files.map(async item => await formData.append("file", item))
    formData.append('speaker_name', speakerName)

    const { data } = await client.put(`/speaker/${id}`, formData)
    return data;
}

/************** End Speaker **************/

export {
    login,
    user,
    refresh,
    logout,

    getAllMeetings,
    getMeeting,
    createMeeting,
    createMeetingFields,
    updateMeeting,
    deleteMeeting,
    getDiarization,
    updateDiarization,

    getAllSpeakers,
    createSpeaker,
    updateSpeaker,
    getSpeaker
}

// const getAllProducts = async () => {
//     const { data } = await client.get(`/products`)
//     return data
// }

// const getProduct = async (_, id) => {
//     const { data } = await client.get(`/products/${id}`)
//     return data
// }

// const createProduct = async ({ name, description, amount }) => {
//     const product = { name, description, amount }
//     const { data } = await client.post(`/products`, product)
//     return data
// }

// const updateProduct = async ({ id, ...product }) => {
//     const { data } = await client.put(`/products/${id}`, product)
//     return data
// }

// const deleteProduct = async (id) => {
//     const { data } = await client.delete(`/products/${id}`)
//     return data
// }

// export {
//     getAllProducts,
//     getProduct,
//     createProduct,
//     updateProduct,
//     deleteProduct,
// }

