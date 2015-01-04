var ejs=require('ejs');
var dbObject=require('./DatabaseController');
var session = require('express-session');
var sessions=null;

exports.index = function(req, res){
var name=null;
if(sessions!==null){
name = req.session.fname;
}
res.render('index', { title: 'CleanZen',message:"", name: name });
};

exports.analysis = function(req, res){
	var name=null;
    
    if(sessions!==null){
    name = req.session.fname;
    
    }
res.render('analysis', { title: 'CleanZen',message:"", name: name });
};


exports.register = function(req, res){
res.render('register', { title: 'Register' });
};

exports.comingsoon = function(req, res){
res.render('comingsoon', { title: 'CleanZen' });
};

exports.successbooking = function(req, res){
res.render('successbooking', { title: 'CleanZen' });
};

exports.services = function(req, res){
res.render('services', { title: 'services' });
};

exports.blog = function(req, res){
var name=null;
    
    if(sessions!==null){
    name = req.session.fname;
    
    }
res.render('blog', { title: 'blog',message:"", name: name });
};

exports.videos = function(req, res){
var name=null;
if(sessions!==null){
name = req.session.fname;
}
res.render('videos', { title: 'videos',message:"", name: name });
};

exports.serviceprovider = function(req, res){
	var name=null;
    
    if(sessions!==null){
    name = req.session.fname;
    
    }
res.render('serviceprovider', { title: 'CleanZen',message:"", name: name });
};

exports.contact = function(req, res){
	var name=null;
    
    if(sessions!==null){
    name = req.session.fname;
    
    }
res.render('contact', { title: 'CleanZen-Contact',message:"", name: name });
};

exports.about = function(req, res){
	var name=null;
    
    if(sessions!==null){
    name = req.session.fname;
    
    }
res.render('about', { title: 'about',message:"", name: name });
};

exports.quote = function(req, res){
	var zipcode=req.param("searchzip");
	console.log(zipcode);
	sessions=req.session;
    sessions.zipcode=req.param("searchzip");
    console.log(sessions);
	
res.render('quote', { title: 'My Estimator',message:""});
};


exports.myhome = function(req, res){
if(sessions!==null){
var email = req.session.email;
var searchQuery = "SELECT `person`.`Account_type` FROM `ad_69add87086ba081`.`person` WHERE email='"+email+"';";
dbObject.fireQuery(searchQuery,function(err,result){
if(err){
console.log(err);
res.send("<script>{ if(!alert('Something went Wrong!! Not Logged in Successfully!! Try Again')) document.location = '/register';}</script>Posted Successfully..!! Click to <a href='/register'>Login Again</a>!.");  
}
else{
	console.log(result[0].Account_type);
if(result[0].Account_type==="ServiceUser"){
	res.render('userhome', { title: 'MyCleanZen',order: result});
}else{
	res.render('myhome', { title: 'MyCleanZen',order: result});
}

}
});
}
};

exports.book = function(req, res){
res.render('book', { title: 'book' });
};

exports.postbook = function(req, res){
    if(sessions===null){
      res.send("<script>{ if(!alert('Please Login and fill quote form to book')) document.location = '/';}</script>Log In <a href='/'>Redirecting to Home page!! Log in to cleanzen</a>!.");
    }
var num_bed=null;
var num_bath=null;
var ex_ser=null;
var Frequency=null;
var date1=null;
var time_sel=null;
var comment=null;		
		
num_bed=req.session.nbed;
num_bath=req.session.nbath;
ex_ser=req.session.exserv;
Frequency=req.session.freq;
date1=req.session.ddate;
time_sel=req.session.time;
comment=req.session.com;

var address=req.param("address");
var zipcode=req.param("zipcode");
var name=req.param("name");
var email=req.param("email");
var phone=req.param("phone");
if(address===""||zipcode===""||name===""||email===""){
res.send("<script>{ if(!alert('Invalid Credentials Check form!!')) document.location = '/book';}</script>Invalid Values !! Mandatory Fields should not be empty..!! Click to <a href='/register'>Register to cleanzen</a>!.");
}

var bookingid=Math.floor(Math.random()*1001);
var bookQuery = "INSERT INTO `ad_69add87086ba081`.`orders` (`order_Id`, `Customer_Name`, `customer_email`, `bedroom_count`, `bathroom_count`, `extra_services`, `Frequency`, `Service_Date`, `Time_slot`, `Additional_instructions`, `Street_add`, `Phone`, `zipcode`) VALUES ('"+bookingid+"','"+name+"','"+email+"','"+num_bed+"','"+num_bath+"','"+ex_ser+"','"+Frequency+"','"+date1+"','"+time_sel+"','"+comment+"','"+address+"','"+phone+"','"+zipcode+"');";
//console.log(bookQuery);
dbObject.fireQuery(bookQuery,function(err,result){
if(err){
console.log(err);
res.send("<script>{ if(!alert('Booking failed!! Try Again')) document.location = '/book';}</script>Posted Successfully..!! Click to <a href='/register'>Book Again</a>!.");  
}
else{
req.session.destroy();
sessions=null;
res.render('successbooking', { title: 'MyCleanZen'});
//res.send("<script>{ if(!alert('Booking done Successfully!!')) document.location = '/';}</script>Booking done Successfully!! Team CleanZen will contact you soon Click to <a href='/book'>we will contact you soon</a>!.");
}
});
};



exports.login = function(req, res){
    
    if(sessions!==null){
        var email = req.session.email;
        res.send("<script>{ if(!alert('Already Logged In to cleanzen with "+email+"')) document.location = '/';}</script>Already Logged In <a href='/'>Redirecting to Home page!! Already logged in to cleanzen</a>!.");
    }
    else{
    res.render('login');
    }
};


exports.postLogin = function(req, res){
    
    var email = req.param("email");
    var password = req.param("password");
    
    if(email==="" || password===""){
        res.send("<script>{ if(!alert('Fields cannot be Empty')) document.location = '/login';}</script>Email or Password cannot be Empty Click to <a href='/login'>Login Again with correct Credientials</a>!.");
    }
    
    
    var checkLogin = "SELECT `person`.`fullname`, `person`.`email` FROM `ad_69add87086ba081`.`person` WHERE email='"+email+"' AND password = '"+password+"';";
    console.log(checkLogin);
    
    dbObject.fireQuery(checkLogin,function(err,person){
        if(err){
            
            //throw err;
            res.send("<script>{ if(!alert('Oops!!\nPlease try again with proper credentials')) document.location = '/login';}</script>Oops!!Please try again with proper credentials Click to <a href='/login'>Try Again</a>!.");
        }
        else 
        {
            
            
            if(person.length > 0)
                {

                sessions=req.session;
                console.log(sessions);
                sessions.email=req.param("email");
                sessions.fname=person[0].fullname;
                              
                
            console.log("successlogin");
                    
       res.send("<script>{ if(!alert('You Logged in Successfully')) document.location = '/';}</script>Logged In Successfully..!! Click to <a href='/'>Login Success</a>!.");
                 
        }
            else{
                res.send("<script>{ if(!alert('Invalid Credentials!! Please Try Again')) document.location = '/login';}</script>Invalid Credentials!! Please Try Again!!  Click to <a href='/login'>Login Again</a>!.");
            }
            
      }
                        
    });
    
    
    
};


exports.register = function(req, res){

    if(sessions!==null){
        var email = req.session.email;
        res.send("<script>{ if(!alert('Already Logged In to cleanzen with "+email+"')) document.location = '/';}</script>Already Logged In <a href='/'>Redirecting to Home page!! Already logged in to cleanzen</a>!.");
    }
    else{
    res.render('register');
    }
};
    
exports.postRegister = function(req, res){

    
    var email=req.param("email");
    var password=req.param("password");
    var rpassword=req.param("rpassword");
    var fullname=req.param("fullname");
    var address=req.param("address");
    var city=req.param("city");
    var country=req.param("country");
    var zipcode=req.param("zipcode");
    var contact=req.param("contact");
    var usertype=req.param("usertype");
    
    if(email===""||password===""||fullname===""||zipcode===""||usertype===""){
        res.send("<script>{ if(!alert('Invalid Credentials Check form!!')) document.location = '/register';}</script>Invalid Values !! Mandatory Fields should not be empty..!! Click to <a href='/register'>Register to cleanzen</a>!.");
    }
    
    if(password!==rpassword){
        res.send("<script>{ if(!alert('Please Confirm Password')) document.location = '/register';}</script>Invalid Values !! Mandatory Fields should not be empty or invalid..!! Click to <a href='/register'>Register to cleanzen</a>!.");
    }
    
    var registerQuery = "INSERT INTO `ad_69add87086ba081`.`person`(`fullname`,`email`,`password`,`address`,`city`,`country`,`zip_code`,`contact`,`Account_type`) VALUES('"+fullname+"','"+email+"','"+password+"','"+address+"','"+city+"','"+country+"','"+zipcode+"','"+contact+"','"+usertype+"');";
    
    dbObject.fireQuery(registerQuery,function(err,result){
        
        if(err){
        console.log(err);
            res.send("<script>{ if(!alert('Something went Wrong!! Not Logged in Successfully!! Try Again')) document.location = '/register';}</script>Posted Successfully..!! Click to <a href='/register'>Login Again</a>!.");  
        }
        
        else{
    
            sessions=req.session;
            console.log(sessions);
            sessions.email=req.param("email");
            sessions.fname=req.param("fullname");
            
            
            res.send("<script>{ if(!alert('Successfully Registered to cleanzen!!')) document.location = '/';}</script>Registered Successfully..!! Click to <a href='/'>Welcome to cleanzen!! Get Started</a>!.");
        }
    });
};



exports.logout= function(req,res){
    
    if(sessions===null){
        res.send("<script>{ if(!alert('Not Logged In!!')) document.location = '/';}</script>Posted Successfully..!! Click to <a href='/'>Not Logged in successfully</a>!.");
    }
    
    
    else 
        {
            req.session.destroy();
            sessions=null;
            
            
            res.send("<script>{ if(!alert('Logout Successfully from cleanzen!!')) document.location = '/';}</script>Posted Successfully..!! Click to <a href='/'>Logout Successfully</a>!.");
            
        }

};


exports.getsp = function(req, res){
	var num_bed=req.param("num_bed");
	var num_bath=req.param("num_bath");
	var ex_ser=req.param("ex_ser");
	var Frequency=req.param("Frequency");
	var date1=req.param("date1");
	var time_sel=req.param("time_sel");
	var comment=req.param("comment");
	
	if(num_bed===""||ex_ser===""||Frequency===""){
		res.send("<script>{ if(!alert('Invalid Credentials Check form!!')) document.location = '/book';}</script>Invalid Values !! Mandatory Fields should not be empty..!! Click to <a href='/register'>Register to cleanzen</a>!.");
		}

	if(sessions!==null){
		sessions=req.session;
		sessions.nbed=num_bed;
		sessions.nbath=num_bath;
		sessions.exserv=ex_ser;
		sessions.freq=Frequency;
		sessions.ddate=date1;
		sessions.time=time_sel;
		sessions.com=comment;
		console.log(sessions);

		}
var query="SELECT * FROM ad_69add87086ba081.sp;";
console.log(query);
dbObject.fireQuery(query, function(err, result){
if(err){
console.log(err);
res.send("<script>{ if(!alert('Something went Wrong!! Please Try Again')) document.location = '/quote';}</script>Posted Successfully..!! Click to <a href='/quote'>Try Again</a>!.");  
}
else{
var zip = null;
if(sessions!==null){
zip=req.session.zipcode;
console.log("zip : " +zip);
}
res.render('serviceprovider', { title: 'ServiceProviders',message:"",zip : zip,sp : result});
}
});
};


exports.updatestatus = function(req, res){
	if(sessions!==null){
    var email = req.session.email;
	var ustat=req.param("ustat");
	
    
    if(ustat===""){
        res.send("<script>{ if(!alert('Update Failed!!'));}</script>Update Failed Click to <a href='/'></a>!.");
    }
    
        
    var updateQuery = "UPDATE `ad_69add87086ba081`.`orders` SET `order_Activity`='"+ustat+"' WHERE `customer_email`='"+email+"';";
    
    dbObject.fireQuery(updateQuery,function(err,result){
        
        if(err){
        console.log(err);
            res.send("<script>{ if(!alert('DB Error in Updating !! Try Again')) document.location = '/';}</script>DB Error in Updating !! Try Again Click to <a href='/'>DB Error in Updating !! Try Again</a>!.");  
        }
        
        else{
           res.send("<script>{alert('Successfully Update Status!!')}</script>Successfully Update Status!!!.");
        }
    });
	}
};

exports.feedback = function(req, res){
	if(sessions!==null){
    var email = req.session.email;
	var feed=req.param("textfeed");
	var rating=req.param("rating");
	var orderid=req.param("orid");
	var spid=req.param("spsid");
	
    
    if(orderid===""||spid===""||rating===""){
    res.send("<script>{ if(!alert('Please Complete the fields')) document.location = '/';}</script>Please Complete the fields !! Try Again Click to <a href='/'>Home</a>!.");  
    }
    
        
    var updateQuery = "INSERT INTO `ad_69add87086ba081`.`feedback` (`order_Id`,`feedback`,`sp_Id`,`ratings`) VALUES ('"+orderid+"','"+feed+"','"+spid+"','"+rating+"');";
    dbObject.fireQuery(updateQuery,function(err,result){
    if(err){
        console.log(err);
            res.send("<script>{ if(!alert('DB Error in Updating !! Try Again')) document.location = '/';}</script>DB Error in Updating !! Try Again Click to <a href='/'>Home</a>!.");  
        }
      res.send("<script>{ if(!alert('Thank You for Submitting feedback')) document.location = '/';}</script>Thank You for Submitting feedback Click to <a href='/'>Home</a>!.");

});
}
};
    
