const yargs= require('yargs')
const controller = require("./controllers");

yargs.command({
  command: 'add',
  describe:
    "To add a new student you should enter id, name, grades,and if you have comments ",
  builder: {
    id: {
      describe: "Unique student ID",
      demandOption: true,
      type: "number",
    },
    name: {
      describe: "studnet name",
      demandOption: true,
      type: "string",
    },
    greads: {
      describe: "Students greads",
      demandOption: true,
      type: "array",
      demandOption: true,
    },
    comments: {
      describe: "any Comments",
      demandOption: false,
      type: "string",
      default: "no comments",
    },
  },
  handler:(argv)=> {
    controller.addStudent(argv.id,argv.name,argv.greads,argv.comments)
  }
});

yargs.command({
    command:'read',
    describe: "Read a studint data by Id",
    builder:{
        id:{
            describe: "student ID",
            demandOption: true,
            type: "number"
        } 
    },
    handler:(argv)=> {
        controller.readID(argv.id);
    }
})

yargs.command({
    command:'list',
    describe: "listing all students",
    handler:()=>{
        controller.listData();
    }
})
yargs.command({
    command:'remove',
    describe: "removing a student data",
    handler:(argv)=>{
        controller.removeData(argv.id);
    }
})
yargs.command({
    command: '*',
    describe: "Match all commands",
    handler: ()=>{
    console.log('Sorry, command cant be found')
}   
})


yargs.parse();