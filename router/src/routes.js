
import UserStart from "./components/user/UserStart";
import UserDetail from "./components/user/UserDetail";
import UserEdit from "./components/user/UserEdit";


import Home from "./components/Home";
import User from "./components/user/User";

export const routes = [
 {path:"", name:"anasayfa", component:Home},
 {path:"/user", component:User, children:[
    {path:"",  component:UserStart},
    {path:":id",  component:UserDetail, beforeEnter:(to,from,next)=> {
      console.log("route seviyesinde kontrol")
      next()
    }},
    {path:":id/edit",  component:UserEdit, name:"UserEdit"},
 ]},


];
