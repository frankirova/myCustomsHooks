import { useState } from "react";
export const useForm = (inicialState = {}) => {
  const [form, setForm] = useState(inicialState);
  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleReset = () => {
    setForm(inicialState);
  };
  return { form, handleChange, handleSubmit, handleReset };
};
