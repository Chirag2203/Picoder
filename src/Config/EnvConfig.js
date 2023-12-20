const EnvConfig = {
    // TO MAKE SURE WE GET STRING ALWAYS
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABSE_ID),

}
export default EnvConfig;