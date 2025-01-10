import express from 'express';

const app = express();

app.get('/api/weapons' , (req , res) => {
   
  const  weapons = [
          {
            "id": 1,
            "title": "torpedo Shakti 1",
            "description": "A Torpedo which is nothing like weapon",
           
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": 
              "https://i.dummyjson.com/data/products/1/1.jpg",
             
            
          },
          {
            "id": 2,
            "title":"mount Gun",
            "description": "with GPS, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
           
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": 
              "https://i.dummyjson.com/data/products/2/1.jpg"
             
            
          },
          {
            "id": 3,
            "title": "universe",
            "description": "new variant which goes beyond Galaxy to the Universe",
           
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            "images": 
              "https://i.dummyjson.com/data/products/3/1.jpg"
            
          },
          {
            "id": 4,
            "title": "AK-147 Gun",
            "description": "A Gun that kills you.",
          
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "images": 
              "https://i.dummyjson.com/data/products/4/1.jpg",
             
          }
        ]
    // http://localhost:3000/api/weapons?search=Gun
    //  Filter data 
    
    if(req.query.search){
         const filterWeapons = weapons.filter(weapon => 
            weapon.title.includes(req.query.search))
            res.send(filterWeapons);
            return ;
    }

  // delay for response 
  setTimeout(() => {
     res.send(weapons);
  } , 3000);


})



const port = process.env.PORT || 3000;
app.listen(port , () => {
console.log(`Torpedo Server runnig on port ${port}`);
});
