"use client";

import { useState } from "react";
import clsx from "clsx";
import { sendEmail } from "../actions/sendEmail";

type RequestStatusType = "initial" | "pending" | "success" | "error";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialModel = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [model, setModel] = useState({ ...initialModel });
  const [isDirty, setIsDirty] = useState(false);
  const [requestStatus, setRequestStatus] = useState<RequestStatusType>("initial");

  const nameIsValid = model.name.length >= 3;
  const messageIsValid = model.message.length >= 10;
  const emailIsValid = emailRegex.test(model.email);
  const formIsValid = nameIsValid && messageIsValid && emailIsValid;

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;

    setIsDirty(true);
    setModel(state => ({ ...state, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setRequestStatus("pending");

    if (formIsValid) {
      try {
        await sendEmail(model);
        setRequestStatus("success");
        clear();
      } catch (_) {
        setRequestStatus("error");
      }
    }
  }

  function clear() {
    setModel({ ...initialModel });
    setIsDirty(false);
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
        <span className="text-sm block mb-1">Email</span>
        <input
          type="email"
          name="email"
          required
          value={model.email}
          onChange={handleInputChange}
          className={clsx({
            "input-error": !emailIsValid && isDirty,
          })}
        />
      </label>

      <label>
        <span className="text-sm block mb-1">Messaggio</span>

        <textarea
          name="message"
          required
          minLength={5}
          value={model.message}
          onChange={handleInputChange}
          className={clsx({
            "input-error": !messageIsValid && isDirty,
          })}
        ></textarea>

        <span className="text-sm text-gray-500 block">Minimo 10 caratteri</span>
      </label>

      {requestStatus == "error" && (
        <div className="bg-red-500 text-white p-4 rounded-md">
          <span>Ops, qualcosa è andato storto</span>
        </div>
      )}

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={clear}
          className="btn btn-outline w-fit"
        >
          Pulisci
        </button>

        <button
          type="submit"
          disabled={!formIsValid}
          className="btn btn-primary w-fit"
        >
          {requestStatus === "pending" ? "Invio in corso..." : "Invia"}
        </button>
      </div>
    </form>
  );
}
