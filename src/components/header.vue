<template>
    <header class="container" id="header">
        <a href="javascript:;" class="logo left">logo</a>
        <div class="logoF">用户标签管理系统</div>
        <div class="right headRight">
            <!--<a href="#" class="set-mes">设置</a>-->
            <div class="ad-center" @mouseenter="toolEnter" @mouseleave="toolLeave">
                <div class="right userMess">
                    <span v-cloak>{{userName}}</span>
                    <i></i>
                </div>
                <ul class="headerTool">
                    <li><a href="javascript:;" @click="logoutFn">注销</a></li>
                </ul>
            </div>
        </div>
        <div class="nav">
            <!--<a v-for="menu in menuData" :href="'.'+menu.href" :class="urlData==menu.href?'active':''">{{menu.name}}</a>-->
            <router-link to="/index">首页</router-link>
            <router-link to="/addUserGroup">用户群</router-link>
        </div>
    </header>
</template>
<style>

</style>
<script type="text/ecmascript-6">
    require('../assets/css/reset.min.less');
    require('../assets/css/layout.less');
    export default {
        data () {
            return {
                userName:'',
                timer:null,
                menuData:[],
                pageData:[],
                userName:'index'
            }
        },
        components:{

        },
        mounted(){
            //this.getData();
        },
        methods:{
            getData(){
                //this.userName=localStorage.userName.split('@')[0];
                this.$http.get('/api/getMenus.gm').then(function (res) {
                    //得到链接
                    res.data.dataInfo.forEach( (item)=> {
                        item.type=='menu'?this.menuData.push(item):this.pageData.push(item);
                    });
                })
            },
            logoutFn(e){
                if(e.target.innerHTML=='注销'){
                    this.$http.get('/api/logout.gm').then(function (res) {
                        if(res.data.code==200){
                            window.location.href='login.html';
                        }
                    })
                }
            },
            toolEnter(){
                clearTimeout(this.timer);
                var headerTool=document.querySelector('.headerTool');
                headerTool.style.display='block';
            },
            toolLeave(){
                this.timer=setTimeout(function () {
                    var headerTool=document.querySelector('.headerTool');
                    headerTool.style.display='none';
                },100)
            }
        }
    }
</script>

