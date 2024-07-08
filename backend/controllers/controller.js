import { data } from "../utils/data.js";

const getHello = async (req, res) => {
  try {
    return res.json(data);
  } catch (err) {
    return res.status(500).send('Server Error');
  }
};

export {
  getHello,
}