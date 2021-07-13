import { render, screen } from "@testing-library/react";
import PatientListView from "./PatientListView";
import { MemoryRouter } from "react-router-dom";

const getPatients = () => {
  return new Promise((resolve, reject) => {
    resolve({
      data: [{ name: "pepito" }],
    });
  });
};

describe("rendders ok ", () => {
  beforeEach(() => {
      
    render(
      <MemoryRouter>
        <PatientListView getPatients={getPatients}></PatientListView>
      </MemoryRouter>
    );
  });

  test("el numero de elmentos es correcto ", () => {
    expect(screen.getAllByRole("patient-row").length).toBe(1);
  });
});
