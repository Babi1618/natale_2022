export const fetchData = async () => {
  const res = await fetch("http://localhost:3005/userList").then((res) =>
    res.json()
  );
  return res;
};
