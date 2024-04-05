"use server"
export default async function Create(data:FormData) {
    
    data.append("age","3")
    console.log(data)
}