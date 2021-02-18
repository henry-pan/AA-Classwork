PRAGMA foreign_keys = ON;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_likes;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  author_id INTEGER NOT NULL,
  
  FOREIGN KEY (author_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  subject_id INTEGER NOT NULL,
  parent_id INTEGER,
  author_id INTEGER NOT NULL,
  body TEXT NOT NULL,

  FOREIGN KEY (subject_id) REFERENCES questions(id),
  FOREIGN KEY (parent_id) REFERENCES replies(id),
  FOREIGN KEY (author_id) REFERENCES users(id)
);

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

-- users
INSERT INTO
  users (fname, lname)
VALUES
  ('Tom', 'Smith'),
  ('Theo', 'Mantz'),
  ('Henry', 'Pan');

-- questions
INSERT INTO
  questions (title, body, author_id)
VALUES
  ('My goldfish died?', 'etc etc', 1),
  ('My dog is talking', 'etc etc', 2),
  ('M Night Shamylan is my new neighbor', 'etc etc', 3);

-- question_follows
INSERT INTO
  question_follows (user_id, question_id)
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (1, 2),
  (2, 1),
  (3, 2);

-- replies
INSERT INTO
  replies (subject_id, parent_id, author_id, body)
VALUES
  (2, NULL, 1, 'My cat looks like Heathcliff' ),
  (2, 1, 2, 'My cat looks like garfield'),
  (3, NULL, 3, 'I loved the movie the shining');

-- question likes
INSERT INTO
  question_likes (user_id, question_id)
VALUES
  (1, 3),
  (2, 1),
  (3, 2),
  (1, 2),
  (2, 3),
  (3, 1);