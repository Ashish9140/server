const router = require('express').Router();
const multer = require('multer');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const accessTokenSecret = "18a6bfebf8ce3e8e867d8c919d09797407305455e8e8deafe987";
const salt = 1;
const fs = require('fs');
const { client, insertFileData, insertUserData } = require('./db');

const checkTolerance = require("./checktolerance");

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
        insertFileData(data);
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
        insertFileData(data);
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
        insertFileData(data);
        res.send({ message: "File Saved" });
    } catch (err) {
        res.send({ message: "Internal Server Error" });
    }
});


router.post('/videowith', upload.single('videowith'), async (req, res) => {
    try {
        const { filename, date, time, duration, alias, ip, latitude, longitude, iptype, devicebrand, devicename, devicetype, searchname, searchtype, searchversion, ostype, osname } = req.body;
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
        insertFileData(data);


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
        insertFileData(data);
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
        insertFileData(data);
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
        insertFileData(data);
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
        insertFileData(data);
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


router.get('/check', async (req, res) => {
    try {
        res.json({ message: "hello from check route" });
    } catch (err) {
        res.send({ message: "Internal Server Error" });
    }
});



// user authetication routes

// signup
router.post("/signup", async (req, res) => {
    try {
        const { alias, companyname, name, avatar, email, password } = req.body;
        let user;
        const searchQuery = `SELECT * FROM users WHERE alias = ?`;

        await client.execute(searchQuery, [alias])
            .then(result => {
                user = result.rows[0];
                // console.log(user);
            })
            .catch(error => {
                console.error('Error searching user', error);
            });

        // usw
        // console.log(user);

        if (user) {
            return res.status(409).send({ message: "User given email already exist" });
        }
        const hashPassword = await bcrypt.hash(password, salt);


        const data = {
            alias: alias,
            companyname: companyname,
            name: name,
            avatar: avatar,
            email: email,
            password: hashPassword,
        };

        insertUserData(data);
        const token = jwt.sign({ alias }, accessTokenSecret, { expiresIn: '7d' });
        return res.status(201).send({ user: data, token: token, message: "User created successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
})


// login
router.post("/login", async (req, res) => {
    try {
        const { alias, password } = req.body;
        let user;
        let isAdmin = false;
        let allAlias = null;

        const searchQuery = `SELECT * FROM users WHERE alias = ?`;

        await client.execute(searchQuery, [alias])
            .then(result => {
                user = result.rows[0];
                // console.log(user);
            })
            .catch(error => {
                console.error('Error searching user', error);
            });

        // console.log(user);

        if (!user) {
            return res.status(401).send({ message: "Invalid Email or Password" });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword)
            return res.status(401).send({ message: "Invalid Email or Password" });

        if (user.email === "smartsnapper@gmail.com" && user.alias === "adminalias") {
            isAdmin = true;
            const searchQuery = `SELECT alias FROM users`;

            await client.execute(searchQuery)
                .then(result => {
                    allAlias = result.rows;
                })
                .catch(error => {
                    console.error('Error searching user', error);
                });
        }

        const token = jwt.sign({ alias }, accessTokenSecret, { expiresIn: '7d' });
        return res.status(200).send({ user: user, token: token, message: "Logged Successfully", isAdmin });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})


// get profile
router.post("/profile", async (req, res) => {
    const { token } = req.body;
    let userData = jwt.verify(token, accessTokenSecret);
    let alias = userData.alias;

    const searchQuery = `SELECT *FROM users where alias = ?`;

    await client.execute(searchQuery, [alias])
        .then(result => {
            allAlias = result.rows;
        })
        .catch(error => {
            console.error('Error searching user', error);
        });

    for (let i = 0; i < allAlias.length; i++) {
        let temp = allAlias[i].alias;
        const token = jwt.sign({ alias: temp }, accessTokenSecret, { expiresIn: '7d' });
        allAlias[i].token = token;
    }

    res.status(201).send({ allAlias });

})



// admin
// get all alias
router.post("/getalias", async (req, res) => {
    const { token } = req.body;
    let userData = jwt.verify(token, accessTokenSecret);

    let allAlias;

    if (userData.alias !== "adminalias") {
        return res.status(401).send({ message: "Invalid token" });
    }

    const searchQuery = `SELECT *FROM users`;

    await client.execute(searchQuery)
        .then(result => {
            allAlias = result.rows;
        })
        .catch(error => {
            console.error('Error searching user', error);
        });

    for (let i = 0; i < allAlias.length; i++) {
        let temp = allAlias[i].alias;
        const token = jwt.sign({ alias: temp }, accessTokenSecret, { expiresIn: '7d' });
        allAlias[i].token = token;
    }

    res.status(201).send({ allAlias });

})


// update
router.post("/update", async (req, res) => {
    try {
        const { token, email, name } = req.body;
        let userData = jwt.verify(token, accessTokenSecret);
        let alias = userData.alias;

        console.log(alias)

        const updateQuery = `UPDATE users SET email = ?, name = ? WHERE alias = ?`;

        client.execute(updateQuery, [email, name, alias])
            .then(() => {
                console.log('User updated successfully');
            })
            .catch(error => {
                console.error('Error updating user', error);
            });

        let user;

        const searchQuery = `SELECT * FROM users WHERE alias = ?`;

        await client.execute(searchQuery, [alias])
            .then(result => {
                user = result.rows[0];
                // console.log(user);
            })
            .catch(error => {
                console.error('Error searching user', error);
            });

        return res.status(201).send({ message: "Updated successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error" });
    }
})


// update avatar
router.post("/updateavatar", async (req, res) => {
    try {
        const { alias, avatar } = req.body;

        const imagePath = `${Date.now()}.${Math.round(
            Math.random() * 1e9
        )}.png`;
        const buffer = Buffer.from(avatar.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''), 'base64');
        fs.writeFile(`uploads/${imagePath}`, buffer, function (err) {
            if (!err) {
                console.log("file is created")
            }
        });
        const filepath = `uploads/${imagePath}`;

        const updateQuery = `UPDATE users SET avatar = ? WHERE alias = ?`;

        client.execute(updateQuery, [filepath, alias])
            .then(() => {
                console.log('Avatar updated successfully');
            })
            .catch(error => {
                console.error('Error updating user', error);
            });

        let user;

        const searchQuery = `SELECT * FROM users WHERE alias = ?`;

        await client.execute(searchQuery, [alias])
            .then(result => {
                user = result.rows[0];
                // console.log(user);
            })
            .catch(error => {
                console.error('Error searching user', error);
            });

        return res.status(201).send({ message: "Avatar Updated successfully", user: user });

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
})


module.exports = router