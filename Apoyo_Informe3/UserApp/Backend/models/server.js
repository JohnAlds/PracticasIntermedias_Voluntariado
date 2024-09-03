const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config.db');


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api';
        

        //middlewares
        this.middlewares();

        //Database connection
        this.dbConnection();

        //rutas de la app
        this.routes();
    }

    middlewares(){
        //CORS 
        this.app.use(cors());

        //Lectura y parseo de body
        this.app.use(express.json());

    }

    async dbConnection(){
        await dbConnection();
    }

    routes(){
        this.app.use(this.usersPath, require('../routes/users'));
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server running on port ', this.port);
        });
    }
}

module.exports = Server;