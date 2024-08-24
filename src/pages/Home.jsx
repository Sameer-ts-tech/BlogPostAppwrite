import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/service";
import { Container, PostCard } from "../components";
import "../App.css";
import authSlice from "../store/authSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector(state => state.auth.status)


  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full h-[60vh] py-8 mt-4 text-center gredient ">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold ">Posts are Loading....</h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className=" w-full  py-8 ">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 ">
              <PostCard {...post} />
            </div>
          ))}
        </div>
        {!authStatus && <h1 className="mt-6 text-2xl text-green-400 font-bold">*For adding your own post you have to <Link className="underline text-black" to={"/login"}>Login</Link> or <Link className="underline text-black" to={"/signup"}>Signup</Link>?</h1>}
      </Container>
    </div>
  );
}

export default Home;
