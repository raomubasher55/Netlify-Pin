// Previous version of Profile.jsx

import React, { useContext, useState, useEffect  } from 'react';
import { PostCard } from './PostCard';
import { Link, useNavigate } from 'react-router-dom';
import NavbarContext from '../context/posts/NavbarContext';
import { Spinner } from './Spinner';

let profileImage = '';

export const Profile = () => {
    const { showNavbar, setShowNavbar } = useContext(NavbarContext);
    const [profile, setProfile] = useState({ image: "", sss: "" })
    const [userData, setUserdata] = useState({ username: "", name: "", follower: "", id: "", profileImage: ""  ,following : ""  , posts:""});
    const [spinner, setSpinner] = useState(true)
    const navigate = useNavigate();

    const profilePic = () => {
        document.querySelector('#profilePic').click();
    }   

    useEffect(() => {
        setProfile({ image: profileImage });
        setShowNavbar(true)
        const timer = setTimeout(() => {
            setSpinner(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const handleImageUpload = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const image = reader.result;
                profileImage = image
                setProfile({ ...profile, image });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <> 
        {spinner && <Spinner/>}
            <div className="profileMain inline-block w-full mt-16">
                <div className="containerr max-w-screen-md mx-auto p-4">
                    <form  id="uploadForm" hidden >
                        <input type="file" name="file" id="profilePic" onChange={handleImageUpload} />
                    </form>
                    <div className="rounded-lg p-4 text-center">
                        <div>
                            <div className="profile-picture md:w-44 md:h-44 h-32 w-32 rounded-full overflow-hidden mx-auto mb-3">
                                <span id="uploadicon" onClick={profilePic} className="w-12 h-12 absolute profile z- rounded-full flex cursor-pointer items-center justify-center bg-zinc-200">
                                    <i className="text-zinc-800 w-12 ri-pencil-fill "></i>
                                </span>
                                {profile.image || userData.profileImage ? <img className='h-full w-full object-cover' src={profile.image} alt="" /> :
                                    <img  src="https://th.bing.com/th/id/R.ca1aa447d07684a6edc3067c6cf35b41?rik=vDTxmCKREnh4sQ&pid=ImgRaw&r=0" alt="Profile Picture" />
                                }
                            </div>
                        </div>
                        <h2 className="name text-gray-300 C font-bold">Rao Mubasher</h2>
                            <h3 className="username text-gray-300 md:text-base lg:text-lg text-sm md:mb-6 mb:mb-3">@mubahser234</h3>
                        <div className="flex justify-center gap-24 font-bold h-8">
                            <h3 className="username text-gray-300 lg:text-lg md:text-lg text-sm mb-6">10</h3>
                            <h3 className="username text-gray-300 lg:text-lg md:text-lg text-sm mb-6">30</h3>
                        </div>
                        <div className="flex justify-center gap-10">
                            <h3 className="username text-gray-300 lg:text-lg md:text-lg text-sm md:mb-6 mb-3 ml-6">Posts</h3>
                            <h3 className="username text-gray-300 lg:text-lg md:text-lg text-sm md:mb-6 mb-3 ml-1 pl-4">Following</h3>
                        </div>
                        <button className="inline-block button bg-red-600 text-white px-3 py-3       rounded-3xl mx-1 font-bold  ">{userData.follower === 0 ? "Follower" : "Followers"} {userData.follower} </button>
                        <Link to="/createpin" className="inline-block button bg-red-600 text-white px-4 py-3 rounded-3xl mx-1 font-bold ">Add Post</Link>
                        <span className="bg-center"><strong><h1 className="text-white lg:text-3xl md:text-2xl text-xl mt-12">Created</h1></strong></span>
                    </div>
                </div>
                <PostCard />
            </div>
        </>
    )
}
