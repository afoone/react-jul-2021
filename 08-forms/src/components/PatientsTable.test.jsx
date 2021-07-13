import PatientsTable from "./PatientsTable";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

const patients = [
  {
    name: "holden caulfield",
    diagnostico: "adolescencia",
    id: 2,
  },
  {
    name: "jack ryan",
    diagnostico: "quemaduras",
    id: 3,
  },
  {
    name: "bilbo bolson",
    diagnostico: "perdido",
    id: 4,
  },
  {
    name: "bilbo bolson",
    diagnostico: "perdido",
    id: 5,
  },
  {
    name: "pepito",
    diagnostico: "malito",
    id: 6,
  },
  {
    name: "asfdasdf",
    diagnostico: "asdfadsf",
    id: 9,
  },
  {
    name: "juanito",
    diagnostico: "locura",
    id: 15,
  },
  {
    name: "fdsfsdf",
    diagnostico: "asdfadsf",
    id: 16,
  },
  {
    name: "holden caulfield",
    diagnostico: "adolescencia",
    id: 17,
  },
  {
    name: "dsfsddsfdfs",
    diagnostico: "sdf333",
    id: 18,
  },
  {
    name: "sdfgdsa",
    diagnostico: "asdf",
    id: 19,
  },
];

describe("table works", () => {
  beforeEach(() => {
    render(
      <Router>
        <PatientsTable patients={patients} deleteElement={console.log} />
      </Router>
    );
  });

  test("renders correct number of elements", () => {
    screen.findAllByRole("patient-row").then((res) => res.length === 10);
  });
});
