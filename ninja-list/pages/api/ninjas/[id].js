import { ninjasData } from "../../../ninjasData"

export default function handler(req, res) {
    const ninjaData = ninjasData.find(ninja => req.query.id == ninja.id); 

    if (ninjaData) {
        res.status(200).json({ ninja: ninjaData })
    } else {
        res.status(404).json({ message: "There is no such ninja." })
    }
}
  