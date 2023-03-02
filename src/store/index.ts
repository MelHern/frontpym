import {defineStore} from 'pinia'


const useAuth= defineStore('auth',{

    

state:()=>{
    return{
        token:null,
        baseURL:process.env.BASEURL,
        
    }
},

actions:{
    async register(name:string,email:string,password:string){
        const uri =`${this.baseURL}/auth/register`
        const rawresponse= await fetch(uri,{
            method:'POST',
            headers:{
                'Content-Type':'Application/json',
                'Accept':'Application/json'
            },
            body: JSON.stringify({
                'name':name,
                'email':email,
                'password':password
            })
        })
        const response =await rawresponse.json()

        if(response.status ==false){
            return false
        }
        else{
            this.token=response.token
            return true
        }
        
    },
    async login(email:string,password:string){
        const uri =`${this.baseURL}/auth/login`
        const rawresponse= await fetch(uri,{
            method:'POST',
            headers:{
                'Content-Type':'Application/json',
                'Accept':'Application/json'
            },
            body: JSON.stringify({
                'email':email,
                'password':password
            })
        })
        const response =await rawresponse.json()
        if (response.status == false){
            this.token=null
            return false
        }
        else{
            this.token =response.token;
            return true
        }

        
    }

},
persist:{
    storage:sessionStorage,
    paths:['token']
}

})


export default useAuth