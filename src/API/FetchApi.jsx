import axios from "axios";
import { API_URL } from "../../config/config";
import { useState, useEffect } from "react";

const baseURL =
  "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=d4bcc7ec6184dd6b1295f79f76f0106c";

export default function fetchApi(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get((baseURL) => {
      setData(data);
    });
  }, []);
}
