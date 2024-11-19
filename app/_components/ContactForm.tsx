import React from "react";
import FlyingButton from "./FlyingButton";

export function ContactForm() {
  return (
    <form className="flex flex-col gap-4 border border-gray-700 bg-slate-800 p-4 rounded-md">
      <label>
        <span className="text-sm block mb-1">Nome</span>
        <input type="text" />
      </label>

      <label>
        <span className="text-sm block mb-1">Note</span>
        <textarea></textarea>
      </label>

      <div className="flex justify-end gap-4">
        <button className="btn btn-outline w-fit">Clear</button>
        <FlyingButton />
        {/* <button className="btn btn-primary w-fit">Send</button> */}
      </div>
    </form>
  );
}
