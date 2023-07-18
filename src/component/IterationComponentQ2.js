import React, { useState } from "react";

const IterationComponentQ2 = () => {
  const select = ["HTML", "Javascript", "CSS", "Java", "Oracle", "Mysql"];
  const newSelect = select.map((item, index) => (
    <option key={index}>{item}</option>
  ));

  const data = [
    { id: 1, type: "Java", teacher: "이순신" },
    { id: 2, type: "Java", teacher: "홍길자" },
    { id: 3, type: "Javascript", teacher: "홍길동" },
    { id: 4, type: "Oracle", teacher: "이순신" },
    { id: 5, type: "Mysql", teacher: "이순신" },
    { id: 6, type: "CSS", teacher: "박찬호" },
    { id: 7, type: "HTML", teacher: "coding404" },
  ];

  const [list, setList] = useState(data);
  const [search, setSearch] = useState("");

  const newList = list.map((item) => (
    <li key={item.id}>
      {item.type}-{item.teacher}
    </li>
  ));

  const handleChange = (e) => {
    const newList = data.filter((item) => item.type === e.target.value);
    setList(newList);
  };

  const handleClick = () => {
    const newList = data.filter(
      (item) =>
        item.type.toLowerCase().includes(search.toLowerCase()) ||
        item.teacher.toLowerCase().includes(search.toLowerCase())
    );
    setList(newList);
  };

  return (
    <div>
      <hr />
      <h3>실습</h3>
      Search:{" "}
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button onClick={handleClick}>검색</button>
      <br />
      과목찾기:
      <select onChange={handleChange}>
        {newSelect}
      </select>
      <ul>{newList}</ul>
    </div>
  );
};

export default IterationComponentQ2;