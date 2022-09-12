import data from '../data'

export default function handler(req, res) {
    const { Posts } = data;
    if(Posts) {
        return res.status(200).json(Posts)
    }
    else {
        res.status(400).json({error: "Data Not Found!"})
    }
}
