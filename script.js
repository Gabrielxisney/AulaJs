function getAdmins (map){
    let admins = [];
 for([key , value] of map){
     if (value == 'Admin'){
         admins.push(key)
     }
 }
 return admins;
}

const usuarios = new  Map();

usuarios.set('Gabriel','Admin');
usuarios.set('Gabrielle','Admin');
usuarios.set('Luis','Usuer');
usuarios.set('Rosana','Admin');

console.log (getAdmins(usuarios));
