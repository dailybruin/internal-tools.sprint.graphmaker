# Graph Maker SPRINT

This is just quick and dirty implemenation of the graph maker. Its sorta just to play around with ideas

# Running Frontend
`cd frontend/graph-maker`
`npm install`
`npm start`
go to localhost:3000

# Running backend
So the backend doesn't do anything right now but if you want to run it, first create
and `.env` file and fill it with the following environment variables:
```
DATABASE_URL=postgres://postgres@db:5432/postgres
SECRET_KEY=seeecreets
DEBUG=True
``` 

then run 
`docker-compose build` and then `docker-compose up`. 
