const fs = require("fs");
const addStudent = (id, name, grades, comments) => {
  const students = loadData();
  const dublicateedID = students.filter((student) => {
    return student.id === id;
  });
  if (dublicateedID.length !== 0) {
    console.log(`Sorry you cant add student " ${id} ", already exists`);
  } else {
    let total = 0;
    grades.forEach((degree) => {
      total += degree;
    });

    students.push({ id, name, grades, comments, total });
    saveData(students);
    console.log("Student added successfully");
  }
};

const loadData = () => {
  try {
    const dataBaffer = fs.readFileSync("data.json").toString();
    return JSON.parse(dataBaffer);
  } catch (e) {
    return [];
  }
};

const readID = (id) => {
  const students = loadData();
  const dataToRead = students.find((student) => {
    return student.id === id;
  });
  if (dataToRead) {
    console.log(dataToRead);
  } else {
    console.log(`Sorry you cant find student with Id " ${id} "`);
  }
};

const saveData = (Data) => {
  const dataToSave = JSON.stringify(Data);
  fs.writeFileSync("data.json", dataToSave);
};

const listData = () => {
  const students = loadData();
  if (students.length > 0) {
    console.log(students);
  } else {
    console.log("No students found use --add to add some");
  }
};
const removeData = (id) => {
  const data = loadData();
  const dataToKeep = data.filter((data) => {
    return data.id !== id;
  });
  saveData(dataToKeep);
  console.log(`Student with Id " ${id}" is deleted`);
};
module.exports = {
  addStudent,
  readID,
  listData,
  removeData
};
