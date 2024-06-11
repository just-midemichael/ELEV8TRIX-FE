import { useState } from "react";
import { useContexApi } from "../utils/ContextApi";

interface detailFormProps {
  firstname: string;
  lastname: string;
  middlename: string;
  email: string;
  phoneNumber: string;
  homeAddress: string;
  homeState: string;
  homeCountry: string;
  bio: string;
}

const useProfileForm = () => {
  const authAdmin = useContexApi();
  const [isEditing, setIsEditing] = useState(false);
  const [Submitted, setSubmitted] = useState(false);
  const [initialValue, setValue] = useState<detailFormProps>({
    firstname: `${authAdmin.admin}`,
    lastname: `${authAdmin.admin}`,
    middlename: `${authAdmin.admin}`,
    email: `admin@elev8trix.com`,
    phoneNumber: `080119227154`,
    homeAddress: `4, abey street, abuja`,
    homeState: `Abuja`,
    homeCountry: `Nigeria`,
    bio: `lorem ipsum init de marquee. la juma fet et acel. de la cate cmon ceva baet evour cloret de ison ma tuli se`
  });

  //Handle Submit Event
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  //Handle Input Change Event
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValue({ ...initialValue, [name]: value });
  };

  //Handle Edit Button Click Event
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  //Handle Save Button Click Event
  const handleSave = () => {
    handleEdit();
    setSubmitted(true);
  };

  return {
    isEditing,
    Submitted,
    initialValue,
    handleChange,
    handleEdit,
    handleSave,
    handleFormSubmit
  };
};

export default useProfileForm;
