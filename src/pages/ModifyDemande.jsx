import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ModifyDemande = () => {
  const [procedures, setProcedures] = useState([]);
  const [nomDem, setNomDem] = useState("");
  const [demande, setDemande] = useState({});
  const [ownerCin, setOwnerCin] = useState("");
  const [procedure, setProcedure] = useState("");
  const [filesList, setFilesList] = useState({});
  let docs = [];

  const navigate = useNavigate();

  const params = useParams();
  useEffect(() => {
    requestProcedures();
    requestDemande();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //runs only on the first render
  async function requestProcedures() {
    const res = await fetch(`http://localhost:3000/procedures`);
    const json = await res.json();

    setProcedures(json);
  }

  async function requestDemande() {
    const res = await fetch(`http://localhost:3000/demandes/${params.id}`);
    const json = await res.json();

    setDemande(json);
  }

  useEffect(() => {
    docs = [];
    setFilesList([]);
    if (procedure.length === 0) {
      setFilesList([]);
    } else {
      requestFilesList();
    }
  }, [procedure]);

  async function requestFilesList() {
    const res = await fetch(
      `http://localhost:3000/procedures/nom/${procedure}`
    );
    const json = await res.json();
    setFilesList(json);
    //the mapping appearntly doesnt untill next render
    // filesList.map((element) => {
    //   setFiles(element.documents);
    // });
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = JSON.stringify({
        nom: nomDem,
        procedure: procedure,
        ownerCIN: ownerCin,
        documents: docs,
      });
      console.log(request);
      let res = await fetch(`http://localhost:3000/demandes/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: request,
      });
      let resJson = await res.json();
      if (resJson.status === 200) {
        setNomDem("");
        setProcedure("");
        setOwnerCin("");
        setMessage("Demande created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    } finally {
      navigate("/");
    }
  };

  return (
    <div className="DemandePage">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nomDem">
          Nouveau nom demande:
          <input
            id="nomDem"
            value={nomDem}
            placeholder={demande.nom}
            onChange={(e) => setNomDem(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="ownerCin">
          CIN:
          <input
            id="ownerCin"
            value={ownerCin}
            placeholder="Ex: IA3737"
            onChange={(e) => setOwnerCin(e.target.value)}
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
        {!procedure ? (
          <span></span>
        ) : (
          filesList.map((element) =>
            element.documents.map((file) => (
              <label htmlFor={file} key={file}>
                {file}
                <input
                  type="file"
                  name={file}
                  onChange={(event) => {
                    docs.push(event.target.files[0].name);
                  }}
                />
              </label>
            ))
          )
        )}
        <br />
        <div className="buttons">
          <button style={{ background: "green" }} type="submit">
            Modifier
          </button>

          <button style={{ background: "red" }}>
            <Link to="/myDemandes">Annuler</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModifyDemande;
