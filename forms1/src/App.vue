<template>
    <div class="container">
   
        <form v-if="!isSubmitted">
         
            <div class="row">
                
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Form Ödevi</h1>
                    
                    <app-fullname v-model="fullName" ></app-fullname>
                  
                    <div class="form-group">
                        <label for="pass">Password</label>
                        <input type="password" class="form-control" id="pass" v-model="userData.password">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="male" >Erkek</label>
                        <input type="radio" v-model="userData.gender"  value="erkek" id="male" >
                        <label for="female">Kadın</label>
                        <input type="radio" v-model="userData.gender" value="kadın" id="female">
                    </div>

                    <div>
                        <button class="btn btn-primary" @click.prevent="submitForm">Submit</button>
                    </div>
                    <!-- Soru 1 -->
                    <!-- Aşağıdaki bilgileri içeren bir Üye Ol sayfası geliştiriniz. -->
                    <!-- Tam Adı (Ad + Soyad) -->
                    <!-- E-mail -->
                    <!-- Şifre -->
                    <!-- Cinsiyet (Kadın/Erkek) -->

                    <!-- Soru 2 -->
                    <!-- Üye Ol formu, Submit EDİLMEDİĞİ SÜRECE ekranda gözükmelidir.-->
                    <!-- Üye Bilgileri Ekranı ise form Submit EDİLDİKTEN SONRA ekranda gözükecektir -->

                    <!-- Soru 3 -->
                    <!-- Yukarıdaki uygulamayı düzenleyerek Tam Ad (Ad + Soyad) alanı için bir Form Kontrol Elemanı üretiniz -->
                </div>
            </div>
        </form>
  
        <div v-else class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h4>Girdiğiniz Bilgier</h4>
                    </div>
                    <div class="panel-body">
                        <p>Tam Ad: {{ fullName }} </p>
                        <p>E-mail: {{userData.email}} </p>
                        <p>Şifre: {{userData.password}} </p>
                        <p>Cinsiyet: {{userData.gender}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Fullname from "./Fullname.vue"
    export default {
        components:{
           "app-fullname":Fullname
           
        },
       data(){
       return{
        userData:{
            email:"",
            password:null,
            gender:""
        },
        isSubmitted:false,
        fullName:""
       }
       },
       methods:{
        submitForm:function(){
            this.isSubmitted = true
        }
       }
    }
</script>

<style>
</style>
