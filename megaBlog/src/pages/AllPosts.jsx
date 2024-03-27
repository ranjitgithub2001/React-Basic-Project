import React,{useState,useEffect} from 'react'
import appwriteService from '../appwrite/conf'
import { PostCard , Container } from '../component'

function AllPosts() {
    const [posts, setposts] = useState([])
    useEffect(()=>{},[])
    appwriteService.getPosts([]).then((posts)=>{
        if(posts){
            setposts(posts.documents)
        }
    })
  return (
    <div className=' w-full py-8'>
        <Container>
            <div className=' flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className=' p-2 w-1/4'>
                        <PostCard post={post}/>
                    </div>
                    
                ))}
            </div>
           
        </Container>
    </div>
  )
}

export default AllPosts