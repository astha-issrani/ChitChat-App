const mongoose=require("mongoose");

const Chat=require("./models/chat.js");


main().then(console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ChitChat');
};

let allchats=[
    {
    from:"heeru",
    to:"kuhu",
    message:"Namaste, Priya ji!",
    created_at:new Date(),
        },
    {
        from:"Neha",
        to:"Priya",
        message:"Namaste, Priya ji!",
        created_at:new Date(),
        },
    {
        from:"ria",
        to:"ash",
        message:"Namaste!",
        created_at:new Date(),
        },
    {
        from:"Neenu",
        to:"Priyesh",
        message:"Namaste ji!",
        created_at:new Date(),
        },
];
Chat.insertMany( allchats );