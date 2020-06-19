var mongoose=require("mongoose");
const campground = require("./models/campground");
var Campground=require("./models/campground");
var Comment=require("./models/comment");

var data=[
    {
        name:"Cloud's Rest",
        image:"https://ak-sai.com/wp-content/uploads/20-%D0%B8%D1%8E%D0%BB%D1%8F-%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0-1-400x400.jpg",
        description:"Enjoy the beauty of clouds Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
    },
    {
        name:"Desert Mesa",
        image:"https://content3.jdmagicbox.com/comp/jaisalmer/l7/9999p2992.2992.190315000750.f5l7/catalogue/jaipur-desert-camp-jaisalmer-5ulh5wszhh-250.jpg",
        description:"Enjoy the beauty of desert Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
    },
    {
        name:"Canyon Floor",
        image:"https://www.destination360.com/north-america/us/arizona/images/s/grand-canyon-camping.jpg",
        description:"Enjoy the canyon camp Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
    }
]

function seedDB(){
    Campground.remove({},function(err){
        if(err){
            console/console.log(err);
        }
        console.log("remove campgrounds!");
        data.forEach(function(seed){
            Campground.create(seed,function(err,campground){
                if(err){
                    console.log(err);
                }else{
                    console.log("added a campground");
                    Comment.create(
                        {
                            text:"This place is greate ,but I wish there is an internet",
                            author:"Homer"
                },function(err,comment){
                    if(err){
                        console.log(err);
                    }else{
                        campground.comments.push(comment);
                        campground.save();
                        console.log("created new comment");
                    }
                });
                }
            });  
        });
    });
}

module.exports=seedDB;