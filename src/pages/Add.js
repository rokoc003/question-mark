import React from "react";
import Card from "../components/Card";
import "./Add.css";
import Button from "../components/Button";

function Add() {
  return (
    <Card>
      <form className="add-form">
        <input
          class="add-form__input add-form__input-question"
          type="text"
          placeholder="Enter your question"
        />
        <input
          class="add-form__input add-form__input-answer"
          type="text"
          placeholder="• First Answer"
        />
        <input
          class="add-form__input add-form__input-answer"
          type="text"
          placeholder="• Second Answer"
        />
        <input
          class="add-form__input add-form__input-answer"
          type="text"
          placeholder="• Third Answer"
        />
        <input
          class="add-form__input add-form__input-answer"
          type="text"
          placeholder="• Fourth Answer"
        />
        <Button>Create Poll</Button>
      </form>
    </Card>
  );
}
export default Add;
