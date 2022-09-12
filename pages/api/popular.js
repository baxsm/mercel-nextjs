// api/popular

import data from './data'

export default function handler(req, res) {
    const { Popular } = data;
    if(Popular) {
        return res.status(200).json(Popular)
    }
    else {
        res.status(400).json({error: "Data Not Found!"})
    }
}
