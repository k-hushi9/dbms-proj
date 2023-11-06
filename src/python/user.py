class User:
  def __init__(self, id, email, password):
    self.id = id
    self.email = email
    self.password = password

  def to_json(self):
    return {
      "id": self.id,
      "email": self.email,
    }
