const express = require('express');
const path = require('path');
const BP = require('body-parser');
const Joi = require('joi');
const fs = require('fs');
const { Console } = require('console');




const app = express();



app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) =>{

    res.sendFile(path.join(__dirname, 'static','booking.html'));

});

app.use('/novaPonuda',BP.urlencoded({extended: false}));

app.post('/novaPonuda', (req,res) =>{

    const shema = Joi.object().keys({
        naziv: Joi.string().trim().min(5).max(25).required(),
        kategorija: Joi.string().trim().min(1).required(),
        date: Joi.string().trim().min(5).max(25).required(),
        brDana: Joi.number().greater(0).required(),
        brOsoba: Joi.number().greater(0).required(),
        cena: Joi.number().greater(0).required()
    });
   
    const {error, succ} = shema.validate(req.body);

    if(error){
        
        res.send("Greska: " + error.details[0].message);
        console.log("Desila se greska");
       
        return;
    } else{
        
        

        fs.appendFile("ponude.txt", 
                 JSON.stringify(req.body) + "\n", 
                 function(err, succ){
                  //res.sendFile(path.join(__dirname, 'static','ponuda.html'));
                  res.redirect('ponuda.html');
                 }
            );

    }

    
   // res.sendFile(path.join(__dirname, 'static','ponuda.html'));

});

app.get('/ponuda', (req, res) => {
    fs.readFile('ponude.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Greška pri čitanju fajla:', err);
        res.status(500).send({ error: "Greška" });
        return;
      }
  
      try {
        const redovi = data.split('\n');
        const ponude = [];
  
        for (let i = 0; i < redovi.length; i++) {
          if (redovi[i]) { // Preskoči prazne redove
            let obj = JSON.parse(redovi[i]);
            ponude.push(obj);
          }
        }
  
        res.json(ponude);
      } catch (error) {
        console.error('Greška pri parsiranju JSON-a:', error);
        res.status(500).send({ error: "Greška pri parsiranju JSON-a" });
      }
    });
  });
  


app.listen(8000);
