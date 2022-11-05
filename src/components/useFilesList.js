import { useState, useEffect } from "react";

export default function useFilesList(procedure) {
  const [filesList, setFilesList] = useState([]);
  useEffect(() => {
    if (!procedure) {
      setFilesList([]);
    } else {
      requestFilesList();
    }

    async function requestFilesList() {
      setFilesList([]);
      const res = await fetch(`http://localhost:3000/procedures/${procedure}`);
      const json = await res.json();
      setFilesList(json.documents);
    }
  }, [procedure]); //runs Runs on the first render and any time any dependency value changes

  return filesList;
}
