import React from "react";

const AddColorForm = props => {
  let _title, _color;

  const submit = e => {
    e.preventDefault();
    props.onNewColor(_title.value, _color.value);
    _title.value = "";
    _color.value = "#000000";
    _title.focus();
  };
  return (
    <form className="add-color" onSubmit={submit}>
      <input
        ref={input => (_title = input)}
        type="text"
        placeholder="color title..."
        required
        className="text-input"
      />
      <input ref={input => (_color = input)} type="color" required className="color-input" />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
