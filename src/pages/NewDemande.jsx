import { useEffect, useState } from "react";

const NewDemande = () => {
  const [procedures, setProcedures] = useState([]);
  const [nomDem, setNomDem] = useState("");
  const [procedure, setProcedure] = useState("");
  const [filesList, setFilesList] = useState({});
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

  useEffect(() => {
    if (procedure.length === 0) {
      setFilesList([]);
    } else {
      requestFilesList();
    }
  }, [procedure]);

  async function requestFilesList() {
    setFilesList([]);
    const res = await fetch(
      `http://localhost:3000/procedures/nom/${procedure}`
    );
    const json = await res.json();
    setFilesList(json);
    filesList.map((element) => {
      setFiles(element.documents);
    });
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
              setProcedure(e.target.value);
            }}
            onBlur={(e) => {
              setProcedure(e.target.value);
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
        {!files.length ? (
          <span></span>
        ) : (
          files.map((file) => (
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
