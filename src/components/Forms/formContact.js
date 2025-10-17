import {useState} from "react";
import Input from "../Inputs/Input";
import TextArea from "../Inputs/TextArea";
import SelectOption from "../Selects/SelectOption";
import BtnIcon from "../Buttons/BtnIcon";

export default function FormContact() {

  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message:''
  });
  
  const [clicked, setClicked] = useState(false);
  
  const [btnName, setBtnName] = useState("Send");

  const subjects = [
    {
      id: 1,
      value: "",
      content: "Choose a subject"
    },
    {
      id: 2,
      value: "Ask a information",
      content: "Ask a information"
    },
    {
      id: 3,
      value: "Project request",
      content: "Project request"
    },
    {
      id: 4,
      value: "Service request",
      content: "Service request"
    },
    {
      id: 5,
      value: "Other",
      content: "Other"
    },
  ];
  

  const Options = subjects.map((option) => {
    return <option key={option.id} value={option.value}>{option.content}</option>;
  });

  /* function handleClick() {
    btnName === "Send Message" ? setBtnName("Success Send Message") : setBtnName("Yarob");
  }*/

  return (
    <form id={"contact-form"} onSubmit={(e) => {e.preventDefault();}} action={"#"} method={"POST"}>
      <legend> Get in Touch</legend>

        <Input
          title={"Name"} 
          type={"text"} 
          name={"name"} 
          placehold={"Enter name"} 
          pattern={``}
          value={formData.name}
          change= {(e) => {
                    setFormData({...formData, name: e.target.value});
                  }} 
        />

        {/* <br /> */}

        <Input 
          title={"Email"} 
          type={"email"} 
          name={"Email"} 
          placehold={"Enter email"}
          pattern={'@'} 
          value={formData.email} 
          change= {(e) => {
                    setFormData({...formData, email: e.target.value});
                  }} 
        />

        {/* <br /> */}

        <SelectOption title={"Subject"} name={"subject"} value={formData.subject} change={(e) => {setFormData({...formData, subject: e.target.value});}} > 
          {Options}
        </SelectOption>

        {/* <br /> */}

        <TextArea 
          title={"Message"} 
          name={"message"}
          value={formData.message} 
          placeholder={"Enter your message"}
          change= {(e) => {
                    setFormData({...formData, message: e.target.value});
                  }}
        />

        {/* <br /> */}

        <BtnIcon titleBtn={"Send"} nameBtn={"send"} typeBtn={"submit"} click={''} > 
         {btnName}
        </BtnIcon>

    </form>
  )
}
