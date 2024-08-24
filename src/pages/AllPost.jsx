import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/service";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <>
    {
        posts.length===0 &&  <div className="w-full height py-8 mt-4 text-center gredient ">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold ">
                Posts are Loading....
              </h1>
            </div>
          </div>
        </Container>
      </div>
    }
    <div className='w-full py-8 '>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 '>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
    </>
  )
}

export default AllPosts