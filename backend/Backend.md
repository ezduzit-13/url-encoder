# How the Backend Works
For my backend framework I am using Django. I decided to use Django because building an API using the Django Rest Framework makes it very simple. In my api, I have 3 endpoints. 
The endpoints are:
* url/
* encode/
* decode/
	Here, the url endpoint is pretty much just a way to look at all of the urls that exists in the database. This is done by using a GET request of all the Url objects that exists in my models.
	Now, we will get to the interesting part, which is talking about the encode and decode endpoints. 
## Encoding
To encode the Urls, I took a simple approach. The endpoint receives a POST request. The request data in this case will be the long url that a user wishes to turn into a shorter url. What I did, was I stored the long url in my Postgres Database along with a url_id.  In my models.py I made sure to set both the long_url and url_id as unique, to ensure that  these two things would not be repeated in my database. This ensures that there won’t be multiple short urls for a single url.
My plan for encoding the url was to create a unique id (url_id) that I can use to identify the url. I do this by using uuid4. After creating a unique ID, I make sure the url does not already exist on my database. This can be done simply through the following conditional statement. 
```
    if Url.objects.filter(long_url = request_data['long_url']).exists():
```
If the url does already exist in the database, then I will simply get the object through the Django ORM and then get the url_id from that object, and attach it to the base url. 

If the url is not in the database, then I will generate a Unique Id. Then I would create a new object in my database. Then I will take the unique id that was just generated, and attach it to the base url, and then send this over to the frontend as a JSON object. 
## Decoding
To decode was even simpler than encoding. In order to decode, all you need to do is check to see if the Id matches an Id on the database. Since the Id is unique, this means that you can just get query the object with the correct url_id and then from that object get the long_url, then send this information back to the frontend. Otherwise, send an error message back letting them know the short url is not valid. 