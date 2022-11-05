import { useEffect, useState } from "react";
import useFilesList from "../components/useFilesList";

const NewDemande = () => {
  const [procedures, setProcedures] = useState([]);
  const [nomDem, setNomDem] = useState("");
  const [procedure, setProcedure] = useState("");
  const filesList = useFilesList(procedure);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    requestProcedures();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //runs only on the first render
  async function requestProcedures() {
    const res = await fetch(`http://localhost:3000/procedures`);
    const json = await res.json();
    setProcedures(json);
  }

  return (
    <div className="DemandePage">
      <form>
        <label htmlFor="nomDem">
          Nom demande:
          <input
            id="nomDem"
            value={nomDem}
            placeholder="Ex: Demande d'acte de naissance"
            onChange={(e) => setNomDem(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="procedure">
          Procedure
          <select
            id="procedure"
            value={procedure}
            onChange={(e) => {
              setProcedure(e.target.value.nom);
            }}
            onBlur={(e) => {
              setProcedure(e.target.value.nom);
            }}
          >
            <option />
            {procedures.map((procedure) => (
              <option value={procedure.nom} key={procedure.nom}>
                {procedure.nom}
              </option>
            ))}
          </select>
        </label>
        {!filesList.length ? (
          <span></span>
        ) : (
          filesList.map((file) => (
            <label htmlFor={file}>
              {file}
              <input type="file" />
            </label>
          ))
        )}
        <br />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default NewDemande;
