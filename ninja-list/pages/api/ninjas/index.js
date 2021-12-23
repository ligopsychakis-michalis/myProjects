import { ninjasData } from "../../../ninjasData"

export default function handler(req, res) {
    res.status(200).json({ ninjas: ninjasData })
}
  