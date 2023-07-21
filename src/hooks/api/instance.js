import axios from "axios";

export const onInstance = (TOKEN) => axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`,
  }
});
