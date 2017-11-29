const express = require('express'),
      router = express.Router(),
      React = require("react"),
      ReactDOMServer = require('react-dom/server');
      
let InitState ={ 
  rates :[
    {
      nid : 1,
      title : "HSBC Pesonal loan",
      islamic : false,
      InterestRate : 11.88
    },
    {
      nid : 2,
      title : "CIMB Pesonal loan",
      islamic : false,
      InterestRate : 8.25
    },
    {
      nid : 3,
      title : "MAYBANK Pesonal loan",
      islamic : false,
      InterestRate : 3.25
    },
    {
      nid : 4,
      title : "Hong Leong Pesonal loan",
      islamic : false,
      InterestRate : 4.25
    },
    {
      nid : 5,
      title : "Hong Leong Pesonal loan",
      islamic : false,
      InterestRate : 4.25
    },
    {
      nid : 6,
      title : "Hong Leong Islamic Pesonal loan",
      islamic : true,
      InterestRate : 4.25
    },
    {
      nid : 7,
      title : "Hong Leong Islamic Pesonal loan",
      islamic : true,
      InterestRate : 4.25
    }
  ]
  ,islamic : true
  ,amount : 100023
  ,tenure : 2
}

const myComponent =require("../src/app/indexServer");

/* GET home page. */
router.get('/', function(req, res, next) {
  let html = ReactDOMServer.renderToString(myComponent.Main(InitState,req));  
  res.render('index', { 
    title: 'Express Hello',
    helloComponentMarkup: html,
    data : InitState
  });
});


module.exports = router;
