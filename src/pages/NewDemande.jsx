import { useEffect, useState } from "react";

const NewDemande = () => {
  const [procedures, setProcedures] = useState([]);
  const [nomDem, setNomDem] = useState("");
  const [ownerCin, setOwnerCin] = useState("");
  const [procedure, setProcedure] = useState("");
  const [filesList, setFilesList] = useState({});
  const [files, setFiles] = useState([]);
  let docs = [];

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
    docs = [];
    setFiles([]);
    setFilesList([]);
    if (procedure.length === 0) {
      setFilesList([]);
    } else {
      requestFilesList();
    }
  }, [procedure]);

  async function requestFilesList() {
    //setFilesList([]);
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
      let res = await fetch("http://localhost:3000/demandes", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: request,
      });
      let resJson = await res.json();
      if (resJson.status === 200) {
        setNomDem("");
        setProcedure("");
        setOwnerCin("");
        // setMessage("User created successfully");
      } else {
        // setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="DemandePage">
      <form onSubmit={handleSubmit}>
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
        <button className="button" type="submit">
          Submit
        </button>
        {console.log(docs)}
      </form>
    </div>
  );
};

export default NewDemande;
