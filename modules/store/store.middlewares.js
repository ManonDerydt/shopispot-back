const path = require("path");
const models = require(path.resolve("./models"));
const express = require("express");
const {logger} = require("sequelize/lib/utils/logger");
const multer = require("multer");
const debug = require("debug")("app:users")
const router = express.Router();

// import {packageDirectory} from 'pkg-dir';
//
// console.log(await packageDirectory('image-to-base64'));


exports.getAllStores = (req, res, next) => {
    debug("getAllStores");

    return execute()
        .then(stores => res.json(stores))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Store.findAll();
        }catch (error){
            throw error;
        }
    }
};

exports.getStore = (req, res, next) => {
    debug("getStore");

    const { id } = req.params;

    return execute()
        .then(store => res.json(store))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Store.findByPk(id, {
                attributes: ["name", "description", "category","image_1","city","district"],
         });
        }catch (error){
            throw error;
        }
    }
};

exports.createStore = (req, res, next) => {
    debug("createStore");

    const {
        name,
        city,
        district,
        category,
        sub_category,
        image_1,
        image_2,
        image_3,
        tag_1,
        tag_2,
        tag_3,
        adress,
        number,
        schedule,
        informations,
        description,
        price_range
    } = req.body;

    let fs = require('fs');


// function to encode file data to base64 encoded string


    // console.log(req.body)


    return execute()
        .then(() => {
            res.json({"Ok": true});
        })
        .catch((err) => {
            if (err.message === "UNIQUE_EMAIL") {
                return res.status(401).json({message: "L'adresse email est déjà utilisée"})
            }
            next(err)
        });

    async function execute() {
        try {
            //const hashPassword = await bcryptService.hashPassword(password)
            const store = {
                //password: hashPassword,
                name: name,
                city: city,
                district: district,
                category: category,
                sub_category: sub_category,
                image_1: image_1,
                image_2: image_2,
                image_3: image_3,
                tag_1: tag_1,
                tag_2: tag_2,
                tag_3: tag_3,
                adress: adress,
                number: number,
                schedule: schedule,
                informations: informations,
                description: description,
                price_range: price_range,
            }

            console.log(image_1)

            const storage = multer.diskStorage({
                destination: function (req, file, cb) {
                    cb(null, 'uploads/');
                },
                filename: function (req, file, cb) {
                    cb(null, file.originalname);
                }
            });

            const fileFilter = (req, file, cb) => {
                if (image_1.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
                    cb(null, true);
                } else {
                    cb(null, false);
                }
            };

            console.log(fileFilter())

            // const upload = multer({
            //     storage: storage,
            //     limits: {
            //         fileSize: 1024 * 1024 * 5
            //     },
            //     fileFilter: fileFilter
            // });
            //
            // router.post('/upload-image', upload.single('image'), (req, res, next) => {
            //     const image = req.body.image;
            //     const description = req.body.description;
            //     const sql = 'INSERT INTO images (image, description) VALUES (?, ?)';
            //     const params = [image, description];
            //     connection.query(sql, params, (error, result, fields) => {
            //         if (error) throw error;
            //         res.send({
            //             success: true,
            //             message: 'image ajoutée avec succès'
            //         });
            //     });
            // });


            console.log(store)
            return await models.Store.create(store);
        } catch (err) {
            if (err.name === "SequelizeUniqueConstraintError") {
                throw Error("UNIQUE_EMAIL")
            }
            throw (err);
        }
    }
}
