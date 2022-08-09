class Creator{
    static createForm(type){
       if ( (type == "start_event") || (type == "intermediate_event") || (type == "end_event"))
          return new bpmnEvent(type);
       else if (type == "task")
          return new Task(type);
       else if (type == "gateway_exclusive")
          return new Gateway(type);
    }
}
 