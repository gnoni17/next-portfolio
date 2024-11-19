"use client";

import { useState } from "react";
import clsx from "clsx";

export function ContactForm() {
  const [model, setModel] = useState({
    name: "",
    description: "",
  });
  const [isDirty, setIsDirty] = useState(false);

  const nameIsValid = model.name.length >= 3;
  const descriptionIsValid = model.description.length >= 5;
  const formIsValid = nameIsValid && descriptionIsValid;

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;

    setIsDirty(true);
    setModel(state => ({ ...state, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formIsValid) {
      console.log("submit");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 border border-gray-700 bg-slate-800 p-4 rounded-md"
    >
      <label>
        <span className="text-sm block mb-1">Nome</span>
        <input
          type="text"
          name="name"
          required
          minLength={3}
          value={model.name}
          onChange={handleInputChange}
          className={clsx({
            "input-error": !nameIsValid && isDirty,
          })}
        />
      </label>

      <label>
        <span className="text-sm block mb-1">Descrizione</span>

        <textarea
          name="description"
          required
          minLength={5}
          value={model.description}
          onChange={handleInputChange}
          className={clsx({
            "input-error": !descriptionIsValid && isDirty,
          })}
        ></textarea>
      </label>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="btn btn-outline w-fit"
        >
          Clear
        </button>

        <button
          type="submit"
          disabled={!formIsValid}
          className="btn btn-primary w-fit"
        >
          Send
        </button>
      </div>
    </form>
  );
}
