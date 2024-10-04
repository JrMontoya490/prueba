const Games = require('..//models/games');

exports.list = async(req, res) =>{
    try{
    const games = await Games.find({});
    res.json(games);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
};

exports.show = async(req, res, next) =>{
    try{
        const games = await Games.findOne({id: req.params.id});
        if(!games){
            res.status(404).json({message: "Item no encontrado"});
        }
        res.json(games);

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }
};

exports.add = async(req, res) =>{
    const games = new Games(req.body);

    try{
        await games.save();
        res.json({message: "Se Agrego un Nuevo Juego"});
        }catch(error){
            console.log(error);
            res.send(error);
            next();
        }
};

exports.update = async (req, res, next) =>{
    try{
        const games = await Games.findOneAndUpdate(
            {id: req.params.id},req.body
        );
        res.json({message: "Juego Actualizado"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }

};

exports.delete = async (req, res, next) =>{
    try{
        const games = await Games.findOneAndDelete({id: req.params.id});
        res.json({message: "Juego Borrado"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "El Cliente no existe"});
        next();
    }
};