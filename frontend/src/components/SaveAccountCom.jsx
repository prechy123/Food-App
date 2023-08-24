import axios from "axios";
import { useEffect } from "react";

export default function SaveAccountCom({ tokenData }) {
  const tokenObject = JSON.parse(atob(tokenData.split(".")[1]));
  const { userId } = tokenObject;
  useEffect(() => {
    const foods = async () => {
      const response = await axios("http://127.0.0.1:4000/getFoods", {
        params: {
          userId: userId,
        }
      });
      console.log(response.data.foods);
    };
    foods();
  }, [userId]);
  return <div>SaveAccountCom</div>;
}
