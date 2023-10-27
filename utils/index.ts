import { getUserUrl } from "@/constants";

export const fetchUser = async (userName: string) => {
  // &limit=20
  const url = `${getUserUrl}?name=${userName}&inc=gender,location,dob`;
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    alert("Unable to load user date!, Please try after some time.");
  }
};
