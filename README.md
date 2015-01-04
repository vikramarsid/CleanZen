CleanZen
========
Web Application to provide Home/Office cleaning services. Built Using MEAN stack


ABSTRACT
People nowadays are getting busy with their excessive workload. Finding time in this busy life is a challenge. And not many people manage to get the most of it. Cleaning as a day to day activity is necessary for every individual. Whether he/she is working or a housewife or a student. A clean and healthy environment helps us think positively and motivates us to do better things. Keeping things clean and managing cleaning is a big task. Given the situation, a service which would help us keep our workplaces and homes clean with just few clicks can be a blessing. Cleanzen – comes to rescue. Cleanzen is platform which provides cleaning services at your doorstep just in few clicks.
INTRODUCTION
This report mainly provides the description of the web application “Cleanzen”. It is basically a platform where customers can avail doorstep cleaning services in just few clicks. The user needs to login to the website, provide some basic information and place an order for cleaning. The user is provided with a list of service provider as per the request he/ she has selected. Every request is unique with detailed description of no. of rooms, bathrooms, kind of cleaning, frequency of cleaning service to avail and location. The customer can choose from list of available service providers. He/ she can then place an order by providing the address and appointment information. The order placed by an individual will be shown in his/her personal dashboard. The service provider on the other hand can enroll with Cleanzen and increase the reach of his/her business. The service provider needs to provide the Kind of service he/she will be providing. In the service providers dashboard , he/she can view current orders and order history so that they can manage their schedule accordingly This platform enables any cleaning service provider to market his/her business without the need of any website of his/her own. They can use this tool to target specific segments of customer which they feel will be their potential customers. Overall Cleanzen helps customers as well as service providers to communicate better and make the process of availing cleaning services hassle free.
PROBLEM STATEMENT
The aim of this project is to develop a Web Application that provides a platform for various cleaning service providers to render their services in different states of the United States of America. As we know many of the working class people in the United States don’t get enough time to besides their work. This platform will provide a one stop solution for all their cleaning needs. Cleanzen also provides the service providers a platform to reach more number of customers and hence grow their business.
BUSINESS VALUE-USE CASES
The basic use case for Cleanzen is that it provides housecleaning services to whosoever needs it. Housewives may avail the services of Cleanzen. They can easily choose the frequency of service as per the requirement. The platform allows the user to provide detailed description of the service required and place an order as per individual needs.
The second type of user is the service provider, who can leverage this platform to start or expand his cleaning business and maximize his/her potential by reaching to as many customers as possible. The service provider can list down the feature and services provided. They can also mention the rates they charge. Overall the service provider can use this stage to increase his/her business.
 
APPROACH TO THE PROBLEM
The approach is to use a web based application as a platform for both kind of users i.e. customers and service providers. The service provider has to get enrolled into our web application and provide some basic information about the services he/she can provide. After getting enrolled the service provider gets a personalized dashboard of his own where he/she can keep a track of all the orders they have fulfilled or need to fulfill. The customer on the other hand needs to login and provide some basic information about himself. They can provide the information of the kind of cleaning they want through a form. They will be provided with a list of suitable service providers who can cater to them. They can choose one of them and do a booking. Customers Dashboard will help them keep a track of all the orders they have made.
SCOPE OF WORK
The scope of this project includes:
-End-to-End web application as a platform for customers and cleaning service providers.
-Providing appropriate service providers list to customers.
-Customers can provide description of services required and place an order. 
-Keeping track of order and maintaining order history.
-Making the web application as RWD compliant as possible.

TECHNOLOGY STACK:
We used the IBM Bluemix platform as much as possible to leverage our project. We used the nodejs boilerplates as a starting point to make this web application. IBM bluemix also provided us with the persistent tier with many options like clearDB and Cloudant .We also used the address validation and geocoding API to validate the address information provided by the user. We tried to implement the MEAN stack (Mongo Express Angular Nodejs) as much as possible with the exception of mongoDB.
Summary of technologies used:
Front-End: HTML5, CSS3, Bootstrap, AngularJs, EJS
Restful Web Service: Nodejs (Express) 
Database: ClearDB, Cloudant.
Others: Pitney Bowes Geocoding service (From IBM bluemix), Google maps distance matrix API.
IMPLEMENTATIONS:
We have made an effort to collect datasets regarding the prices of different cleaning mechanisms across different areas in the United States. These datasets were in unstructured format and hence there was lot of cleaning been done on the data sets and only then were loaded into the ClearDB. We then used different ETL (extract, transform and load) techniques through which datasets are transformed into structured formats. Once data has been transformed, it is loaded into RDBMS (MySQL) for further processing of data which may involve extraction of data.
Project deployment has been done on bluemix powered by IBM and server to the host name is implemented in NodeJS which is asynchronous single threading mechanism that provides non-blocking I/O to get optimal performance. Server uses DB-controller module to communicate with database for exchanging data. Data objects are cached in server for performance improvement. Client applications directly communicates with node server by invoking required web services.
Complete application is configured and deployed on IBM bluemix instance. We have utilized a number of services within the scope of our project which will be explained in the high level architecture. 

WORKFLOW:
A user can either be looking forward to directly know the price of each type of cleaning service from various service providers or he can login to book an appointment directly if he already knows which service provider would serve him the best.
Depending upon any of the cases mentioned above the user shall provide minimal details of his apartment, rooms to be cleaned, extra services wanted and his address etc. 
Once the details are acquired, an appointment is booked and will be intimated the same to the service provider. And so the next time SP logs in, he will be provided with the address and room count of the user and thus will be intimated.
These results are stored in the database and re-retrieved wherever necessary. 
After the payment is received from the user towards the service provider, an appointment date is given by Service provider himself to the user either manually or in an automated next serve fashion and user then shall be served in requested service on the quoted date.

FUTURE PRACTICES:
Two main implementation which we look forward to add in are:
One which will provide an intimation and the other that helps user enlarge his/her idea which emphasizes him with a summary of collated prices. The prior being an Email enclosure service which by week or day provide to the logged user information regarding the service providers and their prices all along their past and present tenure. This service also will be implemented with the order and billing payment intimation to the user wherein he/she will be provided with the Order details and the payment info regarding hi/her service petition.
The latter is implementing a BIDDING system to the user that would broaden the estimation of user and will give user a better look over the comparison of prices across the service provider. Ultimate judge of any service is of course a user and this process gives him/her to have a wide choices and finally be able to have an accurate and more compact price for the service he has chosen. Above is to provide user and a very elaborated and estimated view of all the available service providers regarding the services desired.
HIGH LEVEL ARCHITECTURE
The following image depicts the High level architecture diagram. The Web application mainly comprises of UI in HTML5, CSS3, AngularJs and BootstrapJs. The Restful web service in Nodejs Express and a ClearDB MySQL database backend. Other components and services interact with the Nodejs service as shown. The figure regarding HLA is below:
ClearDB MySQL
Cloudant DB for Feedback Data
Google  Maps API
Validate Address Service
NodeJs Express Rest Web Service
Angular+HTML5+CSS3+js+Bootstrapfor (RWD 

DEPLOYMENT LINKS:
Below are the links related to the project with headers aside:
Project site: www.cleanzen.mybluemix.net
Video: https://www.youtube.com/watch?v=85zjMOTaIo4
GitHub: https://github.com/vipulshivnani/Project-CleanZen

CONCLUSION:
We thus implement our PROJECT CLEANZEN which is a professional housekeeping company and an arbitrator in future implementations that provides house cleaning services throughout the country that specializes in cleaning for health. This on a global wide shall arise with a lot of opportunity for the users to get over the line of thought in comprising and will help them with their service requests in a more anticipated and minimum prices. This also shall allow service providers to have a better look over what the user demands from the service providers. The project exhibited is more often a bridge with no holes in it and the communication between two peers has much more clarity so as to help both user and service provider benefit.
