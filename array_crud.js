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