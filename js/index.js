var Email = document.getElementById("email")
var Name = document.getElementById("name")
var Pass = document.getElementById("pass")
var list
var signinPass=document.getElementById("signinPass")
var signinEmail = document.getElementById("signinEmail")
var btnUp = document.getElementById("btnUp")
var btnOut = document.getElementById("btnOut")
var btnIn =document.getElementById("btnIn")





function setLocal(){
    localStorage.setItem("inform",JSON.stringify(list))
}

if(localStorage.getItem("inform") != null){
    list = JSON.parse(localStorage.getItem("inform"))
}else{
    list =[]
}
//        S I G N    U P
function signUp(){
    
    var info={
        em:Email.value,
        na:Name.value,
        pas:Pass.value
    }
    if(Empty()==false){
        document.getElementById("exist").innerHTML=`<span>All inputs is required</span>`
        return false
    }
    if(Exist() == false){
        document.getElementById("exist").innerHTML=`<span>email already exists</span>`
    }else{
    list.push(info)
    setLocal()
    document.getElementById("exist").innerHTML=`<span class="text-warning">Success</span>`
    clear()        
    }

}
function clear(){
    Email.value=''
    Name.value=''
    Pass.value=''
}
function Empty(){
    if(Email.value == '' || Pass.value == '' || Name.value == ''){
        return false
    }
    else{
        return true
    }
}

function Exist(){
    for(var i = 0; i<list.length;i++){
        if(list[i].em.toLowerCase() == Email.value.toLowerCase()){
            return false
        }
    }
}

function clickUp(){
    btnUp.addEventListener('click',signUp)
}
clickUp();

// S I G N     I N
function EmptyIn(){
    if(signinEmail.value =='' || signinPass.value ==''){
        return false
    }else{
        return true
    }
}


function Login(){
    
    if(EmptyIn() == false){
        document.getElementById("log").innerHTML='<span>All inputs is required</span>'
        return false    
    }
    var EmailIn = signinEmail.value
    var PassIn = signinPass.value
    for(var i = 0;i<list.length;i++){
        if(list[i].em == EmailIn.toLowerCase() && list[i].pas==PassIn.toLowerCase()){
            document.getElementById("home").classList.replace("d-none","d-block")
            document.getElementById("SignIn").classList.replace("d-flex","d-none")
            btnIn.setAttribute('href','#home')
            localStorage.setItem("user",list[i].na)
        }else{
            document.getElementById("log").innerHTML='<span>incorrect email or password</span>'
        }

    }
    
}

function clickIn(){
    btnIn.addEventListener('click',Login)
}
clickIn();

function clickSignUp(){
    var btnCUp = document.getElementById("btnCUp")
    btnCUp.addEventListener('click',function(){
        document.getElementById("SignIn").classList.replace("d-flex","d-none")
        document.getElementById("signUp").classList.replace("d-none","d-flex")        
    })

}
clickSignUp()



function clickSignIn(){
    var btnCUp = document.getElementById("btnCIn")
    btnCUp.addEventListener('click',function(){
        document.getElementById("signUp").classList.replace("d-flex","d-none")
        document.getElementById("SignIn").classList.replace("d-none","d-flex")        
    })

}
clickSignIn()

//H O M E 

function display(){
    var username = localStorage.getItem("user")
    if(username){
       document.getElementById("welcome").innerHTML="welcome " + username 
    }
    
}

display()

function clickOut(){
    btnOut.addEventListener("click",function(){
        document.getElementById("home").classList.replace("d-block","d-none")
        document.getElementById("SignIn").classList.replace("d-none","d-flex")      
    })
}
clickOut()


