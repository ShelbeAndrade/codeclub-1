const randomEntries = {
    0 : {
        'reportType': 'Technical Report',
        'link': 'https://docs.google.com/presentation/d/15_2-GTC4Ihbta4TwJFqTVoSngAlyMsKU9lWCxSeVSW0/edit?usp=share_link'
    },
    1 : {
        'reportType': 'Competitive Report',
        'link': 'https://docs.google.com/presentation/d/18SigMDLMQhh8i0bivjlzhBaJC-b_UgCRD1DafIpBpqk/edit#slide=id.g142bd8b4bfe_0_31'
    },
    2 : {
        'reportType': 'Business Report',
        'link': 'https://docs.google.com/presentation/d/1xL97Q-evIjbiG_THdx4zV2T3ucLpdzqTIalXTfNMYkU/edit?usp=share_link'
    },
    3 : {
        'reportType': 'Third-Parties impact test',
        'link': 'https://drive.google.com/file/d/1lwq_LTx4yuDcGlp7ygskeyVjp1QmUErN/view?usp=share_link'
    }
}

function randomEntryGenerator(max) {
    const randomValue = Math.floor(Math.random() * max)
    return [randomEntries[randomValue]['reportType'], randomEntries[randomValue]['link']]
}

export default {
    fetch(request) {

       if (request.method == "POST") {
           return new Response('The request was a POST, please make a GET request', {
               headers: {
                   'content-type': 'text/plain',
               },
           });
       }

       else if (request.method == 'GET') {
           let entry = randomEntryGenerator(4)
           let reportType = entry[0]
           let link = entry[1]

           let html = `<!DOCTYPE html>
			<body>
				<p style="text-align:center;"></p>    
				<p>`+ reportType +` available <a href = `+ link +`>here</a></p>
			</body>`

           return new Response(html, {
			headers: {'content-type': 'text/html;charset=UTF-8',},
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

