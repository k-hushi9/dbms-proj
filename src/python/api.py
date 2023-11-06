import mysql.connector
import user as u
import datetime
from flask import Flask, request, jsonify

app = Flask(__name__)
conn = mysql.connector.connect(
    host='localhost',
    user='root',
    password='1234',
    database='my_db',
)
cursor = conn.cursor()
@app.route("/profile", methods=["POST"])
def profile():
    try:
        # Get the profile data from the request body
        fname = request.json["fname"]
        lname = request.json["lname"]
        email = request.json["email"]
        address = request.json["address"]
        phoneNumber = (request.json["phoneNumber"])
        state = request.json["state"]
        city = request.json["city"]
        password = request.json["password"]
    except KeyError as e:
        # Return an error message if any of the required fields are missing
        return jsonify({"message": "Missing field: {}".format(e.args[0])}), 400
    profile_Insert = """insert into profile (fname, lname, email, address, phoneNumber, state, city, password) values (%s,%s,%s,%s,%s,%s,%s,%s)"""

    # Insert the new profile into the database
    cursor.execute(profile_Insert, (fname, lname, email, address, phoneNumber, state, city, password))
    conn.commit()

    # Return a success message
    return jsonify({
        "message": "profile created"
    }), 201


@app.route("/login", methods = ["POST"])
def login():
  
  email = request.json["email"]
  password = request.json["password"]
  
  login = "SELECT * FROM users WHERE email = %s AND password = %s"
  
  cursor.execute(login, (email, password))
  
  results = cursor.fetchone()
  if results:
   
    user = u.User(results[0], results[1], results[2])

    current_user = user

    return jsonify({
      "message": "Login successful!",
      "user": user.to_json(),
    }), 200

  return jsonify({
    "message": "Invalid email or password.",
  }), 401

@app.route("/search", methods = ["POST"])
def search():

  std_id = request.json["std_id"]  
  Search = "SELECT * FROM users WHERE std_id = %s"
  
  cursor.execute(Search, (std_id,))
  
  results = cursor.fetchall()
  if not results:
    return jsonify({
      "message": "No users found.",
    }), 404
  
  
  return jsonify({
    "results": results,
  }), 200
  

@app.route("/signup", methods=["POST"])
def signup():
  """Create a new user in the database."""
  INSERT_QUERY = 'INSERT INTO users (email, password) VALUES (%s, %s)'

  email = request.json["email"]
  password = request.json["password"]
  
   
  SELECT_QUERY = 'SELECT * FROM users WHERE email = %s'
  cursor.execute(SELECT_QUERY, (email, ))
    
  result = cursor.fetchone()
  
  if result:
    return jsonify({
      "message": "User already exists!",
    }), 409
 
  cursor.execute(INSERT_QUERY, (email, password))

  conn.commit()

  return jsonify({
    "message": "User created successfully!",
  }), 201

if __name__ == "__main__":
  app.run(debug=True)
