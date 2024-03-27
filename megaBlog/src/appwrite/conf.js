import config from '../config/config'

import {Client, Databases, ID, Storage, Query} from 'appwrite'

export class Service{
    client=new Client();
    database;
    bucket; 
    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.bucket=new Storage(this.client);
        this.database=new Databases(this.client);
    }
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.database.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log('Appwrite Service :: Create Post :: Error', error);
        }
    }

    async updatePost(slug,{title,  content, featuredImage, status}){
        try {
            return await this.database.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log('Appwrite Service :: Update Post :: Error', error);
            return false; 
        }

    }
    async deletePost(slug){
         try {
            await this.database.deleteDocument(
             config.appwriteDatabaseId,
             config.appwriteCollectionID,
             slug
            )
            return true
         } catch (error) {
            console.log('Appwrite Service :: Delete Post :: Error', error);
            return false;

         }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionID,
                slug
            )
        } catch (error) {
            console.log('Appwrite Service :: Get Post :: Error', error);
            return false
        }
    }

    async getPosts(queries=[Query.equal('status','active')]){
        try {
            return await this.database.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionID,
                queries
            )
        } catch (error) {
            console.log('Appwrite Service :: Get Posts :: Error', error);
            return false; 
        }
    }

    //file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
            return true
        } catch (error) {
            console.log('Appwrite Service :: Upload File :: Error', error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log('Appwrite Service :: Delete File :: Error', error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }


}

const service=new Service()
export default service;