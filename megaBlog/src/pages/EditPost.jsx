import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../component'
import appwriteService from '../appwrite/conf'
import {useParams, useNavigate} from 'react-router-dom'

function EditPost() {
    const [post, setpost] = useState([])
    const {slug}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        if (slug) {
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setpost(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug, navigate])

  return post ?(
    <div className=' py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ) : null
}

export default EditPost