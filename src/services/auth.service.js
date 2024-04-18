import axiosInstance from "../helpers/axios";
const SignUp = async (name, email, username, password) => {
  try {
    // dispatch(setIsLoading(true));
    const { data } = await axiosInstance.post("/signup", {
      name: name,
      email: email,
      username: username,
      password: password,
    });
    // dispatch(setIsLoading(false));
    console.log(data);
    return data.id;
  } catch (err) {
    // dispatch(setIsLoading(false));
    console.log("err", err);
    return err.response.data;
  }
};
const addDetails = async (id, Location, avatar) => {
  const formData = new FormData();
  formData.append("avatar", avatar);
  formData.append("location", Location);
  formData.append("id", id);
  console.log("Inside addDetails")
  try {
    const { data } = await axiosInstance.patch("/addDetails", formData);
    return data;
  } catch (err) {
    //ignore
    return err.response
  }
};
const addPreferences = async (id, interestArray, Name, Email, Username) => {
  try {
    const { data } = await axiosInstance.patch("/addPreferences", {
      id: id,
      interests: interestArray,
      name: Name,
      email: Email,
      username: Username,
    });
    return data;
  } catch (err) {}
};
export { SignUp, addDetails, addPreferences };
