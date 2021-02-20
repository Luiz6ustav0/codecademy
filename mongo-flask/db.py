import pymongo

client = pymongo.MongoClient(
    "mongodb+srv://dev:supp0sed-70b3-s3cur3@cluster0.l6tbh.mongodb.net"
    + "/py-mongo?retryWrites=true&w=majority",
    maxPoolSize=50,
    connect=False,
)

db = pymongo.database.Database(client, "py-mongo")
col = pymongo.collection.Collection(db, "mycollection")

col_results = json.loads(dumps(col.find().limit(5).sort("time", -1)))
