




let book_list=[]

class book{
    
    constructor(title,author,read,pages){
        this.title=title;
        this.author=author;
        this.read=read;
        this.pages=pages;
    }

}

//function to add books
function add(){
    const book_name_value=document.querySelector(".user_input>form>p>#book_name");
    const author_name_value=document.querySelector(".user_input>form>p>#author_name");
    const pages_read_value=document.querySelector(".user_input>form>p>#page_no");
    const read_value=document.querySelector(".user_input>form>p>#read_status");

   

    
    
    let temp=new book(book_name_value.value,author_name_value.value,read_value.checked,pages_read_value.value);
    book_list.push(temp);
    render();
}

//function to implement input validation

function check(){
    const book_name_value=document.querySelector(".user_input>form>p>#book_name");
    const author_name_value=document.querySelector(".user_input>form>p>#author_name");
    const pages_read_value=document.querySelector(".user_input>form>p>#page_no");
    const read_value=document.querySelector(".user_input>form>p>#read_status");
    let flag=true;
    if(!book_name_value.value){
        const error_msg=document.querySelector(".book_error");
        error_msg.textContent="enter the damn book!"
        error_msg.setAttribute("style","color:red");
        flag=false;
    }
    else{
        const error_msg=document.querySelector(".book_error");
        error_msg.textContent="";
    }
    if(!author_name_value.value){
        const error_msg=document.querySelector(".author_error");
        error_msg.textContent="enter the damn author!"
        error_msg.setAttribute("style","color:red");
        flag=false;
    }
    else{
        const error_msg=document.querySelector(".author_error");
        error_msg.textContent="";
    }
    if(!pages_read_value.value){
        const error_msg=document.querySelector(".page_error");
        error_msg.textContent="enter the pages?"
        error_msg.setAttribute("style","color:red");
        flag=false;
    }
    else{
        const error_msg=document.querySelector(".page_error");
        error_msg.textContent="";
    }
    return flag;
}

//to remove errors and inputs
function clear(){

    const error_msg1=document.querySelector(".book_error");
    error_msg1.textContent="";
    const error_msg2=document.querySelector(".author_error");
    error_msg2.textContent="";
    const error_msg3=document.querySelector(".page_error");
    error_msg3.textContent="";
    const error_msg4=document.querySelector(".read_error");
    error_msg4.textContent="";

    document.querySelector(".user_input>form>p>#book_name").value="";
    document.querySelector(".user_input>form>p>#author_name").value="";
    document.querySelector(".user_input>form>p>#page_no").value="";
    document.querySelector(".user_input>form>p>#read_status").checked=false;

}

function remove(e){
    let index=Number(e.target.getAttribute("data_index"));
    book_list.splice(index,1);
    render();
}

function render(){
    const container=document.querySelector(".body_container>.container");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    let count=0;
    for(let i of book_list){

        // create cards in container
       let box= document.createElement("div");
       box.setAttribute("class","container_card");
       
       const book_name=document.createElement("div");
       book_name.setAttribute("class","book_name");
       book_name.textContent=i.title;
       box.appendChild(book_name);
       
       const author_name=document.createElement("div");
       author_name.setAttribute("class","author_name");
       author_name.textContent=i.author;
       box.appendChild(author_name);
       
       const icons=document.createElement("div");
       icons.setAttribute("class","icons");

       const read_btn=document.createElement("button");
       read_btn.setAttribute("class","read");
       read_btn.addEventListener("click",(e)=>{
        i.read=!i.read;
        render();
       })
       if(i.read){
            read_btn.setAttribute("style","background-color:green");
            read_btn.textContent="read";
       }
       else{
        read_btn.setAttribute("style","background-color:red");
        read_btn.textContent="unread";
       }
       
       const remove_btn=document.createElement("button");
       remove_btn.setAttribute("class","remove");
       remove_btn.setAttribute("data_index",`${count}`);
       remove_btn.addEventListener("click",remove);
       remove_btn.textContent="remove";
       
       icons.appendChild(read_btn);
       icons.appendChild(remove_btn);

       box.appendChild(icons);

       container.appendChild(box);
       count++;

    }
}

function set_stage(){

//dummy books to give a feel for the website 

let lord_of_the_rings=new book("Lord of The Rings","JRR Tolkien",true,240);
let chronicles_of_narnia=new book("Chronicles of Narnia","CS Lewis",false,320);
let don_quixote=new book("Don Quixote","Miguel Cervantes",true,500);
book_list.push(lord_of_the_rings);
book_list.push(chronicles_of_narnia);
book_list.push(don_quixote);


//setting up the add button functionality
const dialog=document.querySelector(".user_input");

// dialog.style.top = ((window.innerHeight/2) - (dialog.offsetHeight/2))+'px';
// dialog.style.left = ((window.innerWidth/2) - (dialog.offsetWidth/2))+'px';
const add_btn=document.querySelector(".header>.add_card>button");
add_btn.addEventListener("click",()=>{
    
    dialog.showModal();
});

const submit_btn=document.querySelector(".user_input_form>.buttons>.save_btn");
submit_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(check()){
        
    add();
    clear();
    dialog.close();}
    
});

const cancel_btn=document.querySelector(".user_input_form>.buttons>.cancel");
cancel_btn.addEventListener("click",(e)=>{
    clear();
    e.preventDefault();
    dialog.close();
    
})

render();
}

set_stage();
console.log(book_list);
