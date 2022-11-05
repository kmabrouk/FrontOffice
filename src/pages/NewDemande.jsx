import { useEffect, useState } from "react";

const NewDemande = () => {
  const [procedures, setProcedures] = useState([]);
  const [nomDem, setNomDem] = useState("");
  const [procedure, setProcedure] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    requestProcedures();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //runs only on the first render
  async function requestProcedures() {
    const res = await fetch(
      `/procedures`
    );
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
        <label htmlFor="file">
          fichier 1:
          <input
          type="file"
          
          onChange={(e) => setFile(e.target.files[0])}
        />

        </label>
        <br />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default NewDemande;
