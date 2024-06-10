import { useState } from "react";
import { useContexApi } from "../utils/ContextApi";

interface detailFormProps {
  firstname: string;
  lastname: string;
  middlename: string;
  phoneNumber: string;
}

const useProfileForm = () => {
  const authAdmin = useContexApi();
  const [isEditing, setIsEditing] = useState(false);
  const [Submitted, setSubmitted] = useState(false);
  const [initialValue, setValue] = useState<detailFormProps>({
    firstname: `${authAdmin.admin}`,
    lastname: `${authAdmin.admin}`,
    middlename: `${authAdmin.admin}`,
    phoneNumber: `08179207152`
  });
  const [newValue, setNewValue] = useState<detailFormProps | null>(null);

  //Handle Submit Event
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  //Handle Input Change Event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue({ ...initialValue, [name]: value });
  };

  //Handle Edit Button Click Event
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  //Handle Save Button Click Event
  const handleSave = () => {
    setNewValue(initialValue);
    handleEdit();
  };

  return {
    isEditing,
    Submitted,
    initialValue,
    newValue,
    handleChange,
    handleEdit,
    handleSave,
    handleFormSubmit
  };
};

export default useProfileForm;
