export const fetchData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
