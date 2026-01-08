const mongoose = require("mongoose");

const ownerSchema = ({
    fullname: String,
    email: String,
    password: String,
    products: {
        type: Array,
        default: 0
    },
    picture: String,
    gstin: String,
});

module.exports = mongoose.model("owner", ownerSchema);