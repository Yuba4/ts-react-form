import React from "react";

type ListProps = {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
};

export const List: React.FC<ListProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((people) => {
      return (
        <li className="list">
          <div className="Listheader">
            <img className="list-img" src={people.url} alt="people" />
            <h2>{people.name}</h2>
          </div>
          <p>{people.age}歳</p>
          <p className="list-memo"> {people.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};
