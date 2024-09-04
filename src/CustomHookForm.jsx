import React from "react";
import { useForm } from "./useForm";

export function CustomHookForm(){
    const [formValues, handleFormChange] = useForm();

    function handleFormSubmit(event){
        event.preventDefalut();

        console.log('Form Submitted: ', formValues);
    }

    return(
        <form onSubmit={handleFormSubmit}>
        <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleFormChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleFormChange}
          />
        </label>
      </div>
      <button type="submit">Login</button>
        </form>
    )
}