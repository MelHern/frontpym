<template>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
      </div>
      <button type="submit" @click="login" class="btn btn-primary">Submit</button>
    </form>
    </template>
    
    <script lang="ts" setup>
    
    import {ref} from 'vue'
    import useAuth from '@/store/index'
    import router from '@/router'
    
    const store=useAuth();
    let email=ref('');
    let password=ref('');
    
    const login= async()=>{
    
      const response = await store.login(email.value,password.value)
      if (response == false){
        alert("error");
      }
      else{
        router.push({name:'dashboard'})
      }
    
    }
    
    </script>
    
    <style lang="scss" scope></style>
    
