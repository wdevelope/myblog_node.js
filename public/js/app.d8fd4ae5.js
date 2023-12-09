(function(){"use strict";var t={622:function(t,e,a){var o=a(9242),r=a(3396);function n(t,e,a,o,n,i){const s=(0,r.up)("BasicHeader"),l=(0,r.up)("el-header"),u=(0,r.up)("BasicAside"),d=(0,r.up)("el-aside"),c=(0,r.up)("router-view"),p=(0,r.up)("el-main"),m=(0,r.up)("el-container");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s)])),_:1}),(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u)])),_:1}),(0,r.Wm)(m,{class:"main-container"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1})])),_:1})])),_:1})])),_:1})])}const i=t=>((0,r.dD)("data-v-01ffb614"),t=t(),(0,r.Cn)(),t),s=i((()=>(0,r._)("h1",null,"w-life daily",-1)));function l(t,e,a,o,n,i){const l=(0,r.up)("router-link"),u=(0,r.up)("el-button");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l,{to:"/home",class:"custom-router-link"},{default:(0,r.w5)((()=>[s])),_:1}),(0,r._)("div",null,[i.isLoggedIn?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(l,{key:0,to:"/login"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{type:"Login",round:""},{default:(0,r.w5)((()=>[(0,r.Uk)("Login")])),_:1})])),_:1})),i.isLoggedIn?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(l,{key:1,to:"/register"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{type:"Register",round:""},{default:(0,r.w5)((()=>[(0,r.Uk)("Register")])),_:1})])),_:1})),i.isLoggedIn?((0,r.wg)(),(0,r.j4)(l,{key:2,to:"/logout"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{type:"Logout",onClick:i.logout,round:""},{default:(0,r.w5)((()=>[(0,r.Uk)("Logout")])),_:1},8,["onClick"])])),_:1})):(0,r.kq)("",!0),i.isLoggedIn?((0,r.wg)(),(0,r.j4)(l,{key:3,to:"/account"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{type:"Account",round:""},{default:(0,r.w5)((()=>[(0,r.Uk)("Account")])),_:1})])),_:1})):(0,r.kq)("",!0)])],64)}a(560);var u=a(1076),d={name:"BasicHeader",computed:{isLoggedIn(){return this.$store.state.isLoggedIn}},created(){this.checkLoginStatus()},methods:{async checkLoginStatus(){try{await u.Z.get("https://www.w-life.store/api/user/check",{withCredentials:!0}),this.$store.dispatch("login")}catch(t){console.error("Error checking login status",t)}},async logout(){try{await u.Z.post("https://www.w-life.store/api/user/logout",{},{withCredentials:!0}),alert("로그아웃 성공!"),this.$store.dispatch("logout"),this.$router.push("/login")}catch(t){console.error("Error during logout",t),alert("로그아웃 실패")}}}},c=a(89);const p=(0,c.Z)(d,[["render",l],["__scopeId","data-v-01ffb614"]]);var m=p,g=a(7139);function h(t,e,a,o,n,i){const s=(0,r.up)("HomeFilled"),l=(0,r.up)("el-icon"),u=(0,r.up)("router-link"),d=(0,r.up)("el-menu-item"),c=(0,r.up)("Collection"),p=(0,r.up)("el-menu-item-group"),m=(0,r.up)("el-sub-menu"),h=(0,r.up)("Avatar"),w=(0,r.up)("el-menu"),f=(0,r.up)("el-scrollbar"),y=(0,r.up)("el-aside");return(0,r.wg)(),(0,r.j4)(y,null,{default:(0,r.w5)((()=>[(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(w,{"default-openeds":[]},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{index:"home"},{title:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s)])),_:1}),(0,r.Wm)(u,{to:"/home",class:"custom-router-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1})])),_:1}),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.categories,(t=>((0,r.wg)(),(0,r.j4)(m,{key:t.id,index:t.id.toString()},{title:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1}),(0,r.Uk)((0,g.zw)(t.name),1)])),default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.subCategories[t.id],(t=>((0,r.wg)(),(0,r.j4)(p,{key:t.id},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{index:t.id.toString(),onClick:e=>i.goToSubCategoryBoard(t.id)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,g.zw)(t.name),1)])),_:2},1032,["index","onClick"])])),_:2},1024)))),128))])),_:2},1032,["index"])))),128)),(0,r.Wm)(d,{index:"visitor"},{title:(0,r.w5)((()=>[(0,r.Wm)(u,{to:"/visitor",class:"custom-router-link"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h)])),_:1}),(0,r.Uk)("Visitor ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var w={name:"BasicAside",data(){return{categories:[],subCategories:{}}},created(){this.fetchCategories()},methods:{async fetchCategories(){try{const t=await u.Z.get("https://www.w-life.store/api/category");this.categories=t.data.sort(((t,e)=>t.position-e.position)),await this.fetchSubCategories()}catch(t){console.error("Error fetching categories",t)}},async fetchSubCategories(){try{for(let t of this.categories){const e=await u.Z.get(`https://www.w-life.store/api/subCategory/${t.id}`);this.subCategories[t.id]=e.data.sort(((t,e)=>t.position-e.position))}}catch(t){console.error("Error fetching subcategories",t)}},goToSubCategoryBoard(t){this.$router.push(`/subCategory/${t}`)}}};const f=(0,c.Z)(w,[["render",h],["__scopeId","data-v-43721189"]]);var y=f,v={name:"App",components:{BasicHeader:m,BasicAside:y}};const b=(0,c.Z)(v,[["render",n]]);var _=b,C=a(2483);const k=t=>((0,r.dD)("data-v-354724ad"),t=t(),(0,r.Cn)(),t),P=k((()=>(0,r._)("h2",null,"🏅 w-life 블로그에 오신 것을 환영합니다.",-1))),W=k((()=>(0,r._)("br",null,null,-1))),V=k((()=>(0,r._)("p",null," 본 블로그는 2023년부터 개인적인 일기, 개발일지 등 글쓰기 공간으로 사용할 예정입니다. ",-1))),I=k((()=>(0,r._)("br",null,null,-1))),$=k((()=>(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("strong",null,"frontend:"),(0,r.Uk)(" frontend 학습 정리 자료입니다.")]),(0,r._)("li",null,[(0,r._)("strong",null,"backend:"),(0,r.Uk)(" node.js 학습 정리 자료입니다.")]),(0,r._)("li",null,[(0,r._)("strong",null,"server:"),(0,r.Uk)(" 서버 학습 정리 자료입니다.")]),(0,r._)("li",null,[(0,r._)("strong",null,"ioT:"),(0,r.Uk)(" 사물인터넷 학습 정리 자료입니다.")])],-1))),U=k((()=>(0,r._)("br",null,null,-1))),D=k((()=>(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("strong",null,"busan 2023~ :"),(0,r.Uk)(" 현재 부산생활 소소한일기입니다.")])],-1))),x=k((()=>(0,r._)("br",null,null,-1))),S=k((()=>(0,r._)("span",null,"자유로운 방명록 게시판입니다.",-1)));function Z(t,e,a,o,n,i){const s=(0,r.up)("ReadingLamp"),l=(0,r.up)("el-icon"),u=(0,r.up)("Ship"),d=(0,r.up)("ChatDotSquare");return(0,r.wg)(),(0,r.iD)("div",null,[P,W,V,I,(0,r._)("h3",null,[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s),(0,r.Uk)(" ")])),_:1}),(0,r.Uk)("study ")]),$,U,(0,r._)("h3",null,[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u),(0,r.Uk)(" ")])),_:1}),(0,r.Uk)("Life ")]),D,x,(0,r._)("h3",null,[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d),(0,r.Uk)(" ")])),_:1}),(0,r.Uk)("Visitors ")]),S])}var A={name:"PageHome"};const q=(0,c.Z)(A,[["render",Z],["__scopeId","data-v-354724ad"]]);var z=q;const L=t=>((0,r.dD)("data-v-7dc04696"),t=t(),(0,r.Cn)(),t),B=L((()=>(0,r._)("h1",null,"Login",-1))),T=L((()=>(0,r._)("button",{type:"submit",class:"submit-button"},"Login",-1)));function M(t,e,a,n,i,s){return(0,r.wg)(),(0,r.iD)("form",{onSubmit:e[2]||(e[2]=(0,o.iM)(((...t)=>s.login&&s.login(...t)),["prevent"])),class:"login-form"},[B,(0,r.wy)((0,r._)("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=t=>i.loginInfo.email=t),placeholder:"Email",required:"",class:"input-field"},null,512),[[o.nr,i.loginInfo.email]]),(0,r.wy)((0,r._)("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=t=>i.loginInfo.password=t),placeholder:"Password",required:"",class:"input-field"},null,512),[[o.nr,i.loginInfo.password]]),T],32)}var R={name:"PageLogin",data(){return{loginInfo:{email:"",password:""}}},methods:{async login(){try{const t=await u.Z.post("https://www.w-life.store/api/user/login",this.loginInfo,{withCredentials:!0});200===t.status?(alert("로그인에 성공했습니다."),this.$store.dispatch("login"),this.$router.push("/home")):alert(t.data.errorMessage||"로그인에 실패했습니다.")}catch(t){alert("로그인이 실패했습니다."),console.error(t,"알 수 없는 에러 발생")}}}};const j=(0,c.Z)(R,[["render",M],["__scopeId","data-v-7dc04696"]]);var E=j;const H=t=>((0,r.dD)("data-v-04616f48"),t=t(),(0,r.Cn)(),t),O=H((()=>(0,r._)("h1",null,"Register",-1))),F=H((()=>(0,r._)("button",{type:"submit",class:"submit-button"},"회원가입",-1)));function N(t,e,a,n,i,s){return(0,r.wg)(),(0,r.iD)("form",{onSubmit:e[4]||(e[4]=(0,o.iM)(((...t)=>s.register&&s.register(...t)),["prevent"]))},[O,(0,r.wy)((0,r._)("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=t=>i.registerInfo.email=t),placeholder:"Email",required:"",class:"input-field"},null,512),[[o.nr,i.registerInfo.email]]),(0,r.wy)((0,r._)("input",{type:"name","onUpdate:modelValue":e[1]||(e[1]=t=>i.registerInfo.name=t),placeholder:"name",required:"",class:"input-field"},null,512),[[o.nr,i.registerInfo.name]]),(0,r.wy)((0,r._)("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=t=>i.registerInfo.password=t),placeholder:"Password",required:"",class:"input-field"},null,512),[[o.nr,i.registerInfo.password]]),(0,r.wy)((0,r._)("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":e[3]||(e[3]=t=>i.registerInfo.confirmPassword=t),placeholder:"Confirm Password",required:"",class:"input-field"},null,512),[[o.nr,i.registerInfo.confirmPassword]]),F],32)}var Y={name:"PageRegister",data(){return{registerInfo:{email:"",password:"",confirmPassword:"",name:""}}},methods:{async register(){try{const t=await u.Z.post("https://www.w-life.store/api/user/register",this.registerInfo,{withCredentials:!0});201===t.status?(alert("회원가입에 성공했습니다."),this.$router.push("/login")):alert(t.data.errorMessage||"회원가입에 실패했습니다.")}catch(t){alert("회원가입이 실패했습니다."),console.error(t,"알 수 없는 에러 발생")}}}};const K=(0,c.Z)(Y,[["render",N],["__scopeId","data-v-04616f48"]]);var G=K;const J=t=>((0,r.dD)("data-v-28dc54f8"),t=t(),(0,r.Cn)(),t),Q={class:"visitorTitle"},X=J((()=>(0,r._)("h2",null,"방명록",-1))),tt={key:0},et=["onClick"];function at(t,e,a,n,i,s){const l=(0,r.up)("el-button"),u=(0,r.up)("el-table-column"),d=(0,r.up)("el-table"),c=(0,r.up)("Pagination");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",Q,[X,(0,r.Wm)(l,{type:"primary",onClick:s.goToWritePage},{default:(0,r.w5)((()=>[(0,r.Uk)("글쓰기")])),_:1},8,["onClick"])]),(0,r.Wm)(d,{data:i.visitors,class:"table-responsive",style:{width:"100%"}},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{prop:"index",label:"번호",width:"80"},{default:(0,r.w5)((({$index:t})=>[(0,r.Uk)((0,g.zw)(s.calculateIndex(t)),1)])),_:1}),(0,r.Wm)(u,{label:"제목"},{default:(0,r.w5)((({row:t})=>[t.isPrivate?((0,r.wg)(),(0,r.iD)("span",tt,"🔒")):(0,r.kq)("",!0),(0,r._)("a",{onClick:(0,o.iM)((e=>s.handleClick(t)),["prevent"])},(0,g.zw)(t.title),9,et)])),_:1}),(0,r.Wm)(u,{prop:"user.name",label:"작성자",width:"100"}),(0,r.Wm)(u,{prop:"createdAt",label:"작성일",width:"150",formatter:s.formatDate},null,8,["formatter"]),(0,r.Wm)(u,{prop:"views",label:"조회수",width:"80"})])),_:1},8,["data"]),(0,r.Wm)(c,{"total-pages":i.meta.totalPages,"current-page":t.currentPage,onPageChanged:s.changePage},null,8,["total-pages","current-page","onPageChanged"])],64)}const ot={class:"pagination"},rt=["disabled"],nt=["onClick"],it=["disabled"];function st(t,e,a,o,n,i){return(0,r.wg)(),(0,r.iD)("div",ot,[(0,r._)("button",{onClick:e[0]||(e[0]=(...t)=>i.prevPageRange&&i.prevPageRange(...t)),disabled:1===n.startPage},"Prev",8,rt),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.paginationButtons,(t=>((0,r.wg)(),(0,r.iD)("button",{key:t,onClick:e=>i.changePage(t),class:(0,g.C_)({active:a.currentPage===t})},(0,g.zw)(t),11,nt)))),128)),(0,r._)("button",{onClick:e[1]||(e[1]=(...t)=>i.nextPageRange&&i.nextPageRange(...t)),disabled:n.startPage+a.pageSize>a.totalPages}," Next ",8,it)])}var lt={name:"PaginationButton",props:{totalPages:Number,currentPage:Number,pageSize:{type:Number,default:5}},data(){return{startPage:1}},computed:{paginationButtons(){const t=Math.min(this.startPage+this.pageSize-1,this.totalPages);return Array.from({length:t-this.startPage+1},((t,e)=>e+this.startPage))}},methods:{changePage(t){this.$emit("page-changed",t)},setStartPage(t){this.startPage=t},prevPageRange(){const t=Math.max(this.startPage-this.pageSize,1);t!==this.startPage&&(this.setStartPage(t),this.changePage(t))},nextPageRange(){const t=Math.min(this.startPage+this.pageSize,this.totalPages);t!==this.startPage&&(this.setStartPage(t),this.changePage(t))}}};const ut=(0,c.Z)(lt,[["render",st],["__scopeId","data-v-4bea6718"]]);var dt=ut,ct={name:"PageVisitor",components:{Pagination:dt},data(){return{visitors:[],meta:{totalPages:0,currentPage:1,totalCount:0}}},methods:{async handleClick(t){if(t.isPrivate){const e=prompt("비밀번호를 입력하세요.");e&&await this.visitorPasswordCheck(t.id,e)}else{const e=this.getCookie(`visitorViewed_${t.id}`);e||(await this.visitorViewRequest(t.id),this.setCookie(`visitorViewed_${t.id}`,"viewed",1)),this.$router.push(`/visitor/${t.id}`)}},async visitorViewRequest(t){try{await u.Z.post(`https://www.w-life.store/api/view/visitor/${t}`)}catch(e){console.error("Error sending view request",e)}},async visitorPasswordCheck(t,e){try{await u.Z.post(`https://www.w-life.store/api/visitor/${t}/password`,{password:e}),this.visitorViewRequest(t),this.$router.push(`/visitor/${t}`)}catch(a){console.error("Error sending view request",a),alert("비밀번호가 틀렸습니다.")}},formatDate(t,e){const a=new Date(t[e.property]);return a.toLocaleDateString()},goToWritePage(){this.$router.push("/visitor/write")},async fetchVisitors(t){try{const e=await u.Z.get(`https://www.w-life.store/api/visitor?page=${t}`);this.visitors=e.data.visitors,this.meta=e.data.meta,this.totalCount=e.data.meta.totalCount}catch(e){console.error("Error fetching visitors",e)}},changePage(t){this.currentPage=t,this.fetchVisitors(t),this.$router.push({path:this.$route.path,query:{page:t.toString()}})},calculateIndex(t){return this.totalCount-15*(this.currentPage-1)-t},setCookie(t,e,a){let o="";if(a){let t=new Date;t.setTime(t.getTime()+24*a*60*60*1e3),o="; expires="+t.toUTCString()}document.cookie=t+"="+(e||"")+o+"; path=/"},getCookie(t){let e=t+"=",a=document.cookie.split(";");for(let o=0;o<a.length;o++){let t=a[o];while(" "===t.charAt(0))t=t.substring(1,t.length);if(0===t.indexOf(e))return t.substring(e.length,t.length)}return null}},watch:{"$route.query.page":function(t){this.currentPage=Number(t)||1,this.fetchVisitors(this.currentPage)}},created(){const t=this.$route.query.page||1;this.currentPage=Number(t),this.fetchVisitors(this.currentPage)}};const pt=(0,c.Z)(ct,[["render",at],["__scopeId","data-v-28dc54f8"]]);var mt=pt;const gt=t=>((0,r.dD)("data-v-2503319a"),t=t(),(0,r.Cn)(),t),ht={class:"visitor-title"},wt={class:"flex items-center"},ft={class:"flex items-center"},yt={key:0,class:"visitor-content"},vt={key:1},bt={class:"visitor-comments"},_t=gt((()=>(0,r._)("h3",null,"댓글",-1)));function Ct(t,e,a,o,n,i){const s=(0,r.up)("el-tag"),l=(0,r.up)("el-button"),u=(0,r.up)("el-input"),d=(0,r.up)("el-page-header");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("span",ht,(0,g.zw)(n.title),1),(0,r.Wm)(d,{onBack:i.goBack,icon:t.ArrowLeft},{content:(0,r.w5)((()=>[(0,r._)("div",wt,[(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Uk)("작성자")])),_:1}),(0,r._)("span",null,(0,g.zw)(n.author)+" | "+(0,g.zw)(n.createdAt),1)])])),extra:(0,r.w5)((()=>[(0,r._)("div",ft,[(0,r.Wm)(l,{type:"primary",class:"ml-2",onClick:i.editContent},{default:(0,r.w5)((()=>[(0,r.Uk)("Edit")])),_:1},8,["onClick"]),(0,r.Wm)(l,{type:"danger",class:"ml-2",onClick:i.deleteVisitor},{default:(0,r.w5)((()=>[(0,r.Uk)("delete")])),_:1},8,["onClick"])])])),default:(0,r.w5)((()=>[n.editing?((0,r.wg)(),(0,r.iD)("div",vt,[(0,r.Wm)(u,{type:"textarea",modelValue:n.editableContent,"onUpdate:modelValue":e[0]||(e[0]=t=>n.editableContent=t),rows:"4",placeholder:"Please input your content"},null,8,["modelValue"]),(0,r.Wm)(l,{type:"success",class:"edit-button",onClick:i.patchVisitor},{default:(0,r.w5)((()=>[(0,r.Uk)("Save")])),_:1},8,["onClick"])])):((0,r.wg)(),(0,r.iD)("div",yt,(0,g.zw)(n.content),1)),(0,r._)("div",bt,[_t,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.visitorComments,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.name,class:"visitor-comment"},[(0,r._)("span",null,[(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Uk)("admin")])),_:1}),(0,r.Uk)((0,g.zw)(t.name),1)]),(0,r._)("p",null,(0,g.zw)(t.comment),1)])))),128))])])),_:1},8,["onBack","icon"])],64)}var kt={name:"PageVisitorDeatil",data(){return{title:"",content:"",author:"",createdAt:"",editing:!1,editableContent:"",visitorComments:[]}},methods:{goBack(){this.$router.go(-1)},editContent(){this.editableContent=this.content,this.editing=!0},async patchVisitor(){try{const t=this.$route.params.visitorId;await u.Z.patch(`https://www.w-life.store/api/visitor/${t}`,{content:this.editableContent},{withCredentials:!0}),this.content=this.editableContent,this.editing=!1,alert("방명록 수정 완료.")}catch(t){console.error("방명록 수정 서버에러",t),alert("방명록 수정 권한이 없습니다.")}this.content=this.editableContent,this.editing=!1},async deleteVisitor(){if(confirm("정말로 삭제하시겠습니까?"))try{const t=this.$route.params.visitorId;await u.Z.delete(`https://www.w-life.store/api/visitor/${t}`,{withCredentials:!0}),alert("방명록이 삭제되었습니다."),this.$router.go(-1)}catch(t){console.error("방명록 삭제 서버에러",t),alert("방명록 삭제에 실패했습니다.")}}},async created(){try{const t=this.$route.params.visitorId,e=await u.Z.get(`https://www.w-life.store/api/visitor/${t}`);this.visitorComments=e.data.visitorComments,this.title=e.data.title,this.content=e.data.content,this.author=e.data.user.name;const a=new Date(e.data.createdAt);this.createdAt=a.toLocaleDateString()}catch(t){console.error("Error fetching visitor detail",t)}}};const Pt=(0,c.Z)(kt,[["render",Ct],["__scopeId","data-v-2503319a"]]);var Wt=Pt;const Vt=t=>((0,r.dD)("data-v-99de128a"),t=t(),(0,r.Cn)(),t),It=Vt((()=>(0,r._)("h2",null,"글쓰기",-1))),$t=Vt((()=>(0,r._)("label",{for:""},"제목",-1))),Ut=Vt((()=>(0,r._)("label",{for:""},"방명록",-1))),Dt=Vt((()=>(0,r._)("label",{for:"text"},"비밀번호",-1))),xt=Vt((()=>(0,r._)("button",{type:"submit",class:"submit-button"},"작성",-1)));function St(t,e,a,n,i,s){const l=(0,r.up)("el-input"),u=(0,r.up)("el-checkbox");return(0,r.wg)(),(0,r.iD)(r.HY,null,[It,(0,r._)("form",{onSubmit:e[4]||(e[4]=(0,o.iM)(((...t)=>s.writeVisitor&&s.writeVisitor(...t)),["prevent"]))},[$t,(0,r.Wm)(l,{modelValue:i.visitors.title,"onUpdate:modelValue":e[0]||(e[0]=t=>i.visitors.title=t),maxlength:"30",placeholder:"제목을 입력해주세요","show-word-limit":"",type:"text"},null,8,["modelValue"]),Ut,(0,r.Wm)(l,{modelValue:i.visitors.content,"onUpdate:modelValue":e[1]||(e[1]=t=>i.visitors.content=t),maxlength:"500",placeholder:"방명록을 입력해주세요","show-word-limit":"",type:"textarea",rows:10,autosize:{minRows:20,maxRows:200}},null,8,["modelValue"]),Dt,(0,r.Wm)(l,{modelValue:i.visitors.password,"onUpdate:modelValue":e[2]||(e[2]=t=>i.visitors.password=t),type:"text",placeholder:"비밀번호를 입력해주세요"},null,8,["modelValue"]),(0,r._)("div",null,[(0,r.Wm)(u,{modelValue:i.visitors.isPrivate,"onUpdate:modelValue":e[3]||(e[3]=t=>i.visitors.isPrivate=t)},{default:(0,r.w5)((()=>[(0,r.Uk)("비밀글")])),_:1},8,["modelValue"])]),xt],32)],64)}var Zt={name:"PageVisitorWrite",data(){return{visitors:{title:"",content:"",password:"",isPrivate:!1}}},methods:{async writeVisitor(){try{const t=await u.Z.post("https://www.w-life.store/api/visitor",this.visitors,{withCredentials:!0});201===t.status&&(alert("방명록 작성에 성공했습니다."),this.$router.push("/visitor"))}catch(t){let e="방명록 작성에 실패했습니다.";t.response&&t.response.data&&(e=Array.isArray(t.response.data.errorMessage)?t.response.data.errorMessage.join("\n"):t.response.data.errorMessage||e),alert(e),console.error(t,"알 수 없는 에러 발생")}}}};const At=(0,c.Z)(Zt,[["render",St],["__scopeId","data-v-99de128a"]]);var qt=At;const zt=t=>((0,r.dD)("data-v-4fda1070"),t=t(),(0,r.Cn)(),t),Lt={class:"account-box"},Bt=zt((()=>(0,r._)("h2",null,"유저 정보",-1)));function Tt(t,e,a,o,n,i){const s=(0,r.up)("el-tag"),l=(0,r.up)("el-button");return(0,r.wg)(),(0,r.iD)("div",Lt,[Bt,(0,r._)("span",null,[(0,r.Uk)("name: "+(0,g.zw)(n.name),1),(0,r.Wm)(s,{class:"ml-4",type:"warning"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,g.zw)(n.status),1)])),_:1})]),(0,r._)("span",null,"email: "+(0,g.zw)(n.email),1),"admin"===n.status?((0,r.wg)(),(0,r.j4)(l,{key:0,type:"primary",onClick:i.goToAdminPage},{default:(0,r.w5)((()=>[(0,r.Uk)("관리자 페이지")])),_:1},8,["onClick"])):(0,r.kq)("",!0)])}var Mt={name:"PageAccount",data(){return{name:"",email:"",status:""}},methods:{goToAdminPage(){this.$router.push("/admin")}},async created(){try{const t=await u.Z.get("https://www.w-life.store/api/user/userInfo",{withCredentials:!0});this.name=t.data.name,this.email=t.data.email,this.status=t.data.status}catch(t){console.error("Error fetching visitor detail",t)}}};const Rt=(0,c.Z)(Mt,[["render",Tt],["__scopeId","data-v-4fda1070"]]);var jt=Rt;const Et=t=>((0,r.dD)("data-v-a619455e"),t=t(),(0,r.Cn)(),t),Ht={class:"admin-box"},Ot={class:"adminTitle"},Ft=Et((()=>(0,r._)("div",{class:"adminTitle"},[(0,r._)("h3",null,"카테고리 생성")],-1))),Nt=Et((()=>(0,r._)("br",null,null,-1))),Yt=Et((()=>(0,r._)("div",{class:"adminTitle"},[(0,r._)("h3",null,"서브 카테고리 생성")],-1)));function Kt(t,e,a,n,i,s){const l=(0,r.up)("el-tag"),u=(0,r.up)("el-input"),d=(0,r.up)("el-form-item"),c=(0,r.up)("el-input-number"),p=(0,r.up)("el-button"),m=(0,r.up)("el-form");return(0,r.wg)(),(0,r.iD)("div",Ht,[(0,r._)("div",Ot,[(0,r._)("h2",null,[(0,r.Uk)("관리자 페이지 "),(0,r.Wm)(l,{type:"warning"},{default:(0,r.w5)((()=>[(0,r.Uk)("admin")])),_:1})])]),Ft,(0,r.Wm)(m,{onSubmit:(0,o.iM)(s.createCategory,["prevent"])},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"카테고리 이름"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{modelValue:i.categoryForm.name,"onUpdate:modelValue":e[0]||(e[0]=t=>i.categoryForm.name=t),placeholder:"카테고리 이름"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,{label:"카테고리 위치"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{modelValue:i.categoryForm.position,"onUpdate:modelValue":e[1]||(e[1]=t=>i.categoryForm.position=t),min:1,placeholder:"위치"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,{class:"admin-form-button"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{type:"primary","native-type":"submit"},{default:(0,r.w5)((()=>[(0,r.Uk)("카테고리 생성")])),_:1})])),_:1})])),_:1},8,["onSubmit"]),Nt,Yt,(0,r.Wm)(m,{onSubmit:(0,o.iM)(s.createSubCategory,["prevent"])},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"카테고리 이름"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{modelValue:i.subCategoryForm.categoryName,"onUpdate:modelValue":e[2]||(e[2]=t=>i.subCategoryForm.categoryName=t),placeholder:"카테고리 이름"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,{label:"서브카테고리 이름"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{modelValue:i.subCategoryForm.name,"onUpdate:modelValue":e[3]||(e[3]=t=>i.subCategoryForm.name=t),placeholder:"서브카테고리 이름"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,{label:"서브카테고리 위치"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{modelValue:i.subCategoryForm.position,"onUpdate:modelValue":e[4]||(e[4]=t=>i.subCategoryForm.position=t),min:1,placeholder:"위치"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{type:"primary","native-type":"submit"},{default:(0,r.w5)((()=>[(0,r.Uk)("서브카테고리 생성")])),_:1})])),_:1})])),_:1},8,["onSubmit"])])}var Gt={name:"PageAdmin",data(){return{categoryForm:{name:"",position:1},subCategoryForm:{categoryName:"",name:"",position:1}}},methods:{async createCategory(){try{await u.Z.post("https://www.w-life.store/api/category",this.categoryForm,{withCredentials:!0}),alert("카테고리가 생성되었습니다.")}catch(t){alert("카테고리 생성 실패"),console.error("카테고리 생성 실패",t)}},async createSubCategory(){try{await u.Z.post("https://www.w-life.store/api/subCategory",this.subCategoryForm,{withCredentials:!0}),alert("서브카테고리가 생성되었습니다.")}catch(t){alert("서브카테고리 생성 실패"),console.error("서브카테고리 생성 실패",t)}}}};const Jt=(0,c.Z)(Gt,[["render",Kt],["__scopeId","data-v-a619455e"]]);var Qt=Jt;const Xt={class:"boardTitle"};function te(t,e,a,o,n,i){const s=(0,r.up)("el-button"),l=(0,r.up)("el-table-column"),u=(0,r.up)("router-link"),d=(0,r.up)("el-table"),c=(0,r.up)("Pagination");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",Xt,[(0,r._)("h2",null,(0,g.zw)(n.subCategoryName),1),(0,r.Wm)(s,{type:"primary",onClick:i.goToWritePage},{default:(0,r.w5)((()=>[(0,r.Uk)("글쓰기")])),_:1},8,["onClick"])]),(0,r.Wm)(d,{data:n.posts,class:"table-responsive",style:{width:"100%"}},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{prop:"index",label:"번호",width:"80"},{default:(0,r.w5)((({$index:t})=>[(0,r.Uk)((0,g.zw)(i.calculateIndex(t)),1)])),_:1}),(0,r.Wm)(l,{label:"제목"},{default:(0,r.w5)((({row:t})=>[(0,r.Wm)(u,{to:`/post/${t.id}`,onClick:e=>i.BoardViewRequest(t.id)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,g.zw)(t.title),1)])),_:2},1032,["to","onClick"])])),_:1}),(0,r.Wm)(l,{prop:"user.name",label:"작성자",width:"100"}),(0,r.Wm)(l,{prop:"createdAt",label:"작성일",width:"150",formatter:i.formatDate},null,8,["formatter"]),(0,r.Wm)(l,{prop:"views",label:"조회수",width:"80"})])),_:1},8,["data"]),(0,r.Wm)(c,{"total-pages":n.meta.totalPages,"current-page":t.currentPage,onPageChanged:i.changePage},null,8,["total-pages","current-page","onPageChanged"])],64)}var ee={name:"pageBoard",components:{Pagination:dt},data(){return{posts:[],meta:{totalPages:0,currentPage:1,totalCount:0,pageSize:15},subCategoryName:""}},created(){const t=this.$route.query.page||1;this.currentPage=Number(t),this.fetchPosts(this.$route.params.subCategoryId)},watch:{"$route.params.subCategoryId":{immediate:!0,handler(t){this.fetchPosts(t)}},"$route.query.page":function(t){this.currentPage=Number(t)||1,this.fetchPosts(this.$route.params.subCategoryId)}},methods:{async fetchPosts(t){try{const e=this.$route.query.page||1,a=await u.Z.get(`https://www.w-life.store/api/post?page=${e}&subCategoryId=${t}`);this.subCategoryName=a.data.subCategory.name,this.posts=a.data.posts,this.meta=a.data.meta,this.totalCount=a.data.meta.totalCount}catch(e){console.error("Error fetching posts",e)}},async BoardViewRequest(t){const e=this.getCookie(`postViewed_${t}`);if(!e)try{await u.Z.post(`https://www.w-life.store/api/view/post/${t}`),this.setCookie(`postViewed_${t}`,"viewed",1)}catch(a){console.error("Error sending view request",a)}},formatDate(t,e){const a=new Date(t[e.property]);return a.toLocaleDateString()},goToWritePage(){const t=this.$route.params.subCategoryId;this.$router.push({path:"/board/write",query:{subCategoryId:t}})},changePage(t){this.currentPage=t,this.fetchPosts(this.$route.params.subCategoryId),this.$router.push({path:this.$route.path,query:{page:t.toString()}})},calculateIndex(t){return this.totalCount-15*(this.currentPage-1)-t},setCookie(t,e,a){let o="";if(a){let t=new Date;t.setTime(t.getTime()+24*a*60*60*1e3),o="; expires="+t.toUTCString()}document.cookie=t+"="+(e||"")+o+"; path=/"},getCookie(t){let e=t+"=",a=document.cookie.split(";");for(let o=0;o<a.length;o++){let t=a[o];while(" "===t.charAt(0))t=t.substring(1,t.length);if(0===t.indexOf(e))return t.substring(e.length,t.length)}return null}}};const ae=(0,c.Z)(ee,[["render",te],["__scopeId","data-v-68ddffb7"]]);var oe=ae;const re={class:"board-title"},ne={class:"flex items-center"},ie={class:"flex items-center"},se={key:0,class:"board-content"},le={key:1};function ue(t,e,a,o,n,i){const s=(0,r.up)("el-tag"),l=(0,r.up)("el-button"),u=(0,r.up)("el-input"),d=(0,r.up)("el-page-header");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("span",re,(0,g.zw)(n.title),1),(0,r.Wm)(d,{onBack:i.goBack,icon:t.ArrowLeft},{content:(0,r.w5)((()=>[(0,r._)("div",ne,[(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Uk)("작성자")])),_:1}),(0,r._)("span",null,(0,g.zw)(n.author)+" | "+(0,g.zw)(n.createdAt),1)])])),extra:(0,r.w5)((()=>[(0,r._)("div",ie,[(0,r.Wm)(l,{type:"primary",class:"ml-2",onClick:i.editContent},{default:(0,r.w5)((()=>[(0,r.Uk)("Edit")])),_:1},8,["onClick"]),(0,r.Wm)(l,{type:"danger",class:"ml-2",onClick:i.deletePost},{default:(0,r.w5)((()=>[(0,r.Uk)("delete")])),_:1},8,["onClick"])])])),default:(0,r.w5)((()=>[n.editing?((0,r.wg)(),(0,r.iD)("div",le,[(0,r.Wm)(u,{type:"textarea",modelValue:n.editableContent,"onUpdate:modelValue":e[0]||(e[0]=t=>n.editableContent=t),rows:"4",placeholder:"Please input your content"},null,8,["modelValue"]),(0,r.Wm)(l,{type:"success",onClick:i.patchPost,class:"edit-button-board"},{default:(0,r.w5)((()=>[(0,r.Uk)("Save")])),_:1},8,["onClick"])])):((0,r.wg)(),(0,r.iD)("div",se,(0,g.zw)(n.content),1))])),_:1},8,["onBack","icon"])],64)}var de={name:"PageVisitorDeatil",data(){return{title:"",content:"",author:"",createdAt:"",editing:!1,editableContent:""}},methods:{goBack(){this.$router.go(-1)},editContent(){this.editableContent=this.content,this.editing=!0},async patchPost(){try{const t=this.$route.params.postId;await u.Z.patch(`https://www.w-life.store/api/post/${t}`,{content:this.editableContent},{withCredentials:!0}),this.content=this.editableContent,this.editing=!1,alert("게시글 수정 완료.")}catch(t){console.error("게시글 수정 서버에러",t),alert("게시글 수정 권한이 없습니다.")}this.content=this.editableContent,this.editing=!1},async deletePost(){if(confirm("정말로 삭제하시겠습니까?"))try{const t=this.$route.params.postId;await u.Z.delete(`https://www.w-life.store/api/post/${t}`,{withCredentials:!0}),alert("게시글이 삭제되었습니다."),this.$router.go(-1)}catch(t){console.error("Error deleting visitor",t),alert("게시글 삭제에 실패했습니다.")}}},async created(){try{const t=this.$route.params.postId,e=await u.Z.get(`https://www.w-life.store/api/post/${t}`);this.title=e.data.title,this.content=e.data.content;const a=new Date(e.data.createdAt);this.createdAt=a.toLocaleDateString(),this.author=e.data.user.name}catch(t){console.error("Error fetching visitor detail",t)}}};const ce=(0,c.Z)(de,[["render",ue],["__scopeId","data-v-5a9ea6e0"]]);var pe=ce;const me=t=>((0,r.dD)("data-v-feffdcce"),t=t(),(0,r.Cn)(),t),ge=me((()=>(0,r._)("h2",null,"글쓰기",-1))),he=me((()=>(0,r._)("label",{for:""},"제목",-1))),we=me((()=>(0,r._)("label",{for:""},"내용",-1))),fe=me((()=>(0,r._)("button",{type:"submit",class:"submit-button"},"작성",-1)));function ye(t,e,a,n,i,s){const l=(0,r.up)("el-input");return(0,r.wg)(),(0,r.iD)(r.HY,null,[ge,(0,r._)("form",{onSubmit:e[2]||(e[2]=(0,o.iM)(((...t)=>s.writeBoard&&s.writeBoard(...t)),["prevent"]))},[he,(0,r.Wm)(l,{modelValue:i.boards.title,"onUpdate:modelValue":e[0]||(e[0]=t=>i.boards.title=t),maxlength:"50",placeholder:"제목을 입력해주세요","show-word-limit":"",type:"text"},null,8,["modelValue"]),we,(0,r.Wm)(l,{modelValue:i.boards.content,"onUpdate:modelValue":e[1]||(e[1]=t=>i.boards.content=t),maxlength:"2000",placeholder:"내용을 입력해주세요","show-word-limit":"",type:"textarea",rows:10,autosize:{minRows:20,maxRows:200}},null,8,["modelValue"]),fe],32)],64)}var ve={name:"PageVisitorWrite",data(){return{boards:{title:"",content:"",subCategoryId:""}}},created(){this.boards.subCategoryId=this.$route.query.subCategoryId},methods:{async writeBoard(){try{const t=await u.Z.post("https://www.w-life.store/api/post",this.boards,{withCredentials:!0});201===t.status&&(alert("게시글 작성에 성공했습니다."),this.$router.go(-1))}catch(t){let e="게시글 작성에 실패했습니다.";t.response&&t.response.data&&(e=Array.isArray(t.response.data.errorMessage)?t.response.data.errorMessage.join("\n"):t.response.data.errorMessage||e),alert(e),console.error(t,"알 수 없는 에러 발생")}}}};const be=(0,c.Z)(ve,[["render",ye],["__scopeId","data-v-feffdcce"]]);var _e=be;const Ce=[{path:"/",name:"Home",component:z},{path:"/home",name:"home",component:z},{path:"/login",name:"Login",component:E},{path:"/register",name:"Register",component:G},{path:"/visitor",name:"visitor",component:mt},{path:"/visitor/:visitorId",name:"PageVisitorDeatil",component:Wt},{path:"/visitor/write",name:"PageVisitorWrite",component:qt},{path:"/account",name:"PageAccount",component:jt},{path:"/admin",name:"PageAdmin",component:Qt},{path:"/subCategory/:subCategoryId",name:"PageBoard",component:oe},{path:"/post/:postId",name:"PageBoardDetail",component:pe},{path:"/board/write",name:"PageBoardWrite",component:_e}],ke=(0,C.p7)({history:(0,C.PO)(),routes:Ce});var Pe=ke,We=a(3056),Ve=(a(4415),a(65)),Ie=(0,Ve.MT)({state(){return{isLoggedIn:!1}},mutations:{setLoggedIn(t,e){t.isLoggedIn=e}},actions:{login({commit:t}){t("setLoggedIn",!0)},logout({commit:t}){t("setLoggedIn",!1)}}}),$e=a(2748);const Ue=(0,o.ri)(_);Ue.use(We.Z),Ue.use(Pe),Ue.use(Ie);for(const[De,xe]of Object.entries($e))Ue.component(De,xe);Ue.mount("#app")}},e={};function a(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={exports:{}};return t[o].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,o,r,n){if(!o){var i=1/0;for(d=0;d<t.length;d++){o=t[d][0],r=t[d][1],n=t[d][2];for(var s=!0,l=0;l<o.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((function(t){return a.O[t](o[l])}))?o.splice(l--,1):(s=!1,n<i&&(i=n));if(s){t.splice(d--,1);var u=r();void 0!==u&&(e=u)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[o,r,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,n,i=o[0],s=o[1],l=o[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var d=l(a)}for(e&&e(o);u<i.length;u++)n=i[u],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},o=self["webpackChunkmyblog_frontend"]=self["webpackChunkmyblog_frontend"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(622)}));o=a.O(o)})();
//# sourceMappingURL=app.d8fd4ae5.js.map