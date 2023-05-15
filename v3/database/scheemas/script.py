import sqlite3

#con = sqlite3.connect("flask.db")
#cur = con.cursor()
##cur.execute("create table users(id int primary key,userName varchar(20),emailAddress varchar(50),password varchar(20));")
#
#cur.execute("insert into users values(3, 'james','test@gmail.com','dafsas')")
#con.commit()
#
#row=cur.execute("select * from users")
#
#for i in row:
#    print(i)
#    
#con.close()

def db(sqlQuiry):
    db = sqlite3.connect("flask.db")
    cur = sqlite3.Cursor(db)
    result = cur.execute(sqlQuiry)
    db.commit()
    return result

test = db("select * from users")

for row in test:
    print(row)

#print(test)