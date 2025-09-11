// BAD: eval + SQLi
function runUserCode(code) { return eval(code); }
function getUser(db, id) {
  const q = "SELECT * FROM users WHERE id = '" + id + "'";
  return db.query(q);
}
