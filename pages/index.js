import { useState, useEffect } from "react";

export default () => {
  const [initialState, setinitialState] = useState({
    user: {
      firstName: "",
      lastName: ""
    },
    user2: {
      firstName2: "",
      lastName2: ""
    }
  });

  useEffect(() => {
    const data = localStorage.getItem("appdata");
    if (data) {
      setinitialState(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("appdata", JSON.stringify(initialState));
  });

  let onChangeHandler = e => {
    const value = e.target.value;
    setinitialState({
      ...initialState,
      user: {
        ...initialState.user,
        [e.target.name]: value
      }
    });
  };

  let onChangeHandler2 = e => {
    const value = e.target.value;
    setinitialState({
      ...initialState,
      user2: {
        ...initialState.user2,
        [e.target.name]: value
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
      }}
    >
      <h3>User 1:</h3>
      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={initialState.user.firstName}
          onChange={onChangeHandler}
        />
      </label>
      <br />
      <label>
        Last name
        <input
          type="text"
          name="lastName"
          value={initialState.user.lastName}
          onChange={onChangeHandler}
        />
      </label>
      <h3>User 2:</h3>
      <label>
        First name
        <input
          type="text"
          name="firstName2"
          value={initialState.user2.firstName2}
          onChange={onChangeHandler2}
        />
      </label>
      <br />
      <label>
        Last name
        <input
          type="text"
          name="lastName2"
          value={initialState.user2.lastName2}
          onChange={onChangeHandler2}
        />
      </label>
      <pre style={{ marginTop: "5rem" }}>
        {JSON.stringify(initialState, null, 2)}
      </pre>
    </div>
  );
};
