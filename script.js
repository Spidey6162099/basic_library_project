let library_book=[]

function Book(title,author){//,pages ,read){
    this.title=title;
    this.author=author;
    // this.pages=pages;
    // this.read=read;
    this.info=function(){
        let read_or_not=!(this.read)?"not read":"read";
        return `${this.title} by ${this.author} is ${this.pages} pages, and ${read_or_not}`;
    }
}

//already added books

let lord_of_the_rings=new Book("Lord of the Rings","JRR Tolkien");
library_book.push(lord_of_the_rings);
let chronicles_of_narnia=new Book("Chronicles of Narnia","CS Lewis");
library_book.push(chronicles_of_narnia);
let don_quixote=new Book("Don Quixote","Miguel Cervantes");
library_book.push(don_quixote);

function add_book(){
    const book_name_value=document.querySelector(".user_input>form>#book_name");
    const author_name_value=document.querySelector(".user_input>form>#author_name");
    
    //adding elemnts to a newly created div
    const new_book=document.createElement("div");
    new_book.setAttribute("data-book_name",book_name_value.value);
    const insert_img=document.createElement("img");
    
    //image
    insert_img.setAttribute("src","img/icons8-book-100 (1).png")
    new_book.appendChild(insert_img);
    
    //text content
    const text_content=document.createElement("div");
    text_content.setAttribute("class","text_material");
    const book_name=document.createElement("div");
    book_name.setAttribute("class","book_name");
    book_name.textContent=book_name_value.value;
    text_content.appendChild(book_name);
    const author_name=document.createElement("div");
    author_name.setAttribute("class","author_name");
    author_name.textContent=`-${author_name_value.value}`;
    text_content.appendChild(author_name);
    new_book.appendChild(text_content);
    container.insertBefore(new_book,add_card);

    const icons=document.createElement("div");
    icons.setAttribute("class","icons");

    const read_group=document.createElement("div");
    read_group.setAttribute("class","read_group");
    
    const read_check=document.createElement("input");
    read_check.setAttribute("id","read");
    read_check.setAttribute("name","read");
    read_check.setAttribute("type","checkbox");
    read_group.appendChild(read_check);
    const read_label=document.createElement("label");
    read_label.textContent="Read?";
    read_label.setAttribute("for","read");
    read_group.appendChild(read_label);
    
    icons.appendChild(read_group);
    
    const remove_button=document.createElement("button");
    remove_button.setAttribute("class","remove"); 
    remove_button.setAttribute("data-book_name",book_name_value.value);
    const remove_button_element=document.createElement("img");
    remove_button_element.setAttribute("src","img/icons8-remove-128.png")
    
    remove_button.appendChild(remove_button_element);

    icons.appendChild(remove_button);

    new_book.appendChild(icons);


    let temp=new Book(book_name_value.value,author_name_value.value);
    library_book.push(temp);

    author_name_value.value="";

    book_name_value.value="";
}


function delete_book(book_ref){
    
    const del_book=document.querySelector(".container>div[data-book_name='"+book_ref+"']");
    const book_container=document.querySelector(".container");
    console.log(del_book);
    for(let i=0;i<library_book.length;i++){
        if(library_book[i].title===book_ref){
            library_book.splice(i,1);
        }
    }
    book_container.removeChild(del_book);
    
}

const add_button=document.querySelector(".add_card>button");
const dialog=document.querySelector(".user_input");
const submit_dialogue=document.querySelector(".save_btn");
const container=document.querySelector(".container");
const add_card=document.querySelector(".add_card");

let user_input;

add_button.addEventListener('click',()=>{
    dialog.showModal();
});

submit_dialogue.addEventListener("click",()=>{

add_book();
const remove_button=document.querySelectorAll(".remove");

remove_button.forEach((a)=>{
    a.addEventListener("click",()=>{
        delete_book(a.getAttribute("data-book_name"));
    })
});


})
const remove_button=document.querySelectorAll(".remove");

remove_button.forEach((a)=>{
    a.addEventListener("click",()=>{
        delete_book(a.getAttribute("data-book_name"));
    })
});


