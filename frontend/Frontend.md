# How the Frontend Works
## Encode
Here I will explain how the user should try and get their short url, and then how to decode the short url back into the longer url. There are two input squares the user can choose from. The one on the left will encode your url. Then after you submit the form, the frontend will call the encode/ endpoint on the backend, running the logic that will return a shorter url. This shorter url will then show up under the form where the long url was submitted. 

## Decode
When the user submits a short url on the right hand box, the user will then make a call to the decode/ endpoint. The longer url will then appear beneath the decode form. 

## Verify JSON 
When submitting the form, you can look at the console and see the data being given from the backend, and you will then see that the backend is in fact sending json to the frontend. 

