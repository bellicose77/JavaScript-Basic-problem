function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g
  ,(c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
})};
const obj ={
    "ee9efd79-92bb-4d9f-a4dc-d340e63739b7":{
      id: 'ee9efd79-92bb-4d9f-a4dc-d340e63739b7',
      name: 'Ben Awad',
      email: 'benawad@gmail.com', 
    },
    '49350b1b-b450-418f-a840-c7aa53617a7f':{
        id: '49350b1b-b450-418f-a840-c7aa53617a7f',
        name: 'Hussein Nasser',
        email: 'hussein@gmail.com',

    }
}
newObj = {
    id:uuid(),
    name:"something",
    email:"something@gmail.com"
}
// create 
obj[newObj.id]=newObj
//obj.newObj.id = newObj.id
// update 
updateData = {
    name :"Dulal Halder",
    email:"dulal@gmail.com"
}
obj['49350b1b-b450-418f-a840-c7aa53617a7f']
//console.log(obj['49350b1b-b450-418f-a840-c7aa53617a7f'])
