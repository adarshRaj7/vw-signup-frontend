import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDetails } from "../../services/auth.service";
import { setAvatar, setIsLoading, setLocation,setAvatarLink } from "../../redux/store";
import { CircularProgress } from "@material-ui/core";
const UserDetailsComponent = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { Location, id, avatar, isLoading,avatarLink } = useSelector((state) => state);
  const navigate = useNavigate();
  const [preview, setPreview] = useState(avatarLink.length>0?true:false);
  const [selectedImage, setSelectedImage] = useState();
  const handleImageUpload = () => {
    dispatch(setAvatar(null));
    dispatch(setAvatarLink(""));
    inputRef.current.click();
  };

  const handleFileUpload = (e) => {
    if (e.target.files.length === 0) {
      console.log("No files selected");
      setPreview(false);
    } else {
      console.log("File selected ", e.target.files[0]);
      setPreview(true);
    }
    const file = e.target.files[0];
    if (file) {
      console.log(file);
      getImgData(file);
    }
    dispatch(setAvatar(file));
  };
  function getImgData(file) {
    setSelectedImage(file);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit clicked");
    dispatch(setIsLoading(true));
    console.log(isLoading);
    console.log("Adding ");
    const {avatar_link}=await addDetails(id, Location, avatar);
    console.log("added");
    console.log(avatar_link);
    if(avatar_link.length>0){
      setPreview(true);
      dispatch(setAvatarLink(avatar_link));
    }
    dispatch(setIsLoading(false));
    console.log(isLoading);
    return navigate("/interests");
  };
  useEffect(() => {
    if (!id) {
      navigate("/");
    }
  }, [id, navigate]);
  return (
    <div className="details-container">
      <nav className="pt-2 pl-2 pb-2">Volkswagen</nav>
      <div className="details-form flex flex-col max-w-md w-[90vw] mx-auto mt-20 h-auto  ">
        <div className="text-2xl">Welcome! Let's create your profile</div>
        <div className="text-slate-500 mb-10">
          Let us get to know you better
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex ">
            <div className="form-group">
              <label htmlFor="avatar" className="font-bold">
                Add an Avatar
              </label>
              <br />
              <div className="flex flex-col  mt-2">
                {preview ? (
                  <div
                    onClick={handleImageUpload}
                    className="image-container   "
                  >
                    <img
                      className="  preview-image"
                      src={selectedImage? URL.createObjectURL(selectedImage):avatarLink}
                      alt="Thumb"
                    />
                  </div>
                ) : (
                  <div
                    onClick={handleImageUpload}
                    id="img-preview"
                    className=" flex border-dashed h-20 w-20 justify-center items-center border-2 rounded-full text-slate-500 text-2xl mr-5"
                  >
                    +
                  </div>
                )}

                <div>
                  <input
                    type="file"
                    className="mt-2 hidden "
                    disabled={isLoading}
                    id="avatar"
                    ref={inputRef}
                    accept="image/*"
                    onChange={handleFileUpload}
                  />
                </div>
                <div className="text-slate-500">
                  {">"}
                  {!preview
                    ? " Or choose one of our defaults"
                    : " Tap on the avatar to change"}
                </div>
              </div>
            </div>
          </div>
          <div className="form-group mt-5">
            <label htmlFor="location" className="font-bold">
              Add your location
            </label>
            <br />
            <input
              type="text"
              className="form-control location-textfield w-full mt-1 px-2 py-1"
              disabled={isLoading}
              id="location"
              placeholder="Enter a location"
              value={Location}
              required
              onChange={(e) => dispatch(setLocation(e.target.value))}
            />
          </div>

          <div>
            <button
              type="submit"
              className="submit-button mt-10 h-8 w-[128px]"
              disabled={Location === "" || isLoading}
            >
              {isLoading ? (
                <CircularProgress size={20} color="white" />
              ) : (
                "Next"
              )}
            </button>
            <div className="text-slate-400 text-xs ">Or press Enter</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsComponent;
