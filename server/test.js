const bcrypt = require('bcrypt');
const saltRaunds = 10;
const test = async () => {
    const hashedPassword = await bcrypt.hash("sally", saltRaunds)
    console.log(hashedPassword)
}

test();



