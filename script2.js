let info ={
    "name" : "john cena",
    "age"  : "45",
    "mail" : "johncena23@gmail.com",
    "city" : "hollywood",
   "gender": "male"

};
//for loop
const keys = Object.keys(info);

for(let i=0; i<keys.length; i++){
    console.log(info[keys[i]]); 
}
//for of loop
for(const key of Object.keys(info)) {
    console.log(key);
}   
   
// for in loop
for(let i in info){
    console.log(i,info[i]);
    
}