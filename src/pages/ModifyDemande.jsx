import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewDemande = () => {
  const [procedures, setProcedures] = useState([]);
  const [nomDem, setNomDem] = useState("");
  const [procedure, setProcedure] = useState("");

  useEffect(() => {
    requestProcedures();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //runs only on the first render
  async function requestProcedures() {
    const res = await fetch(
      `https://mocki.io/v1/1a2c4347-ae99-4212-9e87-10494f41875f`
    );
    const json = await res.json();

    setProcedures(json.procedures);
  }

  return (
    <div className="DemandePage">
      <form>
        <label htmlFor="nomDem">
          Nouveau nom demande:
          <input
            id="nomDem"
            value={nomDem}
            placeholder="Ex: Demande d'acte de naissance"
            onChange={(e) => setNomDem(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="procedure">
          Nouvelle procedure
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
        <br />
        <div className="buttons">
          <Link to="/">
            <button style={{ background: "green" }}>Modifier</button>
          </Link>
          <Link to="/myDemandes">
            <button style={{ background: "red" }}>Annuler</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default NewDemande;
