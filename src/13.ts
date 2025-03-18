import { useState } from "react";
import axios from "axios";

function Example() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://api.example.com/data").then((response) => {
      setData(response.data);
    });
  }, []);

  return <div>{data}</div>;
}
