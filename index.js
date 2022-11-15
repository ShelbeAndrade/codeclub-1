export default {
    fetch(request) {

       if (request.method == "POST") {
           return new Response('The request was a POST', {
               headers: {
                   'content-type': 'text/plain',
               },
           });
       }

       else if (request.method == 'GET') {
           return new Response('The request was a GET', {
               headers: {
                   'content-type': 'text/plain',
               },
           });
       }

       else {
           return new Response('Neither GET nor POST', {
               headers: {
                   'content-type': 'text/plain',
               },
           });
       }
   },
};

