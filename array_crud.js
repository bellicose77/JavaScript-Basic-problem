function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g
  ,(c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
})};

const instructors = [
    {
      id: 'ee9efd79-92bb-4d9f-a4dc-d340e63739b7',
      name: 'Ben Awad',
      email: 'benawad@gmail.com',
    },
    {
      id: '49350b1b-b450-418f-a840-c7aa53617a7f',
      name: 'Hussein Nasser',
      email: 'hussein@gmail.com',
    }
 ];
 newObj = {
    id:uuid(),
    name:"perfect hossian",
    email:"something@gmail.com"
 }
 //create 
 instructors.push(newObj)

 // update 
 const updateIndex = instructors.findIndex(item=>item.id==='49350b1b-b450-418f-a840-c7aa53617a7f');
 updatedata={
    name:"dulal halder",
    email:"dulal@gmail.com"
 }
 instructors[updateIndex]={
    ...instructors[updateIndex],...updatedata
 }

 // delete 
 //instructors.splice(updateIndex,1)
 // read 
 const array1=instructors.map(item=> item.name);
 console.log(array1)
//console.log(instructors)

//console.log(instructors)
 //console.log(instructors)